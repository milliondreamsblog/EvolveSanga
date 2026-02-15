"use client";

import { InterventionsTabs, InterventionItem } from "@/components/sections/youth-welfare/InterventionsTabs";
import { WhatWeDo } from "@/components/sections/youth-welfare/WhatWeDo";
import { OurFocus } from "@/components/sections/youth-welfare/OurFocus";

/* ── Food Drive intervention tabs (3 tabs) ── */
const foodDriveInterventions: InterventionItem[] = [
    {
        id: "community-food",
        label: "COMMUNITY FOOD DRIVES",
        description:
            "Freshly Cooked Meals Distributed In Urban Slums And Low-Income Settlements\nNutritious Food Packages For Vulnerable Families And Children\nRegular Distribution To Ensure Continuity And Trust Within Communities",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 md:w-16 md:h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
        ),
    },
    {
        id: "rural-outreach",
        label: "RURAL FOOD OUTREACH",
        description:
            "Reaching Remote Villages And Tribal Communities With Essential Food Supplies\nPartnership With Local Bodies For Last-Mile Delivery\nSeasonal And Emergency Food Relief During Natural Disasters And Crises",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 md:w-16 md:h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
            </svg>
        ),
    },
    {
        id: "midday-meal",
        label: "MID-DAY MEAL SUPPORT FOR SCHOOLS",
        description:
            "Nutritious Mid-Day Meals For Government And Community School Students\nSupporting Schools Where Children Depend On School Meals As Primary Nutrition\nPromoting Regular Attendance And Reducing Dropout Through Meal Programs",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 md:w-16 md:h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
            </svg>
        ),
    },
];

/* ── What We Do ── */
const foodDriveWhatWeDo = [
    "Evolve Sangh Foundation's Free Food Drive Programs ensure that underserved communities — including slum dwellers, rural families, and school-going children — receive nutritious meals regularly.",
    "Through community food drives, rural outreach, and school-based meal support, we provide access to healthy food for those who need it the most, reducing hunger and supporting overall growth, learning, and well-being.",
];

/* ── Our Focus ── */
const foodDriveFocus = [
    "Fight hunger and support nutritional well-being",
    "Ensure children receive adequate nutrition for healthy growth",
    "Reduce dropout rates by supporting mid-day meals in schools",
    "Provide dignity and relief to struggling families",
    "Prioritize underserved communities in both urban and rural settings",
    "Encourage community participation and volunteer engagement",
    "Build healthier, happier, and more resilient communities",
];

export default function FreeeFoodDrivePage() {
    return (
        <main className="w-full bg-white font-sans text-slate-800">
            {/* HERO SECTION */}
            <section className="relative w-full h-[350px] md:h-[450px] lg:h-[550px] bg-sky-100 overflow-hidden">
                <div className="absolute inset-0 bg-slate-200">
                    <div className="w-full h-full flex items-center justify-center text-slate-400 bg-gray-200">
                        [Food Distribution Background Image]
                    </div>
                </div>

                {/* Overlay Text Box (Top Left) */}
                <div className="absolute top-8 left-4 md:left-10 bg-[#00AEFF]/90 px-6 py-4 max-w-[280px] md:max-w-[380px]">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white uppercase leading-tight">
                        FOOD <span className="font-extrabold">FOR ALL</span>
                    </h1>
                </div>
            </section>

            {/* WHY FOOD SECURITY SECTION */}
            <section className="container mx-auto px-4 md:px-8 lg:px-16 py-10 md:py-14">
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#005089] uppercase tracking-wide">
                        WHY FOOD SECURITY?
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
                    {/* Left: Image Collage */}
                    <div className="w-full md:w-2/5 flex justify-center">
                        <div className="relative w-[240px] h-[240px] md:w-[300px] md:h-[300px]">
                            <div className="absolute top-0 left-0 w-36 h-36 md:w-40 md:h-40 rounded-full border-4 border-[#87CEEB] overflow-hidden bg-gray-100 z-10"></div>
                            <div className="absolute bottom-0 left-6 w-36 h-36 md:w-40 md:h-40 rounded-full border-4 border-[#00AEFF] overflow-hidden bg-gray-200 z-20"></div>
                            <div className="absolute top-1/4 right-0 w-32 h-32 md:w-36 md:h-36 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gray-300 z-30"></div>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="w-full md:w-3/5 text-justify">
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-3">
                            Food is a basic human right — yet millions around the world continue to struggle
                            for one nutritious meal a day. Poverty, rising living costs, unstable incomes, and
                            lack of resources force vulnerable families, especially children, to compromise on
                            nutrition and well-being.
                        </p>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-3">
                            For children and youth, food insecurity leads to malnutrition, poor concentration,
                            lower academic performance, and long-term health challenges. For struggling
                            families, daily sustenance often becomes an overwhelming concern, limiting their
                            ability to focus on education, livelihood, or personal development.
                        </p>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                            Ensuring access to nutritious food is essential not only to fight hunger, but also
                            to support dignity, health, and equal opportunity for every individual —
                            irrespective of socio-economic background.
                        </p>
                    </div>
                </div>
            </section>

            {/* OUR INTERVENTIONS — full width */}
            <InterventionsTabs
                items={foodDriveInterventions}
                fullWidth={true}
            />

            {/* WHAT WE DO */}
            <WhatWeDo
                title="WHAT WE DO"
                description={foodDriveWhatWeDo}
            />

            {/* OUR FOCUS */}
            <OurFocus
                title="OUR FOCUS"
                items={foodDriveFocus}
            />

            {/* GLIMPSES SECTION — 2 rows × 3 cols */}
            <section className="w-full py-10 md:py-14 bg-white">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#005089] uppercase tracking-wide text-center mb-8">
                        GLIMPSES
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
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
