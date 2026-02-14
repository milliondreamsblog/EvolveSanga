"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const HERO_IMAGES = [
    "/Hero/Group 16.svg",
    "/Hero/Group 17.svg",
    "/Hero/Group 18.svg",
    "/Hero/Group 19.svg",
];

export function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-full h-[600px] md:h-[700px] bg-gray-900 overflow-hidden">
            {/* Background Slider */}
            {HERO_IMAGES.map((src, index) => (
                <div
                    key={index}
                    className={cn(
                        "absolute inset-0 transition-opacity duration-1000 ease-in-out",
                        index === currentSlide ? "opacity-100" : "opacity-0"
                    )}
                >
                    {/* We use an img tag for SVGs to ensure they render sharply and cover correctly */}
                    <img
                        src={src}
                        alt={`Hero Slide ${index + 1}`}
                        className="w-full h-full object-cover object-center"
                    />
                    {/* Dark overlay for text readability */}
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>
            ))}

            {/* Content Container */}
            <div className="relative container mx-auto px-4 md:px-12 h-full flex flex-col justify-center">

                {/* "No Hunger" Card/Box Effect - Aligned Left as per screenshot */}
                <div className="max-w-xl bg-white/95 backdrop-blur-sm p-8 md:p-12 shadow-2xl mt-20 md:mt-0 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <h2 className="text-[#00BCD4] font-bold tracking-[0.2em] uppercase text-sm md:text-base mb-2 font-sans">
                        Only Hope
                    </h2>
                    <h1 className="text-6xl md:text-[5rem] font-heading font-bold text-[#003056] leading-[0.9] mb-8 uppercase tracking-tight">
                        NO HUNGER
                    </h1>

                    {/* 
                   In the screenshot, there isn't a visible button group inside the white box, 
                   but usually there are CTAs. I'll keep them but style them to match the "Support a Cause" orange if needed,
                   or the blue theme. 
                */}
                    <div className="flex gap-4">
                        <Button className="bg-[#003056] text-white hover:bg-[#004070] rounded-none px-8 py-6 uppercase font-bold text-xs tracking-wider transition-all hover:scale-105">
                            Donate Now
                        </Button>
                        <Button variant="outline" className="border-[#003056] text-[#003056] hover:bg-blue-50 rounded-none px-8 py-6 uppercase font-bold text-xs tracking-wider transition-all hover:scale-105">
                            Learn More
                        </Button>
                    </div>
                </div>

                {/* Slider Indicators */}
                <div className="absolute bottom-8 right-12 flex gap-3">
                    {HERO_IMAGES.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={cn(
                                "w-3 h-3 rounded-full transition-all duration-300 border border-white",
                                index === currentSlide
                                    ? "bg-white scale-125"
                                    : "bg-white/30 hover:bg-white/50"
                            )}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
