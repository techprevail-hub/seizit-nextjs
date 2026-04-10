"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, Phone, ArrowRight, Calendar, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "glass-nav py-4 shadow-sm bg-white/95 backdrop-blur-md" : "bg-transparent py-6"}`}>
        <div className="flex justify-between items-center max-w-7xl mx-auto px-8">
          {/* Logo Image instead of text */}
          <Link href="/" className="relative w-32 h-10">
            <Image
              src="/svg/Seizit_Full Logo.svg"
              alt="SEIZIT Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
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
          
          <div className="flex items-center gap-6">
            <Link href="/free-website-audit" className="hidden lg:flex items-center gap-2 text-slate-600 font-bold text-xs hover:text-deep-orange transition-colors group">
              <Sparkles size={14} className="text-deep-orange" />
              <span className="underline underline-offset-4 group-hover:no-underline">Get a Free Digital Audit</span>
            </Link>
            
            <Link href="/talk-to-us">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-gradient-to-r from-deep-orange to-orange-500 text-white px-5 py-4 rounded-xl font-black text-sm tracking-tight transition-all shadow-lg shadow-deep-orange/30 hover:shadow-xl hover:shadow-deep-orange/40 flex items-center justify-center gap-2 overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-500 to-deep-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center justify-center gap-2 z-10">
                  <Calendar size={16} className="group-hover:rotate-12 transition-transform duration-300" />
                  <span>Book a Call</span>
                  <Phone size={16} className="group-hover:animate-pulse" />
                  <motion.span
                    initial={{ width: 0, opacity: 0 }}
                    whileHover={{ width: "auto", opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden whitespace-nowrap"
                  >
                    <ArrowRight size={16} className="inline-block" />
                  </motion.span>
                </span>
              </motion.button>
            </Link>
            
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-slate-900"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-8 md:hidden">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-2xl font-black tracking-tighter ${
                  isActive(link.href) ? "text-deep-orange" : "text-slate-800"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/free-website-audit"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 text-slate-600 font-bold text-sm"
            >
              <Sparkles size={16} className="text-deep-orange" />
              Get a Free Digital Audit
            </Link>
            <Link href="/talk-to-us" onClick={() => setIsMobileMenuOpen(false)}>
              <button className="w-full bg-gradient-to-r from-deep-orange to-orange-500 text-white px-6 py-4 rounded-xl font-black text-lg flex items-center justify-center gap-2">
                <Calendar size={18} />
                Book a Call
                <Phone size={18} />
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;