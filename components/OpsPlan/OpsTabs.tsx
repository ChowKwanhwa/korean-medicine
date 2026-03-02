"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Papa from 'papaparse';
import { useLanguage } from '@/components/LanguageContext';
import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";

const MAP = {
    zh: [
        { id: 'okr', name: '📊 总览 & OKR', file: 'MEDX运营执行方案 - 总览OKR.csv' },
        { id: 'plan', name: '📅 月度执行计划', file: 'MEDX运营执行方案 - 月度执行计划.csv' },
        { id: 'matrix', name: '📱 社媒矩阵', file: 'MEDX运营执行方案 - 社媒矩阵清单.csv' },
        { id: 'kol', name: '🤝 KOL 名单', file: 'MEDX运营执行方案 - KOL名单.csv' },
        { id: 'content', name: '✍️ 内容规划', file: 'MEDX运营执行方案 - 文章内容规划.csv' },
        { id: 'event', name: '🌏 线下会议', file: 'MEDX运营执行方案 - 线下会议活动.csv' },
        { id: 'vc', name: '🏛️ 机构背书', file: 'MEDX运营执行方案 - 机构背书资源.csv' },
    ],
    en: [
        { id: 'okr', name: '📊 Overview & OKR', file: 'MEDX运营执行方案 - 总览OKR.csv' },
        { id: 'plan', name: '📅 Monthly Plan', file: 'MEDX运营执行方案 - 月度执行计划.csv' },
        { id: 'matrix', name: '📱 Social Matrix', file: 'MEDX运营执行方案 - 社媒矩阵清单.csv' },
        { id: 'kol', name: '🤝 KOL List', file: 'MEDX运营执行方案 - KOL名单.csv' },
        { id: 'content', name: '✍️ Content', file: 'MEDX运营执行方案 - 文章内容规划.csv' },
        { id: 'event', name: '🌏 Events', file: 'MEDX运营执行方案 - 线下会议活动.csv' },
        { id: 'vc', name: '🏛️ VC Backing', file: 'MEDX运营执行方案 - 机构背书资源.csv' },
    ]
};

export default function OpsTabs() {
    const { lang } = useLanguage();
    const [activeTab, setActiveTab] = useState('okr');
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const tabs = MAP[lang];
    const activeTabFile = tabs.find(t => t.id === activeTab)?.file;

    useEffect(() => {
        if (!activeTabFile) return;

        setLoading(true);
        fetch(`/data/csv/${activeTabFile}`)
            .then(res => res.text())
            .then(csv => {
                Papa.parse(csv, {
                    header: true,
                    skipEmptyLines: true,
                    complete: (results) => {
                        setData(results.data);
                        setLoading(false);
                    }
                });
            })
            .catch(err => {
                console.error('Error fetching CSV:', err);
                setLoading(false);
            });
    }, [activeTab, activeTabFile]);

    return (
        <div className="container mx-auto px-6 py-20 pb-40">
            <Tabs defaultValue="okr" className="w-full" onValueChange={setActiveTab}>
                <div className="flex justify-center mb-16 overflow-x-auto scrollbar-hide">
                    <TabsList className="h-16 rounded-full glass-morphism p-2 gap-2 border-white/5 bg-bg-secondary/40">
                        {tabs.map((tab) => (
                            <TabsTrigger
                                key={tab.id}
                                value={tab.id}
                                className="rounded-full px-8 text-[10px] font-black uppercase tracking-widest data-[state=active]:bg-cyan data-[state=active]:text-bg-primary transition-all duration-300"
                            >
                                {tab.name}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.3 }}
                        className="rounded-[60px] glass-morphism border-white/5 overflow-hidden shadow-2xl"
                    >
                        {loading ? (
                            <div className="p-12 space-y-4">
                                <Skeleton className="h-12 w-full rounded-2xl bg-white/5" />
                                <Skeleton className="h-12 w-3/4 rounded-2xl bg-white/5" />
                                <Skeleton className="h-12 w-full rounded-2xl bg-white/5" />
                                <Skeleton className="h-12 w-5/6 rounded-2xl bg-white/5" />
                            </div>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse text-left">
                                    <thead>
                                        <tr className="bg-white/5 border-b border-white/5">
                                            {data.length > 0 && Object.keys(data[0]).map((header) => (
                                                <th key={header} className="px-10 py-8 font-black text-[9px] uppercase tracking-[0.2em] text-cyan/70">
                                                    {header}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((row, i) => (
                                            <tr
                                                key={i}
                                                className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-all duration-300 group"
                                            >
                                                {Object.values(row).map((val: any, j) => (
                                                    <td key={j} className="px-10 py-8 text-sm font-medium text-text-muted group-hover:text-white transition-colors leading-relaxed">
                                                        {val}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </Tabs>
        </div>
    );
}
