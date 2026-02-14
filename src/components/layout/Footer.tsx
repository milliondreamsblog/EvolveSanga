import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#005da6] text-white pt-16 pb-8 font-sans">
            <div className="container mx-auto px-4 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">

                    {/* OUR ACTIVITIES */}
                    <div>
                        <h4 className="font-bold uppercase mb-6 text-sm tracking-wider border-b border-white/20 pb-2 inline-block">Our Activities</h4>
                        <ul className="space-y-2 text-xs md:text-sm text-blue-100">
                            <li><Link href="#" className="hover:text-white transition-colors">Living</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Free Food Drives</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Youth Welfare Centers</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Free Cloth Distribution</Link></li>
                        </ul>
                    </div>

                    {/* About Us (Merged with Loving/Learning per screenshot layout inference or just standard columns) */}
                    <div>
                        <h4 className="font-bold uppercase mb-6 text-sm tracking-wider border-b border-white/20 pb-2 inline-block">Loving</h4>
                        <ul className="space-y-2 text-xs md:text-sm text-blue-100">
                            <li><Link href="#" className="hover:text-white transition-colors">Environment Care</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Mental Wellness Program</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Women Empowerment</Link></li>
                        </ul>
                        <div className="mt-6">
                            <h4 className="font-bold uppercase mb-4 text-sm tracking-wider border-b border-white/20 pb-2 inline-block">Learning</h4>
                            <ul className="space-y-2 text-xs md:text-sm text-blue-100">
                                <li><Link href="#" className="hover:text-white transition-colors">Access To Education Initiative</Link></li>
                                <li><Link href="#" className="hover:text-white transition-colors">Skill Development & Training Programs</Link></li>
                                <li><Link href="#" className="hover:text-white transition-colors">Value Education Program</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* ABOUT US & GET INVOLVED */}
                    <div>
                        <h4 className="font-bold uppercase mb-6 text-sm tracking-wider border-b border-white/20 pb-2 inline-block">About Us</h4>
                        <ul className="space-y-2 text-xs md:text-sm text-blue-100 mb-6">
                            <li><Link href="#" className="hover:text-white transition-colors">Vision And Mission</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Our Identity</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Our Project Locations</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Audit Report</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Our Team</Link></li>
                        </ul>

                        <h4 className="font-bold uppercase mb-4 text-sm tracking-wider border-b border-white/20 pb-2 inline-block">Get Involved</h4>
                        <ul className="space-y-2 text-xs md:text-sm text-blue-100">
                            <li><Link href="#" className="hover:text-white transition-colors">Become A Volunteer</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Internship</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Donate</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Corporate Partners</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">CSR</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <div className="mb-6">
                            <h4 className="font-bold text-lg mb-1">EVoLVE Sangh Foundation</h4>
                            <p className="text-xs text-blue-100 leading-relaxed">
                                233D- Lakhanpur Housing Society, Awadhpuri, Kanpur 208024
                            </p>
                        </div>

                        <div className="mb-6">
                            <p className="text-xs text-blue-100">
                                <span className="font-bold text-white">Contact Us :</span> Ph No. : +91 9151050780 | E-Mail: Info@Evolve.Org
                            </p>
                        </div>

                        <div className="flex gap-4 mt-8">
                            <a href="#" className="bg-white text-blue-900 p-2 rounded-full hover:bg-blue-100 transition-colors"><Facebook className="w-4 h-4" /></a>
                            <a href="#" className="bg-white text-blue-900 p-2 rounded-full hover:bg-blue-100 transition-colors"><Twitter className="w-4 h-4" /></a>
                            <a href="#" className="bg-white text-blue-900 p-2 rounded-full hover:bg-blue-100 transition-colors"><Instagram className="w-4 h-4" /></a>
                            <a href="#" className="bg-white text-blue-900 p-2 rounded-full hover:bg-blue-100 transition-colors"><Linkedin className="w-4 h-4" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
