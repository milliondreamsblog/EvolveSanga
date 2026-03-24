"use client";

import Image from "next/image";
import { InterventionsTabs, InterventionItem } from "@/components/sections/youth-welfare/InterventionsTabs";
import { WhatWeDo } from "@/components/sections/youth-welfare/WhatWeDo";
import { OurFocus } from "@/components/sections/youth-welfare/OurFocus";

/* ── Intervention tabs ── */
const womenEmpowermentInterventions: InterventionItem[] = [
    {
        id: "skill-livelihood",
        label: "SKILL DEVELOPMENT & LIVELIHOOD TRAINING",
        description:
            "Vocational Training In Tailoring, Handicrafts, Beauty & Wellness, Food Processing, And Digital Skills\nLivelihood Support To Help Women Achieve Financial Independence\nEntrepreneurship Workshops And Small Business Development Programs",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 md:w-16 md:h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
            </svg>
        ),
    },
    {
        id: "legal-rights",
        label: "LEGAL AID & RIGHTS AWARENESS",
        description:
            "Workshops On Women's Legal Rights, Property Rights, And Domestic Violence Laws\nLegal Aid Support And Access To Counseling For Vulnerable Women\nAwareness Campaigns Against Child Marriage, Dowry, And Gender Discrimination",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 md:w-16 md:h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
            </svg>
        ),
    },
    {
        id: "self-help",
        label: "SELF-HELP GROUPS & MICROFINANCE",
        description:
            "Formation And Strengthening Of Women-Led Self-Help Groups (SHGs)\nMicrofinance Access And Financial Literacy Training For Economic Upliftment\nSavings And Credit Programs To Support Women-Owned Enterprises",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 md:w-16 md:h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
        ),
    },
    {
        id: "health-safety",
        label: "HEALTH & SAFETY PROGRAMS",
        description:
            "Health Camps, Nutrition Awareness, And Maternal Health Support For Women\nMenstrual Hygiene Education And Distribution Of Sanitary Products\nPsychosocial Support And Safe Spaces For Survivors Of Abuse",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 md:w-16 md:h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
        ),
    },
    {
        id: "leadership",
        label: "LEADERSHIP & COMMUNITY ENGAGEMENT",
        description:
            "Leadership Training, Public Speaking, And Confidence-Building Programs For Women\nCommunity-Level Advocacy And Participation In Local Governance\nAwareness Drives, Rallies, And Events To Celebrate And Inspire Women",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 md:w-16 md:h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
            </svg>
        ),
    },
];

/* ── What We Do ── */
const womenEmpowermentWhatWeDo = [
    "Evolve Sangh Foundation's Women Empowerment Program works to uplift women from underserved communities by providing them with the skills, knowledge, resources, and confidence to lead independent, dignified lives.",
    "Through skill training, legal awareness, health support, and community leadership initiatives, we ensure that every woman — regardless of her background — has access to opportunity, safety, and the tools to shape her own future.",
];

/* ── Our Focus ── */
const womenEmpowermentFocus = [
    "Promote economic independence and financial literacy for women",
    "Protect women's rights and ensure access to justice",
    "Build resilience, confidence, and leadership in women",
    "Reduce gender-based violence and social inequality",
    "Support health, hygiene, and well-being of women and girls",
    "Strengthen women-led self-help groups and community networks",
    "Create a society where every woman can live with dignity and equality",
];

