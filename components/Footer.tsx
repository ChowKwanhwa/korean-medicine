import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="mt-20 py-12 border-t border-border-main text-center text-text-muted text-sm px-6">
            <div className="flex flex-col items-center gap-4">
                <p className="font-medium tracking-wide">
                    <span className="text-cyan font-bold">ChainPulse Capital 链动资本</span>
                    <span className="mx-2 opacity-50">×</span>
                    <span>Korean Medicine / KM-Series</span>
                </p>
                <div className="flex items-center gap-3 opacity-60">
                    <span>Confidential — For Internal Review Only</span>
                    <span className="w-1 h-1 rounded-full bg-border-main" />
                    <span>© {currentYear}</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
