interface TerminalOutputProps {
  content: string;
}

export default function TerminalOutput({ content }: TerminalOutputProps) {
  return (
    <pre className="text-terminal-text font-mono whitespace-pre-wrap break-words text-sm md:text-base leading-relaxed">
      {content}
    </pre>
  );
}