export function ImpactSection() {
    const stats = [
        { value: "50000+", label: "PLATES", sub: "SERVED IN UNDERPRIVILEGED SCHOOLS" },
        { value: "700+", label: "MEALS", sub: "SERVED DAILY IN SLUMS" },
        { value: "5000+", label: "CHILDREN", sub: "RECEIVED QUALITY EDUCATION KIT" },
        { value: "500+", label: "CHILDREN", sub: "BENEFITTED THROUGH FREE COACHING" },
    ];

    return (
        <section className="py-12 bg-blue-50/30 border-t border-b border-blue-100/50">
            <div className="container mx-auto px-4 md:px-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <h3 className="text-4xl md:text-5xl font-heading font-bold text-blue-900 mb-2">
                                {stat.value}
                            </h3>
                            <p className="text-blue-500 font-bold uppercase tracking-wider text-sm mb-1">
                                {stat.label}
                            </p>
                            <p className="text-xs text-slate-500 max-w-[150px] uppercase font-medium">
                                {stat.sub}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
