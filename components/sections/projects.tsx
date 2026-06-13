"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "EcoSphere AI",
        description: "Sustainability platform using machine learning to optimize carbon footprint for enterprises.",
        image: "https://shadcnblocks.com/images/block/placeholder-2.svg",
        tags: ["Next.js", "Python", "AWS"],
        link: "#",
        github: "#"
    },
    {
        title: "Nova Dashboard",
        description: "High-performance financial analytics suite with real-time data visualization.",
        image: "https://shadcnblocks.com/images/block/placeholder-3.svg",
        tags: ["TypeScript", "D3.js", "Redis"],
        link: "#",
        github: "#"
    },
];

export const ProjectsSection = ({ id = "projects" }: { id?: string }) => {
    return (
        <section id={id} className="py-16 sm:py-20 md:py-24 bg-foreground/[0.02]">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10 sm:mb-16"
                >
                    <h2 className="text-sm font-bold tracking-[0.2em] text-accent uppercase mb-2">Portfolio</h2>
                    <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">Selected Works</h1>
                </motion.div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col group"
                        >
                            <div className="relative overflow-hidden rounded-2xl bg-black mb-6 aspect-video">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                />
                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <a href={project.github} className="p-3 bg-background rounded-full hover:bg-accent hover:text-white transition-colors">
                                        <Github className="w-5 h-5" />
                                    </a>
                                    <a href={project.link} className="p-3 bg-background rounded-full hover:bg-accent hover:text-white transition-colors">
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-2 sm:text-2xl">{project.title}</h3>
                            <p className="text-foreground/60 mb-4 line-clamp-2 md:line-clamp-none">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs font-mono text-accent">#{tag}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
