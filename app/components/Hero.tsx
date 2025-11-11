// components/HeroSection.tsx
"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background that extends BEHIND the navbar */}
      <div className="absolute inset-0 bg-linear-to-br from-deep-space via-deep-space to-royal-purple"></div>

      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-electric-violet/20 via-deep-space to-deep-space"></div>

      {/* Animated Background Orbs */}
      <div className="absolute top-1/4 -left-10 w-72 h-72 bg-electric-violet rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-royal-purple rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>

      {/* Content - This starts BELOW the navbar */}
      <div className="relative z-10 container mx-auto px-4 py-20 flex items-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Your existing hero content remains the same */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-right"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
            >
              <span className="text-white">حلول تقنية </span>
              <span className="bg-linear-to-r from-electric-violet to-royal-purple bg-clip-text text-transparent">
                مبتكرة
              </span>
              <span className="text-white"> للمستقبل</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-soft-lavender/80 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              مؤسسة يوسف اللوجي التجارية - نقدم حلول التحول الرقمي، تطوير
              البرمجيات الذكية، وتصميم التطبيقات المخصصة لمساعدة الشركات على
              النمو في العصر الرقمي.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button className="bg-electric-violet hover:bg-royal-purple text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-electric-violet/25">
                ابدأ مشروعك الآن
              </button>

              <button className="border border-electric-violet text-electric-violet hover:bg-electric-violet hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                عرض خدماتنا
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-soft-lavender/20"
            >
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">
                  +50
                </div>
                <div className="text-soft-lavender/60 text-sm">مشروع مكتمل</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">
                  +30
                </div>
                <div className="text-soft-lavender/60 text-sm">عميل راضي</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">
                  24/7
                </div>
                <div className="text-soft-lavender/60 text-sm">دعم فني</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-linear-to-br from-electric-violet/20 to-royal-purple/20 rounded-2xl p-8 backdrop-blur-sm border border-electric-violet/30">
              {/* Abstract Tech Visualization */}
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-4">
                  <div className="h-4 bg-electric-violet rounded-full"></div>
                  <div className="h-4 bg-electric-violet/60 rounded-full"></div>
                  <div className="h-4 bg-electric-violet/40 rounded-full"></div>
                </div>
                <div className="space-y-4">
                  <div className="h-4 bg-royal-purple/40 rounded-full"></div>
                  <div className="h-4 bg-royal-purple rounded-full"></div>
                  <div className="h-4 bg-royal-purple/60 rounded-full"></div>
                </div>
                <div className="space-y-4">
                  <div className="h-4 bg-electric-violet/40 rounded-full"></div>
                  <div className="h-4 bg-royal-purple/40 rounded-full"></div>
                  <div className="h-4 bg-electric-violet rounded-full"></div>
                </div>
                <div className="space-y-4">
                  <div className="h-4 bg-electric-violet rounded-full"></div>
                  <div className="h-4 bg-electric-violet/60 rounded-full"></div>
                  <div className="h-4 bg-electric-violet/40 rounded-full"></div>
                </div>
                <div className="space-y-4">
                  <div className="h-4 bg-royal-purple/40 rounded-full"></div>
                  <div className="h-4 bg-royal-purple rounded-full"></div>
                  <div className="h-4 bg-royal-purple/60 rounded-full"></div>
                </div>
                <div className="space-y-4">
                  <div className="h-4 bg-electric-violet/40 rounded-full"></div>
                  <div className="h-4 bg-royal-purple/40 rounded-full"></div>
                  <div className="h-4 bg-electric-violet rounded-full"></div>
                </div>
                <div className="space-y-4">
                  <div className="h-4 bg-electric-violet rounded-full"></div>
                  <div className="h-4 bg-electric-violet/60 rounded-full"></div>
                  <div className="h-4 bg-electric-violet/40 rounded-full"></div>
                </div>
                <div className="space-y-4">
                  <div className="h-4 bg-royal-purple/40 rounded-full"></div>
                  <div className="h-4 bg-royal-purple rounded-full"></div>
                  <div className="h-4 bg-royal-purple/60 rounded-full"></div>
                </div>
                <div className="space-y-4">
                  <div className="h-4 bg-electric-violet/40 rounded-full"></div>
                  <div className="h-4 bg-royal-purple/40 rounded-full"></div>
                  <div className="h-4 bg-electric-violet rounded-full"></div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-electric-violet rounded-full shadow-lg shadow-electric-violet/50"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-royal-purple rounded-full shadow-lg shadow-royal-purple/50"></div>
              <div className="absolute top-1/2 -right-6 w-6 h-6 bg-soft-lavender rounded-lg transform rotate-45 shadow-lg"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-soft-lavender/40 rounded-full flex justify-center">
          <motion.div
            whileInView={{ y: [0, 12, 0] }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-soft-lavender/60 rounded-full mt-2"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
