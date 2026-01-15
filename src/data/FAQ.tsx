import { Link } from "@/components/shared/Link";

export const rexFAQ = [
    {
        question: "Who can I contact for any further questions, concerns or inquiries?",
        answer: (
            <p>
                Please contact <Link href="mailto:rex.uro.ubc@gmail.com" label="rex.uro.ubc@gmail.com" />, and we would be happy to help you!
            </p>
        ),
    },
    {
        question: "Can mentees outside of Science apply?",
        answer: (
            <p>
                Yes, and we strongly encourage it! We have Arts mentors with very interesting projects (e.g. linguistics, policy making, climate change, etc.) eager to mentor undergraduate students.
            </p>
        ),
    },
    {
        question: "Can undergraduates apply to be a mentor?",
        answer: (
            <p>
                No. Regardless of the extent of an undergraduate student&apos;s research experience, we currently only accept mentor applications from graduate students and postdoctoral fellows. If
                you&apos;re a senior undergraduate student interested in research, check out our Research Coaches Program or look into presenting at URO&apos;s Research Involvement Fair (RIF)!
            </p>
        ),
    },
    {
        question: "Can I apply to be a mentor? I am a current postgraduate student.",
        answer: (
            <p>
                No. Unfortunately, mentor applications are closed. If you would like to be added to the mailing list for the 2026–27 cycle of the REX Program, please email{" "}
                <Link href="mailto:rex.uro.ubc@gmail.com" label="rex.uro.ubc@gmail.com" />.
            </p>
        ),
    },
    {
        question: "How likely is it that I will get matched with a mentor?",
        answer: (
            <>
                <p>
                    REX matching is competitive. There is no guarantee that applying to the REX program will result in a successful match. Matching rates vary each year and there is no reliable
                    estimate for the percentage of mentees who are matched each year.
                </p>
                <p>To maximize your chances, apply to the maximum five (5) mentors.</p>
            </>
        ),
    },
    {
        question: "What happens if I am not matched?",
        answer: (
            <>
                <p>
                    Unmatched REX applications will be given priority access to lab tours and workshops organized by the URO Interdisciplinary Outreach Committee (IOC). Unmatched mentees also retain
                    all general URO membership benefits.
                </p>
                <p>For more information on membership, please visit the Bounce page.</p>
            </>
        ),
    },
    {
        question: "Can I present at MURC?",
        answer: <p>The Multidisciplinary Undergraduate Research Conference (MURC) is open to all UBC undergraduate students, and REX mentees are able to present at MURC.</p>,
    },
    {
        question: "Can I get published in CJUR?",
        answer: (
            <>
                <p>There are two ways to be published in the Canadian Journal of Undergraduate Research (CJUR):</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                        If you present at MURC, you can publish your presentation abstract in a special MURC×CJUR edition (questions to{" "}
                        <Link href="mailto:cjur.uro@gmail.com" label="cjur.uro@gmail.com" />
                        ).
                    </li>
                    <li>You can also publish a manuscript in a special REX×CJUR edition.</li>
                </ul>
                <p>
                    For a manuscript, you’ll need to adapt your project yourself (mentors aren’t obligated to guide this). Please follow CJUR’s manuscript requirements, and add{" "}
                    <span className="font-semibold">“For special REX edition of CJUR”</span> in the submission comments.
                </p>
            </>
        ),
    },
    {
        question: "I am an upper year undergraduate; can I apply to be a mentee?",
        answer: <p>Yes. However, note the theoretical nature of REX projects. If this doesn’t suit your goals, check out URO’s Research Involvement Fair (RIF).</p>,
    },
    {
        question: "Do I get wet lab or field work experience?",
        answer: <p>Your mentor is not obligated to provide field or lab experience. Some mentees do have this experience, but REX does not guarantee it.</p>,
    },
];

