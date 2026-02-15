"use client";

import { InterventionsTabs, InterventionItem } from "@/components/sections/youth-welfare/InterventionsTabs";
import { WhatWeDo } from "@/components/sections/youth-welfare/WhatWeDo";
import { OurFocus } from "@/components/sections/youth-welfare/OurFocus";

/* ── Skill Development intervention tabs (5 tabs) ── */
const skillInterventions: InterventionItem[] = [
    {
        id: "digital-technical",
        label: "DIGITAL & TECHNICAL SKILLS TRAINING",
        description:
            "Basic & Advanced Computer Training\nCoding & Software Development Fundamentals\nIndustry-Oriented Digital Tools & Technology Skills",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 md:w-16 md:h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
            </svg>
        ),
    },
    {
        id: "employability",
        label: "EMPLOYABILITY & CAREER READINESS",
        description:
            "Resume Writing, Interview Preparation & Communication Skills\nSoft Skills Training For Workplace Readiness\nPersonality Development And Professional Etiquette Workshops",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 md:w-16 md:h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
            </svg>
        ),
    },
    {
        id: "vocational",
        label: "VOCATIONAL & PROFESSIONAL TRAINING",
        description:
            "Hands-On Vocational Training In High-Demand Trades\nCertification Programs For Skilled Employment\nIndustry-Aligned Courses For Sustainable Livelihoods",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 md:w-16 md:h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-3.06a1.5 1.5 0 010-2.58l5.1-3.06a1.5 1.5 0 011.639.02l4.907 3.06a1.5 1.5 0 010 2.54l-4.907 3.06a1.5 1.5 0 01-1.639.02zM4.5 17.5l6.42-3.86a1.5 1.5 0 011.639.02L19.5 17.5" />
            </svg>
        ),
    },
    {
        id: "mentorship-industry",
        label: "MENTORSHIP & INDUSTRY EXPOSURE",
        description:
            "Connecting Youth With Industry Mentors And Professionals\nIndustry Visits, Workshops & Real-World Project Exposure\nGuidance On Career Paths, Higher Education & Skill Specialization",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 md:w-16 md:h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
        ),
    },
    {
        id: "entrepreneurship",
        label: "ENTREPRENEURSHIP & LEADERSHIP SUPPORT",
        description:
            "Entrepreneurship Awareness And Startup Incubation Support\nLeadership Development Programs And Team-Building Activities\nFinancial Literacy And Business Planning Workshops",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 md:w-16 md:h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
            </svg>
        ),
    },
];

/* ── What We Do ── */
const skillWhatWeDo = [
    "Evolve Sangh Foundation's Skill Development & Training Programs empower underserved youth with essential technical, digital, and professional skills to enhance employability, boost confidence, and support long-term career growth.",
    "We provide hands-on training, mentorship, industry-relevant learning pathways, and career guidance — helping students become confident, future-ready, and capable of pursuing meaningful opportunities in a competitive world.",
];

/* ── Our Focus ── */
const skillFocus = [
    "Bridge the skill-gap for underserved youth",
    "Provide digital education and future-ready skillsets",
    "Strengthen employability & career confidence",
    "Support pathways to jobs, internships, or entrepreneurship",
    "Promote personal, social & professional development",
    "Reduce economic inequality through career empowerment",
    "Create confident, skilled and responsible young citizens",
];

export default function SkillDevelopmentProgramPage() {
    return (
        <main className="w-full bg-white font-sans text-slate-800">
            <section className="relative w-full h-[350px] md:h-[450px] lg:h-[550px] bg-sky-100 overflow-hidden">
                <div className="absolute inset-0 bg-slate-200">
                    <div className="w-full h-full flex items-center justify-center text-slate-400 bg-gray-200">
                        [Skill Training / Coding Workshop Background Image]
                    </div>
                </div>

                <div className="absolute top-8 left-4 md:left-10 bg-[#00AEFF]/90 px-6 py-4 max-w-[280px] md:max-w-[380px]">
                    <p className="text-sm md:text-base text-white/90 uppercase tracking-wider font-medium">
                        SKILLS THAT SHINE
                    </p>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white uppercase leading-tight">
                        FUTURES DEFINED
                    </h1>
                </div>
            </section>

            <section className="container mx-auto px-4 md:px-8 lg:px-16 py-10 md:py-14">
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#005089] uppercase tracking-wide">
                        WHY SKILL DEVELOPMENT?
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
                    <div className="w-full md:w-2/5 flex justify-center">
                        <div className="relative w-[240px] h-[240px] md:w-[300px] md:h-[300px]">
                            <div className="absolute top-0 left-0 w-36 h-36 md:w-40 md:h-40 rounded-full border-4 border-[#87CEEB] overflow-hidden bg-gray-100 z-10"></div>
                            <div className="absolute bottom-0 left-6 w-36 h-36 md:w-40 md:h-40 rounded-full border-4 border-[#00AEFF] overflow-hidden bg-gray-200 z-20"></div>
                            <div className="absolute top-1/4 right-0 w-32 h-32 md:w-36 md:h-36 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gray-300 z-30"></div>
                        </div>
                    </div>

                    <div className="w-full md:w-3/5 text-justify">
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-3">
                            In an ever-evolving world, education alone is not enough — today&apos;s youth need
                            practical skills, digital competency, confidence, and exposure to real-world learning
                            to succeed. Yet, millions of young people globally face barriers to quality skill
                            development due to financial limitations, lack of training resources, minimal
                            industry exposure, and limited access to professional mentorship.
                        </p>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-3">
                            Without the right skills, brilliant and hardworking youth often struggle for
                            employment, career direction, and economic independence — resulting in
                            untapped potential and lost opportunities.
                        </p>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                            Equipping young people with future-ready skills is key to enabling long-term
                            empowerment, sustainable livelihoods, and inclusive social growth.
                        </p>
                    </div>
                </div>
            </section>

            <InterventionsTabs
                items={skillInterventions}
                fullWidth={true}
            />

            <WhatWeDo
                title="WHAT WE DO"
                description={skillWhatWeDo}
            />

            <OurFocus
                title="OUR FOCUS"
                items={skillFocus}
            />

            <section className="w-full py-10 md:py-14 bg-white">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#005089] uppercase tracking-wide text-center mb-8">
                        GLIMPSES
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="aspect-[4/3] bg-gray-200 rounded-sm overflow-hidden flex items-center justify-center">
                                <span className="text-gray-400 text-[10px]">[Photo {i}]</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}