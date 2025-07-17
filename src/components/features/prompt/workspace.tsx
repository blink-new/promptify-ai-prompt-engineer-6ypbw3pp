import { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { ArrowRight, Copy, Trash2, Loader2, Wand2 } from 'lucide-react';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useToast } from '@/hooks/use-toast';
import { createClient } from '@blinkdotnew/sdk';

interface PromptWorkspaceProps {
  apiKey: string | null;
}

export function PromptWorkspace({ apiKey }: PromptWorkspaceProps) {
  const [inputPrompt, setInputPrompt] = useState('');
  const [outputPrompt, setOutputPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const blink = createClient({ projectId: 'promptify-ai-prompt-engineer-6ypbw3pp' });

  const handleEnhance = async () => {
    if (!apiKey) {
      toast({ title: 'API Key Missing', description: 'Please set your OpenAI API key in settings.', variant: 'destructive' });
      return;
    }
    if (!inputPrompt.trim()) {
      toast({ title: 'Input Required', description: 'Please enter a prompt to enhance.', variant: 'destructive' });
      return;
    }

    setIsLoading(true);
    setOutputPrompt('');

    try {
      const { text } = await blink.ai.generateText({
        prompt: `Enhance the following prompt for an AI model. Be creative and detailed:\n\n${inputPrompt}`,
        // This is a placeholder, in a real app you'd use a secret management system
        apiKey: apiKey,
      });
      setOutputPrompt(text);
      toast({ title: 'Prompt Enhanced', description: 'The AI has worked its magic!' });
    } catch (error) {
      console.error(error);
      toast({ title: 'Enhancement Failed', description: 'Something went wrong. Please try again.', variant: 'destructive' });
    }

    setIsLoading(false);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({ title: 'Copied to clipboard!' });
  };

  return (
    <main className="flex-1 flex flex-col p-4 gap-4">
      <ResizablePanelGroup direction="horizontal" className="flex-1 rounded-lg border">
        <ResizablePanel defaultSize={50}>
          <div className="flex flex-col h-full">
            <div className="p-4 flex justify-between items-center border-b">
              <h2 className="text-lg font-semibold">Input</h2>
              <div className="flex gap-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" onClick={() => handleCopy(inputPrompt)} disabled={!inputPrompt}>
                        <Copy className="w-4 h-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent><p>Copy</p></TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" onClick={() => setInputPrompt('')} disabled={!inputPrompt}>
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent><p>Clear</p></TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
            <Textarea
              placeholder="Enter a simple prompt to be enhanced by AI..."
              className="flex-1 h-full resize-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0 font-mono p-4"
              value={inputPrompt}
              onChange={(e) => setInputPrompt(e.target.value)}
            />
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50}>
          <div className="flex flex-col h-full">
            <div className="p-4 flex justify-between items-center border-b">
              <h2 className="text-lg font-semibold">Output</h2>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" onClick={() => handleCopy(outputPrompt)} disabled={!outputPrompt}>
                      <Copy className="w-4 h-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent><p>Copy</p></TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex-1 p-4 font-mono text-sm relative">
              {isLoading ? (
                <div className="absolute inset-0 flex items-center justify-center bg-secondary/50">
                  <Loader2 className="w-8 h-8 animate-spin text-primary" />
                </div>
              ) : outputPrompt ? (
                <p className="whitespace-pre-wrap">{outputPrompt}</p>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground">
                  <Wand2 className="w-12 h-12 mb-4" />
                  <p>Your enhanced prompt will appear here.</p>
                  <p className="text-xs">Enter a prompt on the left and click Enhance.</p>
                </div>
              )}
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
      <div className="flex justify-center">
        <Button size="lg" onClick={handleEnhance} disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Enhancing...
            </>
          ) : (
            <>
              <ArrowRight className="w-5 h-5 mr-2" />
              Enhance Prompt
            </>
          )}
        </Button>
      </div>
    </main>
  );
}