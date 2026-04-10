"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

/* ─── Topographic SVG Background ────────────────────────────────────────── */
const TopoBg = () => (
  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
    <svg
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", inset: 0 }}
    >
      <defs>
        <filter id="topo-warp" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="turbulence" baseFrequency="0.012 0.018" numOctaves="4" seed="8" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="180" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <filter id="topo-warp2" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="turbulence" baseFrequency="0.009 0.014" numOctaves="3" seed="22" result="noise2" />
          <feDisplacementMap in="SourceGraphic" in2="noise2" scale="140" xChannelSelector="G" yChannelSelector="R" />
        </filter>
      </defs>
      <g filter="url(#topo-warp)" opacity="0.35">
        {Array.from({ length: 38 }, (_, i) => (
          <line
            key={`h${i}`}
            x1="-10%"
            y1={`${(i / 37) * 110 - 5}%`}
            x2="110%"
            y2={`${(i / 37) * 110 - 5}%`}
            stroke="#8B7355"
            strokeWidth="0.8"
            fill="none"
          />
        ))}
      </g>
      <g filter="url(#topo-warp2)" opacity="0.18">
        {Array.from({ length: 28 }, (_, i) => (
          <line
            key={`h2${i}`}
            x1="-10%"
            y1={`${(i / 27) * 115 - 7}%`}
            x2="110%"
            y2={`${(i / 27) * 115 - 7}%`}
            stroke="#6B5A3E"
            strokeWidth="0.6"
            fill="none"
          />
        ))}
      </g>
    </svg>
  </div>
);

/* ─── Footer ─────────────────────────────────────────────────────────────── */
const Footer = () => (
  <footer
    className="text-slate-900 w-full pt-12 sm:pt-16 pb-6 overflow-hidden relative border-t border-stone-300"
    style={{ backgroundColor: "#F5EFE0" }}
  >
    <TopoBg />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">

      {/* ── CTA ── */}
      <div className="mb-12 sm:mb-16 md:mb-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.95] mb-6 sm:mb-8">
              Let's turn your website into your{" "}
              <br className="hidden sm:block" />
              <span className="text-deep-orange">most unfair advantage.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-start lg:items-end gap-6 sm:gap-8"
          >
            <p className="text-base sm:text-xl text-slate-600 max-w-sm lg:text-right">
              Join the elite businesses scaling with India-built, US-standard execution.
            </p>
            <Link href="/talk-to-us">
              <button className="bg-black text-white px-8 sm:px-12 py-4 sm:py-6 rounded-2xl font-black text-base sm:text-xl hover:bg-deep-orange transition-all group flex items-center gap-3 shadow-2xl shadow-black/10">
                Book a Call
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ── Links Grid ── */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-10 border-b border-stone-300 pb-10">
        {/* Brand column — full width on smallest screens */}
        <div className="col-span-2 sm:col-span-2 lg:col-span-1 space-y-6 sm:space-y-8">
          <div className="relative w-[120px] sm:w-[140px] h-[36px] sm:h-[40px]">
            <Image
              src="/svg/Seizit_Full Logo.svg"
              alt="Seizit Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <p className="text-slate-600 text-sm leading-relaxed max-w-xs">
            Empowering US Businesses with Elite Tech & Talent. US-Facing. India-Built. Globally Credible.
          </p>
          <div className="flex gap-4 sm:gap-5">
            <a
              href="https://www.linkedin.com/company/seizit/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-deep-orange transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            {[FaInstagram, FaFacebook, FaTwitter].map((Icon, i) => (
              <a key={i} href="#" className="text-slate-500 hover:text-deep-orange transition-colors">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {[
          {
            title: "Services",
            links: [
              ["Web Design", "/services"],
              ["Development", "/services"],
              ["Staffing", "/services"],
              ["Branding", "/services"],
            ],
          },
          {
            title: "Industries",
            links: [
              ["SaaS", "/industries"],
              ["FinTech", "/industries"],
              ["Healthcare", "/industries"],
              ["E-commerce", "/industries"],
            ],
          },
          {
            title: "Resources",
            links: [
              ["Our Work", "/work"],
              ["Blog", "/resources"],
              ["Guides", "/resources"],
              ["Case Studies", "/resources"],
            ],
          },
          {
            title: "Company",
            links: [
              ["About Us", "/about"],
              ["Philosophy", "/about"],
              ["Careers", "/talk-to-us"],
              ["Contact", "/talk-to-us"],
            ],
          },
        ].map(({ title, links }) => (
          <div key={title} className="space-y-4 sm:space-y-6">
            <h5 className="font-black text-[10px] uppercase tracking-[0.3em] text-slate-500">{title}</h5>
            <nav className="flex flex-col space-y-3 sm:space-y-4">
              {links.map(([label, href]) => (
                <Link
                  key={label}
                  className="text-slate-700 font-bold hover:text-deep-orange transition-colors text-sm"
                  href={href}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        ))}
      </div>

      {/* ── Big Logo Section ── */}
      <div className="relative pt-6 sm:pt-8 pb-0">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-deep-orange opacity-30" />

        {/* Full-width logo */}
        <div
          style={{
            marginLeft: "-1rem",
            marginRight: "-1rem",
          }}
          className="sm:mx-[-1.5rem] md:mx-[-2rem]"
        >
          <div className="w-full flex items-center justify-center py-6 sm:py-8">
            <div className="w-[85%] sm:w-[80%] max-w-[800px]">
              <img
                src="/svg/Seizit_Full Logo.svg"
                alt="SEIZIT"
                style={{ width: "100%", height: "auto", objectFit: "contain", display: "block" }}
              />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-4 sm:pt-5 pb-1 w-full flex flex-col sm:flex-row sm:flex-wrap sm:justify-between sm:items-center gap-3 sm:gap-y-3 text-[12px] sm:text-[13px] font-semibold text-slate-600">
          {/* Legal links */}
          <div className="flex gap-4 sm:gap-6">
            <a href="#" className="hover:text-deep-orange transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-deep-orange transition-colors">Terms & Conditions</a>
          </div>

          {/* Contact + copyright */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-5">
            <a
              href="mailto:vinay@seizit.com"
              className="hover:text-deep-orange transition-colors flex items-center gap-1.5"
            >
              <FaEnvelope size={12} />
              <span>vinay@seizit.co</span>
            </a>
            <a
              href="tel:+919370466585"
              className="hover:text-deep-orange transition-colors flex items-center gap-1.5"
            >
              <FaPhoneAlt size={11} />
              <span>+91 93704 66585</span>
            </a>
            <span className="text-slate-500 hidden sm:inline">© 2026 SEIZIT. All rights reserved.</span>
            <a
              href="https://www.linkedin.com/company/seizit/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-deep-orange transition-colors"
            >
              <FaLinkedin size={15} />
            </a>
          </div>

          {/* Copyright on its own line for very small screens */}
          <span className="text-slate-500 sm:hidden text-xs">© 2026 SEIZIT. All rights reserved.</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;