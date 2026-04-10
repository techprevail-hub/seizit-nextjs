"use client";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  Terminal, 
  PenTool, 
  TrendingUp, 
  Users, 
  Check,
  Zap,
  Globe,
  ShieldCheck,
  Rocket,
  Cpu,
  Code2,
  Layout,
  Database,
  Cloud,
  Layers,
  Server,
  HardDrive,
  Network,
  Lock,
  Activity,
  Box,
  GitBranch,
  Monitor,
  Smartphone,
  Palette,
    X,
} from "lucide-react";
import { useRef, useState, useEffect } from "react";

export const GridBackground = () => (
  <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" 
    style={{ 
      backgroundImage: `radial-gradient(circle at 2px 2px, black 1px, transparent 0)`,
      backgroundSize: '40px 40px' 
    }} 
  />
);

export const Hero = () => {
  const { scrollY } = useScroll();
  const y2 = useTransform(scrollY, [0, 500], [0, -30]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.98]);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const fullscreenVideoRef = useRef<HTMLVideoElement>(null);

  const headline = "Empowering US Businesses with Elite Tech & Talent.";
  const words = headline.split(" ");

  const handleVideoClick = () => {
    setIsFullscreen(true);
  };

  const handleCloseFullscreen = () => {
    setIsFullscreen(false);
  };

  // Handle video playback when fullscreen changes
  useEffect(() => {
    if (isFullscreen && fullscreenVideoRef.current && videoRef.current) {
      const currentTime = videoRef.current.currentTime;
      fullscreenVideoRef.current.currentTime = currentTime;
      fullscreenVideoRef.current.play().catch(error => {
        console.log("Fullscreen video play error:", error);
      });
    } else if (!isFullscreen && videoRef.current && fullscreenVideoRef.current) {
      const currentTime = fullscreenVideoRef.current.currentTime;
      videoRef.current.currentTime = currentTime;
      videoRef.current.play().catch(error => {
        console.log("Main video play error:", error);
      });
    }
  }, [isFullscreen]);

  // Handle main video autoplay on mount
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        console.log("Autoplay prevented. Will play on user interaction.");
        // Add click handler to play video on first user interaction
        const playOnInteraction = () => {
          video.play().catch(e => console.log("Play failed:", e));
          document.removeEventListener('click', playOnInteraction);
          document.removeEventListener('touchstart', playOnInteraction);
        };
        document.addEventListener('click', playOnInteraction);
        document.addEventListener('touchstart', playOnInteraction);
      }
    };

    // Small delay to ensure video is ready
    const timer = setTimeout(playVideo, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section className="relative pt-24 pb-12 px-8 max-w-7xl mx-auto">
        <GridBackground />
        
        {/* Background Blobs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-deep-orange/5 rounded-full blur-[120px] pointer-events-none"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 -right-40 w-96 h-96 bg-slate-200/20 rounded-full blur-[120px] pointer-events-none"
        />

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 text-[8px] md:text-[9px] lg:text-[10px] uppercase tracking-[0.2em] font-black text-slate-500 mb-6 bg-white/50 backdrop-blur-md border border-slate-200 px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-sm w-fit"
            >
              <span className="w-1.5 h-1.5 bg-deep-orange rounded-full animate-pulse" />
              US-Facing. India-Built. Globally Credible.
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.2] tracking-tighter text-slate-900 mb-5 overflow-hidden">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ 
                    duration: 0.7, 
                    delay: 0.2 + (i * 0.05), 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  className={`inline-block mr-2 ${word === "Businesses" ? "text-deep-orange" : ""}`}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-sm md:text-base text-slate-600 leading-relaxed max-w-md mb-7"
            >
              From high-converting web experiences to KPI-driven offshore talent starting at just $399. We execute so you can scale.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button 
                onClick={() => document.getElementById('book-call')?.scrollIntoView({ behavior: 'smooth' })}
                data-cursor="active"
                className="bg-black text-white px-7 md:px-9 py-3.5 md:py-4 rounded-xl font-black flex items-center justify-center gap-2 hover:bg-slate-800 transition-all group shadow-xl shadow-black/20 text-sm md:text-base"
              >
                Talk to Us <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
              </button>
              <Link href="/services" className="bg-white text-black border border-slate-200 px-7 md:px-9 py-3.5 md:py-4 rounded-xl font-black hover:bg-slate-50 transition-all text-center backdrop-blur-sm text-sm md:text-base">
                Explore Our Services
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Full Coverage Video (No Border) */}
          <motion.div 
            style={{ y: y2, opacity, scale }}
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative group z-0 cursor-pointer"
            onClick={handleVideoClick}
          >
            <div className="absolute -top-10 -right-10 w-80 h-80 bg-deep-orange/10 rounded-full blur-3xl group-hover:bg-deep-orange/20 transition-colors duration-700"></div>
            <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl relative aspect-[4/3] md:aspect-square">
              {/* Video Element - Covers entire container */}
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                loop
                muted
                playsInline
              >
                <source src="/hero-section/hero.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Gradient Overlay for better visual appeal */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
              
              {/* Play Icon Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center pointer-events-none">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-90 group-hover:scale-100">
                  <div className="w-0 h-0 border-t-[9px] md:border-t-[10px] border-t-transparent border-l-[14px] md:border-l-[16px] border-l-black border-b-[9px] md:border-b-[10px] border-b-transparent ml-0.5" />
                </div>
              </div>
              
              {/* Interactive Glass Card - Bottom */}
              <motion.div 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-3 md:p-4 rounded-xl shadow-lg border border-white/50 group-hover:-translate-y-1 transition-all duration-500"
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-deep-orange/10 flex items-center justify-center flex-shrink-0">
                    <Zap className="text-deep-orange" size={14} />
                  </div>
                  <div className="flex-1">
                    <p className="text-[7px] md:text-[8px] font-black uppercase tracking-widest text-slate-400">Talent Advantage</p>
                    <p className="text-xs md:text-sm font-black text-slate-900 leading-tight">Starting from $399/mo</p>
                  </div>
                  <div className="w-14 md:w-16">
                    <div className="w-full h-0.5 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.5, delay: 1.2 }}
                        className="h-full bg-deep-orange"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fullscreen Video Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
            onClick={handleCloseFullscreen}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={handleCloseFullscreen}
                className="absolute top-4 right-4 md:top-8 md:right-8 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all flex items-center justify-center text-white group"
              >
                <X size={24} className="group-hover:scale-110 transition-transform" />
              </button>
              
              {/* Fullscreen Video */}
              <video
                ref={fullscreenVideoRef}
                className="w-full h-full object-contain"
                loop
                muted={false}
                controls
                playsInline
              >
                <source src="/hero-section/hero.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Instruction Overlay */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-xs md:text-sm font-medium bg-black/50 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-full whitespace-nowrap">
                Click anywhere outside the video to close
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export const TrustSection = () => {
  const logos = ["Elevizo", "Labmentix", "Prevail"];
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];
  
  return (
    <section className="bg-white py-24 border-y border-slate-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-8 mb-16 text-center">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400"
        >
          Trusted by forward-thinking companies
        </motion.p>
      </div>
      
      <div className="flex overflow-hidden select-none">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex flex-nowrap min-w-max"
        >
          {duplicatedLogos.map((name, i) => (
            <div 
              key={i}
              className="text-4xl font-black tracking-tighter text-slate-900/10 hover:text-deep-orange transition-colors cursor-default whitespace-nowrap shrink-0 px-12"
            >
              {name}
            </div>
          ))}
        </motion.div>
      </div>
      
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export const DualPowerSplit = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-32 px-8 max-w-7xl mx-auto overflow-visible relative">
      <GridBackground />
      <div className="grid md:grid-cols-2 gap-8 relative z-10">
        <motion.div
          onMouseEnter={() => setHovered(0)}
          onMouseLeave={() => setHovered(null)}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-mist-grey p-16 rounded-[3rem] relative overflow-hidden group cursor-pointer border border-transparent hover:border-slate-200 transition-all"
        >
          <div className="relative z-10">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform">
              <PenTool className="text-slate-900" size={24} />
            </div>
            <span className="text-[10px] uppercase tracking-widest font-black text-slate-400 mb-4 block">Track 1: IT & Creative</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 mb-6 group-hover:text-deep-orange transition-colors">Digital Products <br/>that Convert.</h2>
            <p className="text-slate-600 mb-8 leading-relaxed max-w-sm">From Webflow development to high-end UI/UX, we build digital experiences that drive revenue.</p>
            <Link href="/services" className="inline-flex items-center gap-2 font-black text-sm uppercase tracking-widest hover:gap-4 transition-all">
              Explore Services <ArrowRight size={16} />
            </Link>
          </div>
          <motion.div 
            animate={{ 
              scale: hovered === 0 ? 1.5 : 1,
              opacity: hovered === 0 ? 1 : 0.5,
              x: hovered === 0 ? -20 : 0,
              y: hovered === 0 ? -20 : 0
            }}
            className="absolute -bottom-20 -right-20 w-64 h-64 bg-white rounded-full blur-3xl transition-all duration-700" 
          />
          <div className="absolute inset-0 bg-gradient-to-br from-deep-orange/0 to-deep-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>

        <motion.div
          onMouseEnter={() => setHovered(1)}
          onMouseLeave={() => setHovered(null)}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="bg-cream-clay p-16 rounded-[3rem] relative overflow-hidden group cursor-pointer border border-transparent hover:border-slate-200 transition-all"
        >
          <div className="relative z-10">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:-rotate-3 transition-transform">
              <Users className="text-slate-900" size={24} />
            </div>
            <span className="text-[10px] uppercase tracking-widest font-black text-slate-400 mb-4 block">Track 2: Staffing</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 mb-6 group-hover:text-deep-orange transition-colors">High-Leverage <br/>Global Talent.</h2>
            <p className="text-slate-600 mb-8 leading-relaxed max-w-sm">Dedicated offshore teams fully aligned with your US time zone and defined by KPIs.</p>
            <Link href="/services" className="inline-flex items-center gap-2 font-black text-sm uppercase tracking-widest hover:gap-4 transition-all">
              Build Your Team <ArrowRight size={16} />
            </Link>
          </div>
          <motion.div 
            animate={{ 
              scale: hovered === 1 ? 1.5 : 1,
              opacity: hovered === 1 ? 1 : 0.5,
              x: hovered === 1 ? -20 : 0,
              y: hovered === 1 ? -20 : 0
            }}
            className="absolute -bottom-20 -right-20 w-64 h-64 bg-white rounded-full blur-3xl transition-all duration-700" 
          />
          <div className="absolute inset-0 bg-gradient-to-br from-deep-orange/0 to-deep-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>
      </div>
    </section>
  );
};

