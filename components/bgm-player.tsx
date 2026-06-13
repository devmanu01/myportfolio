"use client";

import React, { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function BgmPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize Audio
  useEffect(() => {
    const audio = new Audio("/heroBGM.mp3");
    audio.loop = true;
    audio.volume = 0.4;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  // Sync state with audio object
  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={togglePlay}
      className={cn(
        "fixed bottom-4 right-4 z-50 flex h-9 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 text-xs text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/20 focus:outline-none active:scale-95 sm:bottom-6 sm:right-6 sm:h-10 sm:px-4 sm:text-sm",
        isPlaying ? "shadow-[0_0_15px_rgba(255,255,255,0.1)]" : ""
      )}
      aria-label="Toggle background music"
    >
      <AnimatePresence mode="popLayout" initial={false}>
        {isPlaying ? (
          <motion.div
            key="pause-icon"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center"
          >
            <Pause className="h-4 w-4 text-white/80" />
          </motion.div>
        ) : (
          <motion.div
            key="play-icon"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center"
          >
            <Play className="h-4 w-4 text-white/80" />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="popLayout" initial={false}>
        {isPlaying ? (
          <motion.div
            key="equalizer"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ duration: 0.3 }}
            className="flex h-4 items-center gap-[2px] overflow-hidden"
          >
            <motion.div
              animate={{ height: ["4px", "14px", "4px"] }}
              transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
              className="w-[3px] rounded-full bg-white/80"
            />
            <motion.div
              animate={{ height: ["4px", "18px", "4px"] }}
              transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut", delay: 0.15 }}
              className="w-[3px] rounded-full bg-white/80"
            />
            <motion.div
              animate={{ height: ["4px", "12px", "4px"] }}
              transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut", delay: 0.3 }}
              className="w-[3px] rounded-full bg-white/80"
            />
            <motion.div
              animate={{ height: ["4px", "16px", "4px"] }}
              transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut", delay: 0.45 }}
              className="w-[3px] rounded-full bg-white/80"
            />
          </motion.div>
        ) : (
          <motion.span
            key="text"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ duration: 0.3 }}
            className="block overflow-hidden whitespace-nowrap font-medium tracking-widest text-white/90"
          >
            BGM
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}



