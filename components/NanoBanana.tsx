import React from 'react';

interface NanoBananaProps {
    className?: string;
    size?: number;
}

const NanoBanana: React.FC<NanoBananaProps> = ({ className = '', size = 32 }) => {
    return (
        <div
            className={`relative flex items-center justify-center bg-bg-tertiary rounded-lg border border-border-main shadow-[0_0_20px_rgba(0,229,255,0.1)] ${className}`}
            style={{ width: size, height: size }}
        >
            <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-[0_0_5px_rgba(0,229,255,1)]"
                style={{ width: size * 0.65, height: size * 0.65 }}
            >
                <path
                    d="M19 14C19 14 17.5 16.5 14.5 17.5C11.5 18.5 8 18 5 15C3 13 2 10 2 10C2 10 4 10 6 11C8 12 10 12.5 12 12C14 11.5 16 10.5 17.5 9C19 7.5 20.5 5.5 21 3C22 7 21 11 19 14Z"
                    fill="url(#banana-grad)"
                    style={{ filter: 'blur(0.5px)' }}
                />
                <path
                    d="M19 14C19 14 17.5 16.5 14.5 17.5C11.5 18.5 8 18 5 15C3 13 2 10 2 10"
                    stroke="#00e5ff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                />
                <path
                    d="M21 3C20.5 5.5 19 7.5 17.5 9C16 10.5 14 11.5 12 12C10 12.5 8 12 6 11C4 10 2 10 2 10"
                    stroke="#7c4dff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                />
                <defs>
                    <linearGradient id="banana-grad" x1="2" y1="10" x2="21" y2="3" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#00e5ff" />
                        <stop offset="1" stopColor="#7c4dff" />
                    </linearGradient>
                </defs>
            </svg>
            <div className="absolute inset-[-1px] rounded-lg bg-linear-to-br from-cyan/30 to-violet/30 -z-10" />
        </div>
    );
};

export default NanoBanana;
