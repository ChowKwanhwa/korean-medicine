"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { useLanguage } from '../LanguageContext';
import { ArrowRight, Zap, Shield, TrendingUp } from "lucide-react";

export default function Hero() {
    const { lang } = useLanguage();

    const t = {
        zh: {
            tag: '🚀 Web3 顶级全链路运营引擎',
            title: '至臻增长 · 统治全域',
            subtitle: 'ChainPulse Capital: 为全球交易所与协议构建数字护城河。',
            cta1: '探索案例',
            cta2: '查看计划',
            stats: [
                { label: '注册用户', val: '200k+' },
                { label: '合作 KOL', val: '80+' },
                { label: '执行阶段', val: 'Q2-Q3' },
            ]
        },
        en: {
            tag: '🚀 Premier Web3 Full-Cycle Growth Engine',
            title: 'Elite Growth. Absolute Dominance.',
            subtitle: 'ChainPulse Capital: Building Digital Moats for Global Exchanges & Protocols.',
            cta1: 'Explore Cases',
            cta2: 'View Roadmap',
            stats: [
                { label: 'Total Users', val: '200k+' },
                { label: 'KOL Network', val: '80+' },
                { label: 'Phase', val: 'Q2-Q3' },
            ]
        }
    }[lang];

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
            {/* Dynamic Background */}
            <div className="absolute inset-0 bg-bg-primary">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan/10 blur-[150px] rounded-full mix-blend-screen animate-pulse" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-violet/10 blur-[150px] rounded-full mix-blend-screen" />
                <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-20 pointer-events-none" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-morphism text-cyan text-[10px] font-black uppercase tracking-widest mb-10"
                >
                    <Zap size={12} className="fill-cyan" />
                    {t.tag}
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-6xl md:text-9xl font-black mb-6 tracking-tighter leading-[0.9] text-glow-cyan"
                >
                    {lang === 'zh' ? '至臻增长' : 'ELITE'} <br />
                    <span className="bg-linear-to-r from-cyan via-violet to-emerald bg-clip-text text-transparent italic">
                        {lang === 'zh' ? '统治全域' : 'DOMINANCE'}
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-lg md:text-2xl text-text-muted font-medium mb-12 max-w-3xl mx-auto"
                >
                    {t.subtitle}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <Button size="lg" className="h-14 px-10 rounded-full bg-cyan text-bg-primary hover:bg-cyan/90 font-black uppercase tracking-widest text-xs group shadow-[0_0_30px_rgba(6,182,212,0.4)]">
                        {t.cta1}
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button size="lg" variant="outline" className="h-14 px-10 rounded-full border-white/10 glass-morphism font-black uppercase tracking-widest text-xs hover:bg-white/5 transition-all">
                        {t.cta2}
                    </Button>
                </motion.div>

                {/* Stats Row */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto"
                >
                    {t.stats.map((stat, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <span className="text-4xl md:text-5xl font-black text-white mb-2">{stat.val}</span>
                            <span className="text-[10px] font-bold text-text-muted uppercase tracking-[0.3em]">{stat.label}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
