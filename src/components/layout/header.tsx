import { Bot, PanelLeft, PanelRight, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface HeaderProps {
  onHistoryToggle?: () => void;
  onConfigToggle?: () => void;
}

export function Header({ onHistoryToggle, onConfigToggle }: HeaderProps) {
  return (
    <header className="flex items-center justify-between p-2 border-b border-border">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={onHistoryToggle}>
          <PanelLeft className="w-5 h-5" />
        </Button>
        <div className="flex items-center gap-2">
          <Bot className="w-6 h-6 text-primary" />
          <h1 className="text-xl font-bold text-foreground">Promptify</h1>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="w-5 h-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>User Profile</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={onConfigToggle}>
          <PanelRight className="w-5 h-5" />
        </Button>
      </div>
    </header>
  );
}