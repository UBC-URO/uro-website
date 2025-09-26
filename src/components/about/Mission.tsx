import Image from "next/image";
import { Target, Users } from "lucide-react";

export const Mission = () => {
    return (
        <>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Mission</h2>
                    <div className="text-lg text-slate-700 leading-relaxed space-y-6">
                        <p>
                            Through networking events, research programs, and publishing opportunities, URO helps students explore their interests, deepen their understanding of research, and provide
                            meaningful insight into their future careers.
                        </p>
                        <p>
                            We believe that every undergraduate student deserves the opportunity to engage with cutting-edge research and connect with like-minded peers who share their passion for
                            discovery and innovation.
                        </p>
                    </div>

                    {/* Quick highlights (matches card tone but lighter) */}
                    <div className="grid grid-cols-2 gap-6">
                        <div className="text-center p-6 bg-white rounded-2xl shadow-sm border">
                            <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Target className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-1">Research Focus</h3>
                            <p className="text-sm text-slate-600">Multidisciplinary approach</p>
                        </div>
                        <div className="text-center p-6 bg-white rounded-2xl shadow-sm border">
                            <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Users className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-1">Community</h3>
                            <p className="text-sm text-slate-600">Connections & networking</p>
                        </div>
                    </div>
                </div>

                {/* Image frame */}
                <div className="relative">
                    <div className="aspect-[5/4] rounded-3xl shadow-2xl overflow-hidden relative">
                        <Image src="/about1.jpg" alt="URO Executive Team" fill className="object-cover" />
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-teal-400 to-green-400 rounded-4xl opacity-50" />
                    <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-r from-teal-400 to-green-400 rounded-2xl opacity-50" />
                </div>
            </div>
        </>
    );
};
