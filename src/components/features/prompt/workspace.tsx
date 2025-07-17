import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function PromptWorkspace() {
  return (
    <main className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold">Input</h2>
        <Textarea placeholder="Enter your prompt here..." className="flex-1 h-full resize-none font-mono" />
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold">Output</h2>
        <Textarea placeholder="AI output will appear here..." readOnly className="flex-1 h-full resize-none font-mono bg-secondary" />
      </div>
      <div className="md:col-span-2 flex justify-center">
        <Button>
          <ArrowRight className="w-4 h-4 mr-2" />
          Enhance
        </Button>
      </div>
    </main>
  );
}