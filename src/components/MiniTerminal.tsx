import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2 } from 'lucide-react';
import Terminal from './Terminal';

interface MiniTerminalProps {
  theme: 'green' | 'amber' | 'blue';
  onThemeChange: (theme: 'green' | 'amber' | 'blue') => void;
}

export default function MiniTerminal({ theme, onThemeChange }: MiniTerminalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-terminal-text text-black hover:bg-terminal-text/90 rounded-full w-14 h-14 shadow-lg shadow-terminal-text/50 hover:scale-110 transition-all"
        title="Open Terminal"
      >
        <TerminalIcon className="w-6 h-6" />
      </Button>
    );
  }

  return (
    <div
      className={`fixed z-50 bg-black border-2 border-terminal-text shadow-2xl shadow-terminal-text/30 transition-all ${
        isMaximized
          ? 'inset-4'
          : 'bottom-6 right-6 w-[90vw] md:w-[600px] h-[400px]'
      } rounded-lg overflow-hidden`}
    >
      {/* Terminal Header */}
      <div className="flex items-center justify-between bg-terminal-text/10 border-b border-terminal-text/30 px-4 py-2">
        <div className="flex items-center gap-2">
          <TerminalIcon className="w-4 h-4 text-terminal-text" />
          <span className="text-terminal-text font-mono text-sm">terminal@portfolio</span>
        </div>
        <div className="flex items-center gap-2">
          <Button
            onClick={() => setIsMaximized(!isMaximized)}
            variant="ghost"
            size="sm"
            className="text-terminal-text hover:bg-terminal-text/20 h-6 w-6 p-0"
          >
            {isMaximized ? <Minimize2 className="w-3 h-3" /> : <Maximize2 className="w-3 h-3" />}
          </Button>
          <Button
            onClick={() => setIsOpen(false)}
            variant="ghost"
            size="sm"
            className="text-terminal-text hover:bg-terminal-text/20 h-6 w-6 p-0"
          >
            <X className="w-3 h-3" />
          </Button>
        </div>
      </div>

      {/* Terminal Content */}
      <div className="h-[calc(100%-40px)] overflow-hidden">
        <Terminal theme={theme} onThemeChange={onThemeChange} />
      </div>
    </div>
  );
}