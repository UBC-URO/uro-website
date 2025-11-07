import { BookOpen, Calendar, Award, LucideIcon } from "lucide-react";
import Link from "next/link";

interface Program {
    icon: LucideIcon;
    title: string;
    description: string;
    href: string;
}

const programs: Program[] = [
    {
        icon: BookOpen,
        title: "Research Experience (REX)",
        description: "Hands-on research opportunities that pair students with mentors and provide real-world experience in various fields.",
        href: "/rex",
    },
    {
        icon: Calendar,
        title: "Past Events",
        description: "Browse our archive of networking events, workshops, and social gatherings that brought together our research community.",
        href: "/events?past=true",
    },
    {
        icon: Award,
        title: "CJUR Publication",
        description: "Student-run journal providing publishing opportunities for undergraduate research across all disciplines.",
        href: "https://cjur.ca/",
    },
];

export const Programs = () => {
    return (
        <>
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Programs</h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">Comprehensive programs designed to support undergraduate research at every level</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {programs.map((program) => {
                    const Icon = program.icon;
                    return (
                        <div key={program.title} className="bg-white rounded-3xl p-8 shadow-sm border hover:shadow-md transition flex flex-col justify-between items-start">
                            <div>
                                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-6">
                                    <Icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{program.title}</h3>
                                <p className="text-slate-600 leading-relaxed mb-4">{program.description}</p>
                            </div>
                            <Link href={program.href} className="text-sm font-semibold text-teal-700 hover:underline">
                                Learn More →
                            </Link>
                        </div>
                    );
                })}
            </div>
        </>
    );
};
