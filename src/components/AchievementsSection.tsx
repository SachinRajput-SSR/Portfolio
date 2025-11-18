import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Star, Zap, Shield } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function AchievementsSection() {
  const { ref, isVisible } = useScrollAnimation();

  const achievements = [
    {
      title: 'CTF Competition - Top 15% Ranking',
      description: 'Consistently ranked in top 15% across multiple Capture The Flag cybersecurity competitions, solving challenges in web exploitation, cryptography, and forensics.',
      icon: Trophy,
      color: 'text-amber-400',
      date: '2024',
    },
    {
      title: 'Bug Bounty - 3 Validated Vulnerabilities',
      description: 'Discovered and responsibly disclosed 3 security vulnerabilities on HackerOne platform, earning recognition and bounties from companies.',
      icon: Shield,
      color: 'text-red-400',
      date: '2024',
    },
    {
      title: 'Dean\'s List - 3.8 GPA',
      description: 'Achieved Dean\'s List recognition for maintaining a 3.8 GPA while pursuing challenging cybersecurity coursework and research projects.',
      icon: Star,
      color: 'text-green-400',
      date: 'Fall 2024',
    },
    {
      title: 'Security Research Publication',
      description: 'Co-authored research paper on network intrusion detection systems, presented at university cybersecurity symposium.',
      icon: Zap,
      color: 'text-blue-400',
      date: 'Nov 2024',
    },
    {
      title: 'Hackathon - Best Security Project',
      description: 'Won "Best Security Project" award at university hackathon for developing an automated vulnerability scanner with ML-based threat detection.',
      icon: Trophy,
      color: 'text-purple-400',
      date: 'Oct 2024',
    },
    {
      title: 'Cybersecurity Club President',
      description: 'Leading the university cybersecurity club, organizing CTF competitions, workshops, and guest speaker events with industry professionals.',
      icon: Star,
      color: 'text-cyan-400',
      date: '2024-2025',
    },
  ];

  return (
    <section id="achievements" className="min-h-screen py-20 px-4 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-terminal-text mb-4 glitch-text transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} data-text="ACHIEVEMENTS">
            ACHIEVEMENTS
          </h2>
          <div className={`w-24 h-1 bg-terminal-text mx-auto mb-4 transition-all duration-700 delay-150 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`} />
          <p className={`text-gray-300 text-lg max-w-2xl mx-auto font-mono transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            Security milestones and recognitions
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className={`bg-gradient-to-br from-black/95 to-black/85 border-terminal-text/30 hover:border-terminal-text transition-all group hover:shadow-lg hover:shadow-terminal-text/20 hover:scale-105 duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-terminal-text/10 ${achievement.color} group-hover:animate-pulse`}>
                    <achievement.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-bold text-terminal-text">
                        {achievement.title}
                      </h3>
                      <span className="text-gray-400 font-mono text-xs whitespace-nowrap ml-2">
                        {achievement.date}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}