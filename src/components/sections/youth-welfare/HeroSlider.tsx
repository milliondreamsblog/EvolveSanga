"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
    { id: 1, image: "/YouthWellfare/Slider1.svg", alt: "Youth Welfare Activity 1" },
    { id: 2, image: "/YouthWellfare/Slider2.svg", alt: "Youth Welfare Activity 2" },
    { id: 3, image: "/YouthWellfare/Slider3.svg", alt: "Youth Welfare Activity 3" },
];

export function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(timer);
    }, []);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden bg-gray-100">
            {/* Slider Images */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <Image
                        src={slide.image}
                        alt={slide.alt}
                        fill
                        className="object-cover"
                        priority={index === 0}
                    />
                </div>
            ))}

            {/* Overlay Gradient (Optional for better text readability if needed, currently not requested but good practice) */}
            {/* <div className="absolute inset-0 bg-black/10" /> */}

            {/* Text Overlay
            <div className="absolute top-10 right-4 md:right-12 bg-white px-6 py-4 shadow-lg max-w-[300px] md:max-w-[400px] z-10">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#00AEFF] uppercase leading-tight text-right">
                    TODAY'S YOUTH
                    <br />
                    <span className="text-[#002D5B]">TOMORROW'S FUTURE</span>
                </h1>
            </div> */}

            {/* Navigation Dots */}
            <div className="absolute bottom-6 right-6 flex gap-2 z-10">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-white scale-110" : "bg-white/50 hover:bg-white/80"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
