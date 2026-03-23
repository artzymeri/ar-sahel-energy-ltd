"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";
import { useI18n } from "@/i18n/provider";

export default function About() {
  const { t } = useI18n();

  const cards = [
    {
      icon: Target,
      title: t("about.mission"),
      text: t("about.missionText"),
      gradient: "from-emerald-500 to-teal-600",
      shadowColor: "shadow-emerald-500/20",
    },
    {
      icon: Eye,
      title: t("about.vision"),
      text: t("about.visionText"),
      gradient: "from-amber-500 to-orange-600",
      shadowColor: "shadow-amber-500/20",
    },
    {
      icon: Heart,
      title: t("about.values"),
      text: t("about.valuesText"),
      gradient: "from-violet-500 to-purple-600",
      shadowColor: "shadow-violet-500/20",
    },
  ];

  return (
    <section id="about" className="relative py-32 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-emerald-50/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-100/30 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-emerald-700 text-sm font-medium">{t("about.tagline")}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
          >
            {t("about.title")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-500 leading-relaxed"
          >
            {t("about.description")}
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`group relative bg-white rounded-3xl p-8 shadow-xl ${card.shadowColor} border border-gray-100 hover:border-gray-200 transition-all`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-6 shadow-lg ${card.shadowColor} group-hover:scale-110 transition-transform`}>
                <card.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
              <p className="text-gray-500 leading-relaxed">{card.text}</p>

              {/* Hover decoration */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity blur-2xl`} />
            </motion.div>
          ))}
        </div>

        {/* Decorative Stats Band */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-10 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M0%200h20v20H0z%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.03)%22%20stroke-width%3D%220.5%22%2F%3E%3C%2Fsvg%3E')] opacity-50" />
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px]" />

          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "2025", label: "Founded" },
              { num: "RC 8589712", label: "Registration" },
              { num: "Sokoto", label: "Headquarters" },
              { num: "West Africa", label: "Region" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                <p className="text-2xl font-bold bg-gradient-to-r from-emerald-300 to-amber-300 bg-clip-text text-transparent mb-1">
                  {item.num}
                </p>
                <p className="text-gray-500 text-sm">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
