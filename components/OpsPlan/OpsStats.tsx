"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/components/LanguageContext';
import { cn } from "@/lib/utils";

export default function OpsStats() {
    const { lang } = useLanguage();

    const stats = [
        { label: lang === 'zh' ? '执行阶段' : 'Phases', val: '3', color: 'cyan' },
        { label: lang === 'zh' ? '目标推特粉丝' : 'Twitter Goal', val: '150k+', color: 'violet' },
        { label: lang === 'zh' ? '目标注册用户' : 'User Goal', val: '200k', color: 'emerald' },
        { label: lang === 'zh' ? '合作 KOL 数量' : 'KOL Partners', val: '80+', color: 'gold' },
        { label: lang === 'zh' ? 'AMA/Space 场次' : 'AMA/Spaces', val: '50+', color: 'cyan' },
        { label: lang === 'zh' ? '机构/VC 背书' : 'VC Endorsements', val: '5+', color: 'violet' },
        { label: lang === 'zh' ? '线下参展/主办' : 'Offline Events', val: '3+', color: 'emerald' },
        { label: lang === 'zh' ? 'CMC 目标排名' : 'CMC Rank Goal', val: 'Top 100', color: 'gold' },
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
