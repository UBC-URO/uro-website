import Image from "next/image";

export const Impact = () => {
    return (
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image frame */}
            <div className="relative order-2 lg:order-1">
                <div className="aspect-[5/4] rounded-3xl shadow-2xl overflow-hidden relative">
                    <Image src="/about2.jpg" alt="Research Showcase Event" fill className="object-cover" />
                </div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-r from-teal-400 to-green-400 rounded-2xl opacity-50" />
                <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-r from-teal-400 to-green-400 rounded-2xl opacity-50" />
            </div>

            <div className="space-y-8 order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Impact</h2>
                <p className="text-lg text-slate-700 leading-relaxed">
                    Since our founding, URO has made a significant impact on the undergraduate research community at UBC, helping hundreds of students discover their passion for research and academic
                    excellence.
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-6">
                    {[
                        { label: "Students Reached", value: "5000+" },
                        { label: "Events Hosted", value: "50+" },
                        { label: "Publications", value: "25+" },
                        { label: "Research Projects", value: "100+" },
                    ].map((m) => (
                        <div key={m.label} className="text-center p-6 bg-white rounded-2xl border shadow-sm">
                            <div className="text-3xl font-bold text-teal-600 mb-1">{m.value}</div>
                            <div className="text-sm text-slate-600 font-medium">{m.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
