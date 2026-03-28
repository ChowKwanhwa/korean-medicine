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

            <div className="container mx-auto px-6 py-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-text-muted/40">
                <span className="hover:text-cyan transition-colors cursor-pointer">{lang === 'zh' ? '首页' : 'Home'}</span>
                <span>/</span>
                <span className="text-cyan/60">{lang === 'zh' ? '韩国医药运营' : 'KM Ops Plan'}</span>
            </div>
            <div className="container mx-auto px-6 py-2">
                <p className="text-[10px] text-text-muted/30 font-mono uppercase tracking-[0.2em]">
                    Confidential Resource: Korean Medicine Project Strategy v1.0
                </p>
            </div>
            
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
                            {lang === 'zh' ? '韩国医药策略蓝图' : 'KOREAN MEDICINE ROADMAP'}
                        </p>
                        <h2 className="text-2xl font-black text-white italic tracking-tighter">
                            Korean Medicine / KM-Series · Strategy
                        </h2>
                    </div>
                </div>
            </section>
        </div>
    );
}
