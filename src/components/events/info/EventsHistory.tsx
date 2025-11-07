// Sample event type - adjust based on your actual data structure
interface Event {
    id: string;
    title: string;
    date: string;
    location: string;
    description: string;
    image?: string;
    category?: string;
}

const sampleEvents: Event[] = [
    {
        id: "2",
        title: "SOME EVENT",
        date: "2025-11-20",
        location: "Irving K. Barber Learning Centre",
        description: "Connect with industry professionals working at the cutting edge of interdisciplinary research.",
        category: "Panel",
    },
    {
        id: "3",
        title: "Research Showcase",
        date: "2025-10-05",
        location: "UBC Nest",
        description: "Annual showcase featuring undergraduate research projects from across all disciplines.",
        category: "Showcase",
    },
];

interface EventsHistoryProps {
    filterUpcoming?: boolean;
}

export const EventsHistory = ({ filterUpcoming = true }: EventsHistoryProps) => {
    const currentDate = new Date();

    const filteredEvents = sampleEvents.filter((event) => {
        const eventDate = new Date(event.date);
        return filterUpcoming ? eventDate >= currentDate : eventDate < currentDate;
    });

    const sortedEvents = [...filteredEvents].sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return filterUpcoming ? dateA - dateB : dateB - dateA;
    });

    if (sortedEvents.length === 0) {
        return (
            <div className="text-center py-16">
                <div className="w-24 h-24 mx-auto mb-6 bg-slate-100 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-2">No {filterUpcoming ? "upcoming" : "past"} events</h3>
                <p className="text-slate-600">{filterUpcoming ? "Check back soon for new events!" : "Our event history will appear here"}</p>
            </div>
        );
    }

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedEvents.map((event) => (
                <EventCard key={event.id} event={event} isPast={!filterUpcoming} />
            ))}
        </div>
    );
};

// Event Card Component
const EventCard = ({ event, isPast }: { event: Event; isPast: boolean }) => {
    const eventDate = new Date(event.date);
    const formattedDate = eventDate.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });

    return (
        <div
            className={`group bg-white rounded-xl border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                isPast ? "border-slate-200 hover:border-slate-300" : "border-teal-100 hover:border-teal-600 hover:shadow-teal-600/10"
            }`}
        >
            {/* Category Badge */}
            {event.category && (
                <div className="px-6 pt-6">
                    <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${isPast ? "bg-slate-100 text-slate-700" : "bg-teal-100 text-teal-700"}`}>{event.category}</span>
                </div>
            )}

            <div className="p-6">
                {/* Date */}
                <div className="flex items-center gap-2 mb-3">
                    <svg className={`w-5 h-5 ${isPast ? "text-slate-400" : "text-teal-600"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className={`text-sm font-medium ${isPast ? "text-slate-600" : "text-teal-700"}`}>{formattedDate}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">{event.title}</h3>

                {/* Location */}
                <div className="flex items-center gap-2 mb-3">
                    <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm text-slate-600">{event.location}</span>
                </div>

                {/* Description */}
                <p className="text-slate-700 leading-relaxed mb-4 line-clamp-3">{event.description}</p>

                {/* CTA */}
                <button
                    className={`w-full py-2.5 px-4 rounded-lg font-medium transition-all duration-200 ${
                        isPast ? "bg-slate-100 text-slate-700 hover:bg-slate-200" : "bg-teal-600 text-white hover:bg-teal-700 hover:shadow-lg hover:shadow-teal-600/30"
                    }`}
                >
                    {isPast ? "View Details" : "Learn More"}
                </button>
            </div>
        </div>
    );
};
