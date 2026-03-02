"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Users, Briefcase, BarChart3, ArrowRight } from 'lucide-react';

const categories = [
    {
        title: '核心团队',
        description: '由资深 Web3 运营专家、增长黑客及全链投研团队组成。',
        icon: <Users className="text-cyan" size={32} />,
        href: '/team',
        color: 'group-hover:text-cyan',
        borderColor: 'hover:border-cyan/30',
        bgColor: 'bg-cyan/5',
    },
    {
        title: '往期案例',
        description: '从亿级估值项目 TGE 到全球社区深耕，见证顶级操盘案例。',
        icon: <Briefcase className="text-violet" size={32} />,
        href: '/portfolio',
        color: 'group-hover:text-violet',
        borderColor: 'hover:border-violet/30',
        bgColor: 'bg-violet/5',
    },
    {
        title: '运营计划',
        description: 'MEDX × ChainPulse Capital 六个月全链路运营执行方案。',
        icon: <BarChart3 className="text-emerald" size={32} />,
        href: '/ops-plan',
        color: 'group-hover:text-emerald',
        borderColor: 'hover:border-emerald/30',
        bgColor: 'bg-emerald/5',
    },
];

const CategoryCards = () => {
    return (
        <section className="py-24">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={cat.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 * idx }}
                        >
                            <Link
                                href={cat.href}
                                className={`group block p-8 rounded-3xl bg-bg-secondary border border-border-main transition-all ${cat.borderColor} hover:-translate-y-2 active:scale-[0.98] h-full`}
                            >
                                <div className={`w-16 h-16 ${cat.bgColor} rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110`}>
                                    {cat.icon}
                                </div>
                                <h3 className={`text-2xl font-bold mb-4 transition-colors ${cat.color}`}>
                                    {cat.title}
                                </h3>
                                <p className="text-text-muted leading-relaxed mb-8 font-medium">
                                    {cat.description}
                                </p>
                                <div className="flex items-center gap-2 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                                    立即查看
                                    <ArrowRight size={16} />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoryCards;
