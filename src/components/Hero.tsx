"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Zap, Globe2, Shield } from "lucide-react";
import { useI18n } from "@/i18n/provider";
import { LogoIconLarge } from "@/components/Logo";

export default function Hero() {
  const { t } = useI18n();

  const stats = [
    { value: t("hero.stat1Value"), label: t("hero.stat1Label"), icon: Globe2 },
    { value: t("hero.stat2Value"), label: t("hero.stat2Label"), icon: Zap },
    { value: t("hero.stat3Value"), label: t("hero.stat3Label"), icon: Shield },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-emerald-950" />

        {/* Animated grid */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Glowing orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -right-32 w-96 h-96 bg-emerald-500/20 rounded-full blur-[128px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-32 -left-32 w-96 h-96 bg-emerald-600/15 rounded-full blur-[128px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[128px]"
        />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-300 text-sm font-medium">{t("hero.tagline")}</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6"
            >
              <span className="text-white">{t("hero.title1")}</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-amber-300 bg-clip-text text-transparent">
                {t("hero.title2")}
              </span>
              <br />
              <span className="text-white">{t("hero.title3")}</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-400 max-w-lg mb-10 leading-relaxed"
            >
              {t("hero.description")}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-2xl font-semibold shadow-lg shadow-emerald-500/25 transition-all"
              >
                {t("hero.cta")}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white rounded-2xl font-semibold hover:bg-white/5 transition-all"
              >
                <Play className="w-5 h-5" />
                {t("hero.ctaSecondary")}
              </motion.a>
            </motion.div>
          </div>

          {/* Right Side - Energy Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:flex items-center justify-center relative"
          >
            <div className="relative w-[450px] h-[450px]">
              {/* Outer rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-emerald-500/20"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-amber-400 shadow-lg shadow-amber-400/50" />
              </motion.div>

              {/* Middle rotating ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-12 rounded-full border border-emerald-500/15"
              >
                <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-emerald-300 shadow-lg shadow-emerald-300/50" />
              </motion.div>

              {/* Inner rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-24 rounded-full border border-emerald-500/10"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-amber-300 shadow-lg shadow-amber-300/50" />
              </motion.div>

              {/* Center element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 60px rgba(16, 185, 129, 0.3)",
                      "0 0 100px rgba(16, 185, 129, 0.5)",
                      "0 0 60px rgba(16, 185, 129, 0.3)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-40 h-40 rounded-3xl bg-gradient-to-br from-emerald-500/20 to-emerald-700/20 border border-emerald-500/30 flex items-center justify-center backdrop-blur-sm"
                >
                  <div className="text-center flex flex-col items-center">
                    <LogoIconLarge />
                    <p className="text-emerald-400/60 text-[10px] font-medium tracking-widest mt-2">
                      SAHEL ENERGY
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Floating labels */}
              {[
                { label: "Nigeria 🇳🇬", pos: "top-8 right-8", delay: 0 },
                { label: "Niger 🇳🇪", pos: "top-1/4 left-0", delay: 1 },
                { label: "Chad 🇹🇩", pos: "bottom-1/4 right-0", delay: 2 },
                { label: "Cameroon 🇨🇲", pos: "bottom-8 left-8", delay: 3 },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, y: [0, -5, 0] }}
                  transition={{
                    opacity: { delay: 1 + item.delay * 0.3 },
                    y: { duration: 3, repeat: Infinity, delay: item.delay * 0.5 },
                  }}
                  className={`absolute ${item.pos} px-3 py-1.5 bg-white/5 backdrop-blur-md rounded-lg border border-white/10 text-white/70 text-xs font-medium`}
                >
                  {item.label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-2xl"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                  <stat.icon className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-gray-500 font-medium">{stat.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
