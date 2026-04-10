"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { 
  Search, 
  ArrowRight, 
  BookOpen, 
  FileText, 
  Video, 
  Play, 
  Sparkles, 
  UserPlus, 
  Mail, 
  Calendar, 
  User, 
  Tag, 
  TrendingUp, 
  CheckCircle, 
  Star,
  Download,
  Layers,
  Briefcase,
  BarChart3,
  Globe,
  Megaphone,
  PenTool,
  Code2,
  Smartphone,
  LineChart,
  Shield,
  Zap,
  Users,
  PhoneCall,
  MessageCircle,
  Coffee,
  Award,
  Rocket,
  Target,
  MapPin,
  Clock,
  DollarSign
} from "lucide-react";
import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

function ScrollReveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ScrollingRow({
  categories,
  rowIndex,
  direction = "right",
}: {
  categories: string[];
  rowIndex: number;
  direction?: "left" | "right";
}) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    const speed = direction === "right" ? 0.5 : -0.5;

    const scroll = () => {
      if (!scrollContainer) return;
      scrollPositionRef.current += speed;
      if (direction === "right" && scrollPositionRef.current >= scrollContainer.scrollWidth / 3) {
        scrollPositionRef.current = 0;
      }
      if (direction === "left" && scrollPositionRef.current <= -scrollContainer.scrollWidth / 3) {
        scrollPositionRef.current = 0;
      }
      scrollContainer.style.transform = `translateX(${scrollPositionRef.current}px)`;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [direction]);

  const tripledCategories = [...categories, ...categories, ...categories];

  return (
    <div className="relative mb-4 sm:mb-6 overflow-hidden">
      <div ref={scrollRef} className="flex gap-2 sm:gap-3 whitespace-nowrap">
        {tripledCategories.map((cat, idx) => (
          <motion.button
            key={`${rowIndex}-${idx}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium bg-slate-100 flex-shrink-0"
          >
            {cat}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

export default function ResourcesPage() {
  const row1 = ["All Resources", "Landing Page Design", "Web Development", "Web Design", "Website Analytics", "B2B Marketing"];
  const row2 = ["B2B Branding", "CRO", "Website Migration", "FinTech", "AI", "Website Maintenance"];
  const row3 = ["Website Strategy", "Website Optimization", "Website Copywriting", "Webflow Agency", "SaaS"];
  
  const blogCategories = [
    { name: "Remote Work Culture", icon: Coffee, color: "bg-amber-100 text-amber-600", count: 24 },
    { name: "High-Converting Web Design", icon: Target, color: "bg-emerald-100 text-emerald-600", count: 18 },
    { name: "Founder Insights", icon: Rocket, color: "bg-purple-100 text-purple-600", count: 32 },
    { name: "Digital Marketing Tactics", icon: Megaphone, color: "bg-blue-100 text-blue-600", count: 27 }
  ];

  const blogPosts = [
    {
      title: "How to Build a Remote-First Culture That Actually Works",
      category: "Remote Work Culture",
      author: "Kiran",
      date: "April 15, 2026",
      readTime: "6 min read",
      excerpt: "Discover the secrets to building a thriving remote team culture that keeps everyone engaged and productive.",
      img: "https://picsum.photos/seed/remoteculture/800/600"
    },
    {
      title: "10 Conversion-Boosting Web Design Elements Every B2B Site Needs",
      category: "High-Converting Web Design",
      author: "Harsh",
      date: "April 12, 2026",
      readTime: "8 min read",
      excerpt: "Learn the specific design elements that separate high-converting B2B websites from the rest.",
      img: "https://picsum.photos/seed/webdesign2/800/600"
    },
    {
      title: "From $0 to $10M: Lessons from a SaaS Founder",
      category: "Founder Insights",
      author: "Ayush Barnwal",
      date: "April 8, 2026",
      readTime: "10 min read",
      excerpt: "Real-world founder lessons on scaling a B2B SaaS company from scratch to seven figures.",
      img: "https://picsum.photos/seed/founder/800/600"
    },
    {
      title: "The Ultimate Guide to B2B Content Distribution in 2026",
      category: "Digital Marketing Tactics",
      author: "Kiran",
      date: "April 5, 2026",
      readTime: "7 min read",
      excerpt: "Stop creating content nobody sees. Master the art of B2B content distribution across channels.",
      img: "https://picsum.photos/seed/marketing/800/600"
    },
    {
      title: "Managing Distributed Teams: Tools and Tactics That Work",
      category: "Remote Work Culture",
      author: "Priya",
      date: "April 1, 2026",
      readTime: "5 min read",
      excerpt: "The essential toolkit for managing high-performing remote teams across time zones.",
      img: "https://picsum.photos/seed/distributed/800/600"
    },
    {
      title: "Why Your Hero Section Isn't Converting (And How to Fix It)",
      category: "High-Converting Web Design",
      author: "Harsh",
      date: "March 28, 2026",
      readTime: "6 min read",
      excerpt: "A deep dive into what makes hero sections convert and common mistakes to avoid.",
      img: "https://picsum.photos/seed/herosection/800/600"
    }
  ];

  return (
    <main className="bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-orange-50/30 px-4 sm:px-6 md:px-8 pt-20 sm:pt-24 md:pt-24 pb-12 sm:pb-16 md:pb-20">
        <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-deep-orange/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        
        <div className="max-w-5xl mx-auto relative">
          <ScrollReveal delay={0}>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-deep-orange/10 px-3 sm:px-4 py-2 rounded-full mb-6 sm:mb-8">
                <Sparkles size={14} className="text-deep-orange" />
                <span className="text-xs font-black uppercase tracking-wider text-deep-orange">Resources Hub</span>
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tighter text-slate-900 mb-4 sm:mb-6">
                Insights, Playbooks, <br/>and Opportunities.
              </h1>
              <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Expert insights, actionable guides, and proven frameworks to transform your B2B website into a conversion powerhouse.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Explore by topics */}
      <section className="px-4 sm:px-6 md:px-8 py-10 sm:py-16 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter mb-3 sm:mb-4">Explore by topics</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">Find exactly what you need from our curated collection of B2B resources</p>
          </div>
        </ScrollReveal>
        
        <ScrollingRow categories={row1} rowIndex={0} direction="right" />
        <ScrollingRow categories={row2} rowIndex={1} direction="left" />
        <ScrollingRow categories={row3} rowIndex={2} direction="right" />
      </section>

      {/* The Blog Section */}
      <section className="px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter mb-3 sm:mb-4">The Blog</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">Insights from experts on remote work, web design, founder journeys, and marketing tactics</p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12">
          {/* Blog Posts Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {blogPosts.map((post, idx) => (
                <motion.article
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100"
                >
                  <div className="relative h-36 sm:h-48 overflow-hidden">
                    <Image 
                      src={post.img}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                      <span className={`inline-flex items-center gap-1 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-black text-white ${
                        post.category === "Remote Work Culture" ? "bg-amber-500" :
                        post.category === "High-Converting Web Design" ? "bg-emerald-500" :
                        post.category === "Founder Insights" ? "bg-purple-500" : "bg-blue-500"
                      }`}>
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-slate-500 mb-2 sm:mb-3">
                      <span className="flex items-center gap-1"><User size={10} /> {post.author}</span>
                      <span className="flex items-center gap-1"><Calendar size={10} /> {post.date}</span>
                      <span className="flex items-center gap-1"><BookOpen size={10} /> {post.readTime}</span>
                    </div>
                    <h3 className="text-base sm:text-xl font-black tracking-tight mb-2 sm:mb-3 group-hover:text-deep-orange transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">{post.excerpt}</p>
                    <Link href="#" className="inline-flex items-center gap-2 font-black text-xs sm:text-sm text-deep-orange hover:gap-4 transition-all">
                      Read More <ArrowRight size={12} />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-72 xl:w-80 flex-shrink-0 space-y-6 sm:space-y-8">
            {/* Newsletter CTA */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-5 sm:p-6 text-white">
              <div className="bg-deep-orange w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                <Mail size={20} />
              </div>
              <h3 className="text-lg sm:text-xl font-black mb-2">Subscribe to the Newsletter</h3>
              <p className="text-slate-300 text-xs sm:text-sm mb-3 sm:mb-4">Get weekly insights delivered to your inbox. No spam, ever.</p>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-slate-400 mb-3 focus:outline-none focus:ring-2 focus:ring-deep-orange text-sm"
              />
              <button className="w-full bg-deep-orange text-white py-2.5 sm:py-3 rounded-xl font-black hover:bg-orange-600 transition-all text-sm">
                Subscribe Now
              </button>
            </div>

            {/* Marketing Audit CTA */}
            <div className="bg-gradient-to-br from-deep-orange to-orange-600 rounded-2xl p-5 sm:p-6 text-white">
              <div className="bg-white/20 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                <Target size={20} />
              </div>
              <h3 className="text-lg sm:text-xl font-black mb-2">Get a Marketing Audit</h3>
              <p className="text-orange-100 text-xs sm:text-sm mb-3 sm:mb-4">Get a free, no-obligation audit of your B2B website's conversion potential.</p>
              <Link href="/talk-to-us">
                <button className="w-full bg-white text-deep-orange py-2.5 sm:py-3 rounded-xl font-black hover:bg-slate-100 transition-all text-sm">
                  Claim Your Free Audit →
                </button>
              </Link>
            </div>

            {/* Categories */}
            <div className="bg-slate-50 rounded-2xl p-5 sm:p-6">
              <h3 className="text-base sm:text-lg font-black mb-3 sm:mb-4 flex items-center gap-2"><Tag size={16} /> Categories</h3>
              <div className="space-y-2 sm:space-y-3">
                {blogCategories.map((cat, idx) => (
                  <Link key={idx} href="#" className="flex items-center justify-between group">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className={`${cat.color} w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center`}>
                        <cat.icon size={14} />
                      </div>
                      <span className="text-slate-700 group-hover:text-deep-orange transition-colors text-sm">{cat.name}</span>
                    </div>
                    <span className="text-xs text-slate-400">{cat.count}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 bg-gradient-to-r from-slate-900 to-slate-800 my-8 sm:my-16">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-flex items-center gap-2 bg-deep-orange/20 px-3 sm:px-4 py-2 rounded-full mb-3 sm:mb-4">
                <Award size={14} className="text-deep-orange" />
                <span className="text-xs font-black uppercase tracking-wider text-deep-orange">Join Our Team</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 sm:mb-4">Build the Future with Us</h2>
              <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
                Work with top US clients while staying in India. Competitive salaries, great culture, and unlimited growth.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12">
            {[
              { icon: Globe, title: "Work from Anywhere", desc: "Fully remote - work from home or your favorite coffee shop" },
              { icon: DollarSign, title: "Competitive Pay", desc: "Salaries that match or exceed market standards" },
              { icon: Clock, title: "Flexible Hours", desc: "Work when you're most productive" },
              { icon: TrendingUp, title: "Growth Fast", desc: "Learn from US clients and accelerate your career" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-5 md:p-6 text-center hover:bg-white/20 transition-all"
              >
                <item.icon size={24} className="text-deep-orange mx-auto mb-2 sm:mb-3" />
                <h3 className="text-white font-bold text-sm mb-1">{item.title}</h3>
                <p className="text-slate-300 text-xs hidden sm:block">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/careers">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="bg-deep-orange text-white px-8 sm:px-10 py-3 sm:py-4 rounded-2xl font-black inline-flex items-center gap-2 text-sm sm:text-base"
              >
                View Open Positions <ArrowRight size={16} />
              </motion.button>
            </Link>
            <p className="text-slate-400 text-xs sm:text-sm mt-3 sm:mt-4">Join a team of passionate builders working with global clients</p>
          </div>
        </div>
      </section>

      {/* Contact Us Card */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto bg-slate-900 rounded-[2rem] sm:rounded-[3rem] md:rounded-[4rem] p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col lg:flex-row items-start lg:items-center gap-10 sm:gap-16 text-white">
            <div className="flex-1">
              <motion.div 
                whileHover={{ rotate: 5, scale: 1.05 }}
                className="bg-deep-orange w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-6 sm:mb-8"
              >
                <MessageCircle size={24} className="sm:hidden" />
                <MessageCircle size={32} className="hidden sm:block" />
              </motion.div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter mb-4 sm:mb-6 leading-tight">
                Ready to transform <br/>your website?
              </h2>
              <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-md">
                Get a free consultation with our experts and discover how we can help you convert more customers.
              </p>
            </div>
            <div className="w-full lg:flex-1 lg:max-w-md">
              <div className="flex flex-col gap-3 sm:gap-4">
                <Link href="/talk-to-us" className="w-full">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-deep-orange text-white w-full px-6 sm:px-8 py-4 sm:py-5 rounded-2xl font-black hover:bg-orange-600 transition-all text-sm sm:text-base"
                  >
                    Contact Us
                  </motion.button>
                </Link>
                <p className="text-xs text-slate-500 text-center">
                  No obligation. Just honest advice.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 text-center bg-slate-50">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 bg-deep-orange/10 px-3 sm:px-4 py-2 rounded-full mb-6 sm:mb-8"
            >
              <Zap size={14} className="text-deep-orange" />
              <span className="text-xs font-black uppercase tracking-wider text-deep-orange">Ready to scale?</span>
            </motion.div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-4 sm:mb-6">
              Let's build something <br/><span className="text-deep-orange">extraordinary</span>
            </h2>
            <p className="text-base sm:text-xl text-slate-600 mb-8 sm:mb-12 max-w-2xl mx-auto">
              Our resources are just the beginning. Let's discuss how we can apply these frameworks to your specific business needs.
            </p>
            <Link href="/talk-to-us">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -12px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-8 sm:px-12 py-4 sm:py-5 rounded-2xl font-black text-base sm:text-lg hover:bg-slate-800 transition-all inline-flex items-center gap-2"
              >
                Start your Project <ArrowRight size={18} />
              </motion.button>
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}