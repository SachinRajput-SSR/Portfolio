import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Github, Linkedin, Twitter, Send, Copy, Check, Download } from 'lucide-react';
import { portfolioData } from '@/lib/terminalCommands';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Message sent! (This is a demo)');
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleDownloadResume = () => {
    // Create a dummy resume download
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Sarah_Mitchell_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const socialLinks = [
    { icon: Mail, label: 'Email', value: portfolioData.contact.email, href: `mailto:${portfolioData.contact.email}` },
    { icon: Github, label: 'GitHub', value: portfolioData.contact.github, href: `https://${portfolioData.contact.github}` },
    { icon: Linkedin, label: 'LinkedIn', value: portfolioData.contact.linkedin, href: `https://${portfolioData.contact.linkedin}` },
    { icon: Twitter, label: 'Twitter', value: portfolioData.contact.twitter, href: `https://twitter.com/${portfolioData.contact.twitter.replace('@', '')}` },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-4 relative">
      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-terminal-text mb-4 glitch-text transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} data-text="CONTACT">
            CONTACT
          </h2>
          <div className={`w-24 h-1 bg-terminal-text mx-auto mb-4 transition-all duration-700 delay-150 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`} />
          <p className={`text-gray-300 text-lg max-w-2xl mx-auto font-mono transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            Let's collaborate on security projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className={`bg-black/40 border-terminal-text/30 hover:border-terminal-text transition-all hover:shadow-lg hover:shadow-terminal-text/20 duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <CardHeader>
              <CardTitle className="text-terminal-text font-mono flex items-center gap-2">
                <span>{'>'} SEND_MESSAGE.sh</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-gray-200 font-mono text-sm mb-2 block">
                    $ name:
                  </label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-black/60 border-terminal-text/30 text-terminal-text focus:border-terminal-text font-mono"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="text-gray-200 font-mono text-sm mb-2 block">
                    $ email:
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-black/60 border-terminal-text/30 text-terminal-text focus:border-terminal-text font-mono"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="text-gray-200 font-mono text-sm mb-2 block">
                    $ message:
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-black/60 border-terminal-text/30 text-terminal-text focus:border-terminal-text font-mono min-h-[120px]"
                    placeholder="Your message..."
                    required
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-terminal-text text-black hover:bg-terminal-text/90 font-bold transition-all hover:scale-105 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="animate-spin">⟳</span>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className={`space-y-6 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <Card className="bg-black/40 border-terminal-text/30 hover:border-terminal-text transition-all hover:shadow-lg hover:shadow-terminal-text/20">
              <CardHeader>
                <CardTitle className="text-terminal-text font-mono flex items-center gap-2">
                  <span>{'>'} NETWORK_CONNECTIONS</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((link, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-3 rounded-lg border border-terminal-text/20 hover:border-terminal-text hover:bg-terminal-text/5 transition-all group"
                  >
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 flex-1"
                    >
                      <link.icon className="w-6 h-6 text-terminal-text group-hover:animate-pulse" />
                      <div className="flex-1">
                        <div className="text-terminal-text font-mono text-sm">{link.label}</div>
                        <div className="text-gray-300 font-mono text-xs">{link.value}</div>
                      </div>
                    </a>
                    <Button
                      onClick={() => copyToClipboard(link.value, link.label)}
                      variant="ghost"
                      size="sm"
                      className="text-terminal-text hover:bg-terminal-text h-8 w-8 p-0"
                      title="Copy to clipboard"
                    >
                      {copiedField === link.label ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                ))}
                
                {/* Resume Download Button */}
                <div className="pt-4 border-t border-terminal-text/20">
                  <Button
                    onClick={handleDownloadResume}
                    className="w-full bg-terminal-text/20 border-2 border-terminal-text text-terminal-text hover:bg-terminal-text hover:text-black font-bold transition-all hover:scale-105"
                  >
                    <span className="flex items-center gap-2">
                      <Download className="w-5 h-5" />
                      Download Resume
                    </span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-terminal-text/30 hover:border-terminal-text transition-all hover:shadow-lg hover:shadow-terminal-text/20">
              <CardContent className="p-6">
                <pre className="text-gray-200 font-mono text-xs">
{`STATUS: All channels active
RESPONSE_TIME: < 24 hours
ENCRYPTION: End-to-end enabled
AVAILABILITY: 24/7
SECURITY: PGP Key Available

> Ready to collaborate on security projects!`}
                </pre>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}