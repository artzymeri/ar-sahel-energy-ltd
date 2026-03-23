"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { useI18n } from "@/i18n/provider";
import { LogoIcon } from "@/components/Logo";
import { locales, localeNames, localeFlags, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

const navLinks = [
  { key: "nav.home", href: "#home" },
  { key: "nav.about", href: "#about" },
  { key: "nav.services", href: "#services" },
  { key: "nav.contact", href: "#contact" },
];

export default function Navbar() {
  const { t, locale, setLocale } = useI18n();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-white/20"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative">
              <LogoIcon size={40} className="shadow-lg shadow-emerald-500/25 rounded-xl" />
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 opacity-0 group-hover:opacity-20 blur transition-opacity" />
            </div>
            <div className="hidden sm:block">
              <p className={cn(
                "font-bold text-lg leading-tight transition-colors",
                isScrolled ? "text-gray-900" : "text-white"
              )}>
                A.R. Sahel Energy
              </p>
              <p className={cn(
                "text-[10px] font-medium tracking-widest uppercase transition-colors",
                isScrolled ? "text-emerald-600" : "text-emerald-300"
              )}>
                LTD
              </p>
            </div>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <motion.a
                key={link.key}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all relative group",
                  isScrolled
                    ? "text-gray-600 hover:text-gray-900 hover:bg-gray-100/80"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t(link.key)}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-emerald-500 group-hover:w-3/4 transition-all duration-300 rounded-full" />
              </motion.a>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsLangOpen(!isLangOpen)}
                className={cn(
                  "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all",
                  isScrolled
                    ? "text-gray-600 hover:bg-gray-100 border border-gray-200"
                    : "text-white/80 hover:text-white hover:bg-white/10 border border-white/20"
                )}
              >
                <Globe className="w-4 h-4" />
                <span>{localeFlags[locale]}</span>
                <ChevronDown className={cn("w-3 h-3 transition-transform", isLangOpen && "rotate-180")} />
              </motion.button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden"
                  >
                    {locales.map((loc) => (
                      <button
                        key={loc}
                        onClick={() => {
                          setLocale(loc as Locale);
                          setIsLangOpen(false);
                        }}
                        className={cn(
                          "w-full flex items-center gap-3 px-4 py-3 text-sm transition-all",
                          locale === loc
                            ? "bg-emerald-50 text-emerald-700 font-medium"
                            : "text-gray-600 hover:bg-gray-50"
                        )}
                      >
                        <span className="text-lg">{localeFlags[loc]}</span>
                        <span>{localeNames[loc]}</span>
                        {locale === loc && (
                          <motion.div
                            layoutId="activeLang"
                            className="ml-auto w-2 h-2 rounded-full bg-emerald-500"
                          />
                        )}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "lg:hidden p-2 rounded-lg transition-colors",
                isScrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"
              )}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu — Fullscreen Glass */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Glass backdrop */}
            <div className="absolute inset-0 bg-gray-950/60 backdrop-blur-2xl" />

            {/* Decorative glows */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-emerald-500/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-[100px]" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.key}
                  href={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.4, ease: "easeOut" }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-4 text-3xl font-bold text-white/80 hover:text-emerald-400 transition-colors text-center"
                >
                  {t(link.key)}
                </motion.a>
              ))}

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="w-16 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent my-6"
              />

              {/* Contact info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="text-center"
              >
                <p className="text-white/40 text-sm">09169051668</p>
                <p className="text-white/30 text-xs mt-1">roufaiarzika@gmail.com</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
