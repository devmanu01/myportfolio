"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AboutSectionProps {
  id?: string;
  title: string;
  description?: string;
  imageSrc: string;
  imageAlt: string;
  className?: string;
}

export const AboutSection = ({
  id = "about",
  title,
  description,
  imageSrc,
  imageAlt,
  className,
}: AboutSectionProps) => {
  return (
    <section id={id} className={cn("py-16 sm:py-20 md:py-24 lg:py-32 bg-background", className)}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <h2 className="text-sm font-bold tracking-[0.2em] text-accent uppercase mb-4">
              About Me
            </h2>
            <h1 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              {title}
            </h1>
            <p className="mb-8 max-w-xl text-base leading-relaxed text-foreground/70 sm:text-lg">
              {description}
            </p>
            <div className="h-1 w-20 bg-accent rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-accent/5 rounded-2xl -z-10 blur-2xl" />
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full rounded-2xl object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