export const ProblemSolution = () => {
  return (
    <section className="py-32 px-8 max-w-7xl mx-auto relative">
      <div className="grid lg:grid-cols-12 gap-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="lg:col-span-7 bg-slate-900 text-white p-12 md:p-20 rounded-[3rem] relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-deep-orange/10 blur-[100px] group-hover:bg-deep-orange/20 transition-colors duration-700" />
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest mb-8 border border-white/10">The Challenge</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-[0.95]">
            Struggling to find a <br/>
            <span className="text-deep-orange">great tech team?</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-md leading-relaxed">Traditional hiring is slow, expensive, and risky. We provide the elite talent and execution framework to keep your momentum.</p>
          
          <div className="mt-16 grid grid-cols-2 gap-8 border-t border-white/10 pt-16">
            <div>
              <p className="text-3xl font-black mb-2 text-deep-orange">45 Days</p>
              <p className="text-xs font-black uppercase tracking-widest text-slate-500">Avg. US Hiring Time</p>
            </div>
            <div>
              <p className="text-3xl font-black mb-2 text-white">48 Hours</p>
              <p className="text-xs font-black uppercase tracking-widest text-slate-500">Seizit Deployment</p>
            </div>
          </div>
        </motion.div>

        <div className="lg:col-span-5 grid gap-8">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-cream-clay p-12 rounded-[3rem] border border-slate-100 flex flex-col justify-between group hover:bg-white transition-colors duration-500"
          >
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
              <Zap className="text-deep-orange" size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-black tracking-tight mb-4">Instant Velocity</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Stop waiting for "the right hire." Our pre-vetted specialists integrate into your workflow in days, not months.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-mist-grey p-12 rounded-[3rem] border border-slate-100 flex flex-col justify-between group hover:bg-white transition-colors duration-500"
          >
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
              <ShieldCheck className="text-slate-900" size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-black tracking-tight mb-4">Zero-Risk Scaling</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Scale up or down based on your roadmap. No long-term liabilities, just high-output execution.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const ExecutionProcess = () => {
  const steps = [
    {
      title: "Strategic Audit",
      desc: "We analyze your current bottlenecks and define the exact talent or tech solution needed.",
      icon: Terminal
    },
    {
      title: "Elite Matching",
      desc: "We deploy pre-vetted specialists from our India-based hub, fully aligned with your goals.",
      icon: Users
    },
    {
      title: "Seamless Integration",
      desc: "Our team integrates into your Slack, Jira, and workflow with daily KPI tracking.",
      icon: Zap
    },
    {
      title: "Continuous Growth",
      desc: "We optimize and scale your execution engine as your business evolves.",
      icon: Rocket
    }
  ];

  return (
    <section className="py-32 px-8 bg-white relative overflow-hidden">
      <GridBackground />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-4 block"
          >
            The Seizit Execution
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black tracking-tighter"
          >
            From Bottleneck to <br/><span className="text-deep-orange">Breakthrough.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              <div className="bg-mist-grey/50 p-10 rounded-[2.5rem] h-full border border-slate-100 group-hover:bg-white group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500">
                <div className="text-4xl font-black text-slate-200 mb-8 group-hover:text-deep-orange/20 transition-colors">0{i + 1}</div>
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <step.icon className="text-slate-900" size={24} />
                </div>
                <h3 className="text-xl font-black tracking-tight mb-4">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-slate-200 z-0" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const SavingsWidget = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-32 px-8 bg-black text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 to-black z-0" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">Calculate your <br/><span className="text-deep-orange">savings.</span></h2>
            <p className="text-xl text-slate-400 mb-12 max-w-md">See how our $399/mo India-based talent compares to traditional US hiring costs.</p>
            <Link href="/talk-to-us">
              <button 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="bg-white text-black px-12 py-6 rounded-2xl font-black text-lg hover:bg-deep-orange hover:text-white transition-all shadow-2xl shadow-white/5"
              >
                Let's Go
              </button>
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 backdrop-blur-xl p-12 rounded-[3rem] border border-white/10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-deep-orange/20 blur-3xl group-hover:bg-deep-orange/40 transition-all duration-700" />
            <div className="space-y-12">
              <div className="flex justify-between items-end border-b border-white/5 pb-8">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">US Junior Hire</p>
                  <p className="text-4xl font-black">$6,500<span className="text-sm font-normal text-slate-500">/mo</span></p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-black uppercase tracking-widest text-deep-orange mb-4">SEIZIT Specialist</p>
                  <p className="text-4xl font-black text-deep-orange">$399<span className="text-sm font-normal text-slate-500">/mo</span></p>
                </div>
              </div>
              <div className="pt-4">
                <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">Annual Savings per Role</p>
                <motion.p 
                  animate={{ scale: isHovered ? 1.05 : 1 }}
                  className="text-7xl md:text-9xl font-black tracking-tighter text-white"
                >
                  $73,212
                </motion.p>
                <div className="mt-12 flex items-center gap-4 p-6 bg-white/5 rounded-2xl border border-white/5">
                  <div className="w-10 h-10 rounded-full bg-deep-orange flex items-center justify-center">
                    <Check className="text-white" size={20} />
                  </div>
                  <p className="text-slate-300 text-sm font-medium italic">"Don't wait for the right moment, seize it."</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const CaseStudy = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
      <section ref={ref} className="relative px-8 py-32 overflow-hidden bg-white">
        <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className=" relative max-w-7xl mx-auto bg-slate-900 rounded-[4rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl"
      >
        <div className="lg:w-1/2 relative h-[500px] lg:h-auto overflow-hidden">
          <motion.img 
            style={{ y, scale: 1.2 }}
            alt="Case Study" 
            className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700" 
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <div className="lg:w-1/2 p-12 md:p-24 text-white flex flex-col justify-center relative">
          <div className="absolute top-0 right-0 p-12 opacity-5">
            <Rocket size={200} />
          </div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8"
          >
            <span className="w-1.5 h-1.5 bg-deep-orange rounded-full" />
            Client Success: TechFlow Inc.
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl font-black tracking-tighter mb-10 leading-tight"
          >
            How we fueled 3x Growth in 6 months.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-slate-400 mb-16 leading-relaxed font-medium"
          >
            "SEIZIT didn't just provide talent; they provided the structural backbone our company needed during our Series A transition. Our output tripled while our burn rate stabilized."
          </motion.p>
          <div className="grid grid-cols-2 gap-12">
            {[
              { val: "300%", label: "Revenue Increase" },
              { val: "40%", label: "Op-Ex Reduction" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + (i * 0.1) }}
              >
                <p className="text-5xl font-black mb-2 text-white tabular-nums">{stat.val}</p>
                <p className="text-[10px] uppercase tracking-widest font-black text-slate-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export const TechStack = () => {
  // Left side technologies
  const leftTech = [
    { name: "React", icon: Code2, color: "#61DAFB" },
    { name: "Next.js", icon: Layers, color: "#000000" },
    { name: "Node.js", icon: Database, color: "#339933" },
    { name: "TypeScript", icon: Terminal, color: "#3178C6" },
    { name: "Tailwind", icon: Layout, color: "#06B6D4" },
    { name: "Framer", icon: Zap, color: "#0055FF" },
  ];

  // Right side technologies
  const rightTech = [
    { name: "AWS", icon: Cloud, color: "#FF9900" },
    { name: "Docker", icon: Box, color: "#2496ED" },
    { name: "Kubernetes", icon: GitBranch, color: "#326CE5" },
    { name: "MongoDB", icon: Database, color: "#47A248" },
    { name: "PostgreSQL", icon: Database, color: "#4169E1" },
    { name: "Redis", icon: Activity, color: "#DC382D" },
  ];

  return (
    <section className="py-10 px-4 bg-gradient-to-br from-slate-50 via-white to-slate-50 overflow-hidden relative">
      <GridBackground />
      <div className="max-w-7xl mx-auto">
        {/* Connected Technologies Layout */}
        <div className="relative min-h-[600px] flex items-center justify-center">
          {/* Connecting Lines Background */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
            {/* Central horizontal line */}
            <line 
              x1="20%" 
              y1="50%" 
              x2="80%" 
              y2="50%" 
              stroke="#E2E8F0" 
              strokeWidth="2" 
              strokeDasharray="8 8"
              className="opacity-50"
            />
            {/* Left side vertical connectors */}
            {leftTech.map((_, i) => {
              const yPos = 20 + (i * 12);
              return (
                <line 
                  key={`left-${i}`}
                  x1="20%" 
                  y1={`${yPos}%`} 
                  x2="35%" 
                  y2="50%" 
                  stroke="#CBD5E1" 
                  strokeWidth="1.5"
                  className="opacity-40"
                />
              );
            })}
            {/* Right side vertical connectors */}
            {rightTech.map((_, i) => {
              const yPos = 20 + (i * 12);
              return (
                <line 
                  key={`right-${i}`}
                  x1="80%" 
                  y1={`${yPos}%`} 
                  x2="65%" 
                  y2="50%" 
                  stroke="#CBD5E1" 
                  strokeWidth="1.5"
                  className="opacity-40"
                />
              );
            })}
          </svg>

          {/* Left Side Technologies */}
          <div className="absolute left-0 w-[35%] space-y-6 z-10">
            {leftTech.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative"
              >
                <div className="bg-white p-5 rounded-2xl shadow-lg border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-4 cursor-pointer">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${tech.color}15` }}
                  >
                    <tech.icon style={{ color: tech.color }} size={24} />
                  </div>
                  <div>
                    <p className="font-black text-slate-900 text-lg">{tech.name}</p>
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">Framework</p>
                  </div>
                  {/* Animated pulse dot */}
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-slate-300 group-hover:bg-deep-orange transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center Hosting Text */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative"
            >
              {/* Glowing background */}
              <div className="absolute inset-0 bg-deep-orange/20 rounded-full blur-3xl animate-pulse" />
              
              <div className="relative bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border-2 border-deep-orange/20 hover:border-deep-orange/40 transition-all duration-500">
                <div className="text-center">
                  <Server className="w-12 h-12 text-deep-orange mx-auto mb-4" />
                  <h3 className="text-3xl md:text-4xl font-black tracking-tighter text-slate-900 mb-2">Hosting &</h3>
                  <h3 className="text-3xl md:text-4xl font-black tracking-tighter text-deep-orange">Maintenance</h3>
                  <div className="w-12 h-0.5 bg-deep-orange mx-auto my-6" />
                  <p className="text-sm text-slate-500 max-w-[200px]">
                    99.9% Uptime • 24/7 Support • Auto-scaling
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side Technologies */}
          <div className="absolute right-0 w-[35%] space-y-6 z-10">
            {rightTech.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative"
              >
                <div className="bg-white p-5 rounded-2xl shadow-lg border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-4 cursor-pointer">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${tech.color}15` }}
                  >
                    <tech.icon style={{ color: tech.color }} size={24} />
                  </div>
                  <div>
                    <p className="font-black text-slate-900 text-lg">{tech.name}</p>
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">Infrastructure</p>
                  </div>
                  <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-slate-300 group-hover:bg-deep-orange transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-8 mt-32 pt-12 border-t border-slate-200"
        >
          {[
            { value: "99.9%", label: "Uptime Guarantee" },
            { value: "<50ms", label: "Avg. Response Time" },
            { value: "24/7", label: "Expert Support" }
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <p className="text-3xl md:text-4xl font-black text-slate-900 group-hover:text-deep-orange transition-colors">{stat.value}</p>
              <p className="text-xs font-black uppercase tracking-widest text-slate-400 mt-2">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export const WebsiteDesign = () => {
  return (
    <section className="py-32 px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-4 block">Design & Development</span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 text-slate-900">Websites that <br/><span className="text-deep-orange">stand out.</span></h2>
          <p className="text-xl text-slate-600 mb-12 leading-relaxed">We design and develop your websites, mobile applications, and web services showcasing your end-to-end solutions with attractive designs and highly engaging web and apps.</p>
          <button 
            onClick={() => document.getElementById('book-call')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-black text-white px-10 py-5 rounded-xl font-black flex items-center gap-2 hover:bg-deep-orange transition-all group"
          >
            Book a Call <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white"
          >
            <img 
              src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=1000" 
              alt="Desktop Mockup" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50, y: 50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="absolute -bottom-12 -right-12 w-1/2 z-20 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white hidden md:block"
          >
            <img 
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=500" 
              alt="Mobile Mockup" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const CalendarBooking = () => {
  return (
    <section id="book-call" className="py-32 px-8 bg-white relative overflow-hidden">
      <GridBackground />
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-4 block"
          >
            Schedule a Meeting
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black tracking-tighter mb-8"
          >
            Book your <span className="text-deep-orange">Strategy Call.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto"
          >
            Pick a time that works for you. Let's discuss how we can accelerate your business with elite tech and talent.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden"
        >
          <iframe 
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2vqSvdOAJR9D5foOH0N3ht5tz50grgV9MPZI5YNzYKh31-g0DwPIqU99yv4NDDtktEMgUpM8Dv?gv=true" 
            style={{ border: 0 }} 
            width="100%" 
            height="700" 
            frameBorder="0"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export const IndustryPreview = () => {
  const industries = [
    { name: "Healthcare", icon: ShieldCheck },
    { name: "Education", icon: Globe },
    { name: "Hospitality", icon: Users },
    { name: "Retail", icon: Zap },
    { name: "B2B SaaS", icon: Terminal },
    { name: "FinTech", icon: TrendingUp },
    { name: "Professional Services", icon: PenTool }
  ];

  return (
    <section className="py-32 px-8 overflow-hidden bg-mist-grey/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4 block">Vertical Expertise</span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter">Engineered for your <br/><span className="text-deep-orange">exact market.</span></h2>
        </motion.div>
        
        <div className="flex gap-8 overflow-x-auto pb-12 no-scrollbar">
          {industries.map((industry, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white px-12 py-16 rounded-[3rem] min-w-[340px] flex flex-col justify-between group hover:bg-black hover:text-white transition-all duration-500 shadow-sm hover:shadow-2xl border border-slate-100"
            >
              <div className="w-14 h-14 bg-mist-grey rounded-2xl flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <industry.icon className="text-slate-900 group-hover:text-white transition-colors" size={28} />
              </div>
              <div>
                <h3 className="text-3xl font-black tracking-tight mb-8">{industry.name}</h3>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <ArrowRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};