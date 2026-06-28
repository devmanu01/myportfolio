"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Menu,
  X
} from "lucide-react";
import { FaInstagram as Instagram, FaTwitter as Twitter, FaLinkedin as Linkedin } from "react-icons/fa";
import TextPressure from "@/components/text-pressure";
import { cn } from "@/lib/utils";

const socialIconMap = {
  mail: Mail,
  instagram: Instagram,
  twitter: Twitter,
  linkedin: Linkedin,
};

interface MinimalistHeroProps {
  logoText: string;
  navLinks: { label: string; href: string }[];
  mainText: string;
  readMoreLink: string;
  imageSrc: string;
  imageAlt: string;
  socialLinks: {
    icon: keyof typeof socialIconMap;
    href: string;
  }[];
  locationText: string;
  className?: string;
}

const NavLink = ({
  href,
  children,
  onClick
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <a
    href={href}
    onClick={(e) => {
      if (href.startsWith("#")) {
        e.preventDefault();
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: "smooth" });
        onClick?.();
      }
    }}
    className="text-sm font-medium tracking-widest text-white/60 transition-colors hover:text-accent"
  >
    {children}
  </a>
);

const SocialIcon = ({
  href,
  icon,
}: {
  href: string;
  icon: keyof typeof socialIconMap;
}) => {
  const Icon = socialIconMap[icon];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white/60 transition-colors hover:text-accent"
    >
      <Icon className="h-5 w-5" />
    </a>
  );
};

export function MinimalistHero({
  logoText,
  navLinks,
  mainText,
  readMoreLink,
  imageSrc,
  imageAlt,
  socialLinks,
  locationText,
  className,
}: MinimalistHeroProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div
      id="hero"
      className={cn(
        "relative flex min-h-screen w-full flex-col items-center justify-between overflow-hidden bg-[#000000] px-4 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10 lg:px-16 lg:py-12",
        className
      )}
    >
      {/* HEADER */}
      <header className="z-50 flex w-full max-w-7xl items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl md:text-2xl font-bold tracking-wider text-white"
        >
          {logoText}
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden items-center space-x-8 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.label} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="block z-50 p-2 lg:hidden text-white hover:text-white/80 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center space-y-8 bg-black/95 backdrop-blur-md lg:hidden"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-3xl font-light">{link.label}</span>
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN CONTENT */}
      <div className="relative grid w-full max-w-7xl grow grid-cols-1 items-center gap-8 py-6 sm:gap-10 sm:py-10 md:py-12 lg:grid-cols-3 lg:gap-12 lg:py-16">
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="z-20 order-3 flex flex-col items-center lg:order-1 lg:items-start"
        >
          <p className="max-w-sm text-center text-sm leading-relaxed text-white/80 sm:text-base lg:text-left lg:text-lg">
            {mainText}
          </p>
          <a
            href={readMoreLink}
            onClick={(e) => {
              if (readMoreLink.startsWith("#")) {
                e.preventDefault();
                document.querySelector(readMoreLink)?.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="mt-6 sm:mt-8 inline-flex items-center justify-center rounded-full bg-white/10 px-8 py-3.5 text-sm sm:text-base font-medium text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 border border-white/20 active:scale-95"
          >
            Read More
          </a>
        </motion.div>

        {/* CENTER IMAGE */}
        <div className="relative order-1 flex w-full items-center justify-center py-2 sm:py-6 lg:order-2 lg:py-0">
          <div className="relative flex items-center justify-center overflow-hidden lg:overflow-visible max-h-[380px] sm:max-h-[420px] md:max-h-[460px] lg:max-h-none mx-auto">
            {/* Accent glows */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="absolute z-0 h-44 w-44 rounded-full bg-accent/20 blur-[60px] sm:h-56 sm:w-56 md:h-64 md:w-64 md:blur-[80px] lg:h-80 lg:w-80 xl:h-96 xl:w-96 lg:blur-[120px]"
            />
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.8 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute z-0 h-36 w-36 rounded-full bg-accent sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-72 lg:w-72 xl:h-80 xl:w-80 opacity-60"
            />

            {/* Portrait image */}
            <motion.img
              src={imageSrc}
              alt={imageAlt}
              className="relative z-10 h-auto w-48 object-cover block mx-auto sm:w-52 md:w-56 lg:w-72 lg:scale-150 drop-shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>

        {/* RIGHT TEXT & STATS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="z-20 order-2 flex flex-col w-full items-center justify-center lg:order-3 lg:items-start"
        >
          <div className="relative flex h-[50px] w-full max-w-[90vw] items-center justify-center overflow-hidden sm:h-[70px] md:h-[90px] lg:h-[140px] lg:justify-start xl:h-[180px]">
            <TextPressure
              text="Software Engineer"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="#ffffff"
              strokeColor="#ff0000"
              minFontSize={40}
            />
          </div>

          {/* STATS COMPONENT */}
          <div className="mt-4 lg:mt-0 flex w-full max-w-[340px] sm:max-w-[420px] rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] backdrop-blur-md">
            <div className="flex flex-1 flex-col items-center justify-center border-r border-white/10">
              <span className="text-3xl sm:text-4xl font-bold text-white tracking-tight">2+</span>
              <span className="mt-1 sm:mt-2 text-[10px] tracking-[0.2em] text-white/50 uppercase font-medium">Startups</span>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center border-r border-white/10">
              <span className="text-3xl sm:text-4xl font-bold text-white tracking-tight">1.5+</span>
              <span className="mt-1 sm:mt-2 text-[10px] tracking-[0.2em] text-white/50 uppercase font-medium">Years</span>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center">
              <span className="text-3xl sm:text-4xl font-bold text-white tracking-tight">8+</span>
              <span className="mt-1 sm:mt-2 text-[10px] tracking-[0.2em] text-white/50 uppercase font-medium">Projects</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* FOOTER */}
      <footer className="z-30 mt-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 sm:gap-6 lg:flex-row lg:gap-0 pt-4 sm:pt-8 pb-4">
        <div className="flex items-center space-x-6 sm:space-x-8">
          {socialLinks.map((link, i) => (
            <SocialIcon key={i} href={link.href} icon={link.icon} />
          ))}
        </div>

        <div className="text-xs sm:text-sm font-medium tracking-widest text-white/80">
          {locationText.toUpperCase()}
        </div>
      </footer>
    </div>
  );
}
