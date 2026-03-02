"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Props { lang: 'zh' | 'en' }

const t = {
    zh: {
        tag: '🌍 深度案例 · The KOIN Operation',
        subtitle: '从零到一：非洲区块链的变革 · Pan-African Web3 首个跨境数字货币',
        meta: [
            { label: '项目名称', val: 'KOIN (Kajornphuwapong Omni-Inclusive Network)' },
            { label: '类型', val: '区块链数字货币生态系统' },
            { label: '合作周期', val: '2024 Q1 — 2025（持续进行）' },
            { label: '规模', val: '跨越多个非洲国家的大型项目' },
        ],
        s1Title: '01 · 项目背景',
        s1Body: `2025 年 1 月，特朗普推出 Trump Coin 在加密市场引发剧烈震荡，向世界展示了"政治影响力与区块链技术结合"的巨大潜力。在此背景下，拥有联合国经社理事会特别咨商地位的 PEACE Alliance 创始主席 Chanasnun Kajornphuwapong 先生，敏锐地洞察到了这一历史性机遇。

作为深耕非洲大陆的政治领袖，他不仅是多个非洲国家的关键合作伙伴，更是音乐世界杯和非洲经贸生态现代化圈 (EEMS) 的创始人。KOIN 项目肩负着建立非洲首个跨境官方数字货币，打造具备全球影响力的非洲文化 IP，实现传统文化与现代科技完美融合的历史使命。`,

        steps: [
            {
                stepN: '第一步',
                title: '📄 奠定基石 — 白皮书与代币经济学',
                period: '2024 Q1–Q2',
                body: '当 Kajornphuwapong 先生找到我们时，他怀揣着宏大的愿景，但急需将其转化为专业的技术文档。我们与他进行了为期两个月的深度沟通，最终完成了一份 36 页的专业白皮书。这份白皮书不仅技术严谨，更讲述了一个完整的故事——从项目愿景到技术架构，从代币经济到发展路线图，每个细节都经过精心打磨。\n\n我们与团队共同设计了总量 270 亿、初始价格 $0.5 的 KOIN 代币系统，并设计了一套既能激励团队长期发展，又能保护社区利益的释放方案。',
                images: ['whitepaper1.png', 'whitepaper2.png', 'whitepaper3.png'],
                imgCaption: '36 页专业白皮书内页预览',
                link: { label: '下载白皮书 PDF', href: 'https://www.thekoinoperation.com/KOIN-WHITEPAPER.pdf' },
            },
            {
                stepN: '第二步',
                title: '🌐 构建品牌形象 — 官网 · VI · Deck',
                period: '2024 Q2–Q3',
                body: '在夯实基础文档之后，下一步是赋予项目专业的"外观"。我们为 KOIN 打造了现代化的官方网站 thekoinoperation.com——响应式设计确保移动端完美呈现，多语言支持覆盖全球市场，SEO 优化确保良好的搜索排名。\n\n品牌视觉是项目的"名片"。我们为 KOIN 设计了完整的 VI 系统——黑金主色调彰显非洲的高贵，深蓝点缀则代表科技的未来感。',
                images: ['website1.png', 'website2.png', 'website3.png'],
                imgCaption: '官方网站桌面端 · 移动端 · 功能模块展示',
                deckImages: ['deck1.png', 'deck2.png', 'deck3.png'],
                deckCaption: '品牌 VI 与 Pitch Deck 设计展示',
                link: { label: '下载 Deck PPT', href: 'https://www.thekoinoperation.com/KOIN-DECK.pptx' },
            },
            {
                stepN: '第三步',
                title: '📱 社交媒体运营与个人 IP 打造',
                period: '2024 Q3–Q4',
                body: '我们全面接手了项目的 Twitter @TheKoinOp 和 Instagram @thekoinop，制定了 30 天内容规划，每天涵盖不同主题——时而分享项目进展，时而科普区块链知识，时而展示丰富多彩的非洲文化。\n\n除了项目账号，我们还帮助 Kajornphuwapong 先生打造了其个人品牌，向公众展示：这不仅是政治家的项目，更是一位深谙技术、心系非洲发展的领袖的愿景。',
                images: ['socialmedia1.png', 'socialmedia2.png', 'socialmedia3.png'],
                imgCaption: '社交媒体内容矩阵 · 30 天运营计划实拍',
            },
        ],

        s2Title: '04 · 社区建设与 Web3 增长',
        s2Body: '我们为 KOIN 搭建了完整的 Telegram 社区体系，采用多层级群组架构。社区视觉风格与品牌色调高度一致，并提供 7×24 小时轮班制在线管理服务。设计了完整的 Discord 频道架构，设置不同用户等级，开发定制化 Discord 机器人。',
        web3Points: [
            { icon: '🪂', title: '空投策略', desc: '制定详尽规则奖励早期支持者，并部署反女巫算法以确保公平。' },
            { icon: '🛠️', title: '增长工具集成', desc: '集成 Galxe 和 Zealy 平台，通过任务裂变实现用户增长。' },
            { icon: '🎙️', title: '直播活动', desc: '组织双语 AMA，并成功争取到币安直播 (Binance Live) 席位。' },
        ],

        results: [
            { val: '100K+', label: '月均访问量' },
            { val: '50K+', label: 'Twitter 粉丝' },
            { val: '80K+', label: 'Telegram 成员' },
            { val: '20K+', label: '白皮书下载量' },
        ],
        milestones: [
            '✅ 官网正式上线', '✅ 代币模型搭建完成', '✅ 视觉识别 (VI) 系统确立',
            '✅ 社媒矩阵构建完成', '✅ 活跃社区建设', '✅ 创始人 IP 打造',
            '✅ Web3 增长工具集成', '✅ 安全审计报告发布',
        ],
        resultsTitle: '05 · 项目成果',
        secTitle: '🛡️ 安全与合规',
        secBody: 'Beosin 安全审计报告 ✅ — 涵盖智能合约安全测试、代码漏洞扫描、法律合规分析及 KYC/AML 政策制定。',
    },
    en: {
        tag: '🌍 Deep Dive · The KOIN Operation',
        subtitle: 'From Zero to One: A Blockchain Revolution in Africa · Pan-African Web3 Cross-Border Digital Currency',
        meta: [
            { label: 'Project', val: 'KOIN (Kajornphuwapong Omni-Inclusive Network)' },
            { label: 'Type', val: 'Blockchain Ecosystem' },
            { label: 'Period', val: '2024 Q1 — 2025 (Ongoing)' },
            { label: 'Scale', val: 'Pan-African (Multi-country)' },
        ],
        s1Title: '01 · Project Background',
        s1Body: `In January 2025, Donald Trump's launch of Trump Coin created massive waves in the crypto market, demonstrating the enormous potential of "political influence + blockchain." Against this backdrop, Mr. Chanasnun Kajornphuwapong—Founder President of the PEACE Alliance with UN ECOSOC Special Consultative Status—keenly recognized the opportunity.

As a political leader with deep roots across the African continent, he is a key partner to multiple African nations, and founder of both the Music World Cup and the African Economic & Ecological Modernization Sphere (EEMS). The KOIN project carries the mission of establishing Africa's first cross-border official digital currency and achieving perfect integration of traditional culture with modern technology.`,

        steps: [
            {
                stepN: 'Step One',
                title: '📄 Laying the Foundation — Whitepaper & Tokenomics',
                period: '2024 Q1–Q2',
                body: 'When Mr. Kajornphuwapong approached us, he had a grand vision but needed to transform it into professional technical documentation. We spent two full months in deep communication, ultimately completing a 36-page professional whitepaper—covering project vision, technical architecture, token economics, and a detailed development roadmap.\n\nWe designed a KOIN token system with 27 billion total supply and $0.5 initial price, with a distribution mechanism that incentivizes long-term team development while protecting community interests.',
                images: ['whitepaper1.png', 'whitepaper2.png', 'whitepaper3.png'],
                imgCaption: '36-page professional whitepaper preview',
                link: { label: 'Download Whitepaper PDF', href: 'https://www.thekoinoperation.com/KOIN-WHITEPAPER.pdf' },
            },
            {
                stepN: 'Step Two',
                title: '🌐 Building Brand Image — Website · VI · Deck',
                period: '2024 Q2–Q3',
                body: 'With solid foundational documents, the next step was making the project "look" professional. We created a modern official website at thekoinoperation.com with responsive design for mobile, multi-language support for global markets, and SEO optimization.\n\nBrand visuals are the project\'s "face." We designed a complete brand identity system for KOIN — black and gold primary colors embody Africa\'s nobility, while deep blue accents represent technology\'s futuristic feel.',
                images: ['website1.png', 'website2.png', 'website3.png'],
                imgCaption: 'Website: desktop · mobile · feature section',
                deckImages: ['deck1.png', 'deck2.png', 'deck3.png'],
                deckCaption: 'Brand VI & Pitch Deck design showcase',
                link: { label: 'Download Deck PPT', href: 'https://www.thekoinoperation.com/KOIN-DECK.pptx' },
            },
            {
                stepN: 'Step Three',
                title: '📱 Social Media Operations & Founder Personal IP',
                period: '2024 Q3–Q4',
                body: 'We took over the project\'s Twitter @TheKoinOp and Instagram @thekoinop, creating a 30-day content plan with different themes each day—project updates, blockchain education, and African cultural showcases.\n\nBeyond project accounts, we also helped Mr. Kajornphuwapong build his personal brand, showing the world this isn\'t just a politician\'s project, but a leader who truly understands technology and cares about African development.',
                images: ['socialmedia1.png', 'socialmedia2.png', 'socialmedia3.png'],
                imgCaption: 'Social media content matrix · 30-day operations plan',
            },
        ],

        s2Title: '04 · Community Building & Web3 Growth',
        s2Body: 'We built a complete Telegram community system for KOIN with multi-level group architecture, brand-aligned visuals, and 24/7 shift-based online management. We designed complete Discord channel architecture with different user levels and custom-developed Discord bot features.',
        web3Points: [
            { icon: '🪂', title: 'Airdrop Strategy', desc: 'Detailed rules rewarding early supporters with anti-sybil algorithms to ensure fairness.' },
            { icon: '🛠️', title: 'Growth Tools', desc: 'Integration with Galxe and Zealy for task-based acquisition and viral growth.' },
            { icon: '🎙️', title: 'Live Events', desc: 'Organizing bilingual AMAs and securing Binance Live streaming slots.' },
        ],

        results: [
            { val: '100K+', label: 'Monthly Visits' },
            { val: '50K+', label: 'Twitter Fans' },
            { val: '80K+', label: 'Telegram Members' },
            { val: '20K+', label: 'Whitepaper Downloads' },
        ],
        milestones: [
            '✅ Official website launched', '✅ Token economic model completed', '✅ Brand visual system established',
            '✅ Social media matrix built', '✅ Active community construction', '✅ Founder personal IP built',
            '✅ Web3 growth tools integrated', '✅ Security audit report published',
        ],
        resultsTitle: '05 · Project Results',
        secTitle: '🛡️ Security & Compliance',
        secBody: 'Beosin Security Audit Report ✅ — Includes smart contract testing, code vulnerability scanning, legal compliance analysis, and KYC/AML policy development.',
    }
};

