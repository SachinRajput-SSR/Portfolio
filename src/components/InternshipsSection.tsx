import { Card, CardContent } from '@/components/ui/card';
import { Shield, Calendar, MapPin } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function InternshipsSection() {
  const { ref, isVisible } = useScrollAnimation();

  const internships = [
    {
      title: 'Security Analyst Intern (Seeking)',
      company: 'Target Company',
      location: 'San Francisco, CA / Remote',
      period: 'Summer 2025',
      description: 'Seeking opportunity to apply cybersecurity knowledge in real-world scenarios, assist with vulnerability assessments, security monitoring, and incident response procedures.',
      technologies: ['SIEM', 'IDS/IPS', 'Vulnerability Scanning', 'Incident Response'],
      color: 'text-cyan-400',
    },
    {
      title: 'IT Security Research Assistant',
      company: 'University Cybersecurity Lab',
      location: 'Campus',
      period: 'Sep 2024 - Present',
      description: 'Conducting research on network security protocols, assisting with penetration testing projects, and developing security tools for academic research.',
      technologies: ['Python', 'Wireshark', 'Metasploit', 'Kali Linux'],
      color: 'text-green-400',
    },
    {
      title: 'Cybersecurity Teaching Assistant',
      company: 'Computer Science Department',
      location: 'Campus',
      period: 'Jan 2024 - May 2024',
      description: 'Assisted professor with Introduction to Cybersecurity course, helped students with lab exercises, graded assignments, and held office hours.',
      technologies: ['Network Security', 'Cryptography', 'Web Security', 'Linux'],
      color: 'text-purple-400',
    },
  ];

  return (
    <section id="internships" className="min-h-screen py-20 px-4 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-terminal-text mb-4 glitch-text transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} data-text="INTERNSHIPS">
            INTERNSHIPS
          </h2>
          <div className={`w-24 h-1 bg-terminal-text mx-auto mb-4 transition-all duration-700 delay-150 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`} />
          <p className={`text-gray-300 text-lg max-w-2xl mx-auto font-mono transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            Security research and hands-on experience
          </p>
        </div>

        {/* Internships List */}
        <div className="space-y-6">
          {internships.map((internship, index) => (
            <Card
              key={index}
              className={`bg-gradient-to-br from-black/95 to-black/85 border-terminal-text/30 hover:border-terminal-text transition-all group hover:shadow-lg hover:shadow-terminal-text/20 duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-terminal-text/10 ${internship.color} group-hover:scale-110 transition-transform`}>
                    <Shield className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-terminal-text mb-1">
                      {internship.title}
                    </h3>
                    <div className="text-gray-200 font-mono text-sm mb-3">
                      {internship.company}
                    </div>
                    <div className="flex flex-wrap gap-4 mb-3 text-gray-300 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span className="font-mono">{internship.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span className="font-mono">{internship.location}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed mb-3">
                      {internship.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {internship.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-terminal-text/10 text-gray-200 rounded-full text-xs font-mono border border-terminal-text/20 hover:border-terminal-text/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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