import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Terminal, Lock, Bug } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation();

  const skillCategories = [
    {
      title: 'Security Tools',
      icon: Shield,
      skills: [
        { name: 'Metasploit', proficiency: 80 },
        { name: 'Burp Suite', proficiency: 85 },
        { name: 'Wireshark', proficiency: 90 },
        { name: 'Nmap', proficiency: 85 },
        { name: 'John the Ripper', proficiency: 75 },
      ],
      color: 'text-red-400',
    },
    {
      title: 'Programming',
      icon: Terminal,
      skills: [
        { name: 'Python', proficiency: 90 },
        { name: 'Bash/Shell', proficiency: 85 },
        { name: 'JavaScript', proficiency: 75 },
        { name: 'C/C++', proficiency: 70 },
        { name: 'PowerShell', proficiency: 65 },
      ],
      color: 'text-green-400',
    },
    {
      title: 'Security Domains',
      icon: Lock,
      skills: [
        { name: 'Network Security', proficiency: 85 },
        { name: 'Web App Security', proficiency: 80 },
        { name: 'Cryptography', proficiency: 75 },
        { name: 'Malware Analysis', proficiency: 70 },
        { name: 'Incident Response', proficiency: 75 },
      ],
      color: 'text-cyan-400',
    },
    {
      title: 'Pentesting',
      icon: Bug,
      skills: [
        { name: 'OWASP Top 10', proficiency: 85 },
        { name: 'SQL Injection', proficiency: 80 },
        { name: 'XSS Attacks', proficiency: 85 },
        { name: 'Social Engineering', proficiency: 75 },
        { name: 'Privilege Escalation', proficiency: 70 },
      ],
      color: 'text-purple-400',
    },
  ];

  return (
    <section id="skills" className="min-h-screen py-20 px-4 relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-terminal-text mb-4 glitch-text transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} data-text="SECURITY SKILLS">
            SECURITY SKILLS
          </h2>
          <div className={`w-24 h-1 bg-terminal-text mx-auto mb-4 transition-all duration-700 delay-150 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`} />
          <p className={`text-terminal-text text-lg max-w-2xl mx-auto font-mono transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            Cybersecurity tools, techniques, and expertise
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`bg-black/40 border-terminal-text/30 hover:border-terminal-text transition-all group hover:shadow-lg hover:shadow-terminal-text/20 duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(index + 3) * 150}ms` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-terminal-text">
                  <category.icon className={`w-6 h-6 ${category.color} group-hover:animate-pulse`} />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="group/skill">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-gray-300  font-mono text-sm">{skill.name}</span>
                        <span className="text-gray-300  font-mono text-xs">
                          {skill.proficiency}%
                        </span>
                      </div>
                      <div className="h-2 bg-terminal-text/10 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-terminal-text rounded-full transition-all duration-1000 group-hover/skill:animate-pulse ${
                            isVisible ? 'scale-x-100' : 'scale-x-0'
                          }`}
                          style={{
                            width: `${skill.proficiency}%`,
                            boxShadow: '0 0 10px var(--terminal-glow)',
                            transformOrigin: 'left',
                            transitionDelay: `${(index * 150) + (i * 50)}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Security Profile Card */}
        <Card className={`bg-black/40 border-terminal-text/30 hover:border-terminal-text transition-all hover:shadow-lg hover:shadow-terminal-text/20 duration-700 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <CardHeader>
            <CardTitle className="text-terminal-text font-mono">SECURITY_ANALYST_PROFILE.json</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="text-gray-300  font-mono text-sm overflow-x-auto">
{`{
  "threat_detection": "Advanced",
  "vulnerability_assessment": "Proficient",
  "penetration_testing": "Intermediate",
  "incident_response": "Developing",
  "security_awareness": "Expert",
  "ethical_mindset": "Strong",
  "continuous_learning": "Active",
  "ctf_ranking": "Top 15%",
  "bug_bounties": "3 Validated",
  "security_clearance": "In Progress"
}`}
            </pre>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}