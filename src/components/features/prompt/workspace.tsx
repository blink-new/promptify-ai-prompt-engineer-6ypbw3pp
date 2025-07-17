import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { ArrowRight, Copy, Trash2 } from 'lucide-react';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export function PromptWorkspace() {
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
                      <Button variant="ghost" size="icon"><Copy className="w-4 h-4" /></Button>
                    </TooltipTrigger>
                    <TooltipContent><p>Copy</p></TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon"><Trash2 className="w-4 h-4" /></Button>
                    </TooltipTrigger>
                    <TooltipContent><p>Clear</p></TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
            <Textarea placeholder="Enter your prompt here..." className="flex-1 h-full resize-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0 font-mono p-4" />
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50}>
        <div className="flex flex-col h-full">
            <div className="p-4 flex justify-between items-center border-b">
              <h2 className="text-lg font-semibold">Output</h2>
              <div className="flex gap-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon"><Copy className="w-4 h-4" /></Button>
                    </TooltipTrigger>
                    <TooltipContent><p>Copy</p></TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
            <Textarea placeholder="AI output will appear here..." readOnly className="flex-1 h-full resize-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0 font-mono p-4 bg-secondary" />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
      <div className="flex justify-center">
        <Button size="lg">
          <ArrowRight className="w-5 h-5 mr-2" />
          Enhance Prompt
        </Button>
      </div>
    </main>
  );
}