"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, User, MessageSquare } from "lucide-react";
import { useI18n } from "@/i18n/provider";

export default function Contact() {
  const { t } = useI18n();

  const contactInfo = [
    {
      icon: Phone,
      label: t("contact.phone"),
      value: "09169051668",
      href: "tel:09169051668",
      color: "emerald",
    },
    {
      icon: Mail,
      label: t("contact.email"),
      value: "roufaiarzika@gmail.com",
      href: "mailto:roufaiarzika@gmail.com",
      color: "blue",
    },
    {
      icon: MapPin,
      label: t("contact.address"),
      value: t("contact.addressValue"),
      href: "#",
      color: "amber",
    },
  ];

  const colorMap: Record<string, string> = {
    emerald: "bg-emerald-500/10 text-emerald-600",
    blue: "bg-blue-500/10 text-blue-600",
    amber: "bg-amber-500/10 text-amber-600",
  };

  return (
    <section id="contact" className="relative py-32 bg-gray-50 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-100/30 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-6"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600" />
            <span className="text-gray-600 text-sm font-medium">{t("contact.tagline")}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
          >
            {t("contact.title")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-500"
          >
            {t("contact.description")}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 4 }}
                className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group"
              >
                <div className={`w-12 h-12 rounded-xl ${colorMap[item.color]} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium mb-1">{item.label}</p>
                  <p className="text-gray-900 font-semibold">{item.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Director Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-[60px]" />
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/25">
                  <User className="w-8 h-8 text-white" />
                </div>
                <p className="text-lg font-bold">{t("contact.directorName")}</p>
                <p className="text-emerald-400 text-sm font-medium">{t("contact.directorTitle")}</p>
                <p className="text-gray-400 text-sm mt-2">A.R. Sahel Energy Ltd</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-xl shadow-gray-200/50">
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t("contact.formName")}
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
                    <input
                      type="text"
                      placeholder={t("contact.formName")}
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-gray-900 placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t("contact.formEmail")}
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
                    <input
                      type="email"
                      placeholder={t("contact.formEmail")}
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-gray-900 placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t("contact.formMessage")}
                  </label>
                  <textarea
                    rows={5}
                    placeholder={t("contact.formMessage")}
                    className="w-full px-4 py-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all resize-none text-gray-900 placeholder:text-gray-400"
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.25)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl font-semibold shadow-lg shadow-emerald-500/25 transition-all"
                >
                  <Send className="w-5 h-5" />
                  {t("contact.formSubmit")}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
