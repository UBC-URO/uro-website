import { EventsHistory } from "@/components/events/info/EventsHistory";

interface EventsSectionProps {
    showPast: boolean;
    onFilterChange: (isPast: boolean) => void;
}

export const EventsSection = ({ showPast, onFilterChange }: EventsSectionProps) => {
    return (
        <>
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{showPast ? "Past Events" : "Upcoming Events"}</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    {showPast ? "Explore the events we've hosted and the impact we've made" : "Join us for our upcoming workshops, panels, and networking events"}
                </p>
            </div>

            {/* Filter Toggle */}
            <div className="flex justify-center gap-3 mb-12">
                <button
                    onClick={() => onFilterChange(false)}
                    className={`px-8 py-3 rounded-full font-semibold ${
                        !showPast ? "bg-teal-600 text-white shadow-lg shadow-teal-600/30" : "bg-white text-slate-700 border-2 border-slate-200 hover:border-teal-600 hover:text-teal-600"
                    }`}
                >
                    Upcoming
                </button>
                <button
                    onClick={() => onFilterChange(true)}
                    className={`px-8 py-3 rounded-full font-semibold ${
                        showPast ? "bg-teal-600 text-white shadow-lg shadow-teal-600/30" : "bg-white text-slate-700 border-2 border-slate-200 hover:border-teal-600 hover:text-teal-600"
                    }`}
                >
                    Past
                </button>
            </div>

            {/* Events Display */}
            <EventsHistory filterUpcoming={!showPast} />
        </>
    );
};
