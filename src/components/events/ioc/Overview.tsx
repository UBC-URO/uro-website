import { CTAButton } from "@/components/shared/CTAButton";

export const Overview = () => {
    return (
        <>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Interdisciplinary Outreach Committee (IOC)</h2>
            <div className="text-lg text-slate-700 leading-relaxed space-y-6">
                <p>
                    The Interdisciplinary Outreach Committee (IOC) is part of the Undergraduate Research Opportunities (URO) at UBC. Our mission is to bridge diverse research areas across campus by
                    fostering interdisciplinary collaboration.
                </p>
                <p>
                    We aim to create opportunities for students to explore different fields, gain research skills, and connect with both academia and industry leaders working at the intersections of
                    multiple disciplines.
                </p>

                {/* Mission Highlight */}
                <div className="p-4 bg-teal-50 border-l-4 border-teal-600 italic text-slate-700">“Bridging disciplines, building opportunities.”</div>

                {/* Key Focus Areas */}
                <div>
                    <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-2">Our Focus</h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Host interdisciplinary workshops and panels</li>
                        <li>Create networking opportunities with academia & industry</li>
                        <li>Support undergraduates in developing transferable research skills</li>
                        <li>Showcase cutting-edge research across diverse fields</li>
                    </ul>
                </div>

                {/* CTA */}

                <div className="pt-4">
                    <CTAButton href="https://www.instagram.com/uro_ubc">Follow us on Instagram</CTAButton>
                </div>
            </div>
        </>
    );
};
