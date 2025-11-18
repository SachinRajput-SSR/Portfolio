import { Card, CardContent } from '@/components/ui/card';
import { Shield, Target, Zap, Award, Lock, Code2 } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  const stats = [
    { 
      icon: Award, 
      label: 'Academic Year', 
      value: 'Student', 
      color: 'text-cyan-400',
      description: '3rd Year'
    },
    { 
      icon: Code2, 
      label: 'Security Projects', 
      value: '15+', 
      color: 'text-green-400',
      description: 'Completed'
    },
    { 
      icon: Target, 
      label: 'CGPA', 
      value: '8.0/10', 
      color: 'text-purple-400',
      description: 'Cyber Security'
    },
    { 
      icon: Zap, 
      label: 'Hands-on Experience', 
      value: '2+ Years', 
      color: 'text-amber-400',
      description: 'Projects & Labs'
    },
  ];

  const certifications = [
    'Certified Ethical Hacker (CEHv13) - EC-Council',
    'Oracle Cloud Infrastructure Foundations Certified',
    'Oracle Cloud Infrastructure AI Foundations Certified'
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-4 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-terminal-text mb-4 glitch-text transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} data-text="ABOUT ME">
            ABOUT ME
          </h2>
          <div className={`w-24 h-1 bg-terminal-text mx-auto transition-all duration-700 delay-150 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`} />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Profile Card */}
          <Card className={`bg-gradient-to-br from-black/90 to-black/90 border-terminal-text/30 hover:border-terminal-text transition-all group hover:shadow-lg hover:shadow-terminal-text/20 duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <CardContent className="p-8">
              <div className="mb-6">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full border-4 border-terminal-text/50 group-hover:border-terminal-text overflow-hidden relative transition-all group-hover:scale-105">
                  <div className="w-full h-full bg-gradient-to-br from-terminal-text/30 to-terminal-text/10 flex items-center justify-center relative">
                    <Shield className="w-16 h-16 text-terminal-text animate-pulse" />
                    <div className="absolute inset-0 bg-terminal-text/10 group-hover:animate-pulse" />
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-terminal-text mb-2 text-center">Sachin Singh Tanwar</h3>
              <p className="text-gray-300 text-center mb-4 font-mono">Cybersecurity Student</p>

              <div className="space-y-3 text-gray-200">
                <div className="flex items-start gap-2 group/item hover:text-terminal-text transition-colors">
                  <span className="text-terminal-text font-mono">$</span>
                  <p className="font-mono text-sm">
                    MAJOR: Bachelor of Technology in Cybersecurity
                  </p>
                </div>
                <div className="flex items-start gap-2 group/item hover:text-terminal-text transition-colors">
                  <span className="text-terminal-text font-mono">$</span>
                  <p className="font-mono text-sm">
                    SPECIALIZATION: Penetration Testing & SOC Operations
                  </p>
                </div>
                <div className="flex items-start gap-2 group/item hover:text-terminal-text transition-colors">
                  <span className="text-terminal-text font-mono">$</span>
                  <p className="font-mono text-sm">
                    FOCUS_AREAS: [Ethical Hacking, Cryptography, Security Analysis]
                  </p>
                </div>
                <div className="flex items-start gap-2 group/item hover:text-terminal-text transition-colors">
                  <span className="text-terminal-text font-mono">$</span>
                  <p className="font-mono text-sm">
                    STATUS: Actively seeking security internship opportunities 
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-black/60 rounded border border-terminal-text/20">
                <p className="text-gray-300 font-mono text-xs">
                  <span className="text-green-400">✓</span> Security Clearance: In Process<br/>
                  <span className="text-green-400">✓</span> Active Lab Participant: TryHackMe & PortSwigger<br/>
                  <span className="text-green-400">✓</span> Commitment: Continuous learning and professional development 
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Bio Card */}
          <Card className={`bg-gradient-to-br from-black/90 to-black/90 border-terminal-text/30 hover:border-terminal-text transition-all hover:shadow-lg hover:shadow-terminal-text/20 duration-700 delay-150 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-terminal-text mb-4 flex items-center gap-2">
                <Lock className="w-5 h-5 animate-pulse" />
                <span className="text-terminal-text">{'>'} SECURITY_PROFILE.md</span>
              </h3>
              <div className="space-y-4 text-gray-300 font-mono text-sm leading-relaxed">
                <p>
                  Passionate cybersecurity student dedicated to protecting digital assets and 
                  understanding the evolving threat landscape. My journey into security began 
                  with curiosity about how systems can be exploited and how to defend them.
                </p>
                <p>
                  Currently pursuing a Bachelor's degree in Cybersecurity, I'm actively engaged 
                  in hands-on security research, CTF competitions, and building defensive tools. 
                  I believe in ethical hacking as a force for good.
                </p>
                <p className="text-terminal-text font-bold">
                  SECURITY_INTERESTS = [
                  <span className="block pl-4 text-cyan-400">• Penetration Testing</span>
                  <span className="block pl-4 text-green-400">• Vulnerability exploitation and proactive testing</span>
                  <span className="block pl-4 text-purple-400">• Security Operations Center</span>
                  <span className="block pl-4 text-amber-400">• Focused on defensive security and system protection</span>
                  <span className="block pl-4 text-red-400">• Enjoys continuous monitoring and data analysis</span>
                  ]
                </p>
                <div className="p-3 bg-black/60 rounded border border-terminal-text/20 mt-4">
                  <p className="text-terminal-text font-bold text-xs">
                    CURRENT_CERTIFICATIONS:
                  </p>
                  {certifications.map((cert, i) => (
                    <p key={i} className="text-gray-300 text-xs pl-4 mt-1">
                      → {cert}
                    </p>
                  ))}
                </div>
                <p className="text-terminal-text font-bold">
                  CAREER_GOALS = {"{"}
                  <span className="block pl-4">short_term: "Summer Internship",</span>
                  <span className="block pl-4">mid_term: "Jr. Penetration Tester / Tier 1 SOC Analyst",</span>
                  <span className="block pl-4">long_term: "Chief Information Security Officer (CISO)"</span>
                  {"}"}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className={`bg-gradient-to-br from-black/85 to-black/95 border-terminal-text/30 hover:border-terminal-text transition-all group hover:scale-105 cursor-default hover:shadow-lg hover:shadow-terminal-text/20 duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <stat.icon className={`w-10 h-10 mx-auto mb-3 ${stat.color} group-hover:animate-pulse`} />
                <div className="text-2xl font-bold text-terminal-text mb-1">{stat.value}</div>
                <div className="text-sm text-gray-300 font-mono mb-1">{stat.label}</div>
                <div className="text-xs text-gray-400 font-mono">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}