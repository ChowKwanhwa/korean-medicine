"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from "@/lib/utils";

interface Props { lang: 'zh' | 'en' }

const t = {
    zh: {
        tag: '🥊 深度案例 · Fight.ID ($FIGHT)',
        subtitle: '亿级估值身份认证平台全量社区深耕与 TGE 保驾护航真实复盘',
        cobuilder: 'ChainPulse Capital 核心共建案例',
        // Sections
        s1Title: '01 · UFC 官方结盟与双链并行',
        s1Body: 'Fight.ID 旨在将全球格斗运动粉丝与区块链数字所有权相结合，是基于 Solana 与 BNB Chain 双链并行架构构建的 Web3 顶级原生身份认证与粉丝互动系统。作为 UFC（终极格斗冠军赛）的官方合作伙伴，通过非转让声誉积分 Fighting Points 和原生治理代币 $FIGHT，在全球数以亿计的格斗粉丝与 Web3 之间建立不可磨灭的桥梁。',
        partnerCaption: 'Fight.ID 不仅连接 UFC，更与 Shrapnel 等前沿加密生态达成战略同盟',
        endorsementsTitle: '官方权威背书与格斗巨星站台',
        endorsements: [
            { img: 'UFC-official-announcement-Robert.png', caption: 'UFC 官方推文站台 (Robert Winkler)', url: 'https://x.com/ufc/status/2006092932349050952?s=20' },
            { img: 'UFC-official-announcement-with-James.png', caption: 'UFC 官方推文力挺 (项目 CEO James)', url: 'https://x.com/ufc/status/1993681153081966876?s=20' },
            { img: 'dan-ige-endorsement.png', caption: 'Dan Ige 顶级格斗选手强力背书', url: 'https://x.com/Dynamitedan808/status/1985771620552884616?s=20' },
            { img: 'gilbert-burns-endorsement.png', caption: 'Gilbert Burns 格斗巨星原创声浪传播', url: 'https://x.com/GilbertDurinho/status/1985352951842414939?s=20' },
        ],
        s2Title: '02 · 核心价值交付',
        s2Desc: '在近 2 亿美元超额认购神话的背后，我们作为战略级 Co-builder，在三大核心节点交出了完美的增长答卷。',
        cards: [
            { icon: '🛡️', n: '01', title: '全维社媒矩阵规划与高反脆弱社群架构', desc: '作为官方核心运营引擎，从零代持操盘了 Twitter 与全语种 Telegram 阵地。设计包括悬赏、AMA 在内的立体化交互机制，引入多层级防女巫验证体系，孵化出极强布道属性的核心死忠基本盘。' },
            { icon: '📣', n: '02', title: 'Top-Tier KOL 垄断式分发与心智影响', desc: '摒弃无效的水军宣发，借力团队独占的 Alpha KOL 联盟网络，在预售与 TGE 最关键战役节点，执行了全网流量引爆（Trending）。将单次投放升维为"战略护身符"，持续深度绑定 $FIGHT 核心叙事。' },
            { icon: '🤝', n: '03', title: '顶层战略 BD：深链超级发射器', desc: '利用团队自有深水区资本人脉枢纽，将 Fight.ID 战略送入头部巨无霸发行平台 Holo Launchpad 的视野核心。全程主导多轮商务斡旋，协助项目直接锁定了近 2 亿美元 ICO 超额认购的历史性现象级红利。' },
        ],
        s3Title: '03 · 高粘性极客社区的阵地实貌',
        s3Desc: '真实的互动、精密的机器人架构与原生的加密话语体系，这是我们为 Fight.ID 打造的最强基本盘。',
        community: [
            { img: 'telegram.png', heading: '高活跃 Telegram 主阵地', desc: '高强度互动与多语言社群实时客情维护，保障核心信息即时触达。' },
            { img: 'discord-onboarding.png', heading: '结构化 Discord 引导 (Onboarding)', desc: '丝滑的新手进入筛选引导流程，在极大提升加入留存率的同时降低基础客服成本。' },
            { img: 'Discord-FAQ.png', heading: '完善的社区 FAQ 与防欺诈指引', desc: '全面详尽的双语种常见问题解答模块，建立起项目方最可靠的安全与客诉屏障。' },
            { img: 'custom-discord-bot.png', heading: '独家定制反渗透智能 Bot', desc: '自研防女巫及机器人清理验证体系，精准管理服务器内复杂的身份组权限，确保公域环境绝对纯净。' },
        ],
        tweets: [
            { img: 'fun-tweet-1.png', heading: 'X (Twitter) 病毒式交互营销 · Vol.1', url: 'https://x.com/JoinFightID/status/1982857000745861248?s=20' },
            { img: 'fun-tweet-2.png', heading: 'X (Twitter) 病毒式交互营销 · Vol.2', url: 'https://x.com/JoinFightID/status/2014403160014832042' },
        ],
        s4Title: '04 · 募资奇迹与代币发行全记录',
        s4Body: '2025 年 10 月末，Fight.ID 在 Holo 平台相继开启了基于 BNB Chain 和 Solana 的双公链双轮阶段 ICO。巨大的宣发飞轮使认购需求迎来了核爆炸式增长，实际统计总 ICO 筹资金额突破惊人的 1.987 亿美元。',
        tgeImages: [
            { img: 'holo-presale-announcement.png', cap: 'Phase 2 极度火爆预售告捷' },
            { img: 'airdrop-announcement.png', cap: '史诗级 TGE 全网空投纪实' },
            { img: 'refund.jpeg', cap: '超募核销与退款硬核证明' },
            { img: 'token-live-and-cex-listing.png', cap: 'CEX 首发与 $FIGHT 流动性开启' },
        ],
        chartCaption: '上线后极具韧性的二级价格走势',
        stats: [
            { val: '~$200M', label: 'ICO 超额认购额' },
            { val: '双链', label: 'Solana + BNB Chain' },
            { val: 'UFC', label: '官方合作伙伴' },
            { val: 'Top KOL', label: 'KOL 矩阵覆盖' },
        ],
    },
    en: {
        tag: '🥊 Deep Dive · Fight.ID ($FIGHT)',
        subtitle: 'Full-cycle community building & TGE execution for a billion-dollar-valued identity platform',
        cobuilder: 'ChainPulse Capital Core Co-Builder Case',
        s1Title: '01 · UFC Alliance & Dual-Chain Architecture',
        s1Body: 'Fight.ID merges global combat sports fandom with blockchain digital ownership, built on a Solana + BNB Chain dual-chain architecture. As an official partner of the UFC, it bridges hundreds of millions of MMA fans to Web3 through non-transferable reputation points (Fighting Points) and the native governance token $FIGHT.',
        partnerCaption: 'Fight.ID extends beyond UFC—strategic alliances with cutting-edge crypto ecosystems like Shrapnel',
        endorsementsTitle: 'Official Endorsements & Fighter Backing',
        endorsements: [
            { img: 'UFC-official-announcement-Robert.png', caption: 'UFC Official Tweet (Robert Winkler)', url: 'https://x.com/ufc/status/2006092932349050952?s=20' },
            { img: 'UFC-official-announcement-with-James.png', caption: 'UFC Official Tweet supporting CEO James', url: 'https://x.com/ufc/status/1993681153081966876?s=20' },
            { img: 'dan-ige-endorsement.png', caption: 'Dan Ige (top fighter) strong endorsement', url: 'https://x.com/Dynamitedan808/status/1985771620552884616?s=20' },
            { img: 'gilbert-burns-endorsement.png', caption: 'Gilbert Burns (champion) organic amplification', url: 'https://x.com/GilbertDurinho/status/1985352951842414939?s=20' },
        ],
        s2Title: '02 · Core Value Delivery',
        s2Desc: 'Behind the ~$200M oversubscription miracle, we served as a strategic Co-builder and delivered at 3 critical inflection points.',
        cards: [
            { icon: '🛡️', n: '01', title: 'Full Social Matrix & Anti-Fragile Community Architecture', desc: 'As the official core operations engine, we built Twitter and multi-language Telegram channels from zero. Designed multi-layered anti-sybil verification, cultivating a deeply loyal, high-conviction core community base.' },
            { icon: '📣', n: '02', title: 'Top-Tier KOL Saturation & Mindshare Dominance', desc: 'Bypassing ineffective bot-driven promotion, we leveraged our exclusive Alpha KOL alliance network to trigger full-network trending at critical presale and TGE battle nodes. Elevated single placements into strategic long-term narrative anchors.' },
            { icon: '🤝', n: '03', title: 'Top-Level Strategic BD: Linking to Super Launchpads', desc: 'Using our deep capital network connections, we strategically positioned Fight.ID at the center of Holo Launchpad\'s radar. Led multi-round BD negotiations, directly securing the historic ~$200M ICO oversubscription milestone.' },
        ],
        s3Title: '03 · Community Stronghold: Real Engagement Proof',
        s3Desc: 'Genuine interaction, precision bot architecture, and native crypto discourse—the strongest base we\'ve ever built.',
        community: [
            { img: 'telegram.png', heading: 'High-Activity Telegram Main Channel', desc: 'Intensive multi-language real-time community management ensuring core info reaches users instantly.' },
            { img: 'discord-onboarding.png', heading: 'Structured Discord Onboarding', desc: 'Smooth new-member filtering flow that dramatically increases retention while reducing customer service costs.' },
            { img: 'Discord-FAQ.png', heading: 'Comprehensive Community FAQ & Anti-Fraud Guide', desc: 'Bilingual FAQ module establishing the project\'s most reliable security and customer support barrier.' },
            { img: 'custom-discord-bot.png', heading: 'Custom Anti-Infiltration Smart Bot', desc: 'Proprietary sybil-detection and bot-clearance system with precise identity role management for a pure environment.' },
        ],
        tweets: [
            { img: 'fun-tweet-1.png', heading: 'X (Twitter) Viral Interactive Marketing · Vol.1', url: 'https://x.com/JoinFightID/status/1982857000745861248?s=20' },
            { img: 'fun-tweet-2.png', heading: 'X (Twitter) Viral Interactive Marketing · Vol.2', url: 'https://x.com/JoinFightID/status/2014403160014832042' },
        ],
        s4Title: '04 · Fundraising Miracle & Full TGE Record',
        s4Body: 'In late Oct 2025, Fight.ID launched dual-chain ICO phases on Holo platform for BNB Chain and Solana. The flywheel drove nuclear-level subscription demand, with total ICO funds raised breaking the astounding $198.7M mark.',
        tgeImages: [
            { img: 'holo-presale-announcement.png', cap: 'Phase 2 Wildly Oversubscribed' },
            { img: 'airdrop-announcement.png', cap: 'Epic TGE Airdrop Distribution' },
            { img: 'refund.jpeg', cap: 'Hard Proof: Oversubscription Refund Settlement' },
            { img: 'token-live-and-cex-listing.png', cap: 'CEX Listing & $FIGHT Liquidity Launch' },
        ],
        chartCaption: 'Post-launch secondary market price showing remarkable resilience',
        stats: [
            { val: '~$200M', label: 'ICO Oversubscription' },
            { val: 'Dual-Chain', label: 'Solana + BNB Chain' },
            { val: 'UFC', label: 'Official Partner' },
            { val: 'Top KOL', label: 'KOL Matrix' },
        ],
    }
};

