import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, GraduationCap } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function TimelineSection() {
  const { ref, isVisible } = useScrollAnimation();

  const timeline = [
    {
      year: '2023 - Present',
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      type: 'work',
      description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies.',
    },
    {
      year: '2021 - 2023',
      title: 'Full Stack Developer',
      company: 'Digital Solutions Co.',
      type: 'work',
      description: 'Built and maintained multiple client projects, focusing on performance optimization and user experience.',
    },
    {
      year: '2019 - 2021',
      title: 'Junior Developer',
      company: 'StartUp Labs',
      type: 'work',
      description: 'Contributed to various web development projects, learned modern frameworks and best practices.',
    },
    {
      year: '2015 - 2019',
      title: 'Bachelor of Computer Science',
      company: 'University of Technology',
      type: 'education',
      description: 'Graduated with honors. Specialized in software engineering and web technologies.',
    },
  ];

  return (
    <section id="timeline" className="min-h-screen py-20 px-4 relative">
      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-terminal-text mb-4 glitch-text" data-text="TIMELINE">
            TIMELINE
          </h2>
          <div className="w-24 h-1 bg-terminal-text mx-auto mb-4" />
          <p className="text-terminal-text/70 text-lg max-w-2xl mx-auto font-mono">
            My journey through code and learning
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-terminal-text/30 hidden md:block" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}>
                  {/* Content */}
                  <div className="flex-1">
                    <Card className="bg-black/40 border-terminal-text/30 hover:border-terminal-text transition-all hover:shadow-lg hover:shadow-terminal-text/20 group">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-lg ${
                            item.type === 'work'
                              ? 'bg-terminal-text/10 text-terminal-text'
                              : 'bg-purple-500/10 text-purple-400'
                          }`}>
                            {item.type === 'work' ? (
                              <Briefcase className="w-6 h-6" />
                            ) : (
                              <GraduationCap className="w-6 h-6" />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="text-terminal-text/60 font-mono text-sm mb-1">
                              {item.year}
                            </div>
                            <h3 className="text-xl font-bold text-terminal-text mb-1">
                              {item.title}
                            </h3>
                            <div className="text-terminal-text/80 font-mono text-sm mb-2">
                              {item.company}
                            </div>
                            <p className="text-terminal-text/70 text-sm leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:block relative z-10">
                    <div className="w-4 h-4 rounded-full bg-terminal-text border-4 border-terminal-bg shadow-lg shadow-terminal-text/50" />
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}