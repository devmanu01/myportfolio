"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Server, Smartphone, Globe, Palette, Database } from "lucide-react";
import { cn } from "@/lib/utils";

const skills = [
    { name: "Frontend", icon: Globe, items: ["React", "Next.js", "TypeScript", "Tailwind"] },
    { name: "Backend", icon: Server, items: ["Node.js", "Express", "PostgreSQL", "Supabase"] },
    { name: "Mobile", icon: Smartphone, items: ["React Native", "Expo", "iOS/Android"] },
    { name: "Core", icon: Code, items: ["DS & Algo", "System Design", "Clean Architecture"] },
    { name: "Database", icon: Database, items: ["MongoDB", "Redis", "Firebase"] },
    { name: "Design", icon: Palette, items: ["Figma", "UI/UX", "Framer Motion"] },
];

export const SkillsSection = ({ id = "skills" }: { id?: string }) => {
    return (
        <section id={id} className="py-16 sm:py-20 md:py-24 bg-[#000000] overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10 sm:mb-16"
                >
                    <h2 className="text-sm font-bold tracking-[0.2em] text-accent uppercase mb-2">Capabilities</h2>
                    <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">Technical Arsenal</h1>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-5 sm:p-8 rounded-2xl bg-accent/5 border border-accent/10 hover:border-accent/40 transition-all duration-300"
                        >
                            <skill.icon className="w-10 h-10 text-accent mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold mb-4">{skill.name}</h3>
                            <div className="flex flex-wrap gap-2">
                                {skill.items.map(item => (
                                    <span key={item} className="px-3 py-1 text-xs font-medium rounded-full bg-background border border-foreground/5 text-foreground/70">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
