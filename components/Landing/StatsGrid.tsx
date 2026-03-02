"use client";

import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    { label: '执行计划', value: '6个月+', color: 'text-cyan' },
    { label: '目标粉丝', value: '150k+', color: 'text-violet' },
    { label: '注册用户', value: '200k+', color: 'text-emerald' },
    { label: '合作 KOL', value: '80+', color: 'text-gold' },
];

const StatsGrid = () => {
    return (
        <section className="py-12 border-y border-border-main bg-bg-secondary/30 backdrop-blur-sm">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 * idx }}
                            className="flex flex-col gap-1"
                        >
                            <span className={`text-3xl md:text-4xl font-black ${stat.color} tracking-tighter`}>
                                {stat.value}
                            </span>
                            <span className="text-text-muted text-xs md:text-sm font-bold uppercase tracking-widest">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsGrid;