export default function FightIDCase({ lang }: Props) {
    const tx = t[lang];
    const base = '/images/portfolio-fightid';

    return (
        <section className="relative bg-bg-primary border-b border-white/5 overflow-hidden">
            {/* Section ambient */}
            <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-emerald/4 blur-[160px] rounded-full pointer-events-none" />

            {/* ═══ HERO ═══ */}
            <div className="container mx-auto px-6 pt-32 pb-20">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald/20 bg-emerald/10 text-emerald text-[10px] font-black uppercase tracking-widest mb-8">
                        {tx.tag}
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
                        <div>
                            {/* Logo */}
                            <div className="w-20 h-20 rounded-3xl bg-bg-secondary border border-emerald/20 flex items-center justify-center mb-6 overflow-hidden relative">
                                <Image src={`${base}/logo.png`} alt="Fight.ID" fill className="object-contain p-2" />
                            </div>
                            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none text-white mb-4">
                                Fight<span className="text-emerald">.ID</span>
                            </h2>
                            <p className="text-xl text-text-muted font-light leading-relaxed mb-6">{tx.subtitle}</p>
                            <p className="text-xs font-black uppercase tracking-[0.3em] text-emerald/60">{tx.cobuilder}</p>
                        </div>
                        {/* Stats pill row */}
                        <div className="grid grid-cols-2 gap-4">
                            {tx.stats.map(s => (
                                <div key={s.label} className="p-6 rounded-[28px] bg-bg-secondary border border-emerald/10 text-center group hover:border-emerald/30 transition-all">
                                    <div className="text-3xl font-black text-emerald mb-1">{s.val}</div>
                                    <div className="text-[9px] font-black text-text-muted uppercase tracking-widest">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Hero: App Page full-width */}
                    <div className="rounded-[40px] overflow-hidden border border-white/5 mb-6 group hover:border-emerald/20 transition-all duration-500 shadow-2xl shadow-black/50">
                        <div className="relative w-full aspect-video bg-bg-secondary">
                            <Image src={`${base}/appPage.png`} alt="Fight.ID App" fill className="object-cover group-hover:scale-[1.01] transition-transform duration-700" />
                        </div>
                    </div>
                    <p className="text-center text-[11px] text-text-muted/50 font-medium tracking-wider mb-20">
                        Fight.ID Web3 原生身份认证与积分系统交互界面实机展示
                    </p>
                </motion.div>

                {/* ═══ SECTION 1: Background ═══ */}
                <div className="border-t border-white/5 pt-20 mb-20">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h3 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-10">
                            <span className="text-emerald">01</span> · {tx.s1Title.replace('01 · ', '')}
                        </h3>

                        {/* Banner full width */}
                        <div className="rounded-[32px] overflow-hidden mb-12 border border-white/5 shadow-xl">
                            <div className="relative w-full" style={{ aspectRatio: '3/1' }}>
                                <Image src={`${base}/banner.jpeg`} alt="Fight.ID Banner" fill className="object-cover" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                            <div>
                                <p className="text-text-muted leading-relaxed text-lg">{tx.s1Body}</p>
                            </div>
                            <div className="rounded-[24px] overflow-hidden border border-white/5 shadow-xl">
                                <div className="relative w-full aspect-video">
                                    <Image src={`${base}/shrapnelPartnership.jpeg`} alt="Shrapnel Partnership" fill className="object-cover" />
                                </div>
                            </div>
                        </div>

                        {/* Shrapnel Partnership 2 */}
                        <div className="rounded-[24px] overflow-hidden border border-white/5 shadow-xl mb-6">
                            <div className="relative w-full" style={{ aspectRatio: '3/1' }}>
                                <Image src={`${base}/shrapnelPartnership2.jpeg`} alt="Shrapnel Partnership 2" fill className="object-cover" />
                            </div>
                        </div>
                        <p className="text-center text-[11px] text-text-muted/50 mb-16">{tx.partnerCaption}</p>

                        {/* Endorsements 2×2 grid */}
                        <h4 className="text-2xl font-black text-white mb-8 text-center">{tx.endorsementsTitle}</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            {tx.endorsements.map((e, i) => (
                                <motion.div key={e.img}
                                    initial={{ opacity: 0, scale: 0.97 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.07 }}
                                    className="rounded-[24px] overflow-hidden border border-white/5 group hover:border-emerald/20 transition-all bg-bg-secondary"
                                >
                                    {/* Full image — no fixed aspect ratio so tweet is never clipped */}
                                    <div className="relative w-full overflow-hidden">
                                        <img src={`${base}/${e.img}`} alt={e.caption} className="w-full h-auto block group-hover:scale-[1.01] transition-transform duration-500" />
                                    </div>
                                    <div className="flex items-center justify-between p-4 border-t border-white/5">
                                        <span className="text-[11px] text-text-muted font-medium">{e.caption}</span>
                                        <a href={e.url} target="_blank" rel="noopener noreferrer"
                                            className="flex-shrink-0 ml-3 flex items-center gap-1 text-[10px] font-black text-emerald/70 hover:text-emerald transition-colors uppercase tracking-wider"
                                        >↗ X</a>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* ═══ SECTION 2: Core Value Cards ═══ */}
                <div className="border-t border-white/5 pt-20 mb-20">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h3 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-4">
                            <span className="text-emerald">02</span> · {tx.s2Title.replace('02 · ', '')}
                        </h3>
                        <p className="text-text-muted text-lg mb-12 max-w-2xl">{tx.s2Desc}</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {tx.cards.map((card, i) => (
                                <motion.div key={card.n}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="relative p-8 rounded-[32px] bg-bg-secondary border border-white/5 border-t-4 border-t-emerald hover:border-emerald/30 transition-all duration-500 group"
                                >
                                    <div className="absolute top-4 right-6 text-[80px] font-black text-white/3 leading-none select-none">{card.n}</div>
                                    <div className="text-3xl mb-6">{card.icon}</div>
                                    <h4 className="text-lg font-black text-emerald mb-4 leading-tight">{card.title}</h4>
                                    <p className="text-text-muted text-sm leading-relaxed">{card.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* ═══ SECTION 3: Community Showcase ═══ */}
                <div className="border-t border-white/5 pt-20 mb-20">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h3 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-4">
                            <span className="text-emerald">03</span> · {tx.s3Title.replace('03 · ', '')}
                        </h3>
                        <p className="text-text-muted text-lg mb-12 max-w-2xl">{tx.s3Desc}</p>

                        {/* 2+2 community grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                            {tx.community.map((c, i) => (
                                <motion.div key={c.img}
                                    initial={{ opacity: 0, scale: 0.97 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.07 }}
                                    className="rounded-[28px] overflow-hidden border border-white/5 group hover:border-emerald/20 transition-all bg-bg-secondary"
                                >
                                    <div className="relative w-full aspect-video bg-black">
                                        <Image src={`${base}/${c.img}`} alt={c.heading} fill className="object-cover object-top group-hover:scale-[1.02] transition-transform" />
                                    </div>
                                    <div className="p-6">
                                        <h5 className="text-sm font-black text-white mb-2">{c.heading}</h5>
                                        <p className="text-[12px] text-text-muted leading-relaxed">{c.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Twitter viral tweets */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {tx.tweets.map((tw, i) => (
                                <motion.div key={tw.img}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="rounded-[28px] overflow-hidden border border-white/5 group hover:border-emerald/20 transition-all bg-bg-secondary"
                                >
                                    {/* Full image — no fixed aspect ratio so tweet is never clipped */}
                                    <div className="relative w-full overflow-hidden">
                                        <img src={`${base}/${tw.img}`} alt={tw.heading} className="w-full h-auto block group-hover:scale-[1.01] transition-transform duration-500" />
                                    </div>
                                    <div className="flex items-center justify-between p-5 border-t border-white/5">
                                        <h5 className="text-[11px] font-black text-white uppercase tracking-widest">{tw.heading}</h5>
                                        <a href={tw.url} target="_blank" rel="noopener noreferrer"
                                            className="flex-shrink-0 ml-3 flex items-center gap-1 text-[10px] font-black text-emerald/70 hover:text-emerald transition-colors uppercase tracking-wider"
                                        >↗ X</a>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* ═══ SECTION 4: TGE Record ═══ */}
                <div className="border-t border-white/5 pt-20">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h3 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-6">
                            <span className="text-emerald">04</span> · {tx.s4Title.replace('04 · ', '')}
                        </h3>
                        <p className="text-text-muted text-lg mb-12 max-w-3xl leading-relaxed">{tx.s4Body}</p>

                        {/* TGE 2×2 Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                            {tx.tgeImages.map((img, i) => (
                                <motion.div key={img.img}
                                    initial={{ opacity: 0, scale: 0.97 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.07 }}
                                    className="rounded-[24px] overflow-hidden border border-white/5 group hover:border-emerald/30 transition-all bg-bg-secondary"
                                >
                                    <div className="relative w-full aspect-video bg-black">
                                        <Image src={`${base}/${img.img}`} alt={img.cap} fill className="object-cover object-top group-hover:scale-[1.02] transition-transform" />
                                    </div>
                                    <div className="p-4 border-t border-white/5 text-[11px] text-text-muted font-medium">{img.cap}</div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Token chart full width */}
                        <div className="rounded-[32px] overflow-hidden border border-white/5 group hover:border-emerald/20 transition-all shadow-2xl">
                            <div className="relative w-full bg-[#111] p-4" style={{ aspectRatio: '3/1' }}>
                                <Image src={`${base}/tokenChart.png`} alt="$FIGHT Token Chart" fill className="object-contain p-4" />
                            </div>
                            <div className="p-5 bg-bg-secondary border-t border-white/5 text-[11px] text-text-muted font-medium">{tx.chartCaption}</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
