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
import { Globe, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const pathname = usePathname();
    const { lang, toggleLang } = useLanguage();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => { setMobileOpen(false); }, [pathname]);

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
            {/* ── Main bar ── */}
            <div className={cn(
                "flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500",
                scrolled || mobileOpen ? "glass-morphism py-2" : "bg-transparent"
            )}>
                <Link href="/" className="flex items-center gap-3 group">
                    <NanoBanana size={32} />
                    <span className="font-black text-lg tracking-tighter text-glow-cyan hidden sm:block">
                        ChainPulse <span className="text-cyan">Ops</span>
                    </span>
                </Link>

                <div className="flex items-center gap-2">
                    {/* Desktop nav */}
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

                    {/* Language toggle */}
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={toggleLang}
                        className="rounded-full gap-2 px-4 hover:bg-cyan/10 hover:text-cyan text-[10px] font-black tracking-widest uppercase border border-white/5"
                    >
                        <Globe className="w-3 h-3 text-cyan" />
                        {lang === 'zh' ? 'EN' : '中'}
                    </Button>

                    {/* Hamburger — mobile only */}
                    <button
                        className="md:hidden flex items-center justify-center w-9 h-9 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                        onClick={() => setMobileOpen(prev => !prev)}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X size={16} className="text-cyan" /> : <Menu size={16} className="text-white" />}
                    </button>
                </div>
            </div>

            {/* ── Mobile drawer ── */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0, y: -8, scaleY: 0.95 }}
                        animate={{ opacity: 1, y: 0, scaleY: 1 }}
                        exit={{ opacity: 0, y: -8, scaleY: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        style={{ originY: 0 }}
                        className="mt-2 rounded-[28px] glass-morphism border border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-4 gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        "flex items-center gap-3 px-5 py-4 rounded-2xl text-sm font-black uppercase tracking-widest transition-all",
                                        pathname === link.href
                                            ? "text-cyan bg-cyan/10"
                                            : "text-white/70 hover:text-white hover:bg-white/5"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
