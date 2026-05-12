/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Target, 
  Users, 
  Zap, 
  Shield, 
  TrendingUp, 
  Brain, 
  MessageSquare, 
  Mail, 
  Linkedin, 
  Instagram, 
  Facebook,
  ChevronRight,
  Sparkles,
  Quote
} from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Button } from './components/Button';
import { ServiceCard } from './components/ServiceCard';
import { InsightCard } from './components/InsightCard';
import { Counter } from './components/Counter';
import { SectionHeader } from './components/SectionHeader';

export default function App() {
  const services = [
    {
      title: "Future of Work Consulting",
      description: "Helping organizations prepare for the modern workplace with strategic roadmaps for agility and innovation.",
      icon: Zap
    },
    {
      title: "Leadership Development",
      description: "Modern leadership coaching and management transformation to empower teams in a hybrid world.",
      icon: Target
    },
    {
      title: "Workplace Culture",
      description: "Building healthier, more productive, and psychologically safe cultures that attract top talent.",
      icon: Users
    },
    {
      title: "Employee Wellbeing",
      description: "Strategic burnout prevention and engagement frameworks for a resilient, energized workforce.",
      icon: Shield
    },
    {
      title: "AI Readiness",
      description: "Preparing your teams to adapt and thrive alongside AI and emerging digital technologies.",
      icon: Brain
    },
    {
      title: "Performance Consulting",
      description: "Shifting from time-based attendance to results-based performance and sustainable productivity.",
      icon: TrendingUp
    }
  ];

  const insights = [
    {
      category: "Future of Work",
      title: "The Silent Productivity Killer in African Workplaces",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
    },
    {
      category: "AI Readiness",
      title: "Will AI Replace Your HR Team? (The Honest Truth)",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800"
    },
    {
      category: "Leadership",
      title: "Leading Gen Z: Why the Old Rules No Longer Apply",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden selection:bg-primary/30 selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Image/Video Placeholder */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-r from-deep-black via-deep-black/80 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600" 
            alt="Futuristic Workspace" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
          <div className="max-w-3xl space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 text-primary font-bold tracking-[0.2em] uppercase text-xs"
            >
              <div className="w-8 h-[1px] bg-primary" />
              Botswana's Premier Future of Work Consultancy
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold text-white leading-[1.1] tracking-tight"
            >
              Transforming <span className="text-primary">African Workplaces</span> Over the Future.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl"
            >
              We help forward-thinking organizations modernize leadership, elevate workplace culture, and integrate AI to thrive in the modern era.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 pt-4"
            >
              <Button size="lg" className="h-16 px-10 rounded-2xl w-full sm:w-auto">
                Book a Consultation
              </Button>
              <Button variant="outline" size="lg" className="h-16 px-10 rounded-2xl w-full sm:w-auto border-white/10">
                Explore Services
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
        >
          <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
          <div className="w-[1px] h-12 bg-white" />
        </motion.div>
      </section>

      {/* Trust & Positioning Section */}
      <section id="positioning" className="py-24 bg-charcoal/30 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <SectionHeader 
                pretitle="Modern Positioning"
                title="Why Modern Businesses Need Workplace Transformation"
                description="The workplace is changing. Traditional systems are outdated, and today's growth requires adaptable teams, digital fluency, and human-centered leadership."
              />
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { title: "Employee Wellbeing", desc: "Healthy minds drive performance" },
                  { title: "AI Readiness", desc: "Preparing for the digital shift" },
                  { title: "Innovation Culture", desc: "Where ideas evolve into results" },
                  { title: "Flexible Work", desc: "Redefining the office concept" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2 border-l-2 border-primary/20 pl-4 py-2 hover:border-primary transition-colors duration-300"
                  >
                    <h4 className="font-heading font-bold text-lg">{item.title}</h4>
                    <p className="text-white/40 text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-square glass rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden"
              >
                <Sparkles className="text-primary absolute -top-10 -right-10 w-40 h-40 opacity-10 animate-pulse" />
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
                    <Zap size={24} />
                  </div>
                  <h3 className="text-3xl font-heading font-extrabold max-w-xs">Productivity matters more than office presence.</h3>
                </div>
                <div className="space-y-6">
                  <div className="flex -space-x-4">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-12 h-12 rounded-full border-4 border-deep-black bg-charcoal overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i+40}`} alt="avatar" />
                      </div>
                    ))}
                    <div className="w-12 h-12 rounded-full border-4 border-deep-black bg-primary flex items-center justify-center text-xs font-bold font-mono">
                      +12k
                    </div>
                  </div>
                  <p className="text-white/50 text-sm">Join 12,000+ professionals transforming their workspace culture with us.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-px bg-white/5" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionHeader 
            centered
            pretitle="Our Solutions"
            title="Building Future-Ready Organizations"
            description="We bridge the gap between traditional African workplaces and the future of work through six key specialized pillars."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                index={index} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-24 bg-primary/5 relative">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-white leading-tight">
              Work is evolving.<br/>
              <span className="text-white/30">Are you?</span>
            </h2>
            <div className="space-y-6 text-white/60 text-lg">
              <p>Businesses should focus on outcomes rather than unnecessary office hours.</p>
              <p>Modern employees value purpose, flexibility, wellbeing, and growth. Innovation thrives in healthy workplace cultures, and leadership should empower rather than control.</p>
            </div>
            <div className="p-8 glass rounded-2xl relative border-l-4 border-primary">
              <Quote className="absolute top-6 right-8 text-primary/20 w-16 h-16" />
              <p className="text-xl md:text-2xl font-heading font-medium italic text-white/90 leading-relaxed">
                "The future of work is not about controlling people. It is about empowering people to perform."
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass border-white/20">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" 
                alt="Modern Workplace Collaboration" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Visual elements */}
            <div className="absolute -bottom-10 -left-10 glass p-6 rounded-2xl space-y-2 blue-glow max-w-[200px]">
              <div className="text-3xl font-bold text-primary">85%</div>
              <p className="text-xs text-white/60 font-medium">Increase in team innovation through empowered culture.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Insights Section */}
      <section id="insights" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
            <SectionHeader 
              pretitle="Thought Leadership"
              title="Future of Work Insights"
              description="Stay ahead with our latest strategies on leadership, AI, and workplace culture."
              className="mb-0"
            />
            <Button variant="outline" className="group">
              Read All Insights <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <InsightCard 
                key={index}
                category={insight.category}
                title={insight.title}
                image={insight.image}
                index={index} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-charcoal/20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden glass relative group">
               <img 
                src="https://images.unsplash.com/photo-1507679799987-c7377bc56509?auto=format&fit=crop&q=80&w=800" 
                alt="Founder" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-deep-black via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-10 left-10">
                <h4 className="text-2xl font-heading font-bold text-white">Your Request PTY LTD</h4>
                <p className="text-primary font-bold tracking-widest uppercase text-xs mt-1">Founder & Lead Strategist</p>
              </div>
            </div>
          </motion.div>

          <div className="space-y-8">
            <SectionHeader 
              pretitle="Our Story"
              title="Bridging the gap between tradition and the future."
              description="YOUR REQUEST PTY LTD was founded to help African businesses evolve. We believe businesses should prioritize people, innovation, productivity, and sustainable growth."
            />
            <div className="grid sm:grid-cols-3 gap-8">
              <Counter value={50} suffix="+" label="Clients" />
              <Counter value={500} suffix="+" label="Leaders" />
              <Counter value={100} suffix="%" label="Commitment" />
            </div>
            <p className="text-white/50 leading-relaxed italic border-l-2 border-white/20 pl-6">
              "We exist to bridge the gap between traditional African workplaces and the future of work. Our mission is visionary, intelligent, and human-centered."
            </p>
            <Button size="lg" className="rounded-2xl">
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof (Marquee Placeholder) */}
      <section className="py-20 bg-deep-black border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-white/30 text-xs font-bold tracking-widest uppercase mb-12">Trusted by Innovation Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Logo Placeholders */}
             {["TechHub", "GlobalX", "InnovateBW", "FutureScale", "AfricanCorp"].map(logo => (
               <div key={logo} className="font-heading font-black text-2xl tracking-tighter">{logo}</div>
             ))}
          </div>
        </div>
      </section>

      {/* Consultation CTA Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-[120px] rounded-full z-0" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="glass p-12 md:p-24 rounded-[3rem] border-white/10 flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-white leading-tight">
                Ready to Build a <span className="text-primary">Future-Ready</span> Organization?
              </h2>
              <p className="text-white/60 text-lg">
                Transform your leadership, empower your people, and future-proof your business. Let's start a conversation about your transformation goals.
              </p>
              <div className="flex flex-col gap-4">
                <a href="mailto:consult@yourrequest.co.bw" className="flex items-center gap-4 text-white/80 hover:text-primary transition-colors group">
                  <div className="w-12 h-12 glass rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-all">
                    <Mail size={20} />
                  </div>
                  <span className="font-medium">consult@yourrequest.co.bw</span>
                </a>
                <a href="#" className="flex items-center gap-4 text-white/80 hover:text-primary transition-colors group">
                  <div className="w-12 h-12 glass rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-all">
                    <MessageSquare size={20} />
                  </div>
                  <span className="font-medium">Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-white/40">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-primary transition-all overflow-hidden" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-white/40">Corporate Email</label>
                    <input type="email" placeholder="john@company.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-primary transition-all overflow-hidden" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-white/40">Goal</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-primary transition-all overflow-hidden appearance-none">
                    <option className="bg-deep-black">Leadership Transformation</option>
                    <option className="bg-deep-black">AI Readiness</option>
                    <option className="bg-deep-black">Culture Consulting</option>
                    <option className="bg-deep-black">Employee Wellbeing</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-white/40">Message</label>
                  <textarea rows={4} placeholder="How can we help you transform?" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-primary transition-all overflow-hidden resize-none"></textarea>
                </div>
                <Button variant="primary" size="lg" className="w-full h-16 rounded-xl font-bold uppercase tracking-widest text-sm">
                  Let's Transform Your Workplace
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-deep-black border-t border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 relative z-10">
          <div className="col-span-1 md:col-span-1 space-y-6">
            <a href="#" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center font-bold text-xl text-white">R</div>
              <span className="font-heading font-extrabold text-xl tracking-tighter uppercase text-white">
                Your Request <span className="text-primary">PTY LTD</span>
              </span>
            </a>
            <p className="text-white/40 text-sm leading-relaxed">
              Africa’s next-generation workplace consultancy helping businesses prepare for the intelligent future.
            </p>
            <div className="flex items-center gap-4">
              {[Linkedin, Instagram, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:text-primary transition-all group">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h5 className="font-heading font-bold text-white uppercase tracking-widest text-xs">Services</h5>
            <ul className="space-y-3">
              {["Future of Work", "Leadership Dev", "Workplace Culture", "AI Readiness"].map(item => (
                <li key={item}><a href="#" className="text-white/40 text-sm hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="font-heading font-bold text-white uppercase tracking-widest text-xs">Company</h5>
            <ul className="space-y-3">
              {["Philosophy", "Insights", "About Us", "Contact"].map(item => (
                <li key={item}><a href="#" className="text-white/40 text-sm hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="font-heading font-bold text-white uppercase tracking-widest text-xs">Office</h5>
            <div className="space-y-3 text-white/40 text-sm leading-relaxed">
              <p>CBD, Gaborone<br/>Botswana</p>
              <p>contact@yourrequest.co.bw</p>
              <p>+267 71 000 000</p>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-xs font-medium">© 2026 YOUR REQUEST PTY LTD. All rights reserved.</p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold text-white/20">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

