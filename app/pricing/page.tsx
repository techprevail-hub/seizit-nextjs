"use client";
import { motion } from "framer-motion";
import { Check, ArrowRight, Zap, ShieldCheck, Globe } from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$2,499",
      period: "per month",
      description: "Perfect for startups needing focused execution on specific projects.",
      features: [
        "1 Dedicated Specialist",
        "Project Management Support",
        "Weekly Strategy Syncs",
        "Standard SLA (48h)",
        "Email Support"
      ],
      cta: "Get Started",
      highlight: false
    },
    {
      name: "Professional",
      price: "$5,999",
      period: "per month",
      description: "Our most popular plan for scaling companies requiring a full team extension.",
      features: [
        "3 Dedicated Specialists",
        "Full-time Project Manager",
        "Daily Standups",
        "Priority SLA (24h)",
        "Slack & Video Support",
        "Custom Workflow Integration"
      ],
      cta: "Scale Now",
      highlight: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "tailored solutions",
      description: "Architectural-level staffing for large-scale operations and complex ecosystems.",
      features: [
        "Unlimited Specialists",
        "Dedicated Account Director",
        "24/7 Priority Support",
        "Custom Security Compliance",
        "On-site Integration Options",
        "Strategic Growth Consulting"
      ],
      cta: "Contact Sales",
      highlight: false
    }
  ];

  return (
    <main className="pt-32">
      {/* Hero Section */}
      <section className="px-8 pb-20 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500 mb-6 inline-block">
            Transparent Scaling
          </span>
          <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter text-slate-900 mb-8">
            Investment <br/><span className="text-slate-400">Models</span> for <br/>Growth.
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            No hidden fees. No complex contracts. Just world-class talent integrated into your team at a fraction of the cost of local hiring.
          </p>
        </motion.div>
      </section>

      {/* Pricing Cards */}
      <section className="px-8 py-20 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-12 rounded-[3rem] flex flex-col ${
                plan.highlight 
                  ? "bg-black text-white shadow-2xl scale-105 z-10" 
                  : "bg-slate-100 text-slate-900"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FEF6E9] text-black text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full">
                  Most Popular
                </div>
              )}
              <div className="mb-10">
                <h3 className="text-2xl font-black tracking-tight mb-2">{plan.name}</h3>
                <p className={`text-sm ${plan.highlight ? "text-slate-400" : "text-slate-500"}`}>
                  {plan.description}
                </p>
              </div>
              <div className="mb-10">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black tracking-tighter">{plan.price}</span>
                  <span className={`text-sm font-medium ${plan.highlight ? "text-slate-400" : "text-slate-500"}`}>
                    / {plan.period}
                  </span>
                </div>
              </div>
              <ul className="space-y-4 mb-12 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm font-bold">
                    <div className={`rounded-full p-1 ${plan.highlight ? "bg-white text-black" : "bg-black text-white"}`}>
                      <Check size={10} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-6 rounded-2xl font-black text-lg transition-all ${
                plan.highlight 
                  ? "bg-white text-black hover:bg-slate-100" 
                  : "bg-black text-white hover:bg-slate-800"
              }`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Badges */}
      <section className="px-8 py-32 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center">
            <div className="bg-slate-100 p-6 rounded-3xl mb-6">
              <Zap size={32} className="text-black" />
            </div>
            <h4 className="font-black text-xl mb-2">Fast Onboarding</h4>
            <p className="text-slate-500 text-sm">Teams integrated and productive in under 72 hours.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-slate-100 p-6 rounded-3xl mb-6">
              <ShieldCheck size={32} className="text-black" />
            </div>
            <h4 className="font-black text-xl mb-2">Vetted Quality</h4>
            <p className="text-slate-500 text-sm">Top 1% talent pool with rigorous architectural testing.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-slate-100 p-6 rounded-3xl mb-6">
              <Globe size={32} className="text-black" />
            </div>
            <h4 className="font-black text-xl mb-2">Global Reach</h4>
            <p className="text-slate-500 text-sm">Access to elite specialists across multiple time zones.</p>
          </div>
        </div>
      </section>

      {/* FAQ or Comparison Section */}
      <section className="px-8 py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black tracking-tighter mb-16 text-center">Common Questions</h2>
          <div className="space-y-8">
            {[
              { q: "Is there a long-term commitment?", a: "No. We operate on a month-to-month basis. We believe our results should be the reason you stay, not a contract." },
              { q: "How do you vet your talent?", a: "Every specialist undergoes a 4-stage vetting process including technical assessments, architectural interviews, and cultural alignment checks." },
              { q: "Can I scale my team up or down?", a: "Absolutely. You can add or remove specialists with a 30-day notice period to ensure smooth transitions." }
            ].map((faq, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100"
              >
                <h4 className="font-black text-xl mb-4">{faq.q}</h4>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
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
            Ready to build <br/>your dream team?
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
            <button className="bg-white text-black px-12 py-6 rounded-2xl font-bold text-lg hover:bg-slate-100 transition-colors">
              Schedule a Consultation
            </button>
            <Link href="/contact" className="bg-transparent border border-white/20 text-white px-12 py-6 rounded-2xl font-bold text-lg hover:bg-white/10 transition-colors">
              Contact Support
            </Link>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-slate-800/20 to-transparent rounded-full blur-3xl pointer-events-none" />
        </motion.div>
      </section>
    </main>
  );
}
