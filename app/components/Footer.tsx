"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const t = useTranslations("Footer");

  const getCurrentLocale = () => {
    if (typeof document === "undefined") return "ar";
    const value = document.cookie
      .split("; ")
      .find((row) => row.startsWith("locale="))
      ?.split("=")[1];
    return value || "ar";
  };

  const currentLocale = getCurrentLocale();
  const isRTL = currentLocale === "ar";

  const quickLinks = [
    { name: t("home"), href: "#home" },
    { name: t("about"), href: "#about" },
    { name: t("services"), href: "#services" },
    { name: t("contact"), href: "#contact" },
  ];

  const services = [
    t("techSolutions"),
    t("hardware"),
    t("software"),
    t("webMobile"),
    t("cybersecurity"),
    t("training"),
    t("support"),
  ];

  return (
    <footer
      className="relative overflow-hidden border-t border-white/10"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-electric-violet/5 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-80 h-80 bg-royal-purple/5 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <h3
                className={`text-2xl font-bold text-white mb-4 relative inline-block ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                {t("companyName")}
              </h3>
              <p
                className={`text-soft-lavender/80 text-sm leading-relaxed mb-6 ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                {t("description")}
              </p>
              <div
                className={`flex items-center gap-2 text-soft-lavender/60 text-sm ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                </svg>
                <span>{t("address")}</span>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4
                className={`text-lg font-bold text-white mb-6 ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                {t("quickLinks")}
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href={link.href}
                      className={`text-soft-lavender/70 hover:text-electric-violet transition-colors duration-300 text-sm flex items-center gap-2 group ${
                        isRTL
                          ? "flex-row-reverse text-right justify-end"
                          : "text-left"
                      }`}
                      whileHover={{ x: isRTL ? 5 : -5 }}
                    >
                      <svg
                        className={`w-3 h-3 transform transition-all duration-300 opacity-0 group-hover:opacity-100 ${
                          isRTL
                            ? "rotate-0 group-hover:translate-x-1"
                            : "rotate-180 group-hover:-translate-x-1"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                      <span className={isRTL ? "text-right" : "text-left"}>
                        {link.name}
                      </span>
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4
                className={`text-lg font-bold text-white mb-6 ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                {t("ourServices")}
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <span
                      className={`text-soft-lavender/70 text-sm flex items-center gap-2 ${
                        isRTL
                          ? "flex-row-reverse text-right justify-end"
                          : "text-left"
                      }`}
                    >
                      <div className="w-1.5 h-1.5 bg-electric-violet/50 rounded-full"></div>
                      <span className={isRTL ? "text-right" : "text-left"}>
                        {service}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4
                className={`text-lg font-bold text-white mb-6 ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                {t("contactUs")}
              </h4>
              <div className="space-y-4">
                <motion.a
                  href="mailto:info@yousefallouji.com"
                  className={`flex items-center gap-3 text-soft-lavender/70 hover:text-electric-violet transition-colors duration-300 group`}
                  whileHover={{ x: isRTL ? 5 : -5 }}
                >
                  <div className="w-10 h-10 bg-electric-violet/20 rounded-lg flex items-center justify-center group-hover:bg-electric-violet/30 transition-all duration-300">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className={isRTL ? "text-right" : "text-left"}>
                    <div className="text-sm font-medium">{t("email")}</div>
                    <div className="text-xs">info@yousefallouji.com</div>
                  </div>
                </motion.a>

                <motion.a
                  href="https://wa.me/963996320963"
                  className={`flex items-center gap-3 text-soft-lavender/70 hover:text-electric-violet transition-colors duration-300 group`}
                  whileHover={{ x: isRTL ? 5 : -5 }}
                >
                  <div className="w-10 h-10 bg-electric-violet/20 rounded-lg flex items-center justify-center group-hover:bg-electric-violet/30 transition-all duration-300">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div className={isRTL ? "text-right" : "text-left"}>
                    <div className="text-sm font-medium">{t("whatsapp")}</div>
                    <div className="text-xs">0996320963</div>
                  </div>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 py-6">
            <div
              className={`flex flex-col md:flex-row justify-between items-center gap-4 ${
                isRTL ? "md:flex-row-reverse" : ""
              }`}
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`text-soft-lavender/60 text-sm ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                {t("copyright", { year: currentYear })}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`flex items-center gap-6 ${
                  isRTL ? "flex-row-reverse" : ""
                }`}
              >
                <span
                  className={`text-soft-lavender/60 text-sm ${
                    isRTL ? "text-right" : "text-left"
                  }`}
                >
                  {t("syrianMade")}
                </span>
                <div className="w-1 h-1 bg-electric-violet/50 rounded-full"></div>
                <span
                  className={`text-soft-lavender/60 text-sm ${
                    isRTL ? "text-right" : "text-left"
                  }`}
                >
                  {t("builtWithLove")}
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
