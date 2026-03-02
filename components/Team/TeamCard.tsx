"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from "@/lib/utils";

interface TeamCardProps {
    member: {
        firstName: string;
        fullName: string;
        role: string;
        bio: string;
        image: string;
        tags: string[];
        accent: string;
    };
}

export default function TeamCard({ member }: TeamCardProps) {
    const accentColors: Record<string, { glow: string; badge: string; text: string }> = {
        cyan: { glow: 'rgba(6,182,212,0.12)', badge: 'bg-cyan/20 text-cyan border-cyan/30', text: 'text-cyan' },
        violet: { glow: 'rgba(139,92,246,0.12)', badge: 'bg-violet/20 text-violet border-violet/30', text: 'text-violet' },
        emerald: { glow: 'rgba(16,185,129,0.12)', badge: 'bg-emerald/20 text-emerald border-emerald/30', text: 'text-emerald' },
        gold: { glow: 'rgba(245,158,11,0.12)', badge: 'bg-gold/20 text-gold border-gold/30', text: 'text-gold' },
    };

    const c = accentColors[member.accent] || accentColors.cyan;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="group relative h-[520px] rounded-[40px] overflow-hidden border border-white/5 bg-bg-secondary shadow-2xl transition-all duration-500 cursor-pointer"
        >
            {/* Avatar Background Fill */}
            <div className="absolute inset-0 transition-all duration-700">
                <Image
                    src={member.image}
                    alt={member.fullName}
                    fill
                    className="object-cover object-top opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                {/* Gradient mask: bottom two thirds dark */}
                <div className="absolute inset-0 bg-linear-to-t from-bg-primary via-bg-primary/60 to-transparent" />
                {/* Horizontal accent line top */}
                <div className={cn(
                    "absolute top-0 left-0 right-0 h-[2px]",
                    member.accent === 'cyan' ? 'bg-linear-to-r from-transparent via-cyan/60 to-transparent' :
                        member.accent === 'violet' ? 'bg-linear-to-r from-transparent via-violet/60 to-transparent' :
                            member.accent === 'emerald' ? 'bg-linear-to-r from-transparent via-emerald/60 to-transparent' :
                                'bg-linear-to-r from-transparent via-gold/60 to-transparent'
                )} />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                {/* Role Badge */}
                <div className={cn(
                    "self-start mb-3 inline-block px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border",
                    c.badge
                )}>
                    {member.role}
                </div>

                {/* First name large */}
                <h3 className="text-5xl font-black text-white tracking-tighter leading-none mb-1">
                    {member.firstName}
                </h3>

                {/* Full name small but visible */}
                <p className={cn("text-sm font-bold mb-4 tracking-wider", c.text)}>
                    {member.fullName}
                </p>

                {/* Bio - reveals on hover */}
                <p className="text-text-muted text-sm font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75 max-w-[92%] mb-4">
                    {member.bio}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500 delay-150">
                    {member.tags.map(tag => (
                        <span key={tag} className="text-[9px] font-bold text-white/50 uppercase tracking-widest px-2.5 py-1 rounded-full border border-white/5 bg-white/5">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Corner glow on hover */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ boxShadow: `inset 0 0 120px ${c.glow}` }}
            />
        </motion.div>
    );
}
