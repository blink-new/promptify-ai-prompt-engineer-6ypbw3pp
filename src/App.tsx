import { useState } from 'react';
import './App.css';
import { Header } from '@/components/layout/header';
import { Sidebar } from '@/components/layout/sidebar';
import { PromptWorkspace } from '@/components/features/prompt/workspace';
import { ConfigPanel } from '@/components/layout/config-panel';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable';
import { useMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { SettingsModal } from '@/components/features/prompt/settings-modal';
import { Toaster } from '@/components/ui/toaster';

function App() {
  const isMobile = useMobile();
  const [historyOpen, setHistoryOpen] = useState(false);
  const [configOpen, setConfigOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [apiKey, setApiKey] = useState<string | null>(null);

  const handleApiKeySave = (key: string) => {
    setApiKey(key);
    localStorage.setItem('openai_api_key', key);
  };

  if (isMobile) {
    return (
      <div className="min-h-screen bg-background font-sans text-foreground flex flex-col">
        <Header 
          onHistoryToggle={() => setHistoryOpen(true)} 
          onConfigToggle={() => setConfigOpen(true)}
          onSettingsClick={() => setSettingsOpen(true)}
        />
        <PromptWorkspace apiKey={apiKey} />
        <Sheet open={historyOpen} onOpenChange={setHistoryOpen}>
          <SheetContent side="left" className="p-0 w-3/4">
            <Sidebar />
          </SheetContent>
        </Sheet>
        <Sheet open={configOpen} onOpenChange={setConfigOpen}>
          <SheetContent side="right" className="p-0 w-3/4">
            <ConfigPanel />
          </SheetContent>
        </Sheet>
        <SettingsModal isOpen={settingsOpen} onClose={() => setSettingsOpen(false)} onApiKeySave={handleApiKeySave} />
        <Toaster />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background font-sans text-foreground flex flex-col">
      <Header onSettingsClick={() => setSettingsOpen(true)} />
      <ResizablePanelGroup direction="horizontal" className="flex-1 overflow-hidden">
        <ResizablePanel defaultSize={20} minSize={15} maxSize={25}>
          <Sidebar />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={55}>
          <PromptWorkspace apiKey={apiKey} />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={25} minSize={20} maxSize={30}>
          <ConfigPanel />
        </ResizablePanel>
      </ResizablePanelGroup>
      <SettingsModal isOpen={settingsOpen} onClose={() => setSettingsOpen(false)} onApiKeySave={handleApiKeySave} />
      <Toaster />
    </div>
  );
}

export default App;