export const Overview = () => {
    return (
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">What is Research Involvement Fair (RIF)?</h2>
                <div className="text-lg text-slate-700 leading-relaxed space-y-6">
                    <p>
                        RIF is a research recruitment event that directly connects undergraduate students and research faculty through a speed-interview style. After collecting undergraduate
                        applications, we pair students with interested faculty for a one-on-one 10-minute discussion.
                    </p>
                    <p>This event lets PIs meet many motivated students while giving students a chance to practice interview skills.</p>
                    <p className="font-bold ">
                        📍 This year, the event will take place on <span className="underline text-teal-600">Zoom</span> on{" "}
                        <span className="underline text-teal-600">Thursday, February 12, 2026 from 5:30 - 8:30PM PST</span>.
                    </p>
                </div>
            </div>

            {/* Accent card */}
            <div className="relative">
                <div className="rounded-3xl border shadow-2xl p-10 bg-white">
                    <p className="text-slate-600">“RIF helped me discover labs aligned with my interests and practice interviewing in a supportive environment.”</p>
                    <div className="mt-6 text-sm text-slate-500">— Past Participant</div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-teal-400 to-green-400 rounded-4xl opacity-40" />
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-r from-teal-400 to-green-400 rounded-2xl opacity-40" />
            </div>
        </div>
    );
};
