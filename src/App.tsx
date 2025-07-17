import './App.css';
import { Header } from '@/components/layout/header';
import { Sidebar } from '@/components/layout/sidebar';
import { PromptWorkspace } from '@/components/features/prompt/workspace';
import { ConfigPanel } from '@/components/layout/config-panel';

function App() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground flex flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <PromptWorkspace />
        </div>
        <ConfigPanel />
      </div>
    </div>
  );
}

export default App;
