"use client";

import { MinimalistHero } from "@/components/hero";
import { AboutSection } from "@/components/sections/about";
import { SkillsSection } from "@/components/sections/skills";
import { ProjectsSection } from "@/components/sections/projects";
import { ContactSection } from "@/components/sections/contact";
import SkillsMarquee from "@/components/skills-marquee";

export default function Home() {
  const navLinks = [
    { label: "ABOUT", href: "#about" },
    { label: "SKILLS", href: "#skills" },
    { label: "PROJECTS", href: "#projects" },
    { label: "CONTACT", href: "#contact" },
  ];

  const socialLinks = [
    { icon: "mail", href: "mailto:chauhanmanucr7@gmail.com" },
    { icon: "instagram", href: "https://www.instagram.com/chauhanmanu01/" },
    { icon: "twitter", href: "#" },
    { icon: "linkedin", href: "https://www.linkedin.com/in/manu-chauhan-2704142a7/" },
  ] as const;

  return (
    <main className="min-h-screen">
      <MinimalistHero
        logoText="MANU CHAUHAN."
        navLinks={navLinks}
        mainText="Turning caffeine into code and ideas into scalable realities — full-stack by execution, leader by instinct. I don’t just build projects, I engineer impact."
        readMoreLink="#about"
        imageSrc="/hero-portrait.png.png"
        imageAlt="Portrait of Manu Chauhan"
        overlayText={{
          part1: "SOFTWARE",
          part2: "DEVELOPER",
        }}
        socialLinks={socialLinks as any}
        locationText="Meerut, India"
      />

      <AboutSection
        title="Passionate about building modern web experiences."
        description="I am a software developer with a deep focus on creating high-performance, accessible, and visually stunning applications. With expertise in Next.js, TypeScript, and modern UI/UX principles, I bridge the gap between complex backend logic and intuitive frontend design."
        imageSrc="https://shadcnblocks.com/images/block/placeholder-1.svg"
        imageAlt="Working on code"
      />

      <SkillsSection />
      <SkillsMarquee />
      

      <ProjectsSection />

      <ContactSection />
    </main>
  );
}

