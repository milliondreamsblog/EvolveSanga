import { Button } from "@/components/ui/button";

export function CampaignSection() {
    const campaigns = [
        {
            title: "TYARI KAL KI",
            desc: "Every night, millions in India go to bed hungry. In a country that is moving forward rapidly, it is heartbreaking...",
            image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=400&h=500"
        },
        {
            title: "HUNGER FREE NIGHT",
            desc: "Every young mind deserves the chance to shape tomorrow. But for thousands of underprivileged youth in India...",
            image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=400&h=500"
        },
        {
            title: "SHIKSHA NA RUKE",
            desc: "Education is the most powerful tool to break the cycle of poverty. Yet millions of children in India are forced...",
            image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=400&h=500"
        },
    ];

    return (
        <section className="pb-24">
            {/* Divider */}
            <div className="w-full bg-blue-100 py-3 text-center mb-16">
                <span className="text-blue-900 font-bold uppercase tracking-widest text-lg">LIVING</span>
            </div>

            <div className="container mx-auto px-4 md:px-12 text-center">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-blue-900 uppercase mb-12">
                    Support a Cause
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {campaigns.map((camp, index) => (
                        <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow flex flex-col items-center p-4">
                            <div className="rounded-2xl overflow-hidden w-full aspect-[4/5] relative mb-4">
                                <div
                                    className="w-full h-full bg-cover bg-center"
                                    style={{ backgroundImage: `url(${camp.image})` }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4 text-white text-left">
                                        <h3 className="font-heading font-bold text-2xl uppercase leading-none">
                                            {camp.title.split(' ').map((word, i) => (
                                                <span key={i} className="block">{word}</span>
                                            ))}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <p className="text-xs text-center text-gray-500 font-sans mb-4 px-2">
                                {camp.desc}
                            </p>
                            <a href="#" className="text-blue-500 font-bold text-xs uppercase hover:underline">
                                Know more &gt;&gt;
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
