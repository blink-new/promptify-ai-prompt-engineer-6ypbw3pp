import { Bot } from 'lucide-react';

export function Header() {
  return (
    <header className="flex items-center justify-between p-4 border-b border-border">
      <div className="flex items-center gap-2">
        <Bot className="w-6 h-6 text-primary" />
        <h1 className="text-xl font-bold text-foreground">Promptify</h1>
      </div>
      <div>
        {/* User Profile will go here */}
      </div>
    </header>
  );
}