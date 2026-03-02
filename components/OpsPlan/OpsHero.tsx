"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/components/LanguageContext';

export default function OpsHero() {
    const { lang } = useLanguage();

    const t = {
        zh: {
            tag: '⚡ 运营执行方案 · 2026 Q2–Q3',
            title: '至臻执行 · 透明增长',
            subtitle: 'MQE × ChainPulse Capital 六个月全链路运营执行方案。',
            desc: '从品牌冷启动到生态规模化，每一个里程碑都清晰可见。',
        },
        en: {
            tag: '⚡ Ops roadmap · 2026 Q2–Q3',
            title: 'ELITE EXECUTION. TRANSPARENT GROWTH.',
            subtitle: 'MQE × ChainPulse Capital: 6-Month Full-Cycle Operations Plan.',
            desc: 'From brand cold start to scaled ecosystem, every milestone is visible.',
        }
    }[lang];

    return (
        <section className="relative pt-32 pb-16 overflow-hidden border-b border-white/5 bg-bg-primary">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan/5 blur-[150px] rounded-full mix-blend-screen" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan/20 bg-cyan/10 text-cyan text-[10px] font-black uppercase tracking-widest mb-10 shadow-2xl"
                >
                    {t.tag}
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-8xl font-black mb-6 tracking-tighter bg-linear-to-r from-white via-text-muted to-white bg-clip-text text-transparent italic uppercase"
                >
                    {t.title}
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="max-w-3xl mx-auto"
                >
                    <p className="text-xl md:text-2xl font-light text-text-muted mb-4 tracking-tight italic">
                        {t.subtitle}
                    </p>
                    <p className="text-base md:text-lg text-text-muted/60 font-medium max-w-xl mx-auto">
                        {t.desc}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
