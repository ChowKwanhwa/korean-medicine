"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '../LanguageContext';
import { cn } from "@/lib/utils";

const PARTNERS = [
    { src: '/images/team/cryptoLife.png', name: 'CryptoLife' },
    { src: '/images/team/jupiter.png', name: 'Jupiter' },
    { src: '/images/team/superverse.png', name: 'Superverse' },
    { src: '/images/team/binance.jpg', name: 'Binance' },
    { src: '/images/team/bitget.png', name: 'Bitget' },
    { src: '/images/team/YZi-labs.jpg', name: 'YZi Labs' },
    { src: '/images/team/LD-capital.jpg', name: 'LD Capital' },
    { src: '/images/team/solana-foundation.jpg', name: 'Solana' },
    { src: '/images/team/holoworld.png', name: 'HoloWorld' },
    { src: '/images/team/fightid.png', name: 'FightID' },
];

function ScreenshotFrame({ src, alt, label, tilt = 0 }: {
    src: string; alt: string; label: string; tilt?: number;
}) {
    return (
        <div
            className="relative rounded-[14px] overflow-hidden border border-white/8 shadow-xl group/frame transition-all duration-500"
            style={{ transform: `perspective(800px) rotateY(${tilt}deg)` }}
        >
            <div className="relative w-full aspect-video bg-bg-primary group-hover/frame:scale-[1.02] transition-transform duration-500">
                <Image src={src} alt={alt} fill className="object-cover" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-black/80 to-transparent text-[10px] font-semibold text-white/60 tracking-wide">
                {label}
            </div>
        </div>
    );
}

function BentoCard({
    children, className, accent = 'emerald',
}: {
    children: React.ReactNode;
    className?: string;
    accent?: 'emerald' | 'cyan' | 'violet' | 'gold';
}) {
    const borderMap = {
        emerald: 'border-emerald/10 hover:border-emerald/30',
        cyan: 'border-cyan/10 hover:border-cyan/30',
        violet: 'border-violet/10 hover:border-violet/30',
        gold: 'border-gold/10 hover:border-gold/30',
    };
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className={cn(
                'relative rounded-[28px] border bg-bg-secondary/60 p-8 overflow-hidden transition-all duration-500 group',
                borderMap[accent],
                className,
            )}
        >
            {children}
            {/* Corner glow */}
            <div className={cn(
                'absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[28px]',
            )} style={{
                boxShadow: `inset 0 0 80px rgba(${accent === 'emerald' ? '16,185,129' :
                    accent === 'cyan' ? '6,182,212' :
                        accent === 'violet' ? '139,92,246' :
                            '212,175,55'
                    },0.06)`
            }} />
        </motion.div>
    );
}

function BentoIcon({ children, accent }: { children: string; accent: string }) {
    const bgMap: Record<string, string> = {
        emerald: 'bg-emerald/10 border-emerald/20 text-emerald',
        cyan: 'bg-cyan/10 border-cyan/20 text-cyan',
        violet: 'bg-violet/10 border-violet/20 text-violet',
        gold: 'bg-gold/10 border-gold/20 text-gold',
    };
    return (
        <div className={cn('w-14 h-14 rounded-[16px] flex items-center justify-center text-2xl mb-5 border', bgMap[accent])}>
            {children}
        </div>
    );
}

function BulletList({ items, accent }: { items: string[]; accent: string }) {
    const dotMap: Record<string, string> = {
        emerald: 'bg-emerald',
        cyan: 'bg-cyan',
        violet: 'bg-violet',
        gold: 'bg-gold',
    };
    const dotColors = ['bg-emerald', 'bg-cyan', 'bg-violet', 'bg-gold'];
    return (
        <ul className="mt-4 space-y-2">
            {items.map((item, i) => (
                <li key={i} className="flex items-center gap-3 py-2 border-b border-white/4 text-[13px] text-text-muted">
                    <span className={cn('w-1.5 h-1.5 rounded-full flex-shrink-0', dotColors[i % 4])} />
                    {item}
                </li>
            ))}
        </ul>
    );
}

