"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../LanguageContext';
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const TeamPreviewAvatars = () => (
    <div className="flex -space-x-3 mb-auto">
        {['thomas', 'alex', 'eric', 'david'].map((name, i) => (
            <div key={name} className="w-10 h-10 rounded-full border-2 border-bg-primary overflow-hidden relative ring-1 ring-white/10">
                <Image src={`/images/team/${name}.png`} alt={name} fill className="object-cover object-top" />
            </div>
        ))}
        <div className="w-10 h-10 rounded-full border-2 border-bg-primary bg-cyan/10 ring-1 ring-cyan/20 flex items-center justify-center text-xs font-black text-cyan">4+</div>
    </div>
);

const StatPill = ({ val, label, color }: { val: string; label: string; color: string }) => (
    <div className={cn("px-4 py-2 rounded-full border text-center", color)}>
        <div className="text-lg font-black">{val}</div>
        <div className="text-[9px] opacity-60 uppercase tracking-widest font-bold">{label}</div>
    </div>
);

export default function BentoGrid() {
    const { lang } = useLanguage();

    return (
        <section className="py-24 bg-bg-primary relative overflow-hidden">
            {/* Soft ambient glow */}
            <div className="absolute -top-40 left-1/3 w-[600px] h-[400px] bg-violet/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5" style={{ gridTemplateRows: 'auto auto' }}>

                    {/* ── TEAM card (2 cols wide) ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0 }}
                        className="group relative md:col-span-2 rounded-[40px] border border-cyan/15 bg-bg-secondary overflow-hidden min-h-[300px] cursor-pointer"
                    >
                        {/* Full bleed team-photo collage */}
                        <div className="absolute inset-0 grid grid-cols-4 opacity-30 group-hover:opacity-50 transition-opacity duration-700">
                            {['thomas', 'alex', 'eric', 'david'].map((name) => (
                                <div key={name} className="relative h-full">
                                    <Image src={`/images/team/${name}.png`} alt={name} fill className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700" />
                                </div>
                            ))}
                        </div>
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-linear-to-r from-bg-secondary via-bg-secondary/80 to-bg-secondary/30" />
                        {/* Glow edge */}
                        <div className="absolute top-0 left-0 right-0 h-[1px] bg-linear-to-r from-transparent via-cyan/50 to-transparent" />

                        <div className="relative z-10 p-10 h-full flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-2xl bg-cyan/10 border border-cyan/20 flex items-center justify-center text-xl">👥</div>
                                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-cyan/70">{lang === 'zh' ? 'Core Team' : 'CORE TEAM'}</span>
                                </div>
                                <h3 className="text-4xl md:text-5xl font-black mb-3 tracking-tighter leading-tight">
                                    {lang === 'zh' ? '核心团队' : 'The Team'}
                                </h3>
                                <p className="text-text-muted text-sm leading-relaxed max-w-sm">
                                    {lang === 'zh'
                                        ? '由资深 Web3 专家组成，覆盖战略、运营、增长与商务全链路。'
                                        : 'Senior Web3 experts covering strategy, operations, growth, and BD.'}
                                </p>
                            </div>
                            <div className="flex items-center justify-between mt-8">
                                <TeamPreviewAvatars />
                                <Link href="/team" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-xs font-black uppercase tracking-widest hover:bg-cyan/20 transition-all group-hover:translate-x-1 duration-300">
                                    {lang === 'zh' ? '了解更多' : 'Explore'}
                                    <ArrowUpRight size={12} />
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* ── PORTFOLIO card (1 col, 2 rows tall) ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="group relative md:col-span-1 md:row-span-2 rounded-[40px] border border-violet/15 bg-bg-secondary overflow-hidden min-h-[300px] cursor-pointer"
                    >
                        {/* Moving background of portfolio images */}
                        <div className="absolute inset-0 flex flex-col gap-2 opacity-20 group-hover:opacity-35 transition-opacity duration-700 scale-110 group-hover:scale-105 transition-transform duration-1000">
                            {['/images/portfolio-fightid/图片', '/images/portfolio-koin'].map((_, i) => (
                                <div key={i} className="flex-1 relative">
                                    <Image
                                        src={i === 0 ? '/images/team/fightid.png' : '/images/team/logo.png'}
                                        alt="portfolio" fill
                                        className="object-cover grayscale"
                                    />
                                </div>
                            ))}
                        </div>
                        {/* Diagonal light streak */}
                        <div className="absolute -top-20 -right-20 w-52 h-52 bg-violet/15 blur-[80px] rounded-full group-hover:opacity-80 transition-opacity" />
                        <div className="absolute inset-0 bg-linear-to-b from-bg-secondary/95 via-bg-secondary/70 to-violet/10" />
                        <div className="absolute top-0 left-0 right-0 h-[1px] bg-linear-to-r from-transparent via-violet/50 to-transparent" />

                        <div className="relative z-10 p-10 h-full flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 rounded-2xl bg-violet/10 border border-violet/20 flex items-center justify-center text-2xl mb-8">📂</div>
                                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-violet/70 block mb-3">Portfolio</span>
                                <h3 className="text-4xl font-black mb-4 tracking-tight leading-tight">
                                    {lang === 'zh' ? '往期案例' : 'Case Studies'}
                                </h3>
                                <p className="text-text-muted text-sm leading-relaxed">
                                    {lang === 'zh' ? '见证从 0 到 1 的增长奇迹。从冷启动到规模化，实打实的数据与记录。' : 'Real data, real results. Growth from zero to scale, documented and proven.'}
                                </p>
                            </div>

                            {/* Project mini-badges */}
                            <div className="mt-8 space-y-3">
                                <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/5 hover:border-violet/20 transition-all">
                                    <div className="w-8 h-8 rounded-xl bg-emerald/10 flex items-center justify-center text-sm">🥊</div>
                                    <div>
                                        <div className="text-[10px] font-black text-white">Fight.ID</div>
                                        <div className="text-[9px] text-text-muted">Combat Sports NFT</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/5 hover:border-violet/20 transition-all">
                                    <div className="w-8 h-8 rounded-xl bg-gold/10 flex items-center justify-center text-sm">🌍</div>
                                    <div>
                                        <div className="text-[10px] font-black text-white">The KOIN</div>
                                        <div className="text-[9px] text-text-muted">Pan-African Web3</div>
                                    </div>
                                </div>
                                <Link href="/portfolio" className="flex items-center gap-2 text-violet text-[10px] font-black uppercase tracking-widest hover:gap-3 transition-all mt-4">
                                    {lang === 'zh' ? '查看全部' : 'View All'}
                                    <ArrowUpRight size={12} />
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* ── OPS PLAN card (2 cols wide) ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="group relative md:col-span-2 rounded-[40px] border border-emerald/15 bg-bg-secondary overflow-hidden min-h-[260px] cursor-pointer"
                    >
                        {/* Grid texture background */}
                        <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700"
                            style={{
                                backgroundImage: 'linear-gradient(rgba(16,185,129,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.3) 1px, transparent 1px)',
                                backgroundSize: '40px 40px'
                            }} />
                        <div className="absolute top-0 left-0 right-0 h-[1px] bg-linear-to-r from-transparent via-emerald/50 to-transparent" />
                        <div className="absolute inset-0 bg-linear-to-br from-bg-secondary via-bg-secondary to-emerald/5" />

                        <div className="relative z-10 p-10 h-full flex flex-col justify-between">
                            <div className="flex items-start justify-between gap-6">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-2xl bg-emerald/10 border border-emerald/20 flex items-center justify-center text-xl">📋</div>
                                        <span className="text-[9px] font-black uppercase tracking-[0.3em] text-emerald/70">MQE × ChainPulse</span>
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-black mb-3 tracking-tight">
                                        {lang === 'zh' ? '运营计划' : 'Ops Plan'}
                                    </h3>
                                    <p className="text-text-muted text-sm leading-relaxed max-w-sm">
                                        {lang === 'zh'
                                            ? '高透明度的执行蓝图——社媒矩阵、KOL 名单、内容策略与线下活动，全部公开。'
                                            : 'Radical transparency in execution: social matrix, KOL list, content strategy & events.'}
                                    </p>
                                </div>

                                {/* Stats pills */}
                                <div className="hidden lg:flex flex-col gap-2 shrink-0">
                                    <StatPill val="7" label={lang === 'zh' ? '模块' : 'Modules'} color="border-emerald/20 bg-emerald/5 text-emerald" />
                                    <StatPill val="200k" label={lang === 'zh' ? '目标用户' : 'User Goal'} color="border-cyan/20 bg-cyan/5 text-cyan" />
                                    <StatPill val="6mo" label={lang === 'zh' ? '执行周期' : 'Timeline'} color="border-violet/20 bg-violet/5 text-violet" />
                                </div>
                            </div>

                            <Link href="/ops-plan" className="mt-6 self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald/10 border border-emerald/20 text-emerald text-xs font-black uppercase tracking-widest hover:bg-emerald/20 transition-all group-hover:translate-x-1 duration-300">
                                {lang === 'zh' ? '查看方案' : 'View Plan'}
                                <ArrowUpRight size={12} />
                            </Link>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
