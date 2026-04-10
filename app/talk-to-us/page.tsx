"use client";
import { motion } from "framer-motion";
import { 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  Users, 
  Search, 
  Zap, 
  MessageSquare,
  ChevronDown,
  Globe
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import jamesImage from "@/public/talk-to-use/james.jpg";
import sarahImage from "@/public/talk-to-use/sarah.jpg";

export default function TalkToUsPage() {
  return (
    <main className="bg-[#FDFBF7] min-h-screen pt-32 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 mb-6"
          >
            Talk to Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Book a free 30-minute strategy call with our experts to unlock your business potential. No obligation, just execution.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-[400px_1fr] gap-12 items-start">
          {/* Left Column: Info & Social Proof */}
          <div className="space-y-8">
            {/* Team Partners Card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100"
            >
              <h3 className="text-xl font-black mb-8">Meet your growth partners</h3>
              
              <div className="space-y-6">
                {[
                  {
                    name: "James Thorne",
                    role: "Strategy Lead",
                    image: jamesImage
                  },
                  {
                    name: "Sarah Lansing",
                    role: "Operations Director",
                    image: sarahImage
                  }
                ].map((member, i) => (
                  <div key={i} className="relative group overflow-hidden rounded-2xl aspect-[4/3]">
                    <Image 
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                      <p className="text-white font-black text-lg">{member.name}</p>
                      <p className="text-white/70 text-sm">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-slate-100 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                      <Image 
                        src={`https://picsum.photos/seed/business-person-${i}/100/100`} 
                        alt="User" 
                        width={32} 
                        height={32} 
                        referrerPolicy="no-referrer" 
                      />
                    </div>
                  ))}
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Trusted by 500+ enterprises</p>
              </div>
            </motion.div>

            {/* Priority Access Card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-slate-900 p-8 rounded-[2.5rem] text-white relative overflow-hidden"
            >
              <div className="relative z-10">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-4 block">Priority Access</span>
                <h4 className="text-xl font-black mb-6 leading-tight">Ready to audit your funnel metrics today.</h4>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-bold text-white/60">TEAM ONLINE</span>
                </div>
              </div>
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Globe size={80} />
              </div>
            </motion.div>
          </div>

          {/* Right Column: Calendar Booking */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl shadow-black/5 border border-slate-100"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl font-black tracking-tight mb-4">Book your Strategy Call</h2>
              <p className="text-slate-500 text-sm max-w-md mx-auto">Pick a time that works for you. Let's discuss how we can accelerate your business with elite tech and talent.</p>
            </div>

            <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 shadow-inner">
              <iframe 
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2vqSvdOAJR9D5foOH0N3ht5tz50grgV9MPZI5YNzYKh31-g0DwPIqU99yv4NDDtktEMgUpM8Dv?gv=true" 
                style={{ border: 0 }} 
                width="100%" 
                height="700" 
                frameBorder="0"
              ></iframe>
            </div>
          </motion.div>
        </div>

        {/* Bottom Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-32">
          {[
            {
              icon: Search,
              title: "Discovery",
              desc: "A rigorous audit of your current acquisition model and churn factors."
            },
            {
              icon: Zap,
              title: "Tailored Plan",
              desc: "High-fidelity roadmaps with clear KPIs and resource requirements."
            },
            {
              icon: Users,
              title: "Integration",
              desc: "Full-cycle support to deploy our growth engines alongside your team."
            }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100"
            >
              <div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center mb-8">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-black mb-4">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 bg-white p-12 md:p-20 rounded-[4rem] shadow-sm border border-slate-100 relative overflow-hidden"
        >
          <div className="max-w-3xl relative z-10">
            <MessageSquare className="text-slate-100 absolute -top-10 -left-10" size={120} />
            <p className="text-2xl md:text-4xl font-black tracking-tight text-slate-900 mb-12 leading-tight">
              "The most productive 30 minutes I've spent on my business this year. Clear ROI within weeks."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <Image 
                  src="https://picsum.photos/seed/executive-man-2/200/200" 
                  alt="David Chen" 
                  width={64} 
                  height={64} 
                  referrerPolicy="no-referrer" 
                />
              </div>
              <div>
                <p className="font-black text-slate-900">David Chen</p>
                <p className="text-xs font-black uppercase tracking-widest text-slate-400">CEO, Nexus Dynamics</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Logos Section */}
        <div className="mt-20 flex flex-wrap justify-center items-center gap-12 opacity-20 grayscale">
          <span className="text-2xl font-black tracking-tighter">FORBES</span>
          <span className="text-2xl font-black tracking-tighter">TECHCRUNCH</span>
          <span className="text-2xl font-black tracking-tighter">REUTERS</span>
        </div>
      </div>
    </main>
  );
}