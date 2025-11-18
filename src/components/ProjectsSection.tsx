import { useState } from 'react';
import ProjectCard from './ProjectCard';
import { portfolioData } from '@/lib/terminalCommands';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';

export default function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [filter, setFilter] = useState<string>('ALL');
  const [showFilters, setShowFilters] = useState(true);

  const allTechs = Array.from(
    new Set(portfolioData.projects.flatMap(p => p.tech))
  );

  const filteredProjects = filter === 'ALL' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(p => p.tech.includes(filter));

  const handleFilterClick = (tech: string) => {
    if (tech === 'ALL') {
      setShowFilters(!showFilters);
    } else {
      setFilter(tech);
    }
  };

  return (
    <section id="projects" className="min-h-screen py-20 px-4 relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-terminal-text mb-4 glitch-text transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} data-text="SECURITY PROJECTS">
            SECURITY PROJECTS
          </h2>
          <div className={`w-24 h-1 bg-terminal-text mx-auto mb-4 transition-all duration-700 delay-150 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`} />
          <p className={`text-terminal-text text-lg max-w-2xl mx-auto font-mono transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            Cybersecurity tools and research projects
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <Button
            onClick={() => handleFilterClick('ALL')}
            variant={filter === 'ALL' ? 'default' : 'outline'}
            className={`font-mono ${
              filter === 'ALL'
                ? 'bg-terminal-text text-black hover:bg-terminal-text/90'
                : 'border-terminal-text/30 text-terminal-text hover:bg-terminal-text/10'
            }`}
          >
            {showFilters ? 'HIDE FILTERS' : 'SHOW FILTERS'}
          </Button>
          {showFilters && allTechs.slice(0, 6).map((tech) => (
            <Button
              key={tech}
              onClick={() => handleFilterClick(tech)}
              variant={filter === tech ? 'default' : 'outline'}
              className={`font-mono ${
                filter === tech
                  ? 'bg-terminal-text text-black hover:bg-terminal-text/90'
                  : 'border-terminal-text/30 text-terminal-text hover:bg-terminal-text/10'
              }`}
            >
              {tech}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(index + 6) * 100}ms` }}
            >
              <ProjectCard
                name={project.name}
                description={project.description}
                tech={project.tech}
                status={project.status}
                link={project.link}
              />
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className={`mt-12 text-center transition-all duration-700 delay-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <p className="text-terminal-text font-mono text-sm">
            More security projects and research available on{' '}
            <a
              href="https://github.com/SachinRajput-SSR"
              target="_blank"
              rel="noopener noreferrer"
              className="text-terminal-text hover:underline"
            >
              |GitHub|
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}