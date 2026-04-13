"use client";
import { motion } from "framer-motion";
import { 
  Check, 
  ArrowRight, 
  Terminal, 
  PenTool, 
  TrendingUp, 
  Layout,
  Zap,
  ShieldCheck,
  Video,
  Search,
  Code,
  Users
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import S1Image from "@/public/service/S1.png";
import S2Image from "@/public/service/S2.png";

export default function ServicesPage() {
  // Logo configuration
  const logos = [
    { name: "Elevizo", src: "/Trusted-by-companies/elevizo.png", width: 160, height: 60 },
    { name: "Labmentix", src: "/Trusted-by-companies/labmentix.png", width: 180, height: 60 },
    { name: "Prevail", src: "/Trusted-by-companies/Prevail.png", width: 160, height: 60 }
  ];

  return (
    <main className="pt-20 sm:pt-28 md:pt-32">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 md:px-8 pb-16 sm:pb-24 md:pb-32 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-500 mb-4 sm:mb-6 inline-block">
              Execution Excellence
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.15] tracking-tighter text-slate-900 mb-6 sm:mb-8">
              Digital Execution <br/><span className="text-slate-400">Without the</span> <br/>Bureaucracy.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-md leading-relaxed mb-6 sm:mb-8">
              We bridge the gap between architectural precision and market agility. No fluff, just elite execution.
            </p>
            <Link href="/talk-to-us">
              <button className="bg-black text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-black text-sm hover:bg-slate-800 transition-all shadow-xl shadow-black/10">
                Let's Go
              </button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="bg-mist-grey rounded-[2rem] sm:rounded-[3rem] aspect-[4/3] sm:aspect-square relative overflow-hidden group mt-4 lg:mt-0"
          >
            <Image 
              src={S1Image}
              alt="Digital Execution"
              fill
              className="object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-12 sm:py-16 md:py-20 overflow-hidden relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>
        
        {/* Gradient Overlays */}
        <div className="absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-8 sm:mb-12 text-center relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-black uppercase tracking-[0.3em] text-orange-400 bg-orange-400/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full inline-block mb-3 sm:mb-4">
              Trusted Globally
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white/80 tracking-tight">
              Join 500+ forward-thinking companies
            </h3>
          </motion.div>
        </div>
        
        {/* Main Marquee - Row 1 */}
        <div className="flex overflow-hidden select-none py-3 sm:py-4 relative z-20">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex flex-nowrap min-w-max"
          >
            {[...Array(6)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-12 sm:gap-20 items-center px-6 sm:px-10">
                {logos.map((logo, i) => (
                  <div 
                    key={`${setIndex}-${i}`}
                    className="group relative"
                  >
                    <div className="absolute -inset-4 bg-white/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                      <Image
                        src={logo.src}
                        alt={logo.name}
                        width={logo.width}
                        height={logo.height}
                        className="object-contain brightness-90 hover:brightness-100 transition-all duration-300"
                        style={{ width: 'auto', height: 'auto', maxHeight: '60px' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Second Marquee - Row 2 (opposite direction) */}
        <div className="flex overflow-hidden select-none py-3 sm:py-4 mt-2 sm:mt-4 relative z-20">
          <motion.div 
            animate={{ x: ["-50%", "0%"] }}
            transition={{ 
              duration: 30, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex flex-nowrap min-w-max"
          >
            {[...Array(6)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-12 sm:gap-20 items-center px-6 sm:px-10">
                {logos.map((logo, i) => (
                  <div 
                    key={`${setIndex}-${i}`}
                    className="group relative"
                  >
                    <div className="absolute -inset-4 bg-white/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                      <Image
                        src={logo.src}
                        alt={logo.name}
                        width={logo.width}
                        height={logo.height}
                        className="object-contain brightness-75 hover:brightness-100 transition-all duration-300"
                        style={{ width: 'auto', height: 'auto', maxHeight: '50px' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 bg-gradient-to-t from-slate-900 to-transparent z-10 pointer-events-none" />
      </section>

      {/* IT & Creative Hub */}
      <section className="px-4 sm:px-6 md:px-8 py-16 sm:py-24 md:py-32 bg-mist-grey">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter mb-3 sm:mb-4">IT & Creative Hub</h2>
            <p className="text-slate-600 max-w-lg text-sm sm:text-base">High-value digital products built for scale and conversion.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              { 
                icon: Layout, 
                title: "Web Design & UI/UX", 
                desc: "User-centric, conversion-focused interfaces that command authority." 
              },
              { 
                icon: Code, 
                title: "Web & App Development", 
                desc: "Custom digital products built with modern stacks for enterprise scale." 
              },
              { 
                icon: Zap, 
                title: "Webflow & No-Code", 
                desc: "Rapid deployment for marketing sites without sacrificing quality." 
              },
              { 
                icon: PenTool, 
                title: "Branding & Positioning", 
                desc: "Making your brand unforgettable in crowded markets." 
              },
              { 
                icon: Video, 
                title: "Video & Graphic Design", 
                desc: "High-retention creative assets for TikTok, Reels, and paid ads." 
              },
              { 
                icon: Search, 
                title: "SEO & CRO", 
                desc: "Ensuring your site actually generates leads and scales organic traffic." 
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 sm:p-10 md:p-12 rounded-[1.5rem] sm:rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group"
              >
                <service.icon className="mb-6 sm:mb-8 text-black group-hover:scale-110 transition-transform" size={28} />
                <h3 className="text-xl sm:text-2xl font-black tracking-tight mb-3 sm:mb-4">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Post-Launch Promise */}
      <section className="px-4 sm:px-6 md:px-8 py-16 sm:py-24 md:py-32 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-cream-clay p-8 sm:p-16 md:p-24 rounded-[2rem] sm:rounded-[3rem] md:rounded-[4rem] relative overflow-hidden"
        >
          <div className="relative z-10 max-w-2xl">
            <span className="text-[10px] uppercase tracking-widest font-black text-slate-500 mb-4 sm:mb-6 block">The Post-Launch Promise</span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter mb-6 sm:mb-8">We don't just <br/>launch and leave.</h2>
            <p className="text-base sm:text-lg text-slate-600 mb-8 sm:mb-12 leading-relaxed">
              Dedicated support including long-term maintenance, security updates, and iterative improvements. We are your long-term execution partner.
            </p>
            <Link href="/talk-to-us">
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "#000" }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-8 sm:px-14 py-5 sm:py-7 rounded-2xl font-black text-base sm:text-lg hover:bg-slate-800 transition-all shadow-2xl shadow-black/20 flex items-center gap-3 group w-fit"
              >
                Talk to Us <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </Link>
          </div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 opacity-5 sm:opacity-10 pointer-events-none">
            <ShieldCheck size={200} className="sm:hidden" />
            <ShieldCheck size={400} className="hidden sm:block" />
          </div>
        </motion.div>
      </section>

      {/* Staffing Section */}
      <section className="px-4 sm:px-6 md:px-8 py-16 sm:py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 md:gap-20 items-center mb-16 sm:mb-24 md:mb-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[10px] uppercase tracking-widest font-black text-deep-orange mb-4 sm:mb-6 block">Staffing & Talent</span>
              <h2 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter mb-6 sm:mb-8">Your Dedicated <br/>Offshore Team.</h2>
              <p className="text-base sm:text-xl text-slate-600 mb-8 sm:mb-12 leading-relaxed">
                US-Standard execution starting from <span className="text-black font-black">$399/mo</span>. Fully aligned with your time zone and defined by KPIs.
              </p>
              <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
                {[
                  "Transparent pricing: Starting from $399.",
                  "Seamless Integration: US time zone alignment.",
                  "Results-Oriented: Defined by KPIs, not just hours."
                ].map((item, i) => (
                  <div key={i} className="flex items-start sm:items-center gap-3 sm:gap-4">
                    <div className="bg-deep-orange text-white rounded-full p-1 mt-0.5 sm:mt-0 flex-shrink-0">
                      <Check size={14} />
                    </div>
                    <p className="font-bold text-slate-900 text-sm sm:text-base">{item}</p>
                  </div>
                ))}
              </div>
              <Link href="/talk-to-us">
                <button className="bg-black text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-black text-sm hover:bg-slate-800 transition-all">
                  Connect with Us
                </button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-mist-grey rounded-[2rem] sm:rounded-[3rem] aspect-[4/3] sm:aspect-[4/5] relative overflow-hidden group mt-4 lg:mt-0"
            >
              <Image 
                src={S2Image}
                alt="Offshore Talent"
                fill
                className="object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              { 
                title: "Virtual Assistants", 
                desc: "Administrative heavy lifting, scheduling, and data management." 
              },
              { 
                title: "Operations", 
                desc: "E-commerce fulfillment, customer support, and process management." 
              },
              { 
                title: "Sales & Marketing", 
                desc: "Lead generation, cold outreach, and campaign execution." 
              },
              { 
                title: "Software Engineers", 
                desc: "Vetted, dedicated developers extending your technical runway." 
              }
            ].map((role, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-mist-grey p-8 sm:p-10 rounded-[1.5rem] sm:rounded-[2.5rem] hover:bg-black hover:text-white transition-all duration-500 group"
              >
                <Users className="mb-6 sm:mb-8 text-deep-orange group-hover:text-white transition-colors" size={28} />
                <h4 className="text-lg sm:text-xl font-black mb-3 sm:mb-4">{role.title}</h4>
                <p className="text-sm opacity-60 leading-relaxed">{role.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}