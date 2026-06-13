"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";

export const ContactSection = ({ id = "contact" }: { id?: string }) => {
    return (
        <section id={id} className="py-16 sm:py-20 md:py-24 bg-background">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-5xl mx-auto rounded-3xl bg-accent p-5 sm:p-8 md:p-16 text-black relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />

                    <div className="relative z-10 grid grid-cols-1 gap-8 sm:gap-12 md:grid-cols-2">
                        <div>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black mb-6 sm:mb-8 leading-tight">
                                Let&apos;s build <br /> something <br /> great.
                            </h1>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-black/5 rounded-xl"><Mail className="w-5 h-5" /></div>
                                    <span className="text-sm sm:text-lg font-medium break-all sm:break-normal">chauhanmanucr7@gmail.com</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-black/5 rounded-xl"><MapPin className="w-5 h-5" /></div>
                                    <span className="text-sm sm:text-lg font-medium">Meerut, India</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col justify-end">
                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <input
                                    type="text"
                                    placeholder="NAME"
                                    className="w-full bg-white/20 border-b-2 border-black/10 p-4 placeholder:text-black/50 focus:border-black focus:outline-none transition-colors font-bold"
                                />
                                <input
                                    type="email"
                                    placeholder="EMAIL"
                                    className="w-full bg-white/20 border-b-2 border-black/10 p-4 placeholder:text-black/50 focus:border-black focus:outline-none transition-colors font-bold"
                                />
                                <button className="w-full mt-4 bg-black text-white p-4 sm:p-6 rounded-2xl font-black flex items-center justify-between group hover:bg-neutral-900 transition-colors text-sm sm:text-base">
                                    SEND MESSAGE
                                    <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <footer className="mt-16 text-center text-foreground/40 text-sm font-bold tracking-widest uppercase">
                    © {new Date().getFullYear()} MANU CHAUHAN • ALL RIGHTS RESERVED
                </footer>
            </div>
        </section>
    );
};
