import Image from "next/image";
import Link from "next/link";
import { Users, Megaphone, Calendar, ArrowRight, Sparkles } from "lucide-react";

function StatPill({ value, label, icon }: { value: string; label: string; icon: React.ReactNode }) {
    return (
        <div className="flex items-center gap-3 rounded-xl bg-white border px-4 py-3 shadow-sm">
            <div className="inline-flex items-center justify-center rounded-lg border px-2.5 py-2 text-slate-700">{icon}</div>
            <div>
                <div className="text-lg font-semibold text-slate-900 leading-none">{value}</div>
                <div className="text-xs text-slate-600">{label}</div>
            </div>
        </div>
    );
}

export const Hero = () => {
    return (
        <>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="space-y-8">
                    {/* <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-4 py-2 border shadow-sm">
                        <Sparkles className="h-4 w-4 text-teal-600" />
                        <span className="text-sm font-medium text-slate-700">Discover. Build. Publish.</span>
                    </div> */}

                    <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight text-balance">UBC’s Undergraduate Research Opportunities Club</h1>

                    <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-2xl">
                        Join a community where ideas turn into research, projects become presentations, and students become scholars. Explore programs, events, mentorship, and publishing
                        opportunities.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="/events"
                            className="inline-flex items-center justify-center px-6 py-3 text-base md:text-lg font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-xl shadow-lg hover:shadow-xl transition-all"
                            aria-label="See upcoming events"
                        >
                            <Calendar className="mr-2 h-5 w-5" />
                            Upcoming Events
                        </Link>

                        <Link
                            href="/rex"
                            className="inline-flex items-center justify-center px-6 py-3 text-base md:text-lg font-semibold rounded-xl border border-teal-600 text-teal-700 hover:bg-teal-50 transition-all"
                            aria-label="Learn about REX program"
                        >
                            Learn about REX
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </div>
                </div>

                {/* image frame */}
                <div className="relative">
                    <div className="aspect-[5/4] rounded-3xl shadow-2xl overflow-hidden relative">
                        <Image
                            src="/rex1.jpg" // swap to your real hero photo in /public
                            alt="URO community at a research event"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-teal-400 to-green-400 rounded-4xl opacity-50" />
                    <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-r from-teal-400 to-green-400 rounded-2xl opacity-50" />
                </div>
            </div>
        </>
    );
};