export default function KoinCase({ lang }: Props) {
    const tx = t[lang];
    const base = '/images/portfolio-koin';

    return (
        <section className="relative bg-bg-secondary/20 border-b border-white/5 overflow-hidden">
            <div className="absolute top-40 right-1/4 w-[600px] h-[600px] bg-gold/4 blur-[160px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 pt-32 pb-20">
                {/* ═══ HERO ═══ */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/20 bg-gold/10 text-gold text-[10px] font-black uppercase tracking-widest mb-10">
                        {tx.tag}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
                        <div>
                            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none text-white mb-4">
                                The <span className="text-gold">KOIN</span><br />Operation
                            </h2>
                            <p className="text-lg text-text-muted font-light leading-relaxed mb-8">{tx.subtitle}</p>
                            {/* Meta pills */}
                            <div className="grid grid-cols-2 gap-3">
                                {tx.meta.map(m => (
                                    <div key={m.label} className="p-4 rounded-[20px] bg-bg-secondary border border-gold/10">
                                        <div className="text-[8px] font-black text-gold/60 uppercase tracking-widest mb-1">{m.label}</div>
                                        <div className="text-sm font-bold text-white leading-tight">{m.val}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Results preview */}
                        <div className="grid grid-cols-2 gap-4">
                            {tx.results.map(r => (
                                <div key={r.label} className="p-6 rounded-[28px] bg-bg-secondary border border-gold/10 text-center group hover:border-gold/30 transition-all">
                                    <div className="text-3xl font-black text-gold mb-1">{r.val}</div>
                                    <div className="text-[9px] font-black text-text-muted uppercase tracking-widest">{r.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* ═══ SECTION 1: Background ═══ */}
                <div className="border-t border-white/5 pt-20 mb-20">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h3 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-8">
                            <span className="text-gold">01</span> · {tx.s1Title.replace('01 · ', '')}
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            {tx.s1Body.split('\n\n').map((para, i) => (
                                <p key={i} className="text-text-muted leading-relaxed text-base">{para}</p>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* ═══ STEPS (1, 2, 3) ═══ */}
                {tx.steps.map((step, si) => (
                    <div key={step.stepN} className="border-t border-white/5 pt-20 mb-20">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            {/* Step header */}
                            <div className="flex items-center gap-4 mb-8">
                                <div className="px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-[9px] font-black text-gold uppercase tracking-widest">
                                    {step.stepN} · {step.period}
                                </div>
                            </div>
                            <h3 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-8">
                                <span className="text-gold">0{si + 2}</span> · {step.title.replace(/^[^\s]+\s/, '')}
                            </h3>

                            {/* Body text */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
                                {step.body.split('\n\n').map((para, i) => (
                                    <p key={i} className="text-text-muted leading-relaxed text-base">{para}</p>
                                ))}
                            </div>

                            {/* Image grid for this step */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                                {step.images.map((img, i) => (
                                    <motion.div key={img}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.07 }}
                                        className="rounded-[20px] overflow-hidden border border-white/5 group hover:border-gold/20 transition-all bg-bg-secondary"
                                    >
                                        <div className="relative w-full aspect-video bg-black">
                                            <Image src={`${base}/${img}`} alt={img} fill className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500" />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                            <p className="text-center text-[11px] text-text-muted/50 font-medium mb-10">{step.imgCaption}</p>

                            {/* Deck images if present */}
                            {'deckImages' in step && step.deckImages && (
                                <>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                                        {step.deckImages.map((img: string, i: number) => (
                                            <motion.div key={img}
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: i * 0.07 }}
                                                className="rounded-[20px] overflow-hidden border border-white/5 group hover:border-gold/20 transition-all bg-bg-secondary"
                                            >
                                                <div className="relative w-full aspect-video bg-black">
                                                    <Image src={`${base}/${img}`} alt={img} fill className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500" />
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                    <p className="text-center text-[11px] text-text-muted/50 font-medium mb-10">{step.deckCaption}</p>
                                </>
                            )}

                            {/* Link */}
                            {'link' in step && step.link && (
                                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-black uppercase tracking-widest hover:bg-gold/20 transition-all cursor-pointer">
                                    📎 {step.link.label}
                                </div>
                            )}
                        </motion.div>
                    </div>
                ))}

                {/* ═══ SECTION: Community & Web3 Growth ═══ */}
                <div className="border-t border-white/5 pt-20 mb-20">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h3 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-6">
                            <span className="text-gold">04</span> · {tx.s2Title.replace('04 · ', '')}
                        </h3>
                        <p className="text-text-muted text-lg mb-12 max-w-3xl leading-relaxed">{tx.s2Body}</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {tx.web3Points.map((p, i) => (
                                <motion.div key={p.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-8 rounded-[32px] bg-bg-secondary border border-white/5 border-t-4 border-t-gold hover:border-gold/30 transition-all"
                                >
                                    <div className="text-3xl mb-4">{p.icon}</div>
                                    <h4 className="text-lg font-black text-gold mb-3">{p.title}</h4>
                                    <p className="text-text-muted text-sm leading-relaxed">{p.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* ═══ RESULTS & MILESTONES ═══ */}
                <div className="border-t border-white/5 pt-20 mb-20">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h3 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-12">
                            <span className="text-gold">05</span> · {tx.resultsTitle.replace('05 · ', '')}
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16">
                            {tx.results.map((r, i) => (
                                <motion.div key={r.label}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="p-8 rounded-[28px] bg-bg-secondary border border-gold/10 text-center border-t-4 border-t-gold hover:border-gold/30 transition-all group"
                                >
                                    <div className="text-4xl font-black text-gold mb-2 group-hover:scale-110 transition-transform">{r.val}</div>
                                    <div className="text-[10px] font-black text-text-muted uppercase tracking-widest">{r.label}</div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Milestones 2-col */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {tx.milestones.map((m, i) => (
                                <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-bg-secondary border border-white/5 hover:border-gold/20 transition-all text-sm font-medium text-text-muted">
                                    {m}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* ═══ SECURITY ═══ */}
                <div className="border-t border-white/5 pt-20">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <div className="p-10 rounded-[40px] bg-bg-secondary border border-gold/10 flex items-start gap-6">
                            <div className="text-4xl">🛡️</div>
                            <div>
                                <h4 className="text-xl font-black text-gold mb-3">{tx.secTitle.replace('🛡️ ', '')}</h4>
                                <p className="text-text-muted leading-relaxed">{tx.secBody}</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