export default function WomenEmpowermentPage() {
    return (
        <main className="w-full bg-white font-sans text-slate-800">

            {/* ── Hero Banner ─── */}
            <section className="relative w-full h-[350px] md:h-[450px] lg:h-[550px] overflow-hidden">
                <Image
                    src="/Homepage/hero-bg.jpg"
                    alt="Women Empowerment — Evolve Sangh Foundation"
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="100vw"
                />
                <div className="absolute top-8 left-4 md:left-10 bg-[#00AEFF]/90 px-6 py-4 max-w-[280px] md:max-w-[380px]">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white uppercase leading-tight">
                        EMPOWER <span className="font-extrabold">WOMEN</span>
                    </h1>
                </div>
            </section>

            {/* ── Why Women Empowerment? ─── */}
            <section className="container mx-auto px-4 md:px-8 lg:px-16 py-10 md:py-14">
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#005089] uppercase tracking-wide">
                        WHY WOMEN EMPOWERMENT?
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
                    <div className="w-full md:w-2/5 flex justify-center">
                        <div className="relative w-[240px] h-[240px] md:w-[300px] md:h-[300px]">
                            <div className="absolute top-0 left-0 w-36 h-36 md:w-40 md:h-40 rounded-full border-4 border-[#87CEEB] overflow-hidden bg-gray-100 z-10">
                                <Image src="/Living/image.png" alt="Women Empowerment 1" fill className="object-cover" sizes="160px" />
                            </div>
                            <div className="absolute bottom-0 left-6 w-36 h-36 md:w-40 md:h-40 rounded-full border-4 border-[#00AEFF] overflow-hidden bg-gray-200 z-20">
                                <Image src="/Activity/youth-welfare-center.jpg" alt="Women Empowerment 2" fill className="object-cover" sizes="160px" />
                            </div>
                            <div className="absolute top-1/4 right-0 w-32 h-32 md:w-36 md:h-36 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gray-300 z-30">
                                <Image src="/Living/image-1.png" alt="Women Empowerment 3" fill className="object-cover" sizes="144px" />
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-3/5 text-justify">
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-3">
                            Women form nearly half of India&apos;s population — yet millions continue to face
                            systemic barriers including poverty, lack of education, gender-based discrimination,
                            and limited access to opportunities. Empowering women is not just a social
                            responsibility — it is essential for building stronger, more equitable communities.
                        </p>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-3">
                            Women in underserved communities often bear the burden of economic hardship,
                            domestic responsibilities, health challenges, and social marginalisation — without
                            the resources, skills, or support systems needed to change their circumstances.
                            Without intervention, this cycle of inequality continues across generations.
                        </p>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                            When women are empowered with skills, knowledge, rights, and opportunities, entire
                            families and communities benefit. An empowered woman educates her children, strengthens
                            her household, and contributes meaningfully to society&apos;s progress.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Our Interventions ─── */}
            <InterventionsTabs
                items={womenEmpowermentInterventions}
                fullWidth={true}
            />

            {/* ── What We Do ─── */}
            <WhatWeDo
                title="WHAT WE DO"
                description={womenEmpowermentWhatWeDo}
            />

            {/* ── Our Focus ─── */}
            <OurFocus
                title="OUR FOCUS"
                items={womenEmpowermentFocus}
            />

            {/* ── Glimpses ─── */}
            <section className="w-full py-10 md:py-14 bg-white">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#005089] uppercase tracking-wide text-center mb-8">
                        GLIMPSES
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                        {[
                            { src: "/Activity/youth-welfare-center.jpg", alt: "Women empowerment activity 1" },
                            { src: "/Living/image.png", alt: "Women empowerment activity 2" },
                            { src: "/Activity/food-distribution.jpg", alt: "Women empowerment activity 3" },
                            { src: "/Living/image-1.png", alt: "Women empowerment activity 4" },
                            { src: "/Homepage/hero-bg.jpg", alt: "Women empowerment activity 5" },
                            { src: "/Living/Rectangle 104.png", alt: "Women empowerment activity 6" },
                            { src: "/Activity/Living2.svg", alt: "Women empowerment activity 7" },
                            { src: "/Activity/Living3.svg", alt: "Women empowerment activity 8" },
                        ].map((img, i) => (
                            <div key={i} className="relative aspect-square bg-gray-200 rounded-sm overflow-hidden">
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </main>
    );
}