export const lsrnFAQ = [
    {
        question: "Who can I contact for any further questions, concerns or inquiries?",
        answer: (
            <p>
                If you have questions or suggestions, contact us at <Link href="mailto:ubc.lsrn@gmail.com" label="ubc.lsrn@gmail.com" />. We’d love to hear from you!
            </p>
        ),
    },
    {
        question: "Is there an admission fee?",
        answer: <p>Nope, LSRN is free for everyone, even to those who are not URO members!</p>,
    },
    {
        question: "Will the event be useful to me as a lower year undergraduate?",
        answer: <p>Absolutely! Most of our workshops are designed to help new undergraduates explore research opportunities and discover how to get involved.</p>,
    },
    {
        question: "Will the event be useful to me as an upper-year undergraduate?",
        answer: <p>For sure! Some of our workshops aim to highlight the diverse career paths in life science beyond university, including opportunities in medicine, academia, and industry.</p>,
    },
    {
        question: "Do I have to stay for the entire duration of the event?",
        answer: <p>Nope. While it would be nice to have you for the whole evening, we completely understand if you can only visit a couple workshops.</p>,
    },
];

export const rifFAQ = [
    {
        question: "Who can I contact for further questions or suggestions?",
        answer: (
            <p>
                If you have questions or suggestions, contact us at <Link href="mailto:student.uro.ubc@gmail.com" label="student.uro.ubc@gmail.com" />. We’d love to hear from you!
            </p>
        ),
    },
    {
        question: "Am I guaranteed to secure a spot in RIF if I submit an application?",
        answer: <p>Unfortunately no. We receive more applications than the available interview spots every year.</p>,
    },
    {
        question: "Do I need prior research experience to be selected for this event?",
        answer: (
            <p>
                Nope. While it would certainly help your application if you have research experience, it is not a requirement. Showcasing your enthusiasm in your application is equally, if not more
                important.
            </p>
        ),
    },
    {
        question: "Is a research position guaranteed if I am shortlisted for RIF?",
        answer: <p>Any steps beyond the event will depend on your discussion with the faculty member. Unfortunately, URO cannot guarantee you a research position.</p>,
    },
    {
        question: "What are some tips to be selected for the event?",
        answer: (
            <p>
                In your responses, make sure you thoroughly demonstrate and articulate your interest in your intended research field. Also, double-check all your files before submitting to ensure
                you&apos;ve uploaded the correct documents.
            </p>
        ),
    },
    {
        question: "I'm not available for the entire 3hr period of the event. Can I only attend part of the event?",
        answer: (
            <>
                <p>
                    <strong>For applicants:</strong> Unfortunately, we require you to be available for the whole event duration. However, depending on interviewer&apos;s availability, we may not be
                    able to schedule you for the entire event.
                </p>
                <p>
                    <strong>For research staff:</strong> If you are unavailable for the entire event, you are welcome to sign up for individual half-hour slots. However, note that your availability
                    will determine the maximum number of applicants that you can interview.
                </p>
            </>
        ),
    },
    {
        question: "My research lab prefers applicants with specific laboratory skills, how can SEC assist with that?",
        answer: (
            <p>
                There will be a spot in the sign-up form to list down the skills you wish your candidates have. We will take these preferences into consideration while screening. However, matches are
                not guaranteed. We kindly ask that you also keep an open mind when meeting with candidates.
            </p>
        ),
    },
];

export const iocFAQ = [
    {
        question: "Who can join IOC events?",
        answer: <p>All UBC undergraduate students interested in research — no prior experience required!</p>,
    },
    {
        question: "Do I need to be in a specific major?",
        answer: <p>Not at all. In fact, our events are designed to help students learn about research beyond their own discipline.</p>,
    },
    {
        question: "Are events free?",
        answer: <p>Yes, all IOC-hosted events are free for UBC students.</p>,
    },
    {
        question: "Where can I stay updated?",
        answer: (
            <p>
                Follow us on <Link href="https://www.instagram.com/uro_ubc" label="Instagram" />.
            </p>
        ),
    },
];
