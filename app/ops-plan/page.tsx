"use client";

import React from 'react';
import OpsHero from '@/components/OpsPlan/OpsHero';
import OpsStats from '@/components/OpsPlan/OpsStats';
import OpsTabs from '@/components/OpsPlan/OpsTabs';
import { useLanguage } from '@/components/LanguageContext';
import { motion } from 'framer-motion';

export default function OpsPlanPage() {
    const { lang } = useLanguage();

    return (
        <div className="bg-bg-primary min-h-screen">
            <OpsHero />
            <OpsStats />

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <OpsTabs />
            </motion.div>

            {/* Footer Meta */}
            <section className="py-24 border-t border-white/5 bg-bg-secondary/20 relative">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-2xl mx-auto space-y-4">
                        <p className="text-[10px] font-black uppercase tracking-[1em] text-text-muted opacity-30">
                            {lang === 'zh' ? '内部绝密计划' : 'INTERNAL ROADMAP ONLY'}
                        </p>
                        <h2 className="text-2xl font-black text-white italic tracking-tighter">
                            ChainPulse Capital · 2026 Strategy
                        </h2>
                    </div>
                </div>
            </section>
        </div>
    );
}
