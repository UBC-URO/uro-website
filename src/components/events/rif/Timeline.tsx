export const Timeline = () => {
    const timelineItems = [
        {
            date: "Thursday, January 8, 2026",
            event: "RIF 2026 Application opens",
        },
        {
            date: "Thursday, January 22, 2026",
            event: "Early bird application closes at 11:59PM PST",
            note: "All applications submitted before this time will receive +1 bonus point",
        },
        {
            date: "Monday, January 26, 2026",
            event: "RIF 2026 Application closes at 11:59PM PST",
        },
        {
            date: "Wednesday, February 4, 2026",
            event: "Offers sent out to successful applicants",
        },
        {
            date: "Thursday, February 5, 2026",
            event: "Deadline to accept offer by 11:59PM PST*",
        },
        {
            date: "Monday, February 9, 2026",
            event: "RIF personalized schedule sent out to confirmed applicants",
        },
        {
            date: "Thursday, February 12, 2026",
            event: "Day of RIF",
            highlight: true,
        },
    ];

    return (
        <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Timeline</h2>
            <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-teal-200" />

                <div className="space-y-6">
                    {timelineItems.map((item, index) => (
                        <div key={index} className="relative pl-12">
                            {/* Dot */}
                            <div className={`absolute left-2 top-1.5 w-5 h-5 rounded-full border-2 ${item.highlight ? "bg-teal-500 border-teal-500" : "bg-white border-teal-400"}`} />

                            <div className={`${item.highlight ? "font-bold text-teal-600" : ""}`}>
                                <p className="font-semibold text-slate-900">{item.date}</p>
                                <p className={`text-lg ${item.highlight ? "text-teal-600" : "text-slate-700"}`}>{item.event}</p>
                                {item.note && <p className="text-sm text-slate-500 italic">({item.note})</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <p className="text-sm text-slate-600 italic">
                *RIF is a competitive program. Applicants who do not accept their offer by the deadline will have their spot offered to the next eligible applicant.
            </p>
        </div>
    );
};
