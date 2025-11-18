import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  name: string;
  description: string;
  tech: string[];
  status: string;
  link: string;
}

export default function ProjectCard({ name, description, tech, status, link }: ProjectCardProps) {
  const [isGlitching, setIsGlitching] = useState(false);

  const handleHover = () => {
    setIsGlitching(true);
    setTimeout(() => setIsGlitching(false), 300);
  };

  return (
    <Card
      onMouseEnter={handleHover}
      className={`bg-black/40 border-terminal-text/30 hover:border-terminal-text transition-all group hover:scale-105 hover:shadow-lg hover:shadow-terminal-text/20 ${
        isGlitching ? 'animate-glitch-1' : ''
      }`}
    >
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <CardTitle className="text-xl font-bold text-terminal-text group-hover:text-terminal-text/90">
            {name}
          </CardTitle>
          <Badge
            variant="outline"
            className={`${
              status === 'ACTIVE'
                ? 'border-green-500 text-green-500'
                : 'border-amber-500 text-amber-500'
            } font-mono text-xs`}
          >
            {status}
          </Badge>
        </div>
        <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t, i) => (
            <Badge
              key={i}
              variant="secondary"
              className="bg-terminal-text/10 text-terminal-text border border-terminal-text/30 hover:bg-terminal-text/20 transition-colors font-mono text-xs"
            >
              {t}
            </Badge>
          ))}
        </div>
        <div className="flex gap-2">
          <Button
            asChild
            size="sm"
            className="flex-1 bg-terminal-text/10 hover:bg-terminal-text hover:text-black text-terminal-text border border-terminal-text/30 transition-all"
          >
            <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Github className="w-4 h-4" />
              Code
            </a>
          </Button>
          <Button
            asChild
            size="sm"
            variant="outline"
            className="flex-1 border-terminal-text/30 text-terminal-text hover:bg-terminal-text/10 transition-all"
          >
            <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4" />
              Demo
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}