import React from 'react';
import { motion } from 'framer-motion';

export const ModernBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden bg-swat-black">
            {/* Base Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center brightness-[0.4] contrast-[1.1]"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=100&w=2000')`
                }}
            />

            {/* Moving Light Leak / Glow Effect */}
            <motion.div
                animate={{
                    opacity: [0.2, 0.4, 0.2],
                    scale: [1, 1.1, 1],
                    x: [0, 50, 0],
                    y: [0, -30, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-radial from-fire-500/10 via-transparent to-transparent pointer-events-none"
            />

            {/* Subtle Noise/Grain Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://upload.wikimedia.org/wikipedia/commons/7/76/Noise_p6.png')]" />

            {/* Grid Overlay for Tactical Feel */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.05]"
                style={{
                    backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}
            />

            {/* Bottom Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-swat-black via-transparent to-swat-black/20" />
        </div>
    );
};
