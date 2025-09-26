import Image from "next/image";

export const Overview = () => {
    return (
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Column */}
            <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Overview of LSRN</h2>
                <div className="text-lg text-slate-700 leading-relaxed space-y-6">
                    <p>
                        Life Science Research Night (LSRN) is URO’s largest annual event, held in collaboration with several UBC clubs dedicated to undergraduate students specializing in the life
                        sciences.
                    </p>
                    <p>
                        It brings together researchers, academics, and industry professionals for a series of workshops and panels that highlight the diverse research opportunities at UBC, as well as
                        professional skills associated with a life science career.
                    </p>
                    <p>
                        Following the workshops, attendees can network with speakers, industry sponsors, and collaborators, while also exploring research projects presented by fellow undergraduates.
                    </p>
                </div>
            </div>

            {/* Image Column */}
            <div className="relative">
                <div className="aspect-[5/4] rounded-3xl shadow-2xl overflow-hidden relative">
                    <Image src="/lsrn2.jpg" alt="Life Science Research Night" fill className="object-cover" />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-teal-400 to-green-400 rounded-4xl opacity-50" />
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-r from-teal-400 to-green-400 rounded-2xl opacity-50" />
            </div>
        </div>
    );
};
