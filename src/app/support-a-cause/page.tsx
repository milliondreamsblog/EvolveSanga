"use client";

import { useState } from "react";

export default function SupportACausePage() {
    const [selectedAmount, setSelectedAmount] = useState<string>("5000");

    return (
        <main className="w-full bg-white font-sans text-slate-800">
            <section className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] bg-sky-100 overflow-hidden">
                <div className="absolute inset-0 bg-slate-200">
                    <div className="w-full h-full flex items-center justify-center text-slate-400 bg-gray-200">
                        [Training Workshop Background Image]
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
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">

                    <div className="w-full lg:w-1/2">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#005089] uppercase tracking-wide mb-6">
                            TYARI KAL KI
                        </h2>

                        <div className="space-y-4 text-xs md:text-sm text-slate-700 leading-relaxed text-justify">
                            <p>
                                Every young mind carries the potential to shape tomorrow. But for thousands of
                                underprivileged youth in India, dreams are cut short due to lack of proper guidance,
                                resources, and opportunities. Without the right support, many talented students are
                                unable to compete in today&apos;s world, leaving their future uncertain.
                            </p>
                            <p>
                                Through Evolve Sangh Foundation&apos;s <strong>&apos;Tyari Kal Ki&apos;</strong> campaign, we are preparing these young
                                dreamers for a brighter tomorrow. By providing career counseling, mentorship, skill
                                development training, and academic support, we ensure that no talent goes unnoticed and
                                no dream remains unfulfilled.
                            </p>
                            <p>
                                <strong>But we cannot do this alone.</strong> Your support can help a student take their first confident
                                step towards a successful future. By contributing to Tyari Kal Ki, you are not just
                                empowering an individual—you are uplifting an entire family and shaping India&apos;s future
                                leaders.
                            </p>
                            <p className="text-[#005089] font-semibold">
                                👉 <strong>Donate today</strong> and be the reason a student dares to dream bigger. Together, we can
                                prepare them for tomorrow.
                            </p>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <div className="border border-gray-200 rounded-sm shadow-sm">
                            <div className="bg-white px-6 py-5 text-center border-b border-gray-100">
                                <h3 className="text-xl md:text-2xl font-extrabold text-[#005089] uppercase tracking-wide">
                                    DONATE TO SUPPORT FUTURE
                                </h3>
                                <p className="text-xs md:text-sm text-slate-500 mt-2 font-medium uppercase tracking-wider">
                                    MAKE A DIFFERENCE
                                </p>
                            </div>

                            <div className="px-6 py-6 space-y-5">
                                <div className="flex items-center justify-center gap-6 flex-wrap">
                                    {["5000", "10000", "15000"].map((amt) => (
                                        <label key={amt} className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="amount"
                                                value={amt}
                                                checked={selectedAmount === amt}
                                                onChange={(e) => setSelectedAmount(e.target.value)}
                                                className="w-4 h-4 text-[#005089] accent-[#005089]"
                                            />
                                            <span className="text-xs md:text-sm font-medium text-slate-700">
                                                Rs {Number(amt).toLocaleString()}
                                            </span>
                                        </label>
                                    ))}
                                </div>

                                <p className="text-[10px] md:text-xs text-center text-slate-500 uppercase tracking-wide font-medium">
                                    YOUR DONATION WILL HELP TAKE UP/LIFT THE FUTURE OF NEEDY CHILDREN AND FAMILIES
                                </p>

                                <div className="space-y-3">
                                    <input
                                        type="text"
                                        placeholder="Other Amount"
                                        className="w-full border border-gray-300 rounded-sm px-3 py-2 text-xs md:text-sm focus:outline-none focus:border-[#005089] text-slate-700"
                                    />

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <input type="text" placeholder="Enter Full Name" className="border border-gray-300 rounded-sm px-3 py-2 text-xs md:text-sm focus:outline-none focus:border-[#005089] text-slate-700" />
                                        <input type="email" placeholder="Enter Email ID" className="border border-gray-300 rounded-sm px-3 py-2 text-xs md:text-sm focus:outline-none focus:border-[#005089] text-slate-700" />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <input type="tel" placeholder="Enter Mobile No" className="border border-gray-300 rounded-sm px-3 py-2 text-xs md:text-sm focus:outline-none focus:border-[#005089] text-slate-700" />
                                        <input type="text" placeholder="DOB" className="border border-gray-300 rounded-sm px-3 py-2 text-xs md:text-sm focus:outline-none focus:border-[#005089] text-slate-700" />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <input type="text" placeholder="Pan No" className="border border-gray-300 rounded-sm px-3 py-2 text-xs md:text-sm focus:outline-none focus:border-[#005089] text-slate-700" />
                                        <input type="text" placeholder="India" disabled className="border border-gray-300 rounded-sm px-3 py-2 text-xs md:text-sm bg-gray-50 text-slate-500" />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <input type="text" placeholder="Select State" className="border border-gray-300 rounded-sm px-3 py-2 text-xs md:text-sm focus:outline-none focus:border-[#005089] text-slate-700" />
                                        <input type="text" placeholder="City" className="border border-gray-300 rounded-sm px-3 py-2 text-xs md:text-sm focus:outline-none focus:border-[#005089] text-slate-700" />
                                    </div>

                                    <input type="text" placeholder="Address" className="w-full border border-gray-300 rounded-sm px-3 py-2 text-xs md:text-sm focus:outline-none focus:border-[#005089] text-slate-700" />
                                    <input type="text" placeholder="Pincode" className="w-full border border-gray-300 rounded-sm px-3 py-2 text-xs md:text-sm focus:outline-none focus:border-[#005089] text-slate-700" />
                                </div>

                                <div className="bg-gray-50 px-4 py-3 rounded-sm text-center">
                                    <p className="text-[9px] md:text-[10px] text-slate-500 leading-relaxed uppercase">
                                        *YOUR CONTRIBUTIONS ARE ELIGIBLE FOR UPTO 50% TAX
                                        BENEFIT UNDER SECTION 80G AS EVOLVE SANGH
                                        FOUNDATION IS REGISTERED AS NON PROFIT
                                        ORGANIZATION.
                                    </p>
                                    <p className="text-[9px] md:text-[10px] text-[#005089] font-bold mt-1">
                                        PAN: AAGCE2085A | 80G NUMBER: AAGCE2085A24LK01
                                    </p>
                                </div>

                                <label className="flex items-start gap-2 cursor-pointer">
                                    <input type="checkbox" className="mt-0.5 w-4 h-4 accent-[#005089]" />
                                    <span className="text-[9px] md:text-[10px] text-slate-500 leading-relaxed">
                                        you agree that evolve sangh foundation can reach out to you
                                        through whatsapp/email/phone to provide information of
                                        your donation, campaigns, 80g receipt etc.
                                    </span>
                                </label>

                                <div className="text-center">
                                    <button className="bg-[#FF6B00] hover:bg-[#e06000] text-white font-bold uppercase text-sm px-8 py-3 rounded-sm transition-colors cursor-pointer tracking-wider">
                                        SUBMIT
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full bg-[#005089] py-4">
                <div className="container mx-auto px-4 md:px-8 lg:px-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <a href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors">
                            <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center hover:bg-[#20bd5a] transition-colors">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                        </a>
                    </div>

                    <a
                        href="#"
                        className="bg-[#FF6B00] hover:bg-[#e06000] text-white font-bold uppercase text-sm px-6 py-2.5 rounded-sm transition-colors tracking-wider"
                    >
                        DONATE NOW
                    </a>
                </div>
            </section>
        </main>
    );
}