import { useState, useEffect, useRef, KeyboardEvent } from 'react';
import { getCommands } from '@/lib/terminalCommands';
import TerminalOutput from './TerminalOutput';

interface TerminalLine {
  type: 'input' | 'output';
  content: string;
  timestamp: number;
}

interface TerminalProps {
  theme: 'green' | 'amber' | 'blue';
  onThemeChange: (theme: 'green' | 'amber' | 'blue') => void;
}

export default function Terminal({ theme, onThemeChange }: TerminalProps) {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const commands = getCommands();

  useEffect(() => {
    // Welcome message
    const welcomeMessage = `
╔════════════════════════════════════════════════════════════╗
║              WELCOME TO SACHIN'S PORTFOLIO                 ║
║                    System v2.1.0                           ║
╚════════════════════════════════════════════════════════════╝

Type 'help' to see available commands.
Type 'whoami' to learn more about me.

Initializing system...
[████████████████████████████████] 100%
System ready.
`;
    addOutput(welcomeMessage);
  }, []);

  useEffect(() => {
    // Auto-scroll to bottom
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  useEffect(() => {
    // Focus input on mount and click
    inputRef.current?.focus();
  }, []);

  const addOutput = (content: string) => {
    setLines(prev => [...prev, { type: 'output', content, timestamp: Date.now() }]);
  };

  const addInput = (content: string) => {
    setLines(prev => [...prev, { type: 'input', content, timestamp: Date.now() }]);
  };

  const processCommand = async (input: string) => {
    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    addInput(trimmedInput);
    setCommandHistory(prev => [...prev, trimmedInput]);
    setHistoryIndex(-1);

    const [cmd, ...args] = trimmedInput.toLowerCase().split(' ');

    // Handle theme command specially
    if (cmd === 'theme' && args.length > 0) {
      const newTheme = args[0] as 'green' | 'amber' | 'blue';
      if (['green', 'amber', 'blue'].includes(newTheme)) {
        onThemeChange(newTheme);
        addOutput(`Theme changed to ${newTheme}.`);
      } else {
        addOutput(commands.theme.execute());
      }
      return;
    }

    // Handle clear command
    if (cmd === 'clear') {
      setLines([]);
      return;
    }

    // Execute command
    if (commands[cmd]) {
      setIsTyping(true);
      // Simulate processing delay
      await new Promise(resolve => setTimeout(resolve, 300));
      const output = commands[cmd].execute();
      addOutput(output);
      setIsTyping(false);
    } else {
      addOutput(`Command not found: ${cmd}\nType 'help' for available commands.`);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      processCommand(currentInput);
      setCurrentInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 
          ? commandHistory.length - 1 
          : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setCurrentInput('');
        } else {
          setHistoryIndex(newIndex);
          setCurrentInput(commandHistory[newIndex]);
        }
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      // Tab completion
      const availableCommands = Object.keys(commands);
      const matches = availableCommands.filter(cmd => 
        cmd.startsWith(currentInput.toLowerCase())
      );
      if (matches.length === 1) {
        setCurrentInput(matches[0]);
      } else if (matches.length > 1) {
        addOutput(`Possible commands: ${matches.join(', ')}`);
      }
    }
  };

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div 
      ref={terminalRef}
      className="terminal-container h-screen overflow-y-auto p-4 md:p-8 cursor-text"
      onClick={handleTerminalClick}
    >
      <div className="terminal-content max-w-4xl mx-auto">
        {lines.map((line, index) => (
          <div key={`${line.timestamp}-${index}`} className="mb-2">
            {line.type === 'input' ? (
              <div className="flex items-start gap-2">
                <span className="text-terminal-prompt shrink-0">visitor@portfolio:~$</span>
                <span className="text-terminal-text">{line.content}</span>
              </div>
            ) : (
              <TerminalOutput content={line.content} />
            )}
          </div>
        ))}
        
        {isTyping && (
          <div className="text-terminal-text animate-pulse">
            Processing...
          </div>
        )}

        <div className="flex items-start gap-2 mt-4">
          <span className="text-terminal-prompt shrink-0">visitor@portfolio:~$</span>
          <div className="flex-1 relative">
            <input
              ref={inputRef}
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full bg-transparent border-none outline-none text-terminal-text font-mono caret-terminal-text"
              autoComplete="off"
              spellCheck="false"
            />
            <span className="absolute right-0 top-0 w-2 h-5 bg-terminal-text animate-blink" />
          </div>
        </div>
      </div>
    </div>
  );
}