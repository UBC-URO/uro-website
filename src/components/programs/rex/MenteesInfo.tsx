import { Section, Container } from "../../utils/Layout";

export const MenteesInfo = () => {
    return (
        <>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">For Mentees</h2>
            <div className="text-lg text-slate-700 leading-relaxed space-y-6">
                <p>All undergraduate students looking for introductory, theoretical research experience are welcome to apply to become a REX mentee. No previous research experience is required.</p>

                <p>
                    For further information about the REX program, attend Mentee Info Night on Tuesday, September 23 from 6-8 PM at the AMS Nest Great Hall South. Learn more about what you can gain
                    from the REX Program and get an opportunity to meet potential mentors. RSVP here!
                </p>

                <p>Applications to be a mentee for the 2025-26 cycle of the REX Program are currently open. Refer to How to become a REX Mentee to apply.</p>

                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-slate-900">Why should I become a REX Mentee?</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Introductory research experience</li>
                        <li>No barrier to entry</li>
                        <li>Explore a research field of your interest</li>
                        <li>Connect with graduate and postdoctoral mentors</li>
                        <li>Apply coursework to practical contexts</li>
                        <li>Research communication experience</li>
                    </ul>
                    <p className="text-sm text-slate-600 italic">
                        **Please note that due to the competitive nature of the REX Program, there is no guarantee that participating in REX will result in a successful match.
                    </p>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-slate-900">How to become a REX Mentee</h3>
                    <ol className="list-decimal list-inside space-y-3 ml-4">
                        <li>Purchase the $10 URO membership on Bounce. Ensure you note down the receipt number from Bounce.</li>
                        <li>
                            Fill out this Qualtrics form with the Bounce receipt number. You will then receive your URO number within 24-48 hours. For inquiries about your URO number, email
                            uro.ubc@gmail.com
                        </li>
                        <li>
                            Once you receive your URO number, please fill out the mentee application form. You can rank up to five mentors in order of preference. We encourage you to rank as many
                            mentors as you can to maximize your chances of being matched. For questions about the REX mentee application, please email rex.uro.ubc@gmail.com
                        </li>
                    </ol>
                </div>
            </div>
        </>
    );
};
