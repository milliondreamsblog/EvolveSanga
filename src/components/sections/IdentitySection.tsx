"use client";

import Image from "next/image";

export function IdentitySection() {
    return (
        <section className="py-0 bg-white">
            {/* Blue Title Bar */}
            <div className="w-full bg-[#0067A5] py-5 mb-12 md:mb-16">
                <h2 className="font-heading text-5xl md:text-6xl text-white text-center uppercase tracking-wide">
                    OUR IDENTITY
                </h2>
            </div>

            <div className="w-full px-6 md:px-12 lg:px-20 pb-16 md:pb-24">

                <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 items-center">
                    {/* Left: Image Collage (smaller) */}
                    <div className="relative w-full h-[300px] md:h-[380px]">
                        {/* 
                           Simulating the collage from the screenshot using available assets or placeholders.
                           Structure: 
                           - Top Left: Large rectangle
                           - Bottom Left: Square
                           - Right: Tall rectangle
                           - Center Overlay: Circular Logo
                        */}

                        {/* Decoration: Background shapes if needed, keeping it simple for now */}

                        {/* Image 1: Main top-left */}
                        <div className="absolute top-0 left-0 w-[60%] h-[55%] overflow-hidden rounded-sm shadow-md z-10">
                            <Image
                                src="/Hero/Group 18.svg" // Using Group 18 as placeholder
                                alt="Volunteers working"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Image 2: Bottom-left */}
                        <div className="absolute bottom-0 left-[5%] w-[45%] h-[40%] overflow-hidden rounded-sm shadow-md z-20">
                            <Image
                                src="/Hero/Group 19.svg" // Using Group 19 as placeholder
                                alt="Community service"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Image 3: Right tall */}
                        <div className="absolute top-[10%] right-0 w-[45%] h-[80%] overflow-hidden rounded-sm shadow-md z-0">
                            <Image
                                src="/Hero/Group 17.svg" // Using Group 17 as placeholder
                                alt="Group activity"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Center Logo Overlay */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center shadow-xl z-30 p-3">
                            <Image
                                src="/about/EVOLVE_final_LOGO 1.png"
                                alt="Evolve Logo"
                                width={120}
                                height={120}
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Right: Text Content */}
                    <div>
                        <p
                            className="text-gray-700"
                            style={{
                                fontFamily: "'Open Sans', sans-serif",
                                fontWeight: 400,
                                fontSize: "20px",
                                lineHeight: "100%",
                                letterSpacing: "0%",
                                textAlign: "justify",
                            }}
                        >
                            Evolve Sangh Foundation is a nonprofit dedicated to uplifting
                            underprivileged youth in India. Our mission-driven programs cater to
                            students who lack basic necessities, educational resources, or
                            emotional support. Through grassroots initiatives like free food
                            distribution in slums, midday meals in schools, stationery drives,
                            and personalized career mentoring, we aim to break the cycle of
                            poverty and despair. Our Youth Welfare Centers provide holistic
                            care—including hostel, food, coaching, mental wellness, and
                            value-based education. Anchored in compassion and guided by purpose,
                            we believe every young mind deserves the tools, support, and
                            environment to thrive.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
