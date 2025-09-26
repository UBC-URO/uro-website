export const Process = () => {
    return (
        <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Steps card */}
            <div className="rounded-3xl border bg-white shadow-2xl p-8 space-y-4">
                <h3 className="text-xl font-semibold text-slate-900">Flow at a glance</h3>
                <ol className="list-decimal ml-5 space-y-2 text-slate-700">
                    <li>Apply with your interests & resume</li>
                    <li>SEC screens and shortlists candidates</li>
                    <li>Pairs made with relevant faculty</li>
                    <li>15-minute 1:1 speed interviews</li>
                    <li>Optional next steps decided by you & PI</li>
                </ol>
            </div>
            <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">How does it work?</h2>
                <div className="text-lg text-slate-700 leading-relaxed space-y-6">
                    <p>
                        After submissions, the Student Engagement Committee (SEC) reviews all applications and selects those demonstrating strong enthusiasm and commitment to research. Based on stated
                        interests, SEC pairs shortlisted applicants with faculty in similar fields.
                    </p>
                    <p className="italic">Further progression beyond the event (e.g., Work Learns, grants, or volunteering) is at the mutual discretion of the PI and the student.</p>
                </div>
            </div>
        </div>
    );
};
