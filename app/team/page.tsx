"use client";

import React from 'react';
import TeamHero from '@/components/Team/TeamHero';
import TeamCard from '@/components/Team/TeamCard';
import Capabilities from '@/components/Team/Capabilities';
import { useLanguage } from '@/components/LanguageContext';
import { motion } from 'framer-motion';

export default function TeamPage() {
    const { lang } = useLanguage();

    const teamMembers = [
        {
            firstName: 'Thomas',
            fullName: 'Thomas Chung',
            role: lang === 'zh' ? '联合创始人 · Head of Growth' : 'Co-Founder · Head of Growth',
            bio: lang === 'zh'
                ? '曾任两家头部 CEX 高级市场增长合伙人，成功策划过多起过千万交易额的打新及 IEO 活动。拥有深厚的华语及亚太区核心生态资源。'
                : 'Former Senior Growth Partner at two leading CEXs. Orchestrated multiple IEO events surpassing $10M in trading volume. Deep Chinese & APAC ecosystem network.',
            image: '/images/team/thomas.png',
            tags: ['战略规划', '代币经济学', '资源重组', 'CEX 建联'],
            accent: 'emerald'
        },
        {
            firstName: 'Alexander',
            fullName: 'Alexander Nuttgens',
            role: lang === 'zh' ? '国际 PR 总监 · Global PR' : 'International PR Director',
            bio: lang === 'zh'
                ? '常驻北美，拥有 8 年跨国科技公司公关经验及 4 年 Web3 品牌塑造经验。曾为多个市值过亿的 DeFi 项目操刀海外首发品牌战役。'
                : 'North America-based. 8 years cross-border Tech PR + 4 years Web3 brand building. Led overseas launch campaigns for multiple $100M+ DeFi projects.',
            image: '/images/team/alex.png',
            tags: ['CoinDesk / CT', '白皮书重构', 'AMA 主持'],
            accent: 'gold'
        },
        {
            firstName: 'Eric',
            fullName: 'Eric Chiew Man Lok',
            role: lang === 'zh' ? '全球社区负责人 · Community' : 'Global Community Lead',
            bio: lang === 'zh'
                ? '资深社区大管家，曾在市值前 50 的 GameFi 项目中带领团队管理超数十万人的 Discord 与 TG 社区。熟练掌握增长黑客方法论。'
                : 'Veteran community manager. Led management of 100K+ Discord & Telegram communities at top-50 GameFi projects. Expert in growth hacking methodologies.',
            image: '/images/team/eric.png',
            tags: ['社区冷启动', 'Discord / TG 自动化', '危机公关'],
            accent: 'cyan'
        },
        {
            firstName: 'David',
            fullName: 'David "Dave" Cohen',
            role: lang === 'zh' ? '自动化与开发 · Lead Dev' : 'Automation & Lead Dev',
            bio: lang === 'zh'
                ? '资深全栈开发者，擅长 Python/Node.js。曾独挑大梁为多个空投工作室与 DAO 组织开发高效的管理工具与自动化脚本。'
                : 'Senior full-stack developer specializing in Python/Node.js. Single-handedly built efficient management tools and automation scripts for multiple airdrop studios and DAOs.',
            image: '/images/team/david.png',
            tags: ['Anti-spam 系统', '链上追踪', 'Galxe API'],
            accent: 'violet'
        }
    ];

    return (
        <div className="bg-bg-primary min-h-screen">
            <TeamHero />

            {/* Grid */}
            <section className="py-24 container mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member) => (
                        <TeamCard key={member.firstName} member={member} />
                    ))}
                </div>
            </section>

            <Capabilities />

            {/* Modern CTA */}
            <section className="py-32 border-t border-white/5 bg-bg-secondary/20">
                <div className="container mx-auto px-6 text-center">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-4xl md:text-7xl font-black mb-8 tracking-tighter"
                    >
                        {lang === 'zh' ? '与至强者' : 'WORK WITH'} <br />
                        <span className="text-violet italic">{lang === 'zh' ? '同行。' : 'THE BEST.'}</span>
                    </motion.h2>
                    <p className="text-text-muted max-w-xl mx-auto font-medium mb-12">
                        {lang === 'zh'
                            ? '我们的团队不仅交付结果，我们交付 Web3 的未来可能性。'
                            : 'Our team delivers more than results; we deliver the future possibilities of Web3.'}
                    </p>
                </div>
            </section>
        </div>
    );
}
