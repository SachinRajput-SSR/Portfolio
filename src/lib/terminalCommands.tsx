export interface Command {
  name: string;
  description: string;
  execute: () => string;
}

export const portfolioData = {
  name: "Sachin Singh Tanwar",
  title: "Cybersecurity Student",
  bio: `
╔════════════════════════════════════════════════════════════╗
║                 SECURITY PROFILE v3.0                      ║
╚════════════════════════════════════════════════════════════╝

USER: Sachin Singh Tanwar
ROLE: Cybersecurity Student
OS: Student v3.0 (Optimized for Security Research)
UPTIME: 20+ years
MEMORY: Unlimited (Cloud-based learning)
PROCESSOR: Multi-core Threat Analysis Unit

ABOUT:
Passionate cybersecurity student dedicated to understanding and
defending against digital threats. Currently pursuing Bachelor's
degree in Cybersecurity with focus on penetration testing and
incident response.

INTERESTS:
- Penetration Testing
- Vulnerability exploitation and proactive testing
- Security Operations Center
- Focused on defensive security and system protection
- Enjoys continuous monitoring and data analysis

STATUS: Actively seeking security internship opportunities
LOCATION: Jaipur, IN
CLEARANCE: In Progress
  `,
  
  projects: [
    {
      name: "Network Vulnerability Scanner",
      status: "ACTIVE",
      description: "Automated network scanning tool for vulnerability detection",
      tech: ["Python", "Nmap", "Scapy", "SQLite"],
      link: "https://github.com/SachinRajput-SSR"
    },
    {
      name: "Web Security Testing Framework",
      status: "ACTIVE",
      description: "Automated web application security testing suite",
      tech: ["JavaScript", "Python", "Selenium", "OWASP"],
      link: "https://github.com/SachinRajput-SSR"
    },
    {
      name: "Cryptography Toolkit",
      status: "ACTIVE",
      description: "Collection of encryption and hashing utilities",
      tech: ["Python", "OpenSSL", "AES", "RSA"],
      link: "https://github.com/SachinRajput-SSR"
    },
    {
      name: "Malware Analysis Lab",
      status: "ACTIVE",
      description: "Safe environment for analyzing malware samples",
      tech: ["Python", "Docker", "VirtualBox", "IDA Pro"],
      link: "https://github.com/SachinRajput-SSR"
    },
    {
      name: "Password Strength Analyzer",
      status: "ACTIVE",
      description: "Tool for analyzing password security and entropy",
      tech: ["Python", "Regex", "Machine Learning"],
      link: "https://github.com/SachinRajput-SSR"
    },
    {
      name: "Incident Response Toolkit",
      status: "ACTIVE",
      description: "Automated incident response and forensics tools",
      tech: ["Bash", "Python", "PowerShell", "Volatility"],
      link: "https://github.com/SachinRajput-SSR"
    }
  ],
  
  skills: {
    security_tools: ["Metasploit", "Burp Suite", "Wireshark", "Nmap", "John the Ripper"],
    programming: ["Python", "Bash", "JavaScript", "C/C++", "PowerShell"],
    domains: ["Network Security", "Web Security", "Cryptography", "Malware Analysis", "Incident Response"],
    pentesting: ["OWASP Top 10", "SQL Injection", "XSS", "Social Engineering", "Privilege Escalation"]
  },
  
  contact: {
    email: "example@gmail.com",
    github: "github.com/SachinRajput-SSR",
    linkedin: "linkedin.com/in/sachin-singh-tanwar-5582582b4/",
    twitter: "@sachin_sec"
  }
};

