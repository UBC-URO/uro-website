import Image from "next/image";

export const Overview = () => {
    return (
        <>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Overview of REX</h2>
                    <div className="text-lg text-slate-700 leading-relaxed space-y-6">
                        <p>
                            REX is an undergraduate research mentorship program, introducing students to the research process by pairing them with graduate or postdoctoral mentors. Through this
                            mentorship, students receive guidance in developing a theoretical research project.
                        </p>
                        <p>
                            Mentees are introduced to relevant literature, guided in developing their own research question, taught common research methods used in their mentor’s field, and are also
                            taught how to arrive at a conclusion based on theoretical or anticipated experimental results.
                        </p>
                        <p>
                            Mentees are introduced to relevant literature, guided in developing their own research question, taught common research methods used in their mentor’s field, and are also
                            taught how to arrive at a conclusion based on theoretical or anticipated experimental results.
                        </p>
                    </div>
                </div>

                {/* Image Placeholder */}
                <div className="relative">
                    <div className="aspect-[5/4] rounded-3xl shadow-2xl overflow-hidden relative">
                        <Image src="/rex1.jpg" alt="URO Executive Team" fill className="object-cover" />
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-teal-400 to-green-400 rounded-4xl opacity-50" />
                    <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-r from-teal-400 to-green-400 rounded-2xl opacity-50" />
                </div>
            </div>
        </>
    );
};
