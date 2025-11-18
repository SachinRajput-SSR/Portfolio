import { Card, CardContent } from '@/components/ui/card';
import { Award, ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function CertificationsSection() {
  const { ref, isVisible } = useScrollAnimation();

  const certifications = [
    {
      name: 'CompTIA Security+ (In Progress)',
      issuer: 'CompTIA',
      date: 'Expected: Mar 2025',
      credentialId: 'SEC-PLUS-2025-PREP',
      color: 'text-red-400',
    },
    {
      name: 'Certified Ethical Hacker (CEH) - Studying',
      issuer: 'EC-Council',
      date: 'Expected: Jun 2025',
      credentialId: 'CEH-2025-STUDY',
      color: 'text-cyan-400',
    },
    {
      name: 'OWASP Top 10 Security Risks',
      issuer: 'OWASP Foundation',
      date: 'Completed: Dec 2024',
      credentialId: 'OWASP-TOP10-2024',
      color: 'text-green-400',
    },
    {
      name: 'Cybersecurity Fundamentals',
      issuer: 'Cisco Networking Academy',
      date: 'Completed: Oct 2024',
      credentialId: 'CISCO-CYBER-2024',
      color: 'text-purple-400',
    },
  ];

  return (
    <section id="certifications" className="min-h-screen py-20 px-4 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-terminal-text mb-4 glitch-text transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} data-text="CERTIFICATIONS">
            CERTIFICATIONS
          </h2>
          <div className={`w-24 h-1 bg-terminal-text mx-auto mb-4 transition-all duration-700 delay-150 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`} />
          <p className={`text-gray-300 text-lg max-w-2xl mx-auto font-mono transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            Security certifications and professional credentials
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className={`bg-gradient-to-br from-black/85 to-black/95 border-terminal-text/30 hover:border-terminal-text transition-all group hover:shadow-lg hover:shadow-terminal-text/20 cursor-pointer duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-terminal-text/10 ${cert.color} group-hover:scale-110 transition-transform`}>
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-terminal-text mb-1 group-hover:text-terminal-text/90">
                      {cert.name}
                    </h3>
                    <div className="text-gray-300 font-mono text-sm mb-2">
                      {cert.issuer}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 font-mono text-xs">
                        {cert.date}
                      </span>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-terminal-text transition-colors" />
                    </div>
                    <div className="mt-2 text-gray-400 font-mono text-xs">
                      ID: {cert.credentialId}
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