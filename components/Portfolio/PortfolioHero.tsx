"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

export default function PortfolioHero() {
    const { lang } = useLanguage();

    const t = {
        zh: {
            tag: '🏆 旗舰级案例全量复盘',
            title: '至臻品质 · 见证卓越',
            subtitle: '从 0 到 1，我们为顶级 Web3 项目构建品牌护城河。',
            desc: '每一个案例，都是一次对行业上限的成功挑战。',
        },
        en: {
            tag: '🏆 Flagship Case Studies',
            title: 'ELITE QUALITY. WITNESS EXCELLENCE.',
            subtitle: 'From 0 to 1, we build brand moats for premier Web3 projects.',
            desc: 'Each case study represents a successful challenge to industry boundaries.',
        }
    }[lang];

    return (
        <section className="relative pt-32 pb-16 overflow-hidden border-b border-white/5">
            {/* Background Effect */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-text-muted text-[10px] font-black uppercase tracking-widest mb-10 shadow-2xl"
                >
                    {t.tag}
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-8xl font-black mb-6 tracking-tighter bg-linear-to-r from-white via-text-muted to-white bg-clip-text text-transparent italic"
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
