"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

export default function TeamHero() {
    const { lang } = useLanguage();

    const t = {
        zh: {
            tag: '🛡️ 核心战略与执剑人',
            title: '至臻智慧 · 深度赋能',
            subtitle: 'ChainPulse Capital 由全球顶级的 Web3 战略家与运营官组成。',
            desc: '我们不只是顾问，我们是您在加密荒野中的铁血盟友。',
        },
        en: {
            tag: '🛡️ Core Strategy & Execution',
            title: 'ELITE WISDOM. DEEP EMPOWERMENT.',
            subtitle: 'ChainPulse Capital is forged by world-class Web3 strategists and operators.',
            desc: 'We are not just advisors; we are your iron-blooded allies in the crypto frontier.',
        }
    }[lang];

    return (
        <section className="relative pt-32 pb-24 overflow-hidden border-b border-white/5">
            {/* Background Orbs */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl bg-linear-to-b from-cyan/5 via-transparent to-transparent blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan/20 bg-cyan/10 text-cyan text-[10px] font-black uppercase tracking-widest mb-10 shadow-[0_0_20px_rgba(6,182,212,0.1)]"
                >
                    {t.tag}
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-8xl font-black mb-6 tracking-tighter bg-linear-to-r from-white via-text-muted to-white bg-clip-text text-transparent text-glow-cyan"
                >
                    {t.title}
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="max-w-3xl mx-auto"
                >
                    <p className="text-xl md:text-2xl font-light text-text-muted mb-4 tracking-tight">
                        {t.subtitle}
                    </p>
                    <p className="text-base md:text-lg text-text-muted/60 font-medium italic">
                        {t.desc}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
