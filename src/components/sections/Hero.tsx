"use client";

import { useState, useEffect } from "react";
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
        <section className="relative w-full h-[700px] md:h-[850px] bg-gray-900 overflow-hidden">
            {/* Background Slider */}
            {HERO_IMAGES.map((src, index) => (
                <div
                    key={index}
                    className={cn(
                        "absolute inset-0 transition-opacity duration-1000 ease-in-out",
                        index === currentSlide ? "opacity-100" : "opacity-0"
                    )}
                >
                    <img
                        src={src}
                        alt={`Hero Slide ${index + 1}`}
                        className="w-full h-full object-cover object-center"
                    />
                </div>
            ))}

            {/* Slider Indicators */}
            <div className="absolute bottom-8 right-8 flex gap-3 z-10">
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
        </section>
    );
}
