import React from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

export const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-swat-gray relative">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-fire-500 font-tactical text-sm tracking-[0.3em] uppercase mb-2">Comms</h2>
                        <h3 className="text-4xl md:text-5xl font-bold font-tactical text-white mb-8">
                            INITIATE <span className="text-gray-500">CONTACT</span>
                        </h3>

                        <p className="text-gray-400 mb-10 leading-relaxed">
                            Ready to deploy a new design strategy? Establish a secure line of communication.
                            Our team is on standby for new directives.
                        </p>

                        <div className="space-y-6 font-mono text-sm">
                            <div className="flex items-start gap-4">
                                <MapPin className="text-fire-500 w-5 h-5 mt-1" />
                                <div>
                                    <p className="text-gray-300 font-bold">HEADQUARTERS</p>
                                    <p className="text-gray-500">Ras Al Khaimah, UAE</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Phone className="text-fire-500 w-5 h-5 mt-1" />
                                <div>
                                    <p className="text-gray-300 font-bold">PHONE LINE</p>
                                    <p className="text-gray-500">+971 50 560 3727</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Mail className="text-fire-500 w-5 h-5 mt-1" />
                                <div>
                                    <p className="text-gray-300 font-bold">ENCRYPTED MAIL</p>
                                    <p className="text-gray-500">info@elementdesign.ae</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-swat-black p-8 border border-white/5 relative">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-fire-500 to-transparent"></div>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-tactical tracking-widest text-gray-500 mb-2">CODENAME / NAME</label>
                                    <input type="text" className="w-full bg-swat-gray border border-white/10 rounded-none px-4 py-3 text-white focus:border-fire-500 focus:outline-none transition-colors text-sm" placeholder="ENTER IDENTIFIER" />
                                </div>
                                <div>
                                    <label className="block text-xs font-tactical tracking-widest text-gray-500 mb-2">CONTACT FREQ / EMAIL</label>
                                    <input type="email" className="w-full bg-swat-gray border border-white/10 rounded-none px-4 py-3 text-white focus:border-fire-500 focus:outline-none transition-colors text-sm" placeholder="ENTER EMAIL" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-tactical tracking-widest text-gray-500 mb-2">OBJECTIVE / MESSAGE</label>
                                <textarea rows="4" className="w-full bg-swat-gray border border-white/10 rounded-none px-4 py-3 text-white focus:border-fire-500 focus:outline-none transition-colors text-sm" placeholder="ENTER MISSION DETAILS"></textarea>
                            </div>
                            <button type="button" className="w-full bg-fire-600 hover:bg-fire-500 text-white font-tactical tracking-widest text-sm uppercase py-4 transition-all duration-300 flex items-center justify-center gap-2 group">
                                <span>Transmit Data</span>
                                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <footer className="absolute bottom-0 w-full text-center py-6 border-t border-white/5">
                <p className="text-xs text-gray-600 font-tactical tracking-widest">© 2026 ELEMENTS DESIGN. ALL RIGHTS RESERVED.</p>
            </footer>
        </section>
    );
};
