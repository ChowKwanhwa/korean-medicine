"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/components/LanguageContext';
import { cn } from "@/lib/utils";

const TABS = {
    zh: [
        { id: 'marketing', name: '📈 四个月详细营销执行日历' },
        { id: 'spreading', name: '🚀 全网覆盖与传播路线图' },
        { id: 'media', name: '🎯 基础运营指标与核心配置' },
    ],
    en: [
        { id: 'marketing', name: '📈 4-Month Marketing Execution' },
        { id: 'spreading', name: '🚀 Spreading Roadmap' },
        { id: 'media', name: '🎯 Operations Metrics & Setup' },
    ]
};

const MarketingPlan = ({ lang }: { lang: 'zh' | 'en' }) => {
    const weeklyData = [
        {
            month: lang === 'zh' ? "首月：品牌基建与系统定义" : "Month 1: Brand Infra & Definition",
            weeks: [
                { time: "04.01 - 04.07", goal: lang === 'zh' ? "产品平台定位" : "Platform Positioning", items: lang === 'zh' ? ["撰写并优化白皮书、PitchDeck的平台定位及创新点", "创建并接管官方 Twitter、Discord 及英文 Telegram 社区"] : ["Draft and optimize Whitepaper and Pitchdeck", "Establish official Twitter, Discord, and Telegram communities"] },
                { time: "04.08 - 04.15", goal: lang === 'zh' ? "官方视觉体系与基建完善" : "Visual Identity & Basics", items: lang === 'zh' ? ["完成官方 Logo 设计与易拉宝视觉产出", "完成官网部署，发布初版介绍与愿景推文", "撰写初版白皮书 2.0 及核心 OnePager"] : ["Logo design and official key visuals", "Official website deployment", "Release initial Whitepaper 2.0 and OnePager"] },
                { time: "04.16 - 04.23", goal: lang === 'zh' ? "早期社区基本面构建" : "Early Community Building", items: lang === 'zh' ? ["官网上线公告，并联合 TaskOn / Ninja 开展冷启动勋章活动", "英文版白皮书正式宣发，筹备预热话题"] : ["Website launch and early-bird OAT campaigns with TaskOn/Ninja", "English Whitepaper release and warm-up"] },
                { time: "04.24 - 04.30", goal: lang === 'zh' ? "用户教育与活跃度提升" : "User Education & Engagement", items: lang === 'zh' ? ["发布系统生态价值图、代币经济模型图与 Roadmap", "联合主流 Web3 钱包开展首次联合空投活动", "整理官方 FAQ 并完成全矩阵装饰"] : ["Release ecosystem value graphics, tokenomics, and Roadmap", "Co-host first joint airdrop with main Web3 wallets", "Organize official FAQs"] }
            ]
        },
        {
            month: lang === 'zh' ? "次月：用户教育与活跃狂潮" : "Month 2: Education & Fever Pitch",
            weeks: [
                { time: "05.01 - 05.07", goal: lang === 'zh' ? "核心深度推广" : "Core Deep-Dive Promo", items: lang === 'zh' ? ["正式发布《Introduction to Korean Medicine》深度解读文章", "接档多场高频 Space 与预热 AMA", "完善系统底层角色运作逻辑信息图铺贴"] : ["Release 'Introduction to Korean Medicine' deep-dive", "Host high-frequency Spaces and pre-AMAs", "Refine graphics for underlying role mechanics"] },
                { time: "05.08 - 05.15", goal: lang === 'zh' ? "外部平台强强联合" : "Platform Partnerships", items: lang === 'zh' ? ["接入 Quest3 / TaskOn 任务体系，发放积分与 NFT 徽章", "联合 Formless 等举办 Web3 Twitter Space", "Galaxy 生态拉新启动，配合高频图文宣发"] : ["Integrate Quest3/TaskOn quest systems with NFT badges", "Host Twitter Spaces with partners like Formless", "Galaxy ecosystem user acquisition"] },
                { time: "05.16 - 05.23", goal: lang === 'zh' ? "OAT机制与节点概念曝光" : "OAT & Node Concept Push", items: lang === 'zh' ? ["发布 OAT 空投专属规则（兑换积分门槛）", "公开宣发节点文字配图及官网节点系统入口", "筛选并实施项目 PR 投放（如 NFT3.com 等）"] : ["Release OAT airdrop mechanics (point thresholds)", "Promote Node concept graphics and official portal", "Execute core PR insertions"] },
                { time: "05.24 - 05.31", goal: lang === 'zh' ? "海外筹备与大流量推流" : "Overseas Prep & High Traffic", items: lang === 'zh' ? ["发布币安直播 (Binance Live) 直推预热", "完成此前多场 OAT 及活动的链上数据整理汇报", "海外线下活动实地易拉宝与主 KV 视觉曝光"] : ["Binance Live stream warm-ups", "Finalize on-chain data reports from previous OAT campaigns", "Offline event visuals and roll-up banners overseas"] }
            ]
        },
        {
            month: lang === 'zh' ? "第三月：线下霸权与海外爆发" : "Month 3: Offline Dominance & Global Expansion",
            weeks: [
                { time: "06.01 - 06.07", goal: lang === 'zh' ? "节点与合作爆发" : "Node & Partnership Boom", items: lang === 'zh' ? ["宣布三家核心项目方合作打 Call，联合宣发推文", "结合 RWA + 实体资产 + 韩国医药板块开展专属互动话题", "海外实地现场路演，回传刷量数据及现场狂热视频"] : ["Announce 3 core strategic partners for joint tweets", "Initiate RWA + Physical Assets + KM narrative topics", "Overseas offline roadshows and hype generation"] },
                { time: "06.08 - 06.15", goal: lang === 'zh' ? "常态化周报与研报输出" : "Weekly Reports & Tech Papers", items: lang === 'zh' ? ["启动 Weekly 制度：每周五开展 Discord 语音/文字周报", "每周固定频次进行海外 AMA 宣讲", "输出专业级技术文章解析韩国医药 RWA 全景视角"] : ["Launch Weekly system on Discord (voice/text)", "Fixed weekly overseas AMAs", "Publish pro-level technical research pieces for KM-Series"] },
                { time: "06.16 - 06.23", goal: lang === 'zh' ? "机构合力宣发" : "Institutional Joint Promo", items: lang === 'zh' ? ["3家合作方同步发起交互活动，送出专属生态 NFT", "全员推文互动转推，提高整体社交平台声量", "持续高频预热海报放送"] : ["3 partners host simultaneous campaigns for eco-NFTs", "All-hands tweet interactions to boost absolute social volume", "Continuous high-frequency hype poster releases"] },
                { time: "06.24 - 06.30", goal: lang === 'zh' ? "冲刺机构宣发" : "VC Hype Sprint", items: lang === 'zh' ? ["联动头部平台如 Bibox 开展全网 AMA 专场", "同步 Discord 社区内容，策划韩国医药二阶互动活动", "机构级合作事件披露"] : ["Host full-network AMAs with top platforms like Bibox", "Coordinate Discord content for secondary interaction campaigns", "Reveal institutional partnership events"] }
            ]
        },
        {
            month: lang === 'zh' ? "第四月：TGE决战与上所造势" : "Month 4: TGE Showdown & Listing Hype",
            weeks: [
                { time: "07.01 - 07.07", goal: lang === 'zh' ? "长期活跃与生态整合" : "Long-Term Engagement", items: lang === 'zh' ? ["发布 Discord 长线运营活动榜单（活跃度等级空投）", "在其他合作项目方主场社区（如 Assure）进行反向 AMA 吸引流量", "配合交易所类增长活动提升交互地址数"] : ["Release Discord long-term operations leaderboard (activity airdrops)", "Host reverse AMAs in partner communities like Assure", "Coordinate with CEX growth campaigns for address spikes"] },
                { time: "07.08 - 07.15", goal: lang === 'zh' ? "大所合作与数据收网" : "Major Exchange Synergies", items: lang === 'zh' ? ["落地交易所及合作钱包的官方推文联动", "完成 Discord 长期等级排名榜单截屏（最高等级享白名单等专属激励）", "持续多方官宣合力霸屏推流"] : ["Finalize official joint tweets with major CEXs and wallets", "Snapshot Discord long-term ranking leaderboards", "Continuous multi-party announcements for feed domination"] },
                { time: "07.16 - 07.23", goal: lang === 'zh' ? "TGE与代币模型全披露" : "TGE & Tokenomics Disclosure", items: lang === 'zh' ? ["公布 TGE 具体时间、代币释放细则及 FDV 初始流通数据", "公布空投门槛及明确覆盖人群地址", "动用工作室配合场内数据刷量，冲高上所首发热度"] : ["Announce TGE date, vesting specifics, and initial FDV", "Disclose airdrop thresholds and eligible addresses", "Utilize studios for on-chain data padding to maximize post-listing hype"] },
                { time: "07.24 - 07.31", goal: lang === 'zh' ? "全网发币狂欢" : "Global Token Launch Fiesta", items: lang === 'zh' ? ["Roadgame及多家战略方结果公布", "大使社区成果汇报，KOL大范围集中喊单", "全网发布各大头部交易所上线通知，进入下一阶段！"] : ["Announce results from Roadgame and strategic partners", "Ambassador community reports and massive KOL shilling", "Full network announcement of Top CEX listings!"] }
            ]
        }
    ];

    return (
        <div className="space-y-12">
            <div className="bg-cyan/5 border border-cyan/20 p-6 md:p-8 rounded-3xl">
                <h3 className="text-2xl font-black italic text-white mb-2">{lang === 'zh' ? "四个月极速狂飙营销线" : "4-Month High-Speed Marketing Schedule"}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{lang === 'zh' ? "基于周历制定的高频发文、宣发、AMA及技术节点披露动作。该流程严格把控项目从0到1乃至最终顺利步入中心化交易所的每一环社区情绪。" : "High-frequency roadmap of tweets, PRs, AMAs, and tech node disclosures aligned weekly. Rigidly controls community hype from day 0 to top-tier CEX listings."}</p>
            </div>

            <div className="space-y-10">
                {weeklyData.map((phase, i) => (
                    <div key={i} className="relative z-10 glass-morphism rounded-[32px] border border-white/5 overflow-hidden">
                        <div className="bg-white/5 px-6 py-4 border-b border-white/5 font-black text-cyan text-lg">
                            {phase.month}
                        </div>
                        <div className="p-6">
                            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px before:h-full before:w-0.5 before:bg-white/10">
                                {phase.weeks.map((wk, j) => (
                                    <div key={j} className="relative flex items-start pl-12">
                                        <div className="absolute left-3 w-2 h-2 rounded-full bg-cyan mt-2 shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                                        <div className="w-full">
                                            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                                                <span className="text-[11px] font-black tracking-widest text-[#888] bg-white/5 px-2 py-1 rounded inline-block w-max">
                                                    {wk.time}
                                                </span>
                                                <h4 className="text-white font-bold text-sm">{wk.goal}</h4>
                                            </div>
                                            <ul className="space-y-1 mt-3">
                                                {wk.items.map((item, k) => (
                                                    <li key={k} className="text-sm text-text-muted/80 flex gap-2 leading-relaxed">
                                                        <span className="text-cyan/40 mt-1 shrink-0">❖</span>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const SpreadingPlan = ({ lang }: { lang: 'zh' | 'en' }) => {
    const data = [
        {
            stage: lang === 'zh' ? "Stage I. 声量奠基阶段" : "Stage I. Project Awareness Raising",
            details: [
                { title: lang === 'zh' ? "深度解读内容矩阵" : "Deep Interpretation Content", desc: lang === 'zh' ? "从KOL及第三方专业视角输出项目解读优化文章。跨平台同步分发（自有矩阵、衍生技术流、加密垂直媒体）。" : "Distribute deep-dive project interpretation articles via KOLs and 3rd party crypto media." },
                { title: lang === 'zh' ? "全网公信力占位" : "Network Credibility Placement", desc: lang === 'zh' ? "强推入驻 CoinMarketCap、TokenInsight 等权威数据平台矩阵，提交源码与审计法律意见书备案。" : "Force-push listings on CoinMarketCap, TokenInsight, and submit audit reports for credibility." },
                { title: lang === 'zh' ? "借势市场核心流量" : "Leveraging Core Traffic", desc: lang === 'zh' ? "以 RWA、AI 算力及健康产业话题为切入点，强行绑定韩国医药 RWA 的特有机制，输出快讯与分析贴制造 FOMO。" : "Leaning on RWA, AI computing, and health tech hotspots, anchoring KM-Series mechanics to create FOMO." },
                { title: lang === 'zh' ? "账号接管与护航" : "Account Setup & Shilling", desc: lang === 'zh' ? "全域自媒体封面刷新、内容精细化深耕；并铺排充足水军保障初期讨论氛围的火爆。" : "Social media refreshing and mass-shilling setup to guarantee an extremely active early environment." }
            ]
        },
        {
            stage: lang === 'zh' ? "Stage II. 核心解读阶段" : "Stage II. Core Strategy Interpretation",
            details: [
                { title: lang === 'zh' ? "商业闭环全剖析" : "Commercial Loop Breakdown", desc: lang === 'zh' ? "深入浅出拆解‘RWA 资产锚定’、‘双中心合规框架’及‘节点通证激励’三大维度，将白皮书生涩词汇转为投资者易懂的卖点。" : "Deconstruct RWA Asset Anchoring, Compliance Framework, and incentive mechanics into digestible bullet points." },
                { title: lang === 'zh' ? "自办及生态大咖 AMA" : "Ecosystem & Self-Hosted AMAs", desc: lang === 'zh' ? "高频发起“实体资产上链与合规”圆桌直播，并植入于各大第三方生态大咖秀做交叉引流输出。" : "Constantly host AMAs focusing on 'Real World Assets & Compliance' across our own and partner channels." },
                { title: lang === 'zh' ? "头部衍生品研报植入" : "Top-Tier Report Insertions", desc: lang === 'zh' ? "将韩国医药 RWA 的核心技术（实物清算、物联网监管）硬植入到全球行业顶级机构公开发布的数据研报中。" : "Firmly insert Korean Medicine RWA tech into globally recognized top-tier reports." },
                { title: lang === 'zh' ? "RWA 竞品对比分析" : "RWA Competitor Breakdowns", desc: lang === 'zh' ? "直接硬刚市场现存 RWA 龙头项目，通过图表对比突出 KM-Series 在实体资产监管与合规上的绝对代差优势。" : "Directly challenge RWA market giants with graphical side-by-side compliance superiority comparisons." }
            ]
        },
        {
            stage: lang === 'zh' ? "Stage III. 机构背书阶段" : "Stage III. Top Institutional Endorsements",
            details: [
                { title: lang === 'zh' ? "合规与技术峰会包场" : "Compliance & Tech Summits", desc: lang === 'zh' ? "受邀参会展现 RWA 技术肌肉（全球 RWA 峰会、香港 Web3 狂欢节等），现场路演并在各大宣发渠道生成快讯报道。" : "Showcase technical muscle at apex global RWA and Fintech conferences with live PR broadcasting." },
                { title: lang === 'zh' ? "重磅战略联盟官宣" : "Strategic Alliance Announcements", desc: lang === 'zh' ? "与现有的 RWA 蓝筹项目、实体跨境电商及头部合规托管机构结成深度战略合作伙伴关系。" : "Announce strategic eco-alliances with leading RWA blue-chips and physical infrastructure providers." },
                { title: lang === 'zh' ? "合规融资新闻轰炸" : "Funding & Compliance Blitz", desc: lang === 'zh' ? "向全球市场通报机构级别的融资与合规进展，结合 PR 软文向大量未入场资本及散户传递最强背书。" : "Bombard global markets with tier-1 funding and compliance news to signal the strongest institutional backing." }
            ]
        }
    ];

    return (
        <div className="space-y-12">
            <div className="bg-emerald/5 border border-emerald/20 p-6 md:p-8 rounded-3xl">
                <h3 className="text-2xl font-black italic text-white mb-2">{lang === 'zh' ? "全网传播扩展路线" : "Spreading Roadmap"}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{lang === 'zh' ? "通过渐进式的核心战略布局，从前期硬核强推曝光，到中期技术布道，再到后期拉顶流机构站台，形成绝密的增长护城河。" : "Through progressive core strategic placement: from hard early exposure, to mid-term technical preaching, to late-stage top-tier institutional endorsement builds."}</p>
            </div>

            <div className="space-y-8">
                {data.map((col, idx) => (
                    <div key={idx} className="glass-morphism rounded-3xl p-6 md:p-8 border border-white/5 hover:border-emerald/30 transition-colors">
                        <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/10">
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald/10 text-emerald flex items-center justify-center font-black text-2xl">
                                {idx + 1}
                            </div>
                            <h4 className="text-xl font-black text-white">{col.stage}</h4>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {col.details.map((item, j) => (
                                <div key={j} className="space-y-2">
                                    <h5 className="font-bold text-white/90 text-sm flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-emerald rounded-full" />
                                        {item.title}
                                    </h5>
                                    <p className="text-xs text-text-muted/80 leading-relaxed pl-3.5 border-l border-white/10 ml-[3px]">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


const MediaBudget = ({ lang }: { lang: 'zh' | 'en' }) => {
    const items = [
        { name: lang === 'zh' ? "Twitter矩阵运营执行" : "Twitter Execution Matrix", tag: "400K+ Data", desc: lang === 'zh' ? "1大号（英语主营）配合1双语小号。日常转评赞（日30+真人互动）与行业投票配置，配合项目PR热点直推。" : "1 Major English account, 1 bilingual account. Daily engagement (30+ human interactions) configured with PR trends." },
        { name: lang === 'zh' ? "Telegram全域活性维护" : "Telegram Activity Maintenance", tag: "100k+ Group", desc: lang === 'zh' ? "维护 10 万+英文官方大群与 3 万+中文资料小群。24小时机器人配合人工排版，保障全时段30%以上高纯在线活跃率。" : "Maintain 100k+ EN main groups and 30K+ CN groups. 24/7 moderation ensuring a 30% online rate." },
        { name: lang === 'zh' ? "YouTube视频生态铺贴" : "YouTube Eco Presence", tag: "30+ Videos", desc: lang === 'zh' ? "MG商业动画 + 项目硬核图文教学 + 志愿者视频直发。每周高品质剪辑投放，占据视频引擎核心词条。" : "Motion Graphics + hard-core tutorials + volunteer releases. Distributed weekly to capture core video SEO." },
        { name: lang === 'zh' ? "Web3任务网矩阵搭建" : "Social Matrix Launch", tag: "Full Setup", desc: lang === 'zh' ? "Discord、Link3、TaskOn、Quest3、GitBook、Medium 等各大流量引流端渠道一次性全精装搭建及后期维护。" : "Extensive, flawless setup for Discord, Link3, TaskOn, Quest3, GitBook, Medium, etc." },
        { name: lang === 'zh' ? "小红书/抖音双端轰炸" : "RED/TikTok Dual Bombing", tag: "200+ KOLs", desc: lang === 'zh' ? "动用 100 位小红书作者 + 100 位抖音博主，携带极强情绪渲染文案，短中期内彻底覆盖华语流量热点。" : "Unleash 100 RED creators and 100 TikTok creators with extremely emotional FOMO shilling to capture Asian traffic." },
        { name: lang === 'zh' ? "核心公关(PR)媒体发稿" : "Core PR Media", tag: "Professional Focus", desc: lang === 'zh' ? "项目前期深研级稿件直接覆盖《链捕手》、《星球日报 (Odaily)》等权威端，并输送数次极速快讯推送。" : "Extensive publications in authoritative sites like Odaily and TechFlow, alongside rapid news blasts." },
        { name: lang === 'zh' ? "币安现场推流直播" : "Binance Live AMAs", tag: "6-8 Sessions", desc: lang === 'zh' ? "直连 Binance Live 开展 6-8 场全英文直播流，活动过程中配以置顶PR及大额真实空投与社区抽奖。" : "Host 6-8 full English Binance Live streams paired with pinned PR and massive community airdrops." },
        { name: lang === 'zh' ? "Twitter Space / AMA" : "Twitter Space / AMA", tag: "30+ Spaces", desc: lang === 'zh' ? "精接高流量 Crypto Alpha 大主客观社区，开展高频深度的三方乃至多维互怼访谈解析商业模式。" : "Host high-frequency, complex cross-party panel formats in Alpha communities to decode the business model." },
        { name: lang === 'zh' ? "Github真实开发者交互" : "Github Native Dev Flow", tag: "Geek Trust", desc: lang === 'zh' ? "20名双语真实资深开发者矩阵进行开源代码生态的深度探讨、Fork建议及交互操作，极大铸造代码信任。" : "Utilize 20 bilingual senior devs to perform forks, push PRs, and establish rock-solid underlying geek trust." },
        { name: lang === 'zh' ? "全天候海外高级视觉组" : "Overseas Premium Design", tag: "2 Designers", desc: lang === 'zh' ? "高频物料制作、PPT优化改进、一图读懂系列长图及极具辨识度的独立UI插画级别宣发产出。" : "Constant asset creation, pitchdeck facelifts, 'TLDR' infographics, and highly distinct PR illustrations." },
        { name: lang === 'zh' ? "高级轮班 Mods (北美)" : "Premium Western Mods", tag: "5 Managers", desc: lang === 'zh' ? "辐射北美(美国、加拿大)时间线的顶级社区管理员，处理西方白天区最高峰段大流量英语对线与解答。" : "Targeting North American timelines; absolute tier-1 managers to moderate daytime Western heavy traffic." }
    ];

    return (
        <div className="space-y-12">
            <div className="bg-violet/5 border border-violet/20 p-6 md:p-8 rounded-3xl">
                <h3 className="text-2xl font-black italic text-white mb-2">{lang === 'zh' ? "执行明细与核心配置指标" : "Operations Targets & Execution Config"}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{lang === 'zh' ? "全案囊括内容产出、平台搭建、媒体扩散到高端开发者运营的360度武装。以下为各核心板块具体的服务内容与输出标准。" : "The full proposal includes massive content outputs, platform building, media distribution, and high-end dev ops."}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item, i) => (
                    <div key={i} className="bg-bg-secondary/40 border border-white/5 rounded-[24px] p-6 hover:bg-white/5 hover:border-violet/30 transition-all flex flex-col justify-start group">
                        <div className="flex justify-between items-start mb-5">
                            <h4 className="font-black text-sm text-white">{item.name}</h4>
                            <span className="bg-violet/10 text-violet text-[10px] px-2.5 py-1 rounded-md font-black uppercase tracking-widest shrink-0 shadow-sm border border-violet/20 group-hover:bg-violet group-hover:text-white transition-colors">{item.tag}</span>
                        </div>
                        <p className="text-xs text-text-muted leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>

            <div className="glass-morphism rounded-3xl p-6 md:p-8 border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan/10 blur-[100px] pointer-events-none" />
                <h4 className="text-lg font-black text-white mb-6 border-b border-white/10 pb-4">{lang === 'zh' ? "基础量化效果保底说明" : "Guaranteed Monthly Metrics"}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
                    <div className="space-y-2">
                        <div className="text-cyan font-black text-xl">80+</div>
                        <div className="text-white/60 text-xs uppercase tracking-widest">{lang === 'zh' ? "推特月度数据矩阵" : "Monthly Twitter Metrics"}</div>
                        <p className="text-xs text-text-muted/70 leading-relaxed pt-2">{lang === 'zh' ? "单条评论 30+，点赞 100+，达成 5K-15K 核心阅读曝光率。" : "30+ comments per tweet, 100+ likes, achieving 5K-15K absolute core exposure."}</p>
                    </div>
                    <div className="space-y-2">
                        <div className="text-cyan font-black text-xl">5+</div>
                        <div className="text-white/60 text-xs uppercase tracking-widest">{lang === 'zh' ? "单月联合 AMA 宣发" : "Joint AMA Pushes / Month"}</div>
                        <p className="text-xs text-text-muted/70 leading-relaxed pt-2">{lang === 'zh' ? "每月雷打不动的推特 Space 与社区直播推行频率。" : "Concrete unshakeable pacing of Twitter Spaces and community live streams."}</p>
                    </div>
                    <div className="space-y-2">
                        <div className="text-cyan font-black text-xl">50+</div>
                        <div className="text-white/60 text-xs uppercase tracking-widest">{lang === 'zh' ? "定制化视觉产出" : "Custom Visual Arts"}</div>
                        <p className="text-xs text-text-muted/70 leading-relaxed pt-2">{lang === 'zh' ? "涵盖大事件图、节日、路线图更新极其耗时的设计输出。" : "Covers major events, holidays, and extremely complex roadmap design outputs."}</p>
                    </div>
                    <div className="space-y-2">
                        <div className="text-cyan font-black text-xl">200+</div>
                        <div className="text-white/60 text-xs uppercase tracking-widest">{lang === 'zh' ? "TG群核心讨论植入" : "Daily Targeted TG Shills"}</div>
                        <p className="text-xs text-text-muted/70 leading-relaxed pt-2">{lang === 'zh' ? "高纯度群内水军活跃植入，营造强大的热点炒作情绪闭环。" : "High-purity strategic shilling deployed into groups to enforce an absolute FOMO loop."}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function OpsTabs() {
    const { lang } = useLanguage();
    const [activeTab, setActiveTab] = useState('marketing');

    // Default to 'zh' structure to avoid crashes during typing
    const tabs = TABS[lang as 'zh' | 'en'] || TABS['zh'];

    return (
        <div className="container mx-auto px-4 sm:px-6 py-20 pb-40">
            {/* 顶层导航 Tabs */}
            <div className="w-full overflow-x-auto scrollbar-hide mb-12">
                <div className="flex items-center gap-2 px-2 py-2 rounded-full glass-morphism border border-white/5 bg-bg-secondary/40 w-max mx-auto min-w-full sm:w-auto sm:min-w-0 sm:mx-auto">
                    {tabs.map((tab: any) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={cn(
                                "flex-shrink-0 rounded-full px-6 py-3 text-xs md:text-sm font-black tracking-widest whitespace-nowrap transition-all duration-300",
                                activeTab === tab.id
                                    ? "bg-cyan text-bg-primary shadow-[0_0_16px_rgba(6,182,212,0.4)]"
                                    : "text-white/60 hover:text-white hover:bg-white/5"
                            )}
                        >
                            {tab.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* 内容渲染区域 */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, scale: 0.98, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98, y: -10 }}
                    transition={{ duration: 0.3 }}
                >
                    {activeTab === 'marketing' && <MarketingPlan lang={lang as 'zh' | 'en'} />}
                    {activeTab === 'spreading' && <SpreadingPlan lang={lang as 'zh' | 'en'} />}
                    {activeTab === 'media' && <MediaBudget lang={lang as 'zh' | 'en'} />}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
