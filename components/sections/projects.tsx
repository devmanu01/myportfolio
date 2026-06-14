"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";

const projects = [
    {
        title: "EcoVision",
        description: "EcoVision is a full-stack web application that combines environmental data visualization, AI-powered insights, and predictive analytics to monitor and understand global climate and ecological changes. It provides users with dynamic visualizations, data-driven predictions, interactive geographical maps, and deep AI-powered insights concerning environmental trends and actionable solutions.",
        image: "https://ecovision-one.vercel.app/dashboard",
        tags: ["Next.js","Google Gemini AI integration","Leaflet.js","Typescript","Google Auth"],
        link: "https://ecovision-one.vercel.app/dashboard",
        github: "https://github.com/devmanu01/ecovision"
    },
    {
        title: "TripVerse",
        description: "TripVerse is a modern, AI-powered travel companion designed to revolutionize how you plan and experience your journeys. From generating personalized trip itineraries to seeking immediate travel advice via an integrated chatbot, TripVerse provides an all-in-one platform for your globetrotting needs.",
        image: "https://trip-verse.netlify.app/",
        tags: ["Next.js","MySql","Prisma","Express.js","Typescript","Google Gemini AI integration"],
        link: "https://trip-verse.netlify.app/",
        github: "https://github.com/i-ankit01/TripVerse"
    },
];

export const ProjectsSection = ({ id = "projects" }: { id?: string }) => {
    return (
        <section id={id} className="py-16 sm:py-20 md:py-24 bg-[#000000]">
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
