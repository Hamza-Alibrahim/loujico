// components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "الرئيسية", href: "#home" },
    { name: "عن الشركة", href: "#about" },
    { name: "خدماتنا", href: "#services" },
    { name: "التواصل", href: "#contact" },
  ];

  const servicesItems = [
    { name: "الحلول التقنية", href: "#tech-solutions" },
    { name: "الهاردوير", href: "#hardware" },
    { name: "السوفتوير", href: "#software" },
    { name: "تطوير الويب والموبايل", href: "#web-mobile" },
    { name: "أمن المعلومات", href: "#cybersecurity" },
    { name: "التدريب والتطوير", href: "#training" },
    { name: "الدعم الفني", href: "#support" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-deep-space/95 backdrop-blur-md transition-all duration-500 ${
          isScrolled ? "shadow-2xl shadow-electric-violet/10" : ""
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo with Scale Animation */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center"
            >
              <a
                href="#home"
                className="text-xl font-bold text-white transition-all duration-300"
              >
                مؤسسة يوسف اللوجي
              </a>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name === "خدماتنا" ? (
                    <div
                      className="relative group"
                      onMouseEnter={() => setIsServicesHovered(true)}
                      onMouseLeave={() => setIsServicesHovered(false)}
                    >
                      <button
                        className={`text-white/90 transition-colors duration-300 font-medium flex items-baseline px-4 py-2 rounded-lg border border-transparent ${
                          isServicesHovered
                            ? "scale-105 text-white bg-white/5 border-electric-violet!"
                            : ""
                        }`}
                      >
                        {item.name}
                        <motion.svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          animate={{ rotate: isServicesHovered ? 0 : 180 }}
                          transition={{ duration: 0.3 }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </motion.svg>
                      </button>

                      {/* Invisible spacer to prevent mouse leave gap */}
                      <div className="absolute top-full left-0 w-full h-2" />

                      <AnimatePresence>
                        {isServicesHovered && (
                          <motion.div
                            className="absolute top-full left-0 mt-2 w-56 bg-deep-space/95 backdrop-blur-xl border border-electric-violet rounded-xl shadow-2xl shadow-electric-violet/30 overflow-hidden"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                          >
                            {servicesItems.map((service, idx) => (
                              <motion.a
                                key={service.name}
                                href={service.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block px-4 py-3 text-white/70 hover:text-white hover:bg-electric-violet/20 transition-all duration-200 text-sm"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: idx * 0.05 }}
                              >
                                {service.name}
                              </motion.a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="text-white/90 transition-colors duration-300 font-medium flex items-baseline px-4 py-2 rounded-lg hover:scale-105 hover:text-white hover:bg-white/5 border border-transparent hover:border-electric-violet"
                    >
                      {item.name}
                    </a>
                  )}
                </motion.div>
              ))}

              {/* Contact Button with Pulse Animation */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.a
                  href="#contact"
                  className="bg-linear-to-r from-electric-violet to-royal-purple text-white px-5 py-2 rounded-lg transition-all duration-300 font-medium shadow-lg relative overflow-hidden"
                  whileHover={{
                    boxShadow: "0 10px 30px rgba(138, 43, 226, 0.4)",
                  }}
                >
                  <span className="relative z-10">تواصل معنا</span>
                </motion.a>
              </motion.div>
            </div>

            {/* Mobile Menu Button with Cool Animation */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-200 border border-white/10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1.5 relative">
                <motion.span
                  className="block h-0.5 bg-white rounded-full"
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 6 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                <motion.span
                  className="block h-0.5 bg-white rounded-full"
                  animate={{
                    opacity: isMobileMenuOpen ? 0 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                <motion.span
                  className="block h-0.5 bg-white rounded-full"
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? -6 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Animated Gradient Border Bottom - Starts from center and expands */}
        <motion.div
          className="h-0.5 bg-linear-to-r from-electric-violet to-royal-purple"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isScrolled ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          style={{ originX: 0.5 }}
        />

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-deep-space/98 backdrop-blur-xl border-t border-electric-violet/30"
            >
              <div className="container mx-auto px-4 py-4">
                <div className="space-y-1">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item.name === "خدماتنا" ? (
                        <div className="border-b border-white/10 pb-2">
                          <motion.button
                            onClick={() => {
                              const services =
                                document.getElementById("mobile-services");
                              services?.classList.toggle("hidden");
                            }}
                            className="w-full text-right py-3 text-white/90 hover:text-white transition-colors duration-300 font-medium flex items-center justify-between"
                            whileHover={{ x: -5 }}
                          >
                            {item.name}
                            <motion.svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </motion.svg>
                          </motion.button>

                          <motion.div
                            id="mobile-services"
                            className="hidden pr-4 space-y-1 mt-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                          >
                            {servicesItems.map((service, idx) => (
                              <motion.a
                                key={service.name}
                                href={service.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block py-2 text-white/60 hover:text-white transition-colors duration-200 text-sm hover:pr-4 border-r-2 border-transparent hover:border-electric-violet"
                                whileHover={{ x: -5 }}
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 }}
                              >
                                {service.name}
                              </motion.a>
                            ))}
                          </motion.div>
                        </div>
                      ) : (
                        <motion.a
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-3 text-white/90 hover:text-white transition-colors duration-300 font-medium border-b border-white/10 hover:pr-4"
                          whileHover={{ x: -5 }}
                        >
                          {item.name}
                        </motion.a>
                      )}
                    </motion.div>
                  ))}

                  <motion.a
                    href="#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block bg-linear-to-r from-electric-violet to-royal-purple hover:from-royal-purple hover:to-electric-violet text-white text-center py-3 rounded-lg transition-all duration-300 font-medium mt-4 shadow-lg hover:shadow-electric-violet/30"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    تواصل معنا
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;
