import { Lightbulb, BookOpen, Heart } from "lucide-react";

export const Values = () => {
    return (
        <>
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Values</h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">The principles that guide everything we do at URO</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-3xl p-8 shadow-sm border hover:shadow-md transition">
                    <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                        <Lightbulb className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Innovation</h3>
                    <p className="text-slate-600 leading-relaxed">We foster creative thinking and encourage students to explore new ideas and methodologies in their research endeavors.</p>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-sm border hover:shadow-md transition">
                    <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                        <Heart className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Inclusivity</h3>
                    <p className="text-slate-600 leading-relaxed">We welcome students from all backgrounds and disciplines, creating an environment where everyone can thrive and contribute.</p>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-sm border hover:shadow-md transition">
                    <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                        <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Excellence</h3>
                    <p className="text-slate-600 leading-relaxed">We maintain high standards in all our programs and events, ensuring quality experiences for our members.</p>
                </div>
            </div>
        </>
    );
};
