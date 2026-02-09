import React from 'react';
import Image1 from '../../assets/Images/Image1.jpeg';
import Image2 from '../../assets/Images/Image2.jpeg';
import Image3 from '../../assets/Images/Image3.jpeg';

const projects = [
    { id: 1, title: 'Operation: Blackout', category: 'Residential', image: Image1 },
    { id: 2, title: 'Sector 7 Office', category: 'Commercial', image: Image2 },
    { id: 3, title: 'Project: Ember', category: 'Hospitality', image: Image3 },
    { id: 4, title: 'Base Camp Alpha', category: 'Industrial', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800' },
    { id: 5, title: 'Tactical Lounge', category: 'Residential', image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&q=80&w=800' },
    { id: 6, title: 'Command Center', category: 'Office', image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800' },
];

export const Gallery = () => {
    return (
        <section id="gallery" className="py-24 bg-swat-black relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-fire-500 font-tactical text-sm tracking-[0.3em] uppercase mb-2">Portfolio</h2>
                        <h3 className="text-4xl md:text-5xl font-bold font-tactical text-white">
                            EXECUTED <span className="text-gray-500">MISSIONS</span>
                        </h3>
                    </div>
                    <button className="hidden md:block px-6 py-2 border border-fire-500/50 text-fire-500 hover:bg-fire-500 hover:text-white transition-all duration-300 font-tactical text-xs tracking-widest uppercase">
                        View All Projects
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div key={project.id} className="group relative aspect-[4/3] overflow-hidden bg-swat-gray cursor-pointer">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="text-fire-500 text-xs font-tactical tracking-widest mb-1">
                  // {project.category}
                                </span>
                                <h4 className="text-white font-bold text-xl font-tactical uppercase">
                                    {project.title}
                                </h4>
                            </div>
                            <div className="absolute top-4 right-4 text-white/50 text-xs font-mono font-bold border border-white/20 px-2 py-1">
                                IMG_00{project.id}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <button className="px-6 py-3 border border-fire-500/50 text-fire-500 hover:bg-fire-500 hover:text-white transition-all duration-300 font-tactical text-xs tracking-widest uppercase w-full">
                        View All Projects
                    </button>
                </div>
            </div>
        </section>
    );
};
