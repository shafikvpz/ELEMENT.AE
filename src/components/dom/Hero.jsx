import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export const Hero = () => {
    return (
        <section id="home" className="relative w-full h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
            <div className="max-w-4xl mx-auto z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-fire-500 font-tactical text-sm md:text-base tracking-[0.4em] uppercase mb-4 drop-shadow-[0_0_10px_rgba(255,69,0,0.5)]">
                        Tactical Excellence
                    </h2>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black font-tactical text-white mb-6 leading-tight tracking-tighter"
                >
                    ENGINEERING THE <br />
                    <span className="text-transparent bg-clip-text bg-fire-gradient animate-pulse">EXTRAORDINARY</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="text-gray-400 text-lg md:text-xl font-sans max-w-2xl mx-auto mb-10 leading-relaxed tracking-wide"
                >
                    Premium Interior Design for Residential & Commercial Spaces across the UAE.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <button className="px-10 py-4 bg-fire-500 text-white font-tactical text-sm tracking-widest uppercase hover:bg-fire-600 transition-all duration-300 border-glow flex items-center gap-2 group">
                        Initiate Mission <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="px-10 py-4 border border-white/20 text-white font-tactical text-sm tracking-widest uppercase hover:bg-white/10 transition-all duration-300">
                        View Portfolio
                    </button>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-10 left-0 w-full flex justify-between px-10 text-white/30 font-tactical text-[10px] md:text-xs tracking-[0.2em] pointer-events-none">
                <div className="flex flex-col items-start gap-1">
                    <span>COORD: 25.2048° N, 55.2708° E</span>
                    <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        SYSTEM: OPERATIONAL
                    </span>
                </div>
                <div className="flex flex-col items-end gap-1">
                    <span>SECURITY: LEVEL ALPHA</span>
                    <span>TIMESTAMP: {new Date().toLocaleTimeString()}</span>
                </div>
            </div>

            {/* Animated Scanning Lines */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
                <motion.div
                    animate={{ y: ['-100%', '100%'] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="w-full h-px bg-fire-500"
                />
            </div>
        </section>
    );
};

