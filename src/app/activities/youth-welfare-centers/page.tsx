
"use client";

import { InterventionsTabs } from "@/components/sections/youth-welfare/InterventionsTabs";
import { WhatWeDo } from "@/components/sections/youth-welfare/WhatWeDo";
import { OurFocus } from "@/components/sections/youth-welfare/OurFocus";
import { StoriesOfChange } from "@/components/sections/youth-welfare/StoriesOfChange";

export default function YouthWelfareCentersPage() {
    return (
        <main className="w-full bg-white font-sans text-slate-800">
            <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] bg-sky-100 overflow-hidden">
                <div className="absolute inset-0 bg-slate-200">
                    <div className="w-full h-full flex items-center justify-center text-slate-400 bg-gray-200">
                        [Classroom Background Image]
                    </div>
                </div>

                <div className="absolute top-10 right-4 md:right-12 bg-white px-6 py-4 shadow-lg max-w-[300px] md:max-w-[400px]">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#00AEFF] uppercase leading-tight text-right">
                        TODAY'S YOUTH
                        <br />
                        <span className="text-[#002D5B]">TOMORROW'S FUTURE</span>
                    </h1>
                </div>

                <div className="absolute bottom-6 right-6 flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-white/50 cursor-pointer"></div>
                    <div className="w-3 h-3 rounded-full bg-white cursor-pointer"></div>
                    <div className="w-3 h-3 rounded-full bg-white/50 cursor-pointer"></div>
                </div>
            </section>

            <section className="container mx-auto px-4 md:px-8 lg:px-16 py-10 md:py-16">
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#005089] uppercase tracking-wide">
                        WHY YOUTH WELFARE CENTER
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
                    <div className="w-full md:w-2/5 flex justify-center">
                        <div className="relative w-[260px] h-[260px] md:w-[340px] md:h-[340px]">
                            <div className="absolute top-0 left-0 w-40 h-40 md:w-44 md:h-44 rounded-full border-4 border-[#87CEEB] overflow-hidden bg-gray-100 z-10">
                            </div>
                            <div className="absolute bottom-0 left-8 w-40 h-40 md:w-44 md:h-44 rounded-full border-4 border-[#00AEFF] overflow-hidden bg-gray-200 z-20">
                            </div>
                            <div className="absolute top-1/4 right-0 w-36 h-36 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gray-300 z-30">
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-3/5 text-justify">
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-3">
                            India is home to the world&apos;s largest youth population, yet millions
                            of talented young individuals from financially challenged
                            backgrounds struggle to access quality education, skill training,
                            and emotional support.
                        </p>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-3">
                            A significant percentage of students from rural areas and urban
                            slums face barriers such as limited academic resources, lack of
                            mentorship, absence of career guidance, and financial
                            constraints. Many first-generation learners drop out due to socio-
                            economic pressures, weak learning foundations, and limited
                            exposure to opportunities.
                        </p>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-3">
                            To fulfil India&apos;s vision of becoming a global knowledge and skill
                            hub, it is essential to build an ecosystem where every youth —
                            irrespective of background — has the support, skills, and
                            opportunities to excel academically, personally, and
                            professionally.
                        </p>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                            Our Youth Welfare Centers bridge this crucial gap and empower
                            young minds to transform their future.
                        </p>
                    </div>
                </div>
            </section>

            <InterventionsTabs fullWidth={true} />

            <WhatWeDo />

            <OurFocus />

            <StoriesOfChange />
        </main>
    );
}