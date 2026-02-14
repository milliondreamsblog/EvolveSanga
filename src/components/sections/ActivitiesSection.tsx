import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ActivitiesSection() {
    const activities = [
        { title: "FREE FOOD DISTRIBUTION", image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=400&h=300" },
        { title: "YOUTH WELFARE CENTERS", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=400&h=300" },
        { title: "FREE CLOTH DISTRIBUTION", image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=400&h=300" },
    ];

    return (
        <section className="py-16 bg-white text-center">
            <div className="container mx-auto px-4 md:px-12">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-blue-900 uppercase mb-2">
                    Our Activities
                </h2>
                <p className="text-blue-400 font-bold tracking-widest text-sm uppercase mb-12">
                    Living · Loving · Learning
                </p>

                <div className="relative">
                    {/* Slider Controls (Visual only for now) */}
                    <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-2 rounded-full bg-gray-200 text-gray-500 hover:bg-gray-300">
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-2 rounded-full bg-gray-200 text-gray-500 hover:bg-gray-300">
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {activities.map((activity, index) => (
                            <div key={index} className="group cursor-pointer">
                                <div className="relative overflow-hidden aspect-[4/3] border-4 border-gray-100 mb-4">
                                    {/* Placeholder Image */}
                                    <div
                                        className="w-full h-full bg-gray-200 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                        style={{
                                            backgroundImage: `url(${activity.image})`
                                        }}
                                    ></div>
                                </div>
                                <h3 className="font-heading font-bold text-blue-900 uppercase text-lg group-hover:text-blue-600 transition-colors">
                                    {activity.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
