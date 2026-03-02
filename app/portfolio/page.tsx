"use client";

import React from 'react';
import PortfolioHero from '@/components/Portfolio/PortfolioHero';
import FightIDCase from '@/components/Portfolio/FightIDCase';
import KoinCase from '@/components/Portfolio/KoinCase';
import { useLanguage } from '@/components/LanguageContext';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function PortfolioPage() {
    const { lang } = useLanguage();
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="bg-bg-primary min-h-screen pb-24">
            {/* Progress Bar */}
            <motion.div className="fixed top-0 left-0 right-0 h-1 bg-cyan z-[110] origin-left" style={{ scaleX }} />

            <PortfolioHero />

            <div className="space-y-0">
                <FightIDCase lang={lang} />
                <KoinCase lang={lang} />
            </div>

            {/* Modern Portfolio Footer */}
            <section className="py-32 border-t border-white/5 bg-bg-secondary/20 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-cyan/5 blur-[120px] rounded-full" />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-4xl md:text-7xl font-black mb-10 tracking-tighter leading-none"
                    >
                        {lang === 'zh' ? '见证更多' : 'WITNESS MORE'} <br />
                        <span className="text-emerald italic">{lang === 'zh' ? '传奇项目。' : 'LEGENDS.'}</span>
                    </motion.h2>
                    <p className="text-text-muted max-w-xl mx-auto font-medium mb-16 text-lg">
                        {lang === 'zh'
                            ? '每一个成功的背后，都是 ChainPulse 不计成本的深耕与执着。'
                            : 'Behind every success is the relentless dedication and deep-rooting of ChainPulse.'}
                    </p>


                </div>
            </section>
        </div>
    );
}
