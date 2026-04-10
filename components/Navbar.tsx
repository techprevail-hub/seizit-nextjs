"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, Phone, ArrowRight, Calendar, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Resources", href: "/resources" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === href;
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "glass-nav py-3 md:py-4 shadow-sm bg-white/95 backdrop-blur-md"
            : "bg-transparent py-4 md:py-6"
        }`}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Logo */}
          <Link href="/" className="relative w-24 sm:w-28 md:w-32 h-8 sm:h-9 md:h-10 flex-shrink-0">
            <Image
              src="/svg/Seizit_Full Logo.svg"
              alt="SEIZIT Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                className={`relative text-slate-600 font-bold hover:text-slate-900 transition-colors text-xs uppercase tracking-widest pb-1 group ${
                  isActive(link.href) ? "text-deep-orange" : ""
                }`}
                href={link.href}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-deep-orange transition-transform duration-300 ${
                    isActive(link.href)
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <Link
              href="/free-website-audit"
              className="hidden lg:flex items-center gap-2 text-slate-600 font-bold text-xs hover:text-deep-orange transition-colors group"
            >
              <Sparkles size={14} className="text-deep-orange" />
              <span className="underline underline-offset-4 group-hover:no-underline">
                Get a Free Digital Audit
              </span>
            </Link>

            <Link href="/talk-to-us">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-gradient-to-r from-deep-orange to-orange-500 text-white px-4 lg:px-5 py-3 lg:py-4 rounded-xl font-black text-sm tracking-tight transition-all shadow-lg shadow-deep-orange/30 hover:shadow-xl hover:shadow-deep-orange/40 flex items-center justify-center gap-2 overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-500 to-deep-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center justify-center gap-2 z-10">
                  <Calendar size={15} className="group-hover:rotate-12 transition-transform duration-300" />
                  <span>Book a Call</span>
                  <Phone size={15} className="group-hover:animate-pulse" />
                </span>
              </motion.button>
            </Link>
          </div>

          {/* Mobile: Book a Call + Hamburger */}
          <div className="flex md:hidden items-center gap-2 sm:gap-3">
            <Link href="/talk-to-us">
              <button className="bg-gradient-to-r from-deep-orange to-orange-500 text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg font-black text-xs flex items-center gap-1.5 shadow-md shadow-deep-orange/30">
                <Calendar size={13} />
                <span>Book a Call</span>
              </button>
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors text-slate-900"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="fixed inset-0 z-40 bg-white md:hidden flex flex-col"
          >
            {/* Header row */}
            <div className="flex items-center justify-between px-4 sm:px-6 pt-4 pb-4 border-b border-slate-100">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="relative w-24 h-8">
                <Image src="/svg/Seizit_Full Logo.svg" alt="SEIZIT Logo" fill className="object-contain" priority />
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors text-slate-900"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Nav Links */}
            <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-6 flex flex-col">
              <nav className="flex flex-col space-y-1 mb-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center justify-between py-4 border-b border-slate-100 text-xl sm:text-2xl font-black tracking-tighter group ${
                        isActive(link.href) ? "text-deep-orange" : "text-slate-800"
                      }`}
                    >
                      {link.name}
                      <ArrowRight
                        size={18}
                        className={`transition-transform group-hover:translate-x-1 ${
                          isActive(link.href) ? "text-deep-orange" : "text-slate-300"
                        }`}
                      />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Audit Link */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-6"
              >
                <Link
                  href="/free-website-audit"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2 text-slate-600 font-bold text-sm py-3 px-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
                >
                  <Sparkles size={16} className="text-deep-orange flex-shrink-0" />
                  Get a Free Digital Audit
                </Link>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
              >
                <Link href="/talk-to-us" onClick={() => setIsMobileMenuOpen(false)}>
                  <button className="w-full bg-gradient-to-r from-deep-orange to-orange-500 text-white px-6 py-4 rounded-xl font-black text-base flex items-center justify-center gap-2 shadow-lg shadow-deep-orange/30">
                    <Calendar size={18} />
                    Book a Call
                    <Phone size={16} />
                  </button>
                </Link>
              </motion.div>
            </div>

            {/* Footer strip */}
            <div className="px-4 sm:px-6 py-4 border-t border-slate-100 text-xs text-slate-400 font-semibold">
              © 2026 SEIZIT. All rights reserved.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;