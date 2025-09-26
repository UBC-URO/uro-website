import Image from "next/image";

export const Overview = () => {
    return (
        <>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">What is the Research Coaches Program?</h2>
                    <div className="text-lg text-slate-700 leading-relaxed space-y-6">
                        <p>
                            The Research Coaches Program is designed for senior undergraduate students to mentor other students looking to get involved in research. They act as a point of contact,
                            sharing their own experience and expertise to help undergraduates navigate opportunities in research.
                        </p>

                        <p>
                            <span className="font-semibold">What are Research Coaches?</span>
                            <br />
                            Research Coaches are senior undergraduate or graduate students who mentor students in research through one-on-one appointments. They provide guidance on developing research
                            questions, understanding literature, and applying common research methods.
                        </p>

                        <p>
                            <span className="font-semibold">Want to get involved as a Research Coach?</span>
                            <br />
                            If you have at least one year of formal research experience, you can sign up to become a Research Coach{" "}
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLSewGyJ6xsM4mg1lLArvGwJfXwq_lu0tSZYjN86IoZzCQpzbeQ/viewform?usp=sharing&ouid=105989047513398879016"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-teal-600 underline hover:text-teal-700"
                            >
                                here
                            </a>
                            .
                        </p>
                    </div>
                </div>

                {/* Image Placeholder */}
                <div className="relative">
                    <div className="aspect-[5/4] rounded-3xl shadow-2xl overflow-hidden relative">
                        <Image src="/research-coaches1.jpg" alt="URO Executive Team" fill className="object-cover" />
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-teal-400 to-green-400 rounded-4xl opacity-50" />
                    <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-r from-teal-400 to-green-400 rounded-2xl opacity-50" />
                </div>
            </div>
        </>
    );
};
