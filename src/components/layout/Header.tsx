import Link from "next/link";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
    return (
        <header className="w-full flex flex-col font-sans">
            {/* Top Bar */}
            <div className="w-full flex justify-end px-4 md:px-12 py-2">
                <Button variant="warning" size="sm" className="font-bold text-xs uppercase tracking-wide rounded-none">
                    ♥ Support a Cause
                </Button>
            </div>

            {/* Main Navigation */}
            <div className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
                <div className="container mx-auto px-4 md:px-12 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
                            {/* Placeholder for Logo Image - Using a colored circle for now */}
                            <div className="w-full h-full rounded-full border-4 border-blue-900/20 group-hover:border-blue-900 transition-colors flex items-center justify-center text-blue-900 font-bold text-xs">
                                LOGO
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-heading text-xl md:text-2xl font-bold uppercase text-slate-800 tracking-tight leading-none group-hover:text-blue-900 transition-colors">
                                Evolve
                            </span>
                            <span className="font-sans text-[0.6rem] md:text-[0.65rem] uppercase tracking-widest text-slate-500 font-semibold group-hover:text-blue-700 transition-colors">
                                Sangh Foundation
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {["About Us", "Our Activities", "Get Involved", "Contact Us"].map((item) => (
                            <Link
                                key={item}
                                href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                                className="text-sm font-bold text-slate-600 hover:text-blue-600 uppercase tracking-wide flex items-center gap-1 transition-colors"
                            >
                                {item}
                                <span className="text-[0.6rem] text-blue-400">▼</span>
                            </Link>
                        ))}
                        <button className="text-blue-500 hover:text-blue-700 transition-colors">
                            <Search className="w-5 h-5" />
                        </button>
                    </nav>

                    {/* Mobile Menu Toggle (Placeholder) */}
                    <div className="md:hidden">
                        <Button variant="ghost" size="icon">
                            <span className="sr-only">Menu</span>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}
