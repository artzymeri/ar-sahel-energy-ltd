"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { useI18n } from "@/i18n/provider";
import { LogoIcon } from "@/components/Logo";

export default function Footer() {
  const { t } = useI18n();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-950 text-white overflow-hidden">
      {/* Top accent */}
      <div className="h-1 bg-gradient-to-r from-emerald-500 via-amber-400 to-emerald-500" />

      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <LogoIcon size={40} className="rounded-xl" />
              <div>
                <p className="font-bold text-lg">A.R. Sahel Energy</p>
                <p className="text-emerald-400 text-[10px] font-medium tracking-widest uppercase">LTD</p>
              </div>
            </motion.div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {t("footer.companyDesc")}
            </p>
            <p className="text-gray-600 text-xs font-mono">{t("footer.rc")}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-6 tracking-wider uppercase">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-3">
              {[
                { label: t("nav.home"), href: "#home" },
                { label: t("nav.about"), href: "#about" },
                { label: t("nav.services"), href: "#services" },
                { label: t("nav.contact"), href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-emerald-400 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-700 group-hover:bg-emerald-500 transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-6 tracking-wider uppercase">
              {t("footer.contactInfo")}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                <a href="tel:09169051668" className="text-gray-400 text-sm hover:text-white transition-colors">
                  09169051668
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                <a href="mailto:roufaiarzika@gmail.com" className="text-gray-400 text-sm hover:text-white transition-colors break-all">
                  roufaiarzika@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm">{t("contact.addressValue")}</span>
              </li>
            </ul>
          </div>

          {/* Registration Info */}
          <div>
            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-gray-300 text-sm font-medium mb-1">RC 8589712</p>
              <p className="text-gray-500 text-xs">Corporate Affairs Commission</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} A.R. Sahel Energy Ltd. {t("footer.rights")}
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-gray-500 text-xs">Sokoto, Nigeria</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
