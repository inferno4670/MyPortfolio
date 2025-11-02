import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Code, Database, Zap, Globe, ChevronDown, Send, ExternalLink, Cpu, Shield, Sparkles, Linkedin } from 'lucide-react';
import profilePhoto from '@assets/cropped-thumb-1920-201487 (1).jpg';

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = {
    languages: ['Python', 'C', 'HTML', 'CSS', 'JavaScript'],
    tools: ['Power BI', 'MS Office', 'Excel', 'Git', 'VS Code'],
    spoken: ['English', 'Hindi', 'Marathi', 'Urdu', 'Turkish']
  };

  const projects = [
    {
      name: 'InfernoCoded',
      description: 'A free, browser-first AI code editor powered by WebLLM. Zero API cost, privacy-first development environment.',
      icon: Sparkles,
      tech: ['TypeScript', 'WebLLM', 'AI'],
      url: 'https://github.com/inferno4670/InfernoCoded',
      gradient: 'from-purple-500/20 to-pink-500/20'
    },
    {
      name: 'Hande AI Assistant',
      description: 'A lightweight AI assistant built with Python, GUI, and LLaMA integration for seamless automation.',
      icon: Cpu,
      tech: ['Python', 'LLaMA', 'GUI'],
      url: 'https://github.com/inferno4670/Hande-AI-Assistant',
      gradient: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      name: 'PocketGuardian',
      description: 'BLE-based smart item tracker with alerts. Hackathon MVP for never losing your valuables.',
      icon: Shield,
      tech: ['TypeScript', 'BLE', 'IoT'],
      url: 'https://github.com/inferno4670/PocketGuardian',
      gradient: 'from-green-500/20 to-emerald-500/20'
    },
    {
      name: 'SlotSwapper',
      description: 'Peer-to-peer time-slot scheduling application. Users can mark busy slots as swappable for flexible scheduling.',
      icon: Code,
      tech: ['TypeScript', 'P2P', 'Scheduling'],
      url: 'https://github.com/inferno4670/SlotSwapper',
      gradient: 'from-orange-500/20 to-red-500/20'
    },
    {
      name: 'Campus Connect',
      description: 'Platform connecting students across campus for collaboration, events, and community building.',
      icon: Globe,
      tech: ['TypeScript', 'React', 'Web'],
      url: 'https://github.com/inferno4670/Campus-Connect',
      gradient: 'from-indigo-500/20 to-purple-500/20'
    },
    {
      name: 'Hostel Bros',
      description: 'A fun space for hostel roommates to stay connected, share updates, and manage shared responsibilities.',
      icon: Database,
      tech: ['TypeScript', 'Community', 'Social'],
      url: 'https://github.com/inferno4670/Hostel-Bros',
      gradient: 'from-yellow-500/20 to-orange-500/20'
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent! (This is a demo - integrate with a backend service for real functionality)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <div 
        className="fixed w-96 h-96 rounded-full pointer-events-none z-50 mix-blend-screen"
        style={{
          background: 'radial-gradient(circle, rgba(251,146,60,0.15) 0%, transparent 70%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          transition: 'all 0.1s ease'
        }}
      />

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute top-1/3 -right-48 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <nav className="fixed top-0 w-full z-40 backdrop-blur-md bg-black/30 border-b border-orange-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent" data-testid="text-logo">
            Rehan
          </h1>
          <div className="flex gap-8">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="hover:text-orange-400 transition-colors duration-300 relative group"
                data-testid={`button-nav-${item.toLowerCase()}`}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-500 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>
        </div>
      </nav>

      <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fadeIn">
            <p className="text-purple-400 text-lg font-medium" data-testid="text-greeting">Do You Know Me?</p>
            <h2 className="text-6xl md:text-7xl font-bold leading-tight">
              <span className="inline-block animate-wave">👋</span> I'm Rehan<br />
              <span className="bg-gradient-to-r from-orange-400 via-red-500 to-amber-400 bg-clip-text text-transparent" data-testid="text-name">
                Aslam Khan
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed" data-testid="text-title">
              Electrical & Computer Engineering Student<br />
              Web Developer | Data Enthusiast | Quick Learner
            </p>
            <p className="text-gray-400 max-w-xl" data-testid="text-description">
              Passionate about pushing boundaries in the digital workspace. I thrive on challenging projects that help me grow while delivering exceptional results.
            </p>
            <div className="flex gap-4 pt-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105"
                data-testid="button-view-projects"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border-2 border-orange-500 rounded-full hover:bg-orange-500/10 transition-all duration-300"
                data-testid="button-contact"
              >
                Contact Me
              </button>
            </div>
          </div>
          
          <div className="relative flex justify-center items-center">
            <div className="absolute w-96 h-96 border-2 border-dashed border-orange-500/30 rounded-full animate-spin-slow" />
            <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-orange-500/50 shadow-2xl shadow-orange-500/30 bg-black" data-testid="img-profile">
              <img 
                src={profilePhoto} 
                alt="Rehan Aslam Khan" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            <div className="absolute top-10 right-10 w-16 h-16 bg-white rounded-full flex items-center justify-center animate-float shadow-lg">
              <Code className="text-red-500" size={32} />
            </div>
            <div className="absolute bottom-20 right-0 w-16 h-16 bg-white rounded-full flex items-center justify-center animate-float shadow-lg" style={{ animationDelay: '0.5s' }}>
              <Database className="text-purple-500" size={32} />
            </div>
            <div className="absolute top-1/2 left-0 w-16 h-16 bg-white rounded-full flex items-center justify-center animate-float shadow-lg" style={{ animationDelay: '1s' }}>
              <Zap className="text-blue-500" size={32} />
            </div>
            <div className="absolute bottom-10 left-10 w-16 h-16 bg-white rounded-full flex items-center justify-center animate-float shadow-lg" style={{ animationDelay: '1.5s' }}>
              <Globe className="text-orange-500" size={32} />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-orange-400" size={32} />
        </div>
      </section>

      <section id="about" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent" data-testid="text-heading-about">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="backdrop-blur-md bg-white/5 border border-orange-500/20 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20" data-testid="card-location">
              <MapPin className="text-orange-400 mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-2">Location</h3>
              <p className="text-gray-300">Mumbai, Maharashtra, India</p>
            </div>
            <div className="backdrop-blur-md bg-white/5 border border-orange-500/20 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20" data-testid="card-education">
              <Code className="text-orange-400 mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-2">Education</h3>
              <p className="text-gray-300">B.E. Electrical & Computer Engineering</p>
              <p className="text-gray-400 text-sm">Anjuman Islam's Kalsekar Technical Campus</p>
              <p className="text-orange-400 font-semibold mt-2">Expected: 2028</p>
            </div>
          </div>
          <div className="mt-8 backdrop-blur-md bg-white/5 border border-orange-500/20 rounded-2xl p-8" data-testid="card-journey">
            <h3 className="text-2xl font-bold mb-4">My Journey</h3>
            <p className="text-gray-300 leading-relaxed">
              I'm a goal-driven engineering student with a passion for technology and continuous learning. 
              My objective is to work in challenging, growth-focused roles that push me beyond my comfort zone 
              while gaining valuable experience in the online remote workspace. With strong attention to detail 
              and multilingual communication skills, I'm committed to delivering reliable and consistent results.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="relative py-32 px-6 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent" data-testid="text-heading-skills">
            Skills & Expertise
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="backdrop-blur-md bg-white/5 border border-orange-500/20 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20" data-testid="card-programming">
              <h3 className="text-2xl font-bold mb-6 text-orange-400">Programming</h3>
              <div className="space-y-3">
                {skills.languages.map((skill) => (
                  <div key={skill} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full" />
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="backdrop-blur-md bg-white/5 border border-orange-500/20 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20" data-testid="card-tools">
              <h3 className="text-2xl font-bold mb-6 text-orange-400">Tools & Software</h3>
              <div className="space-y-3">
                {skills.tools.map((tool) => (
                  <div key={tool} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full" />
                    <span className="text-gray-300">{tool}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="backdrop-blur-md bg-white/5 border border-orange-500/20 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20" data-testid="card-languages">
              <h3 className="text-2xl font-bold mb-6 text-orange-400">Languages</h3>
              <div className="space-y-3">
                {skills.spoken.map((lang) => (
                  <div key={lang} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full" />
                    <span className="text-gray-300">{lang}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 backdrop-blur-md bg-white/5 border border-orange-500/20 rounded-2xl p-8" data-testid="card-strengths">
            <h3 className="text-2xl font-bold mb-6 text-center text-orange-400">Core Strengths</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="p-4">
                <Zap className="text-orange-400 mx-auto mb-2" size={32} />
                <p className="text-gray-300">Quick Learner</p>
              </div>
              <div className="p-4">
                <Code className="text-orange-400 mx-auto mb-2" size={32} />
                <p className="text-gray-300">Detail-Oriented</p>
              </div>
              <div className="p-4">
                <Globe className="text-orange-400 mx-auto mb-2" size={32} />
                <p className="text-gray-300">Multilingual</p>
              </div>
              <div className="p-4">
                <Database className="text-orange-400 mx-auto mb-2" size={32} />
                <p className="text-gray-300">Goal-Driven</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent" data-testid="text-heading-projects">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <a
                  key={project.name}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="backdrop-blur-md bg-white/5 border border-orange-500/20 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 group cursor-pointer"
                  data-testid={`card-project-${index + 1}`}
                >
                  <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center group-hover:scale-105 transition-transform duration-300 relative`}>
                    <Icon className="text-orange-400" size={64} />
                    <ExternalLink className="absolute top-4 right-4 text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                      {project.name}
                    </h3>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <a
              href="https://github.com/inferno4670"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105 font-semibold"
              data-testid="button-view-github"
            >
              View All Projects on GitHub <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-32 px-6 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent" data-testid="text-heading-contact">
            Get In Touch
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <a href="mailto:salamalaykumrehan46@gmail.com" className="backdrop-blur-md bg-white/5 border border-orange-500/20 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 text-center group" data-testid="link-email">
              <Mail className="text-orange-400 mx-auto mb-3 group-hover:scale-110 transition-transform" size={32} />
              <p className="text-sm text-gray-400 mb-1">Email</p>
              <p className="text-gray-300 break-all text-sm">salamalaykumrehan46@gmail.com</p>
            </a>
            
            <a href="tel:+919987840762" className="backdrop-blur-md bg-white/5 border border-orange-500/20 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 text-center group" data-testid="link-phone">
              <Phone className="text-orange-400 mx-auto mb-3 group-hover:scale-110 transition-transform" size={32} />
              <p className="text-sm text-gray-400 mb-1">Phone</p>
              <p className="text-gray-300">+91 99878 40762</p>
            </a>
            
            <a href="https://www.linkedin.com/in/rehan-khan-a19487387/" target="_blank" rel="noopener noreferrer" className="backdrop-blur-md bg-white/5 border border-orange-500/20 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 text-center group" data-testid="link-linkedin">
              <Linkedin className="text-orange-400 mx-auto mb-3 group-hover:scale-110 transition-transform" size={32} />
              <p className="text-sm text-gray-400 mb-1">LinkedIn</p>
              <p className="text-gray-300">Connect with me</p>
            </a>
            
            <div className="backdrop-blur-md bg-white/5 border border-orange-500/20 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 text-center group" data-testid="card-contact-location">
              <MapPin className="text-orange-400 mx-auto mb-3 group-hover:scale-110 transition-transform" size={32} />
              <p className="text-sm text-gray-400 mb-1">Location</p>
              <p className="text-gray-300">Mumbai, India</p>
            </div>
          </div>

          <div className="backdrop-blur-md bg-white/5 border border-orange-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-black/50 border border-orange-500/30 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors"
                  data-testid="input-name"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-black/50 border border-orange-500/30 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors"
                  data-testid="input-email"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-black/50 border border-orange-500/30 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                  data-testid="input-message"
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 font-semibold"
                data-testid="button-send-message"
              >
                Send Message <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="relative py-8 px-6 border-t border-orange-500/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400" data-testid="text-footer">
            © 2025 Rehan Aslam Khan | Designed with <span className="text-red-500">❤️</span> in Mumbai
          </p>
        </div>
      </footer>
    </div>
  );
}
