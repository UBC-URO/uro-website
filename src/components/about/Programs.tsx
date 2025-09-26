import { BookOpen, Calendar, Award } from "lucide-react";

export const Programs = () => {
    return (
        <>
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Programs</h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">Comprehensive programs designed to support undergraduate research at every level</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-3xl p-8 shadow-sm border hover:shadow-md transition">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-6">
                        <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Research Experience (REX)</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">Hands-on research opportunities that pair students with mentors and provide real-world experience in various fields.</p>
                    <button className="text-sm font-semibold text-teal-700 hover:underline">Learn More →</button>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-sm border hover:shadow-md transition">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-6">
                        <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Social Events</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">Networking events, workshops, and social gatherings that build community and foster collaboration among students.</p>
                    <button className="text-sm font-semibold text-teal-700 hover:underline">Learn More →</button>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-sm border hover:shadow-md transition">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-6">
                        <Award className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">CJUR Publication</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">Student-run journal providing publishing opportunities for undergraduate research across all disciplines.</p>
                    <button className="text-sm font-semibold text-teal-700 hover:underline">Learn More →</button>
                </div>
            </div>
        </>
    );
};
