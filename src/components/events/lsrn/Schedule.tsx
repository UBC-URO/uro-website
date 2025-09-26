import { ScheduleTable } from "./ScheduleTable";

export const Schedule = () => {
    return (
        <>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">LSRN Schedule</h2>
            <div className="text-lg text-slate-700 leading-relaxed space-y-6">
                <p>
                    This year, LSRN will be taking place in the UBC AMS Nest on <span className="text-teal-600 font-bold">Monday, November 17th, 2025 from 5:00 - 9:00PM</span>.
                </p>
            </div>
            <ScheduleTable />
        </>
    );
};
