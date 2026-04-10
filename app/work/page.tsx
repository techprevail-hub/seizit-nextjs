"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, Users, Zap, Globe, CheckCircle2, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

export default function WorkPage() {
  const projects = [
    {
      title: "Elevizo.io",
      category: "IT & Creative",
      stats: "40% Higher Conversion",
      desc: "Architected a high-end digital experience that transformed their brand authority and user engagement. Our team delivered a cutting-edge platform that revolutionized their market presence.",
      video: "/work/elvizo.mp4",
      alignment: "left" // video on right, info on left
    },
    {
      title: "Labmentix.in",
      category: "Web Development",
      stats: "2x Faster Load Speed",
      desc: "Optimized technical infrastructure for a seamless, enterprise-grade medical platform. We implemented advanced caching strategies and optimized their entire tech stack.",
      video: "/work/labmentix.mp4",
      alignment: "right" // video on left, info on right
    },
    {
      title: "withprevail.com",
      category: "Staffing & Operations",
      stats: "60% Op-Ex Savings",
      desc: "Deployed a dedicated offshore team that integrated seamlessly into their US operations. Our staffing solution reduced costs while maintaining US-standard quality.",
      video: "/work/prevail.mp4",
      alignment: "left" // video on right, info on left
    }
  ];

  return (
    <main className="pt-32 bg-[#FDFBF7]">
      {/* Hero Section - Centered */}
      <section className="px-8 pb-32 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-black text-deep-orange mb-6 inline-block">
            Case Studies
          </span>
          <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter text-slate-900 mb-8">
            Elite Execution.
            <br />
            <span className="text-slate-400">Real Results.</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
            We don't just provide talent; we deliver measurable operational shifts. 
            Explore how SEIZIT has transformed high-growth companies with elite execution.
          </p>
          <Link href="/talk-to-us">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-10 py-5 rounded-xl font-black text-lg hover:bg-deep-orange transition-all group flex items-center gap-3 mx-auto shadow-xl shadow-black/10"
            >
              Connect with Us
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* Projects Section - Alternating Layout */}
      <section className="px-8 py-20 max-w-7xl mx-auto">
        <div className="space-y-32">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                project.alignment === "right" ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content Side */}
              <div className={`space-y-6 ${
                project.alignment === "right" ? "lg:order-2" : "lg:order-1"
              }`}>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-black text-deep-orange mb-2 inline-block">
                    {project.category}
                  </span>
                  <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-slate-900 mb-4">
                    {project.title}
                  </h2>
                </div>
                
                <div className="bg-gradient-to-r from-deep-orange/10 to-transparent p-6 rounded-2xl">
                  <span className="text-3xl md:text-4xl font-black tracking-tighter text-deep-orange block mb-3">
                    {project.stats}
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                <div className="flex gap-4 pt-4">
                  <Link href="/resources">
                    <button className="bg-black text-white px-8 py-4 rounded-xl font-black text-sm hover:bg-deep-orange transition-all group flex items-center gap-2">
                      View Case Study
                      <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </Link>
                  <Link href="/talk-to-us">
                    <button className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-xl font-black text-sm hover:border-deep-orange hover:text-deep-orange transition-all">
                      Talk to Expert
                    </button>
                  </Link>
                </div>
              </div>

              {/* Video Side */}
              <div className={`relative rounded-[2rem] overflow-hidden shadow-2xl group ${
                project.alignment === "right" ? "lg:order-1" : "lg:order-2"
              }`}>
                <div className="aspect-video relative bg-slate-900">
                  <video 
                    src={project.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                      <Play size={32} className="text-white ml-1" />
                    </div>
                  </div>
                </div>
                
                {/* Stats overlay on video */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-deep-orange">Key Metric</p>
                      <p className="text-sm font-bold text-slate-900">{project.stats}</p>
                    </div>
                    <ArrowUpRight size={20} className="text-deep-orange" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Impact Stats */}
      <section className="px-8 py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] font-black text-deep-orange mb-4 inline-block">
              Our Impact
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900">
              Measurable Results
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-16 text-center">
            {[
              { icon: TrendingUp, label: "Average Growth", value: "3x", description: "Revenue increase for clients" },
              { icon: Users, label: "Talent Vetting", value: "Top 1%", description: "Elite talent pool access" },
              { icon: Zap, label: "Onboarding", value: "48 Hours", description: "Rapid team deployment" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-deep-orange/10 to-transparent w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <stat.icon size={36} className="text-deep-orange" />
                </div>
                <h4 className="text-6xl font-black tracking-tighter mb-3 text-slate-900">{stat.value}</h4>
                <p className="text-deep-orange font-black uppercase tracking-widest text-[10px] mb-2">{stat.label}</p>
                <p className="text-slate-500 text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-8 text-center bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-deep-orange rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-deep-orange rounded-full filter blur-3xl" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 text-white">
            Ready to build <br/>your success story?
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join the companies that have traded hiring headaches for elite execution.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/talk-to-us">
              <button className="bg-deep-orange text-white px-12 py-6 rounded-2xl font-black text-lg hover:bg-orange-600 transition-all shadow-2xl shadow-black/20 transform hover:scale-105">
                Talk to Us
              </button>
            </Link>
            <Link href="/talk-to-us" className="font-black text-sm uppercase tracking-widest border-b-2 border-white text-white pb-1 hover:opacity-70 transition-opacity">
              Contact Sales
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}