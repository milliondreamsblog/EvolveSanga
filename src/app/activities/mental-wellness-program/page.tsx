"use client";

import { InterventionsTabs, InterventionItem } from "@/components/sections/youth-welfare/InterventionsTabs";
import { WhatWeDo } from "@/components/sections/youth-welfare/WhatWeDo";
import { OurFocus } from "@/components/sections/youth-welfare/OurFocus";
import Image from "next/image";

/* ── Mental-wellness-specific intervention tabs ── */
const mentalWellnessInterventions: InterventionItem[] = [
    {
        id: "wellness-workshops",
        label: "WELLNESS & AWARENESS WORKSHOPS",
        description:
            "Sessions On Emotional Intelligence, Stress Management & Self-Awareness\nGuidance On Mindfulness, Healthy Relationships & Resilience Building\nAwareness Drives To Break Stigma And Encourage Open Conversations",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 md:w-16 md:h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>
        ),
    },
    {
        id: "counseling",
        label: "PROFESSIONAL COUNSELING & SUPPORT",
        description:
            "One-On-One And Group Counseling Sessions For Emotional Well-Being\nSafe, Confidential Spaces For Students To Share Challenges\nProfessional Guidance On Academic Stress, Personal Issues & Life Decisions",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 md:w-16 md:h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
            </svg>
        ),
    },
    {
        id: "life-skills",
        label: "LIFE-SKILLS & MEDITATION TRAINING",
        description:
            "Daily Meditation And Mindfulness Practices For Mental Clarity\nWorkshops On Time Management, Decision Making & Conflict Resolution\nBuilding Emotional Intelligence And Positive Coping Mechanisms",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 md:w-16 md:h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
            </svg>
        ),
    },
    {
        id: "preventive",
        label: "PREVENTIVE MENTAL HEALTH PRACTICE",
        description:
            "Early Identification And Intervention For Mental Health Concerns\nRegular Wellness Check-Ins And Peer Support Programs\nCommunity-Based Mental Health Awareness Campaigns",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 md:w-16 md:h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
        ),
    },
    {
        id: "community-engagement",
        label: "COMMUNITY ENGAGEMENT & AWARENESS",
        description:
            "Organizing Community Mental Health Awareness Drives And Events\nPartnership With Schools, Colleges & Local Organizations\nTraining Community Volunteers As Mental Health First Responders",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 md:w-16 md:h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
        ),
    },
];

/* ── Mental-wellness What We Do ── */
const mentalWellnessWhatWeDo = [
    "Evolve Sangh Foundation's Mental Wellness Program provides accessible emotional support, awareness, and preventive mental health services for young individuals and underserved communities.",
    "Our program fosters resilience, emotional intelligence, confidence, and positive coping abilities by creating nurturing spaces where individuals can speak freely, seek guidance, and receive tools to manage life challenges with dignity and strength.",
];

/* ── Mental-wellness Our Focus ── */
const mentalWellnessFocus = [
    "Enhance emotional resilience and life-skills",
    "Make mental wellness accessible, safe & stigma-free",
    "Support students and youth through academic & career stress",
    "Create empathetic, socially aware, and emotionally strong individuals",
    "Promote preventive mental health and early intervention",
    "Strengthen community support systems for collective well-being",
    "Empower young minds to lead healthier, more confident lives",
];

import { MentalWellnessSlider } from "@/components/sections/mental-wellness/MentalWellnessSlider";

export default function MentalWellnessProgramPage() {
    return (
        <main className="w-full bg-white font-sans text-slate-800">
            <MentalWellnessSlider />

            <section className="container mx-auto px-4 md:px-8 lg:px-16 py-10 md:py-14">
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#005089] uppercase tracking-wide">
                        WHY MENTAL WELLNESS?
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
                    <div className="w-full md:w-2/5 flex justify-center">
                        <div className="relative w-[240px] h-[240px] md:w-[300px] md:h-[300px]">
                            <div className="absolute top-0 left-0 w-36 h-36 md:w-40 md:h-40 rounded-full border-4 border-[#87CEEB] overflow-hidden bg-gray-100 z-10">
                                <Image src="/MentalWellness/circle1.png" alt="Mental Wellness 1" fill className="object-cover" />
                            </div>
                            <div className="absolute bottom-0 left-6 w-36 h-36 md:w-40 md:h-40 rounded-full border-4 border-[#00AEFF] overflow-hidden bg-gray-200 z-20">
                                <Image src="/MentalWellness/cirlce2.png" alt="Mental Wellness 2" fill className="object-cover" />
                            </div>
                            <div className="absolute top-1/4 right-0 w-32 h-32 md:w-36 md:h-36 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gray-300 z-30">
                                <Image src="/MentalWellness/circle3.png" alt="Mental Wellness 3" fill className="object-cover" />
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-3/5 text-justify">
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-3">
                            Mental well-being is a fundamental pillar of human development, yet millions
                            around the world struggle in silence due to stigma, lack of awareness, limited
                            access to support systems, and socio-economic constraints.
                        </p>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-3">
                            Young people, students, and vulnerable communities often experience high
                            levels of stress, emotional fatigue, anxiety, academic and career pressure, and
                            social isolation — often without access to safe spaces or professional
                            guidance.
                        </p>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-3">
                            When mental health needs are ignored, it affects academic performance,
                            personal confidence, career growth, relationships, and overall quality of life.
                            To build stronger societies and future-ready individuals, mental wellness must
                            be prioritized as a core part of holistic development.
                        </p>
                    </div>
                </div>
            </section>

            <InterventionsTabs
                items={mentalWellnessInterventions}
                fullWidth={true}
            />

            <WhatWeDo
                title="WHAT WE DO"
                description={mentalWellnessWhatWeDo}
            />

            <OurFocus
                title="OUR FOCUS"
                items={mentalWellnessFocus}
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