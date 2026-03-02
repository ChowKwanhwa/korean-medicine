"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import NanoBanana from './NanoBanana';
import { useLanguage } from './LanguageContext';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const pathname = usePathname();
    const { lang, toggleLang } = useLanguage();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: lang === 'zh' ? '团队' : 'Team', href: '/team' },
        { name: lang === 'zh' ? '案例' : 'Portfolio', href: '/portfolio' },
        { name: lang === 'zh' ? '计划' : 'Ops Plan', href: '/ops-plan' },
    ];

    return (
        <nav className={cn(
            "fixed top-4 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 w-[95%] max-w-7xl",
            scrolled ? "top-2" : "top-6"
        )}>
            <div className={cn(
                "flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500",
                scrolled
                    ? "glass-morphism py-2"
                    : "bg-transparent"
            )}>
                <Link href="/" className="flex items-center gap-3 group">
                    <NanoBanana size={32} />
                    <span className="font-black text-lg tracking-tighter text-glow-cyan hidden sm:block">
                        ChainPulse <span className="text-cyan">Ops</span>
                    </span>
                </Link>

                <div className="flex items-center gap-2">
                    <NavigationMenu className="hidden md:flex">
                        <NavigationMenuList className="gap-1">
                            {navLinks.map((link) => (
                                <NavigationMenuItem key={link.href}>
                                    <Link href={link.href} legacyBehavior passHref>
                                        <NavigationMenuLink
                                            className={cn(
                                                navigationMenuTriggerStyle(),
                                                "bg-transparent hover:bg-white/10 hover:text-cyan font-bold text-xs uppercase tracking-widest transition-colors",
                                                pathname === link.href && "text-cyan bg-white/5"
                                            )}
                                        >
                                            {link.name}
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>

                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={toggleLang}
                        className="rounded-full gap-2 px-4 hover:bg-cyan/10 hover:text-cyan text-[10px] font-black tracking-widest uppercase border border-white/5"
                    >
                        <Globe className="w-3 h-3 text-cyan" />
                        {lang === 'zh' ? 'EN' : '中'}
                    </Button>
                </div>
            </div>
        </nav>
    );
}
