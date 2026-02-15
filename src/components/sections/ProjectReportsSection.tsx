import Link from "next/link";

interface ReportCardProps {
    date: string;
    category: string;
    description: string;
    downloadLink: string;
}

function ReportCard({ date, category, description, downloadLink }: ReportCardProps) {
    return (
        <div className="border-2 border-[#0067A5] rounded-lg overflow-hidden flex flex-col">
            {/* Header: Date + Category */}
            <div className="flex items-center justify-between px-4 py-3 bg-white">
                <span
                    className="text-xs font-semibold text-gray-600"
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                >
                    {date}
                </span>
                <span
                    className="text-xs font-bold text-[#0067A5] uppercase"
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                >
                    {category}
                </span>
            </div>

            {/* Thumbnail Placeholder */}
            <div className="w-full aspect-[16/10] bg-gray-300 mx-auto px-4">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-400 rounded-sm" />
            </div>

            {/* Description */}
            <div className="px-4 py-4 flex-1">
                <p
                    className="text-sm text-gray-700 leading-relaxed text-justify"
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                >
                    {description}
                </p>
            </div>

            {/* Download Button */}
            <div className="px-4 pb-4">
                <Link
                    href={downloadLink}
                    className="inline-block w-full text-center bg-[#0067A5] text-white text-xs font-bold uppercase tracking-wider py-3 px-4 hover:bg-[#005089] transition-colors"
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                >
                    Download Full Reports
                </Link>
            </div>
        </div>
    );
}

const reports = [
    {
        date: "01/02/25",
        category: "Youth Empowerment",
        description:
            "Report Of The Comptroller And Auditor General Of India On Working Of Mancheswar Carriage Repair",
        downloadLink: "#",
    },
    {
        date: "01/02/25",
        category: "Youth Empowerment",
        description:
            "Report Of The Comptroller And Auditor General Of India On Working Of Mancheswar Carriage Repair",
        downloadLink: "#",
    },
    {
        date: "01/02/25",
        category: "Youth Empowerment",
        description:
            "Report Of The Comptroller And Auditor General Of India On Working Of Mancheswar Carriage Repair",
        downloadLink: "#",
    },
];

export function ProjectReportsSection() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="w-full px-6 md:px-12 lg:px-20">
                {/* Blue bar + Title */}
                <div className="w-full h-2 bg-[#0067A5] mb-0" />
                <div className="bg-[#0067A5] py-4">
                    <h2 className="font-heading text-5xl md:text-6xl text-white text-center uppercase tracking-wide">
                        Project Reports
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
                    {reports.map((report, index) => (
                        <ReportCard
                            key={index}
                            date={report.date}
                            category={report.category}
                            description={report.description}
                            downloadLink={report.downloadLink}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
