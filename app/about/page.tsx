"use client";
import { motion } from "framer-motion";
import { 
  Lightbulb, 
  Target, 
  TrendingUp, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="pt-32">
      {/* Hero Section */}
      <section className="px-8 pb-32 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-500 mb-6 inline-block">
              Our Mission
            </span>
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter text-slate-900 mb-8">
              Empowering US <br/><span className="text-deep-orange">Businesses</span> to Scale with Elite Execution.
            </h1>
            <p className="text-lg text-slate-600 max-w-md leading-relaxed">
              SEIZIT bridges the gap between visionary US companies and world-class offshore talent, turning scaling into a seamless architectural advantage.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="rounded-[3rem] overflow-hidden aspect-square shadow-2xl relative group"
          >
            <Image 
              src="https://picsum.photos/seed/about-hero/1000/1000"
              alt="Seizit Mission"
              fill
              className="object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* The "Seize It" Ethos */}
      <section className="px-8 py-32 bg-mist-grey">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-black tracking-tighter mb-8">The "Seize It" Ethos</h2>
              <p className="text-xl text-slate-600 mb-12 leading-relaxed">
                In a world of noise, we prioritize speed, precision, and alignment. We don't just provide talent; we provide the structural backbone for your growth.
              </p>
              <div className="space-y-8">
                {[
                  { icon: Zap, title: "Speed", desc: "Talent onboarding in as little as 48 hours." },
                  { icon: Target, title: "Precision", desc: "KPI-driven execution aligned with your US time zone." },
                  { icon: ShieldCheck, title: "Alignment", desc: "Seamless integration into your existing workflows." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="bg-white p-3 rounded-2xl shadow-sm">
                      <item.icon className="text-deep-orange" size={24} />
                    </div>
                    <div>
                      <h4 className="font-black text-lg mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-[3rem] shadow-xl"
            >
              <h3 className="text-3xl font-black tracking-tighter mb-8">Why India?</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                India is home to the world's most concentrated pool of technical and creative talent. We leverage this advantage to provide US businesses with elite execution at a fraction of the cost.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-4xl font-black text-deep-orange mb-2">Top 1%</p>
                  <p className="text-xs font-black uppercase tracking-widest text-slate-400">Vetted Talent</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-deep-orange mb-2">24/7</p>
                  <p className="text-xs font-black uppercase tracking-widest text-slate-400">Global Support</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Culture & Vetting */}
      <section className="px-8 py-32 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black tracking-tighter mb-4">Our Culture of Excellence</h2>
          <p className="text-slate-600">We don't just hire; we curate. Our vetting process is the most rigorous in the industry.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              title: "Technical Rigor", 
              desc: "Every developer and designer undergoes a multi-stage technical assessment." 
            },
            { 
              title: "Communication First", 
              desc: "We ensure 100% fluency and cultural alignment with US business standards." 
            },
            { 
              title: "Continuous Growth", 
              desc: "Our teams are constantly upskilling in the latest tech and creative trends." 
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-mist-grey p-12 rounded-[2.5rem] hover:bg-black hover:text-white transition-all duration-500 group"
            >
              <h4 className="text-2xl font-black tracking-tight mb-4">{item.title}</h4>
              <p className="text-sm opacity-60 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto bg-black rounded-[4rem] p-16 md:p-32 text-center text-white overflow-hidden relative"
        >
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-12 relative z-10">
            Ready to seize <br/>the advantage?
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
            <button className="bg-deep-orange text-white px-12 py-6 rounded-2xl font-black text-lg hover:bg-orange-600 transition-colors">
              Book Your Strategy Call
            </button>
            <Link href="/services" className="bg-transparent border border-white/20 text-white px-12 py-6 rounded-2xl font-black text-lg hover:bg-white/10 transition-colors">
              Explore Services
            </Link>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-slate-800/20 to-transparent rounded-full blur-3xl pointer-events-none" />
        </motion.div>
      </section>
    </main>
  );
}
