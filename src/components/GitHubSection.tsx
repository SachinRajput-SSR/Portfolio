import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Star, GitFork, Code2, Activity, TrendingUp } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Badge } from '@/components/ui/badge';

export default function GitHubSection() {
  const { ref, isVisible } = useScrollAnimation();

  const githubStats = [
    { icon: Code2, label: 'Repositories', value: '25+', color: 'text-blue-400' },
    { icon: Star, label: 'Stars Earned', value: '150+', color: 'text-yellow-400' },
    { icon: GitFork, label: 'Forks', value: '45+', color: 'text-green-400' },
    { icon: Activity, label: 'Contributions', value: '500+', color: 'text-purple-400' },
  ];

  const featuredRepos = [
    {
      name: 'network-scanner',
      description: 'Advanced network vulnerability scanner with automated reporting',
      language: 'Python',
      stars: 42,
      forks: 12,
      topics: ['security', 'networking', 'pentesting']
    },
    {
      name: 'crypto-toolkit',
      description: 'Cryptography toolkit for encryption, hashing, and secure communications',
      language: 'Python',
      stars: 38,
      forks: 9,
      topics: ['cryptography', 'security', 'encryption']
    },
    {
      name: 'web-security-scanner',
      description: 'Automated web application security testing framework',
      language: 'JavaScript',
      stars: 55,
      forks: 18,
      topics: ['security', 'web', 'automation']
    },
    {
      name: 'malware-analysis-lab',
      description: 'Safe environment for analyzing malware samples and behaviors',
      language: 'Python',
      stars: 31,
      forks: 7,
      topics: ['malware', 'analysis', 'security']
    },
  ];

  return (
    <section id="github" className="min-h-screen py-20 px-4 relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-terminal-text mb-4 glitch-text transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} data-text="GITHUB PROFILE">
            GITHUB PROFILE
          </h2>
          <div className={`w-24 h-1 bg-terminal-text mx-auto mb-4 transition-all duration-700 delay-150 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`} />
          <p className={`text-gray-300 text-lg max-w-2xl mx-auto font-mono transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            Open source contributions and security research projects
          </p>
        </div>

        {/* GitHub Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {githubStats.map((stat, index) => (
            <Card
              key={index}
              className={`bg-black/40 border-terminal-text/30 hover:border-terminal-text transition-all group hover:scale-105 cursor-default hover:shadow-lg hover:shadow-terminal-text/20 duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <stat.icon className={`w-10 h-10 mx-auto mb-3 ${stat.color} group-hover:animate-pulse`} />
                <div className="text-2xl font-bold text-terminal-text mb-1">{stat.value}</div>
                <div className="text-sm text-gray-300 font-mono">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contribution Graph Visualization
        <Card className={`bg-black/40 border-terminal-text/30 hover:border-terminal-text transition-all hover:shadow-lg hover:shadow-terminal-text/20 mb-12 duration-700 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <CardHeader>
            <CardTitle className="text-terminal-text font-mono flex items-center gap-2">
              <Activity className="w-5 h-5" />
              CONTRIBUTION_ACTIVITY.log
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-200 font-mono text-sm">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span>Most active in: Python, JavaScript, Security Tools</span>
              </div>
              <div className="grid grid-cols-12 gap-1 mt-4">
                {Array.from({ length: 52 }).map((_, weekIndex) => (
                  <div key={weekIndex} className="flex flex-col gap-1">
                    {Array.from({ length: 7 }).map((_, dayIndex) => {
                      const intensity = Math.random();
                      const opacity = intensity > 0.7 ? 1 : intensity > 0.4 ? 0.6 : intensity > 0.2 ? 0.3 : 0.1;
                      return (
                        <div
                          key={dayIndex}
                          className="w-full aspect-square rounded-sm bg-terminal-text hover:scale-150 transition-all cursor-pointer"
                          style={{ opacity }}
                          title={`${Math.floor(intensity * 20)} contributions`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between text-xs text-gray-300 font-mono mt-4">
                <span>Less</span>
                <div className="flex gap-1">
                  {[0.1, 0.3, 0.6, 1].map((opacity, i) => (
                    <div key={i} className="w-3 h-3 rounded-sm bg-terminal-text" style={{ opacity }} />
                  ))}
                </div>
                <span>More</span>
              </div>
            </div>
          </CardContent>
        </Card>*/}

        {/* Featured Repositories */}
        <div>
          <h3 className={`text-2xl font-bold text-terminal-text mb-6 font-mono transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            {'>'} FEATURED_REPOSITORIES
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredRepos.map((repo, index) => (
              <Card
                key={index}
                className={`bg-black/40 border-terminal-text/30 hover:border-terminal-text transition-all group hover:shadow-lg hover:shadow-terminal-text/20 cursor-pointer duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${(index + 8) * 100}ms` }}
              >
                <CardHeader>
                  <CardTitle className="text-terminal-text font-mono flex items-center gap-2 group-hover:text-terminal-text/90">
                    <Github className="w-5 h-5" />
                    {repo.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 font-mono text-sm mb-4">
                    {repo.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {repo.topics.map((topic, i) => (
                      <Badge key={i} variant="outline" className="border-terminal-text/30 text-gray-200 hover:border-terminal-text text-xs">
                        #{topic}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 text-gray-300 font-mono text-sm">
                    <span className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-full bg-terminal-text" />
                      {repo.language}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      {repo.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-4 h-4" />
                      {repo.forks}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* GitHub Profile Link */}
        <div className={`mt-12 text-center transition-all duration-700 delay-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <a
            href="https://github.com/SachinRajput-SSR"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-terminal-text hover:text-terminal-text/80 font-mono text-lg group"
          >
            <Github className="w-6 h-6 group-hover:animate-pulse" />
            <span className="border-b-2 border-terminal-text/30 group-hover:border-terminal-text transition-all">
              View Full GitHub Profile →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}