"use client";

import React from 'react';
import Hero from '@/components/Landing/Hero';
import BentoGrid from '@/components/Landing/BentoGrid';
import { useLanguage } from '@/components/LanguageContext';
import { motion } from 'framer-motion';

export default function LandingPage() {
  const { lang } = useLanguage();

  return (
    <div className="bg-bg-primary min-h-screen">
      <Hero />
      <BentoGrid />

      {/* Social / Trust Section */}
      <section className="py-24 border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] font-black uppercase tracking-[0.5em] text-text-muted mb-16"
          >
            {lang === 'zh' ? '驱动全球顶级生态' : 'Powering Top-Tier Ecosystems'}
          </motion.h2>

          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            {/* Placeholders for logos or abstract icons */}
            {['Chainlink', 'Binance', 'Solana', 'Polygon', 'UFC'].map((brand) => (
              <span key={brand} className="text-xl md:text-3xl font-black tracking-tighter text-white/50">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Modern CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-cyan/5 blur-[120px] rounded-full translate-y-1/2" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto glass-morphism rounded-[60px] p-12 md:p-24 border-cyan/10">
            <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter leading-none">
              {lang === 'zh' ? '准备好开启' : 'READY TO'} <br />
              <span className="text-cyan italic">{lang === 'zh' ? '增长奇迹了吗？' : 'GROW?'}</span>
            </h2>
            <p className="text-text-muted mb-12 text-lg font-medium">
              {lang === 'zh'
                ? '我们不仅是做市场，我们是在构建 Web3 的统治级范式。'
                : 'We don\'t just market; we build dominant paradigms for the Web3 era.'}
            </p>

          </div>
        </div>
      </section>
    </div>
  );
}
