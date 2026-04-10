"use client";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Globe, 
  Users, 
  Zap, 
  Terminal, 
  TrendingUp, 
  PenTool,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  GraduationCap,
  Store,
  Briefcase,
  Code2,
  Rocket,
  BarChart3,
  Building2,
  Award,
  Star,
  Heart,
  Leaf
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function IndustriesPage() {
  const industriesBySector = [
    {
      name: "Healthcare",
      icon: ShieldCheck,
      desc: "Secure, compliant, patient-first digital experiences.",
      longDesc: "HIPAA-compliant digital solutions and specialized staffing for medical enterprises. We build trust through security.",
      features: ["Patient Portals", "Compliance Audits", "Medical Staffing", "Telehealth Solutions"],
      img: "https://picsum.photos/seed/healthcare2/800/600",
      color: "from-emerald-500 to-teal-500"
    },
    {
      name: "Education & EdTech",
      icon: GraduationCap,
      desc: "EdTech platforms, Bootcamps, and Training portals built for high student enrollment.",
      longDesc: "Modernizing learning experiences through custom LMS and ed-tech solutions that drive engagement and retention.",
      features: ["LMS Development", "Bootcamp Platforms", "Student Analytics", "Content Strategy"],
      img: "https://picsum.photos/seed/education2/800/600",
      color: "from-blue-500 to-indigo-500"
    },
    {
      name: "Hospitality & Retail",
      icon: Store,
      desc: "High-converting local SEO and booking systems for Shops, Barbers, Salons, Parlors, Gardeners, Boutiques.",
      longDesc: "Empower local commerce with seamless booking systems and locally-optimized digital presence.",
      features: ["Booking Systems", "Local SEO", "Inventory Management", "POS Integration"],
      img: "https://picsum.photos/seed/retail2/800/600",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Professional Services & Creators",
      icon: Briefcase,
      desc: "Personal branding, lead-gen, and video editing for Lawyers, Doctors, CEOs, and Content Creators.",
      longDesc: "Elevating brand authority and operational efficiency for elite service firms and digital creators.",
      features: ["Personal Branding", "Lead Generation", "Video Production", "Executive Support"],
      img: "https://picsum.photos/seed/services2/800/600",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "B2B SaaS & Tech",
      icon: Code2,
      desc: "Go-to-market websites and product engineering for high-growth software companies.",
      longDesc: "High-velocity development and growth marketing for the next generation of B2B software leaders.",
      features: ["GTM Strategy", "Product Design", "Growth Engineering", "SaaS Marketing"],
      img: "https://picsum.photos/seed/saas2/800/600",
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const companyStages = [
    {
      stage: "For Startups",
      icon: Rocket,
      desc: "Speed to market, MVP development, and agile team scaling.",
      color: "bg-gradient-to-br from-emerald-500 to-green-600",
      benefits: ["MVP in 8-12 weeks", "Agile development", "Cost-effective scaling", "Product-market fit focus"]
    },
    {
      stage: "For Scaleups",
      icon: BarChart3,
      desc: "Enterprise-grade infrastructure, rebranding, and dedicated operational support.",
      color: "bg-gradient-to-br from-blue-500 to-indigo-600",
      benefits: ["Infrastructure scaling", "Brand evolution", "Dedicated teams", "Process optimization"]
    },
    {
      stage: "For Enterprise",
      icon: Building2,
      desc: "Dedicated offshore pods and security-compliant support for global operations.",
      color: "bg-gradient-to-br from-purple-500 to-violet-600",
      benefits: ["Offshore dedicated pods", "Security compliance", "24/7 support", "Enterprise SLAs"]
    }
  ];

  const caseStudies = [
    {
      title: "How We Helped a Healthcare Startup Achieve HIPAA Compliance in 60 Days",
      industry: "Healthcare",
      result: "3x faster patient onboarding",
      img: "https://picsum.photos/seed/case1/800/600"
    },
    {
      title: "SaaS Platform Scales to $50M ARR with Our Growth Engineering",
      industry: "B2B SaaS & Tech",
      result: "200% YoY growth",
      img: "https://picsum.photos/seed/case2/800/600"
    },
    {
      title: "Local Salon Chain Increased Bookings by 400% with Our Local SEO Strategy",
      industry: "Hospitality & Retail",
      result: "400% booking increase",
      img: "https://picsum.photos/seed/case3/800/600"
    }
  ];

  const stats = [
    { value: "500+", label: "Projects Delivered", icon: Award },
    { value: "98%", label: "Client Retention Rate", icon: Heart },
    { value: "50+", label: "Expert Engineers", icon: Users },
    { value: "4.9", label: "Client Rating", icon: Star }
  ];

  return (
    <main className="bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-orange-50/30 px-4 sm:px-6 md:px-8 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24">
        <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-deep-orange/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
            {/* Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 bg-deep-orange/10 px-3 sm:px-4 py-2 rounded-full mb-6 sm:mb-8">
                <Sparkles size={14} className="text-deep-orange" />
                <span className="text-xs font-black uppercase tracking-wider text-deep-orange">Vertical Expertise</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tighter text-slate-900 mb-4 sm:mb-6">
                Built for your <br/><span className="text-deep-orange">Exact Market.</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-6 sm:mb-8">
                We don't believe in one-size-fits-all. Our teams are curated with deep domain knowledge to solve the specific challenges of your industry.
              </p>
              <Link href="/case-studies">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-black inline-flex items-center gap-2 text-sm sm:text-base"
                >
                  View Industry Case Studies <ArrowRight size={16} />
                </motion.button>
              </Link>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 relative w-full max-w-sm sm:max-w-md lg:max-w-none mx-auto lg:mx-0 mt-6 lg:mt-0"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-deep-orange/20 to-orange-500/20 rounded-[2rem] blur-2xl -z-10" />
                <div className="relative bg-gradient-to-br from-slate-100 to-white rounded-[2rem] p-3 sm:p-4 shadow-2xl">
                  <Image 
                    src="/industries/I1.png"
                    alt="Industry Expertise"
                    width={500}
                    height={500}
                    className="rounded-xl w-full h-auto"
                    priority
                  />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-14 h-14 sm:w-20 sm:h-20 bg-deep-orange rounded-2xl flex items-center justify-center shadow-lg"
              >
                <Award size={24} className="text-white sm:hidden" />
                <Award size={32} className="text-white hidden sm:block" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-12 h-12 sm:w-16 sm:h-16 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg"
              >
                <Star size={20} className="text-white sm:hidden" />
                <Star size={28} className="text-white hidden sm:block" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 sm:px-6 md:px-8 py-12 sm:py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="bg-deep-orange/10 w-10 h-10 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <stat.icon size={20} className="text-deep-orange sm:hidden" />
                <stat.icon size={28} className="text-deep-orange hidden sm:block" />
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900">{stat.value}</div>
              <div className="text-xs sm:text-sm text-slate-500 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* By Sector Section */}
      <section className="px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tighter mb-3 sm:mb-4">By Sector</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">Specialized expertise across industries that drive real results</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {industriesBySector.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100"
            >
              <div className={`h-2 sm:h-3 bg-gradient-to-r ${industry.color}`} />
              <div className="p-6 sm:p-8">
                <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-slate-100 to-slate-50 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <industry.icon className="text-deep-orange" size={22} />
                </div>
                <h3 className="text-lg sm:text-2xl font-black tracking-tight mb-2 sm:mb-3 group-hover:text-deep-orange transition-colors">
                  {industry.name}
                </h3>
                <p className="text-slate-600 mb-3 sm:mb-4 leading-relaxed text-sm">{industry.desc}</p>
                <p className="text-slate-500 text-xs sm:text-sm mb-4 sm:mb-6">{industry.longDesc}</p>
                <div className="flex flex-wrap gap-2">
                  {industry.features.slice(0, 3).map((feature) => (
                    <span key={feature} className="bg-slate-100 px-2 sm:px-3 py-1 rounded-full text-xs font-medium text-slate-600">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* By Company Stage Section */}
      <section className="px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tighter text-white mb-3 sm:mb-4">By Company Stage</h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">Tailored solutions for every phase of your growth journey</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {companyStages.map((stage, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl"
              >
                <div className={`${stage.color} p-5 sm:p-6 text-white`}>
                  <stage.icon size={32} className="mb-3 sm:mb-4" />
                  <h3 className="text-xl sm:text-2xl font-black">{stage.stage}</h3>
                  <p className="text-white/80 text-sm mt-2">{stage.desc}</p>
                </div>
                <div className="p-5 sm:p-6">
                  <div className="space-y-2 sm:space-y-3">
                    {stage.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2 sm:gap-3">
                        <CheckCircle2 size={16} className="text-deep-orange flex-shrink-0" />
                        <span className="text-slate-700 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tighter mb-3 sm:mb-4">Success Stories</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">Real results from real clients across industries</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {caseStudies.map((study, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-slate-50 rounded-2xl overflow-hidden group cursor-pointer"
            >
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <Image 
                  src={study.img}
                  alt={study.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all" />
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-deep-orange text-white px-2 py-1 rounded-lg text-xs font-black">
                  {study.industry}
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="font-black mb-2 line-clamp-2 text-sm sm:text-base">{study.title}</h3>
                <p className="text-deep-orange font-bold text-sm">{study.result}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 md:p-16 lg:p-20 text-center text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-40 sm:w-64 h-40 sm:h-64 bg-deep-orange/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-40 sm:w-64 h-40 sm:h-64 bg-blue-500/20 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-deep-orange/20 px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6">
              <Sparkles size={14} className="text-deep-orange" />
              <span className="text-xs font-black uppercase tracking-wider text-deep-orange">Limited Offer</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter mb-4 sm:mb-6">
              Get a Custom <br/><span className="text-deep-orange">Industry Audit</span>
            </h2>
            <p className="text-base sm:text-xl text-slate-300 mb-8 sm:mb-10 max-w-2xl mx-auto">
              Discover untapped opportunities in your market. Our experts will analyze your industry position and provide actionable insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <Link href="/talk-to-us">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  className="bg-deep-orange text-white px-8 sm:px-12 py-4 sm:py-5 rounded-2xl font-black text-base sm:text-lg hover:bg-orange-600 transition-all inline-flex items-center gap-2 w-full sm:w-auto justify-center"
                >
                  Get Your Free Audit <ArrowRight size={18} />
                </motion.button>
              </Link>
              <Link href="/contact" className="text-white font-medium border-b-2 border-white/50 pb-1 hover:border-white transition-colors text-sm sm:text-base">
                Talk to an Expert
              </Link>
            </div>
            <p className="text-xs text-slate-400 mt-4 sm:mt-6">No obligation. 100% confidential.</p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}