"use client";

import { motion } from "framer-motion";
import {
  Fuel,
  TrendingUp,
  Truck,
  Link2,
  ShieldCheck,
  Lightbulb,
  ArrowUpRight,
} from "lucide-react";
import { useI18n } from "@/i18n/provider";

export default function Services() {
  const { t } = useI18n();

  const services = [
    {
      icon: Fuel,
      title: t("services.service1Title"),
      desc: t("services.service1Desc"),
      color: "emerald",
    },
    {
      icon: TrendingUp,
      title: t("services.service2Title"),
      desc: t("services.service2Desc"),
      color: "amber",
    },
    {
      icon: Truck,
      title: t("services.service3Title"),
      desc: t("services.service3Desc"),
      color: "blue",
    },
    {
      icon: Link2,
      title: t("services.service4Title"),
      desc: t("services.service4Desc"),
      color: "violet",
    },
    {
      icon: ShieldCheck,
      title: t("services.service5Title"),
      desc: t("services.service5Desc"),
      color: "rose",
    },
    {
      icon: Lightbulb,
      title: t("services.service6Title"),
      desc: t("services.service6Desc"),
      color: "orange",
    },
  ];

  const colorMap: Record<string, { bg: string; text: string; shadow: string; border: string }> = {
    emerald: {
      bg: "bg-emerald-500/10",
      text: "text-emerald-600",
      shadow: "group-hover:shadow-emerald-500/10",
      border: "group-hover:border-emerald-200",
    },
    amber: {
      bg: "bg-amber-500/10",
      text: "text-amber-600",
      shadow: "group-hover:shadow-amber-500/10",
      border: "group-hover:border-amber-200",
    },
    blue: {
      bg: "bg-blue-500/10",
      text: "text-blue-600",
      shadow: "group-hover:shadow-blue-500/10",
      border: "group-hover:border-blue-200",
    },
    violet: {
      bg: "bg-violet-500/10",
      text: "text-violet-600",
      shadow: "group-hover:shadow-violet-500/10",
      border: "group-hover:border-violet-200",
    },
    rose: {
      bg: "bg-rose-500/10",
      text: "text-rose-600",
      shadow: "group-hover:shadow-rose-500/10",
      border: "group-hover:border-rose-200",
    },
    orange: {
      bg: "bg-orange-500/10",
      text: "text-orange-600",
      shadow: "group-hover:shadow-orange-500/10",
      border: "group-hover:border-orange-200",
    },
  };

  return (
    <section id="services" className="relative py-32 bg-gray-50 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-100/40 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-amber-100/30 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-gray-600 text-sm font-medium">{t("services.tagline")}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
          >
            {t("services.title")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-500"
          >
            {t("services.description")}
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const colors = colorMap[service.color];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className={`group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl ${colors.shadow} ${colors.border} transition-all duration-300 cursor-pointer`}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className={`w-6 h-6 ${colors.text}`} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                  {service.title}
                  <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-gray-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-8 right-8 h-0.5 ${colors.bg} scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
