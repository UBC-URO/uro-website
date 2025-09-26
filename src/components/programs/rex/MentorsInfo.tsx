import { Container, Section } from "../../utils/Layout";

export const MentorsInfo = () => {
    return (
        <>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">For Mentors</h2>
            <div className="text-lg text-slate-700 leading-relaxed space-y-6">
                <p>
                    All graduate students and postdoctoral fellows at UBC are welcome to apply to become a REX mentor. Undergraduate students, regardless of the extent of their research experience,
                    are unfortunately not eligible to become a REX mentor.
                </p>

                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-slate-900">Mentor Applications</h3>
                    <p>
                        Applications to be a mentor for the 2025-26 cycle of the REX Program are currently closed. If you are interested in joining our mailing list for the 2026-27 cycle of Mentor
                        Recruitment, please email rex.uro.ubc@gmail.com.
                    </p>
                    <p>Further details regarding Mentor Applications for REX 2026-27 will be released in Summer 2026.</p>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-slate-900">Mentor Info Night</h3>
                    <p>
                        If you are a current REX Mentor and did not get the chance to attend Mentor Info Night, the presentation slides from the session can be found here for your reference. For
                        further clarification, do contact us at rex.uro.ubc@gmail.com.
                    </p>
                </div>
            </div>
        </>
    );
};
