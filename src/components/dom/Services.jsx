import React from 'react';
import { Shield, Target, Zap, Box } from 'lucide-react';

const services = [
    {
        icon: <Target className="w-8 h-8 text-fire-500" />,
        title: 'Strategic Planning',
        description: 'Precision-based layout optimization for maximum spatial efficiency.',
    },
    {
        icon: <Shield className="w-8 h-8 text-fire-500" />,
        title: 'Industrial Design',
        description: 'Robust materials and bold aesthetics for impactful commercial spaces.',
    },
    {
        icon: <Zap className="w-8 h-8 text-fire-500" />,
        title: 'Lighting Systems',
        description: 'Dynamic illumination solutions that set the mood and enhance focus.',
    },
    {
        icon: <Box className="w-8 h-8 text-fire-500" />,
        title: 'Custom Fabrication',
        description: 'Bespoke furniture and fixtures built to exact specifications.',
    },
];

export const Services = () => {
    return (
        <section id="services" className="py-24 bg-swat-black relative overflow-hidden">
            {/* Background Mesh/Grid Effect */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-fire-500 font-tactical text-sm tracking-[0.3em] uppercase mb-2">Capabilities</h2>
                    <h3 className="text-4xl md:text-5xl font-bold font-tactical text-white">
                        TACTICAL <span className="text-gray-500">SERVICES</span>
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group p-8 bg-swat-gray border border-white/5 hover:border-fire-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,69,0,0.15)] relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-20 h-20 bg-fire-500/10 rounded-bl-full -mr-10 -mt-10 transition-all group-hover:bg-fire-500/20"></div>

                            <div className="mb-6 relative z-10">
                                {service.icon}
                            </div>
                            <h4 className="text-xl font-bold text-white mb-3 font-tactical tracking-wide group-hover:text-fire-500 transition-colors">
                                {service.title}
                            </h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