export default function Capabilities() {
    const { lang } = useLanguage();

    const t = {
        zh: {
            overline: 'What We Can Do',
            title: '核心能力矩阵',
            subtitle: '从品牌建设到资本对接，为 Web3 项目提供全周期极致赋能',
            card1: {
                icon: '🏗️',
                title: '顶层品牌建设与包装',
                body: '从零撰写极具专业感的中英文白皮书、代币经济学模型，以及适合 VC 的精美 Pitch Deck。全链路品牌 VI 系统与高质量宣传物料。',
                bullets: ['白皮书撰写 · 投资人 Deck', 'Logo & 品牌设计 · 海报 & 物料', '宣传片 & MG 动画 · 快闪短视频'],
            },
            card2: {
                icon: '🌐',
                title: '多渠道全球化社区建设',
                body: '建设包含 Discord 与 Telegram 的高活跃社区生态；多语言 7×24 社群运营。',
                bullets: ['Discord 服务器 · TG 群组矩阵', '7×24 多语言客情维护', 'Zealy / Galxe 积分活动 · 空投预热'],
            },
            card3: {
                icon: '📡',
                title: '强大的 KOL 与 PR 网络',
                body: '随时触达星球日报、链捕手、Foresight News 等华语主流媒体及海外核心资讯源。',
                bullets: ['行业头部媒体深度关系', '数千个高质量多语区 KOL 资源', '真实气氛组矩阵 · 关键节点引爆 Trending'],
            },
            card4: {
                icon: '💎',
                title: '资本与生态系统对接',
                body: '与 Holo Launchpad 等主流生态及 CEX 建立双向深度合作通道；与 UZ Capital、Bluemount 等 Web3 资本结盟。',
                bullets: ['Launchpad 首发合作通道 (Holo 平台等)', '资本联盟引荐 · 双向深度合作'],
            },
            card5: {
                icon: '🤖',
                title: '自动化运营工具',
                body: '自主研发的多账号智能运营系统，批量管理、反垃圾信息防护、链上数据追踪爬虫及各类任务平台 API 集成。7×24 小时全自动化运行，技术+内容双重赋能，让运营效率实现指数级跃升。',
                bullets: ['批量账户自动化管理系统', 'Anti-spam 信息及机器人防护系统', '定制化群管功能开发', '链上数据追踪爬虫 · Galxe API 对接'],
            },
        },
        en: {
            overline: 'What We Can Do',
            title: 'Core Capabilities Matrix',
            subtitle: 'From brand building to capital connection—full-cycle empowerment for Web3 projects',
            card1: {
                icon: '🏗️',
                title: 'Top-Tier Brand Building',
                body: 'Writing professional bilingual whitepapers, tokenomics models, and VC-ready Pitch Decks from scratch. Full-chain brand VI systems and high-quality creative assets.',
                bullets: ['Whitepaper · Investor Deck', 'Logo & Brand Design · Posters & Materials', 'Promotional Videos & MG Animation · Viral Short Videos'],
            },
            card2: {
                icon: '🌐',
                title: 'Multi-Channel Global Community',
                body: 'Building high-activity community ecosystems across Discord and Telegram with multilingual 7×24 support.',
                bullets: ['Discord Server · Telegram Group Matrix', '7×24 Multilingual Support', 'Zealy / Galxe Point Events · Airdrop Warm-up'],
            },
            card3: {
                icon: '📡',
                title: 'Powerful KOL & PR Network',
                body: 'Instant access to leading Chinese media outlets and top global crypto information channels.',
                bullets: ['Deep relationships with top-tier industry media', 'Thousands of multilingual high-quality KOL resources', 'Sentiment amplifier network · Key node Trending execution'],
            },
            card4: {
                icon: '💎',
                title: 'Capital & Ecosystem Access',
                body: 'Established bidirectional deep cooperation channels with Holo Launchpad and major CEXs; allied with Web3 capital networks.',
                bullets: ['Launchpad premiere cooperation (Holo etc.)', 'Capital alliance referrals · Bidirectional deep collaboration'],
            },
            card5: {
                icon: '🤖',
                title: 'Automation & Dev Tools',
                body: 'Proprietary multi-account intelligent operations system: bulk management, anti-spam protection, on-chain data tracking crawlers, and task platform API integrations. 24/7 fully automated operations.',
                bullets: ['Bulk account automation management system', 'Anti-spam & bot protection system', 'Custom group management bot development', 'On-chain data crawler · Galxe API integration'],
            },
        },
    }[lang];

    return (
        <section className="py-32 bg-bg-primary relative overflow-hidden">
            {/* Ambient background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan/4 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan mb-4">{t.overline}</p>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-4">{t.title}</h2>
                    <p className="text-text-muted text-lg max-w-lg mx-auto">{t.subtitle}</p>
                </motion.div>

                {/* ===== BENTO GRID ===== */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">

                    {/* ROW 1 */}
                    {/* Card 1 — Brand Building (7-col) */}
                    <BentoCard accent="emerald" className="lg:col-span-7">
                        <div className="flex gap-8 flex-wrap">
                            <div className="flex-1 min-w-[200px]">
                                <BentoIcon accent="emerald">{t.card1.icon}</BentoIcon>
                                <h3 className="text-xl font-black text-white mb-3">{t.card1.title}</h3>
                                <p className="text-text-muted text-sm leading-relaxed">{t.card1.body}</p>
                                <BulletList items={t.card1.bullets} accent="emerald" />
                            </div>
                            <div className="flex-none w-[220px]">
                                <ScreenshotFrame
                                    src="/images/team/gitbook.png"
                                    alt="GitBook Whitepaper"
                                    label="📄 GitBook — ECO Protocol 白皮书"
                                    tilt={-2}
                                />
                            </div>
                        </div>
                    </BentoCard>

                    {/* Card 2 — Community (5-col) */}
                    <BentoCard accent="cyan" className="lg:col-span-5">
                        <BentoIcon accent="cyan">{t.card2.icon}</BentoIcon>
                        <h3 className="text-xl font-black text-white mb-3">{t.card2.title}</h3>
                        <p className="text-text-muted text-sm leading-relaxed">{t.card2.body}</p>
                        <BulletList items={t.card2.bullets} accent="cyan" />
                        <div className="flex gap-3 mt-5">
                            <div className="flex-1">
                                <ScreenshotFrame
                                    src="/images/team/lark-tg-group.png"
                                    alt="Telegram Community"
                                    label="💬 Telegram — BingX 106k Members"
                                    tilt={2}
                                />
                            </div>
                            <div className="flex-1">
                                <ScreenshotFrame
                                    src="/images/team/lark-discord-rules.png"
                                    alt="Discord Rules"
                                    label="🛡️ Discord — Rules & Bot Config"
                                    tilt={-2}
                                />
                            </div>
                        </div>
                    </BentoCard>

                    {/* ROW 2 */}
                    {/* Card 3 — KOL/PR (5-col) */}
                    <BentoCard accent="violet" className="lg:col-span-5">
                        <BentoIcon accent="violet">{t.card3.icon}</BentoIcon>
                        <h3 className="text-xl font-black text-white mb-3">{t.card3.title}</h3>
                        <p className="text-text-muted text-sm leading-relaxed">{t.card3.body}</p>
                        <BulletList items={t.card3.bullets} accent="violet" />
                        <div className="mt-5">
                            <ScreenshotFrame
                                src="/images/team/lark-discord-boost.png"
                                alt="Discord Level 3 Boost"
                                label="🚀 Discord Level 3 — SuperEx Global 14 Boosts"
                                tilt={0}
                            />
                        </div>
                    </BentoCard>

                    {/* Card 4 — Capital (7-col) */}
                    <BentoCard accent="gold" className="lg:col-span-7">
                        <BentoIcon accent="gold">{t.card4.icon}</BentoIcon>
                        <h3 className="text-xl font-black text-white mb-3">{t.card4.title}</h3>
                        <p className="text-text-muted text-sm leading-relaxed">{t.card4.body}</p>

                        {/* Partner logos */}
                        <div className="flex flex-wrap gap-3 mt-6">
                            {PARTNERS.map(p => (
                                <div key={p.name} className="group/logo flex flex-col items-center gap-1.5 p-2.5 rounded-2xl border border-white/5 bg-white/2 hover:bg-white/5 hover:border-white/10 transition-all duration-300 w-[76px]">
                                    <div className="relative h-8 w-full">
                                        <Image
                                            src={p.src}
                                            alt={p.name}
                                            fill
                                            className="object-contain grayscale brightness-50 group-hover/logo:grayscale-0 group-hover/logo:brightness-100 transition-all duration-300"
                                        />
                                    </div>
                                    <span className="text-[9px] font-semibold text-text-muted group-hover/logo:text-white/70 transition-colors text-center leading-tight tracking-wide">{p.name}</span>
                                </div>
                            ))}
                        </div>

                        <BulletList items={t.card4.bullets} accent="gold" />
                    </BentoCard>

                    {/* ROW 3 — Full-width Automation */}
                    <BentoCard accent="cyan" className="lg:col-span-12">
                        <div className="flex gap-8 flex-wrap items-start">
                            <div className="flex-1 min-w-[240px]">
                                <BentoIcon accent="cyan">{t.card5.icon}</BentoIcon>
                                <h3 className="text-xl font-black text-white mb-3">{t.card5.title}</h3>
                                <p className="text-text-muted text-sm leading-relaxed">{t.card5.body}</p>
                                <BulletList items={t.card5.bullets} accent="cyan" />
                            </div>
                            <div className="flex-none max-w-[420px] w-full flex flex-col gap-3">
                                <ScreenshotFrame
                                    src="/images/team/tg-bot.png"
                                    alt="Telegram Bot"
                                    label="🤖 自研 Telegram Bot — 多账号自动化运营"
                                    tilt={2}
                                />
                                <div className="flex gap-3">
                                    <div className="flex-1">
                                        <ScreenshotFrame
                                            src="/images/team/lark-tg-session.png"
                                            alt="Session Manager"
                                            label="⚙️ Session 批量管理工具"
                                            tilt={1}
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <ScreenshotFrame
                                            src="/images/team/lark-automation-code.png"
                                            alt="Python Automation"
                                            label="🐍 Python/Node.js 自动化"
                                            tilt={-1}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </BentoCard>

                </div>
            </div>
        </section>
    );
}
