"use client";

import React from "react";
import { motion } from "framer-motion";
import { Database, PenTool, GitMerge } from "lucide-react";
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiNodedotjs, SiExpress, SiFirebase, SiSupabase,
  SiMongodb, SiMysql, SiPostgresql,
  SiDocker, SiGithubactions, SiCanva, SiFigma
} from "react-icons/si";
import { FaCode, FaNetworkWired, FaLayerGroup } from "react-icons/fa";

const skillCategories = [
  {
    title: "FRONTEND & DESIGN",
    items: [
      { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
      { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
      { name: "Figma", icon: SiFigma, color: "text-[#F24E1E]" },
      { name: "Canva", icon: SiCanva, color: "text-[#00C4CC]" },
      { name: "UI/UX", icon: PenTool, color: "text-white/80" },
    ]
  },
  {
    title: "BACKEND",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
      { name: "Express.js", icon: SiExpress, color: "text-white" },
      { name: "Firebase", icon: SiFirebase, color: "text-[#FFCA28]" },
      { name: "Supabase", icon: SiSupabase, color: "text-[#3ECF8E]" },
    ]
  },
  {
    title: "DATABASE & DEVOPS",
    items: [
      { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
      { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]" },
      { name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "text-[#2088FF]" },
      { name: "CI/CD", icon: GitMerge, color: "text-white/80" },
    ]
  },
  {
    title: "CORE FUNDAMENTALS",
    items: [
      { name: "DS & Algo", icon: FaCode, color: "text-white/80" },
      { name: "OOPS", icon: FaLayerGroup, color: "text-white/80" },
      { name: "DBMS", icon: Database, color: "text-white/80" },
      { name: "Computer Networks", icon: FaNetworkWired, color: "text-white/80" },
    ]
  }
];

export const SkillsSection = ({ id = "skills" }: { id?: string }) => {
  return (
    <section id={id} className="py-16 sm:py-20 md:py-24 bg-[#000000] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-sm font-bold tracking-[0.2em] text-white/50 uppercase mb-3">Capabilities</h2>
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight">Technical Arsenal</h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl overflow-hidden relative">

          {/* Subtle grid accent background */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />

          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`p-6 sm:p-10 relative ${index === 0 ? 'border-b md:border-r md:border-b border-white/10' :
                  index === 1 ? 'border-b border-white/10' :
                    index === 2 ? 'border-b md:border-b-0 md:border-r border-white/10' :
                      ''
                }`}
            >
              <h3 className="text-xs sm:text-sm font-bold tracking-widest text-white/40 uppercase mb-6 sm:mb-8">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {category.items.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl border border-white/10 bg-black/40 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default group"
                  >
                    <item.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${item.color} group-hover:scale-110 transition-transform`} />
                    <span className="text-xs sm:text-sm font-medium text-white/90">{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
