"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Instagram,
  Twitter,
  Linkedin,
  Menu,
  X
} from "lucide-react";
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
  overlayText: {
    part1: string;
    part2: string;
  };
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
  overlayText,
  socialLinks,
  locationText,
  className,
}: MinimalistHeroProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div
      id="hero"
      className={cn(
        "relative flex min-h-screen w-full flex-col items-center justify-between overflow-hidden bg-[#000000] px-4 py-8 sm:px-6 md:px-10 md:py-12 lg:px-16",
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
        <nav className="hidden items-center space-x-8 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.label} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="block z-50 p-2 md:hidden text-white hover:text-white/80 transition-colors"
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
            className="fixed inset-0 z-40 flex flex-col items-center justify-center space-y-8 bg-black/95 backdrop-blur-md md:hidden"
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
      <div className="relative grid w-full max-w-7xl grow grid-cols-1 items-center gap-12 py-10 sm:py-16 md:grid-cols-3 md:gap-8 lg:gap-12">
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="z-20 order-3 flex flex-col items-center md:order-1 md:items-start"
        >
          <p className="max-w-sm text-center text-base leading-relaxed text-white/80 md:text-left lg:text-lg">
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
        <div className="relative order-1 flex w-full items-center justify-center py-6 sm:py-10 md:order-2 md:py-0">
          <div className="relative flex items-center justify-center">
            {/* Accent glows */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="absolute z-0 h-48 w-48 rounded-full bg-accent/20 blur-[80px] sm:h-64 sm:w-64 md:h-80 md:w-80 lg:h-96 lg:w-96 md:blur-[120px]"
            />
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.8 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute z-0 h-40 w-40 rounded-full bg-accent sm:h-56 sm:w-56 md:h-72 md:w-72 lg:h-80 lg:w-80 opacity-60"
            />

            {/* Portrait image */}
            <motion.img
              src={imageSrc}
              alt={imageAlt}
              className="relative z-10 w-48 scale-125 object-cover md:w-56 lg:w-64 drop-shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1.25 }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>

        {/* RIGHT TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="z-20 order-2 flex w-full items-center justify-center md:order-3 md:justify-start"
        >
          <div className="relative flex h-[80px] w-full max-w-[90vw] items-center justify-center overflow-hidden sm:h-[100px] md:h-[140px] md:justify-start lg:h-[180px]">
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
        </motion.div>
      </div>

      {/* FOOTER */}
      <footer className="z-30 mt-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 md:flex-row md:gap-0 pt-8 pb-4">
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