export const getCommands = (): Record<string, Command> => ({
  help: {
    name: "help",
    description: "Display available commands",
    execute: () => `
Available Commands:
──────────────────────────────────────────────────────────

  help        Display this help message
  clear       Clear the terminal screen
  whoami      Display information about me
  projects    View my security projects
  skills      Show cybersecurity skills and tools
  contact     Get in touch with me
  resume      View/download my resume
  theme       Change color scheme [green|amber|blue]
  hack        ???
  exploit     ???

Tip: Use TAB for command completion
Tip: Use ↑/↓ arrows for command history
    `
  },
  
  clear: {
    name: "clear",
    description: "Clear terminal output",
    execute: () => "CLEAR_SCREEN"
  },
  
  whoami: {
    name: "whoami",
    description: "Display bio and personal information",
    execute: () => portfolioData.bio
  },
  
  projects: {
    name: "projects",
    description: "List security projects",
    execute: () => {
      let output = `
╔════════════════════════════════════════════════════════════╗
║                 SECURITY PROJECTS                          ║
╚════════════════════════════════════════════════════════════╝

`;
      portfolioData.projects.forEach((project, index) => {
        output += `
[${index + 1}] ${project.name}
    STATUS: ${project.status}
    DESC: ${project.description}
    TECH: ${project.tech.join(", ")}
    LINK: ${project.link}
`;
      });
      return output;
    }
  },
  
  skills: {
    name: "skills",
    description: "Display cybersecurity skills",
    execute: () => `
╔════════════════════════════════════════════════════════════╗
║                  SECURITY SKILL MATRIX                     ║
╚════════════════════════════════════════════════════════════╝

SECURITY TOOLS:
  ${portfolioData.skills.security_tools.map(s => `[████████░░] ${s}`).join('\n  ')}

PROGRAMMING:
  ${portfolioData.skills.programming.map(s => `[████████░░] ${s}`).join('\n  ')}

SECURITY DOMAINS:
  ${portfolioData.skills.domains.map(s => `[████████░░] ${s}`).join('\n  ')}

PENTESTING:
  ${portfolioData.skills.pentesting.map(s => `[████████░░] ${s}`).join('\n  ')}

CERTIFICATIONS:
  [████████░░] Certified Ethical Hacker (CEHv13) - EC-Council
  [██████░░░░] Oracle Cloud Infrastructure Foundations Certified
  [████████░░] Oracle Cloud Infrastructure AI Foundations Certified
    `
  },
  
  contact: {
    name: "contact",
    description: "Display contact information",
    execute: () => `
╔════════════════════════════════════════════════════════════╗
║                  NETWORK CONNECTIONS                       ║
╚════════════════════════════════════════════════════════════╝

CONTACT_PROTOCOL = {
  email: "${portfolioData.contact.email}",
  github: "${portfolioData.contact.github}",
  linkedin: "${portfolioData.contact.linkedin}",
  twitter: "${portfolioData.contact.twitter}"
}

STATUS: All channels active and monitored
RESPONSE_TIME: < 24 hours
ENCRYPTION: End-to-end enabled
PGP_KEY: Available upon request

Feel free to reach out for collaboration!
    `
  },
  
  resume: {
    name: "resume",
    description: "View/download resume",
    execute: () => `
╔════════════════════════════════════════════════════════════╗
║                    RESUME ACCESS                           ║
╚════════════════════════════════════════════════════════════╝

Downloading resume.pdf...
[████████████████████████████████] 100%

Resume available at: https://drive.google.com/uc?export=download&id=1QPGwR7YGfl0PRrLZjE2MsQO077suiI9x

Or view online:https://docs.google.com/document/d/1QPGwR7YGfl0PRrLZjE2MsQO077suiI9x/edit
Thank you for your interest!
    `
  },
  
  theme: {
    name: "theme",
    description: "Change color theme",
    execute: () => `
Available themes:
  - green  (Classic terminal green)
  - amber  (Retro amber monochrome)
  - blue   (Cyberpunk blue)

Usage: theme <color>
Example: theme amber
    `
  },
  
  hack: {
    name: "hack",
    description: "Easter egg",
    execute: () => `
[SYSTEM ALERT] Unauthorized access detected!
[FIREWALL] Intrusion attempt logged...
[SECURITY] Tracing IP address...
[TRACE] Origin: 127.0.0.1
[RESULT] It's you! 😄

Just kidding! This is a portfolio website.
I'm an ethical hacker - I only hack with permission!

Try other commands: help, projects, skills, contact
    `
  },
  
  exploit: {
    name: "exploit",
    description: "Easter egg",
    execute: () => `
Initializing exploit framework...
[████████████████████████████████] 100%

TARGET: portfolio.website
VULNERABILITY: None found!
SECURITY_RATING: A+

This portfolio is secured with:
✓ Input validation
✓ XSS protection
✓ CSRF tokens
✓ Content Security Policy
✓ Regular security audits

Remember: Always hack ethically and legally! 🛡️
    `
  }
});