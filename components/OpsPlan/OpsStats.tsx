"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/components/LanguageContext';
import { cn } from "@/lib/utils";

export default function OpsStats() {
    const { lang } = useLanguage();

    const stats = [
        { label: lang === 'zh' ? '执行周期' : 'Phases', val: lang === 'zh' ? '4个月' : '4 Months', color: 'cyan' },
        { label: lang === 'zh' ? 'KOL矩阵直面' : 'Global KOLs', val: '200+', color: 'violet' },
        { label: lang === 'zh' ? '目标拉新规模' : 'Target TG Reach', val: '10k+', color: 'emerald' },
        { label: lang === 'zh' ? '优质图文视频' : 'Design Assets', val: '50+', color: 'gold' },
        { label: lang === 'zh' ? '深度 AMA 场次' : 'Deep AMAs', val: '30+', color: 'cyan' },
        { label: lang === 'zh' ? '全域曝光帖子' : 'Event Coverage', val: '1000+', color: 'violet' },
        { label: lang === 'zh' ? '开发者生态支持' : 'Geek Dev Trust', val: lang === 'zh' ? '20名+' : '20+', color: 'emerald' },
        { label: lang === 'zh' ? '单日宣发活跃' : 'Daily Shilling', val: '200+', color: 'gold' },
    ];

    return (
        <section className="py-20 border-b border-white/5 bg-bg-secondary/10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="p-6 rounded-[32px] bg-bg-secondary border border-white/5 text-center group hover:border-white/20 transition-all duration-500 hover:shadow-2xl"
                        >
                            <div className={cn(
                                "text-2xl font-black mb-1 transition-transform group-hover:scale-110",
                                stat.color === 'cyan' ? 'text-cyan' :
                                    stat.color === 'violet' ? 'text-violet' :
                                        stat.color === 'emerald' ? 'text-emerald' :
                                            'text-gold'
                            )}>
                                {stat.val}
                            </div>
                            <div className="text-[9px] font-black text-text-muted uppercase tracking-widest">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
