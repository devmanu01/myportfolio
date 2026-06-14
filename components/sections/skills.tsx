"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Server, Globe, Database, Terminal, Palette } from "lucide-react";


const skills = [
    { name: "Frontend", icon: Globe, items: ["React", "Next.js", "TypeScript", "Tailwind"] },
    { name: "Backend", icon: Server, items: ["Node.js", "Express", "Firebase", "Supabase"] },
    { name: "Core", icon: Code, items: ["DS & Algo", "OOPS", "Computer Networks", "DBMS"] },
    { name: "Database", icon: Database, items: ["MongoDB", "MySQL", "PostgreSQL"] },
    { name: "DevOps", icon: Terminal, items: ["GitHub Actions", "Docker", "CI/CD"] },
    { name: "Design", icon: Palette, items: ["Canva", "Figma", "UI/UX"] },
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

                <div className="flex flex-wrap justify-center gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-5 sm:p-8 rounded-2xl bg-accent/5 border border-accent/10 hover:border-accent/40 transition-all duration-300 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] text-left"
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
