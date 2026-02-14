import Image from "next/image";
import Link from "next/link";

export function MissionSection() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-12">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Left: Circular Icon/Logo */}
                    <div className="w-full md:w-1/3 flex justify-center">
                        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full bg-blue-50 flex items-center justify-center p-8 shadow-inner">
                            {/* Placeholder for the handshake logo */}
                            <div className="w-full h-full rounded-full border-8 border-orange-400/20 flex items-center justify-center text-blue-900">
                                <span className="text-4xl font-heading font-bold">LOGO</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Text Content */}
                    <div className="w-full md:w-2/3 text-center md:text-left">
                        <p className="text-gray-600 leading-relaxed mb-6 font-sans text-sm md:text-base">
                            Evolve Sangh Foundation is a Section 8 nonprofit dedicated to uplifting
                            underprivileged youth in India. Our mission-driven programs cater to students who
                            lack basic necessities, educational resources, or emotional support. Through
                            grassroots initiatives like free food distribution in slums, midday meals in schools,
                            stationery drives, and personalized career mentoring, we aim to break the cycle of
                            poverty and despair. Our Youth Welfare Centers provide holistic care—including
                            hostel food, coaching, mental wellness, and value-based education. Anchored in
                            compassion and guided by purpose, we believe every young mind deserves the
                            tools, support, and environment to thrive.
                        </p>
                        <Link
                            href="/about-us"
                            className="inline-block text-blue-400 hover:text-blue-600 text-sm font-semibold transition-colors"
                        >
                            read more &gt;
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
