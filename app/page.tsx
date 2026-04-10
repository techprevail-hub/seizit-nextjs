"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Hero, 
  TrustSection, 
  DualPowerSplit, 
  SavingsWidget, 
  IndustryPreview, 
  CaseStudy,
  ProblemSolution,
  ExecutionProcess,
  TechStack,
  WebsiteDesign,
  CalendarBooking
} from "@/components/Sections";

export default function Home() {
  return (
    <main>
      <Hero />
      
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
                {["Elevizo", "Labmentix", "Prevail"].map((name, i) => (
                  <div 
                    key={`${setIndex}-${i}`}
                    className="group relative"
                  >
                    <div className="absolute -inset-4 bg-white/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-white/30 hover:text-white transition-all duration-300 cursor-default whitespace-nowrap shrink-0 group-hover:scale-110 inline-block">
                      {name}
                    </span>
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
                {["Elevizo", "Labmentix", "Prevail"].map((name, i) => (
                  <div 
                    key={`${setIndex}-${i}`}
                    className="group relative"
                  >
                    <div className="absolute -inset-4 bg-white/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="relative text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black tracking-tighter text-white/20 hover:text-white/60 transition-all duration-300 cursor-default whitespace-nowrap shrink-0 group-hover:scale-110 inline-block">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 bg-gradient-to-t from-slate-900 to-transparent z-10 pointer-events-none" />
      </section>

      <ProblemSolution />
      <DualPowerSplit />
      <ExecutionProcess />
      <TechStack />
      <WebsiteDesign />
      <CalendarBooking />
      <SavingsWidget />
      <IndustryPreview />
      <CaseStudy />

      {/* Final CTA */}
      <section className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto text-center overflow-hidden relative">
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-deep-orange/5 rounded-full blur-[120px] pointer-events-none z-0"
        />
        <div className="relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter text-slate-900 mb-6 sm:mb-8"
          >
            Don't wait for the right moment. <br/><span className="text-deep-orange">Seize it.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-xl text-slate-600 mb-8 sm:mb-12 max-w-2xl mx-auto"
          >
            Join the forward-thinking companies who have traded hiring headaches for elite execution. Your new team is one call away.
          </motion.p>
          <Link href="/talk-to-us">
            <motion.button 
              data-cursor="active"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-8 sm:px-12 py-4 sm:py-6 rounded-2xl font-black text-base sm:text-xl hover:bg-slate-800 transition-colors shadow-2xl shadow-black/20"
            >
              Connect with Us
            </motion.button>
          </Link>
          <p className="mt-6 sm:mt-8 text-xs text-slate-400 font-black uppercase tracking-widest">No long-term contracts. Cancel anytime.</p>
        </div>
      </section>
    </main>
  );
}