"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useI18n } from "@/i18n/provider";

export default function Regions() {
  const { t } = useI18n();

  const regions = [
    { key: "nigeria", flag: "🇳🇬", x: 52, y: 58 },
    { key: "niger", flag: "🇳🇪", x: 48, y: 35 },
    { key: "chad", flag: "🇹🇩", x: 65, y: 38 },
    { key: "cameroon", flag: "🇨🇲", x: 60, y: 55 },
    { key: "benin", flag: "🇧🇯", x: 42, y: 55 },
    { key: "mali", flag: "🇲🇱", x: 30, y: 35 },
  ];

  return (
    <section className="relative py-32 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 mb-6"
          >
            <MapPin className="w-4 h-4 text-emerald-600" />
            <span className="text-emerald-700 text-sm font-medium">{t("regions.tagline")}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
          >
            {t("regions.title")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-500"
          >
            {t("regions.description")}
          </motion.p>
        </div>

        {/* Map Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Stylized Map Container */}
          <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-12 overflow-hidden aspect-[16/10]">
            {/* Grid overlay */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                backgroundSize: "30px 30px",
              }}
            />

            {/* Glowing connection lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              {/* Connection lines from Sokoto (center) to regions */}
              {regions.map((region, i) => (
                <motion.line
                  key={i}
                  x1="50"
                  y1="48"
                  x2={region.x}
                  y2={region.y}
                  stroke="url(#lineGradient)"
                  strokeWidth="0.3"
                  strokeDasharray="2 2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.5 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5 + i * 0.2 }}
                />
              ))}
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.4" />
                </linearGradient>
              </defs>
            </svg>

            {/* Center - Sokoto HQ */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring" }}
              className="absolute"
              style={{ left: "50%", top: "48%", transform: "translate(-50%, -50%)" }}
            >
              <div className="relative">
                <div className="w-4 h-4 rounded-full bg-emerald-400 animate-ping absolute" />
                <div className="w-4 h-4 rounded-full bg-emerald-400 relative z-10 shadow-lg shadow-emerald-400/50" />
              </div>
              <div className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-emerald-500/20 backdrop-blur-sm px-3 py-1 rounded-lg border border-emerald-500/30">
                <span className="text-emerald-300 text-xs font-bold">HQ — Sokoto</span>
              </div>
            </motion.div>

            {/* Region Points */}
            {regions.map((region, i) => (
              <motion.div
                key={region.key}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + i * 0.15, type: "spring" }}
                className="absolute group"
                style={{
                  left: `${region.x}%`,
                  top: `${region.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.5 }}
                  className="w-3 h-3 rounded-full bg-amber-400/80 shadow-lg shadow-amber-400/30 cursor-pointer"
                />
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white/10 backdrop-blur-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-xs">
                    {region.flag} {t(`regions.${region.key}`)}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Region Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mt-8">
            {regions.map((region, i) => (
              <motion.div
                key={region.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1 }}
                whileHover={{ y: -4, scale: 1.05 }}
                className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-all text-center cursor-pointer"
              >
                <span className="text-2xl mb-2 block">{region.flag}</span>
                <span className="text-sm font-semibold text-gray-700">{t(`regions.${region.key}`)}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
