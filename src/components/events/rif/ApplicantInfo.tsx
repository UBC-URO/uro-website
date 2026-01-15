import { CTAButton } from "@/components/shared/CTAButton";
import Link from "next/link";

export const ApplicantInfo = () => {
    return (
        <div className="grid lg:grid-cols-2 gap-16">
            {/* For Applicants */}
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">For Applicants</h2>
                <div className="text-lg text-slate-700 leading-relaxed space-y-6">
                    <p>Applicants must meet the following requirements to participate:</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Hold an active URO membership</li>
                        <li>Be a current UBC undergraduate student</li>
                        <li>Submit the application (with a resume) before the deadline</li>
                        <li>Be excited and open to exploring various research fields!</li>
                    </ul>
                    <p className="font-medium">📅 The application is now open!</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            <a href="https://ubc.ca1.qualtrics.com/jfe/form/SV_0rfRXjw3uWfkttc" className="text-teal-600 underline" target="_blank" rel="noopener noreferrer">
                                Access the application here
                            </a>
                        </li>
                        <li>
                            <a href="https://docs.google.com/spreadsheets/d/1gJjVnseMoYJ0th4lrRMFfjyFO_iZpm94tmqMvor0MkY/edit" className="text-teal-600 underline" target="_blank" rel="noopener noreferrer">
                                See the list of participating labs
                            </a>
                        </li>
                        <li>
                            <a href="https://drive.google.com/file/d/1WYr-c1TS5Zt67eoyidIL856lX9GFGnTn/view" className="text-teal-600 underline" target="_blank" rel="noopener noreferrer">
                                View the adjudication rubric
                            </a>{" "}
                            to see how we shortlist applicants
                        </li>
                    </ul>
                    <CTAButton href="https://ubc.ca1.qualtrics.com/jfe/form/SV_0rfRXjw3uWfkttc">
                        Apply for RIF
                    </CTAButton>
                    <p className="text-sm text-slate-600 mt-4">
                        All applications will be de-identified with a number during the adjudication process. Chairs will manually crop out applicants&apos; name on their resume to ensure
                        adjudicators cannot identify you. Note that after adjudication is over, we will be providing the original resume of accepted applicants to the interviewers who are matched
                        with you.
                    </p>
                </div>
            </div>

            {/* For Research Staff */}
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">For Research Staff</h2>
                <div className="text-lg text-slate-700 leading-relaxed space-y-6">
                    <p>If your lab is looking for enthusiastic undergraduates to help out in the summer or at any capacity, please sign up to participate in this event!</p>
                    <p>
                        We will do the screening for you! Upon shortlisting, we will pair you with multiple interested students who share similar research interests. Over a 3-hour period, you will
                        have the opportunity to engage in brief one-on-one conversations with each of them.
                    </p>
                    <p>
                        You are free to proceed with any next steps involving the students you&apos;ve interviewed, provided that any decisions are made mutually. Please know that there is no
                        expectation for you to accept applicants into your lab if you&apos;re uninterested.
                    </p>
                    <p className="font-medium">
                        📅 We are looking for interviewers now! Please contact{" "}
                        <a href="mailto:student.uro.ubc@gmail.com" className="text-teal-600 underline">
                            student.uro.ubc@gmail.com
                        </a>{" "}
                        if you or any members in your lab are interested!
                    </p>
                    <CTAButton href="/rif/apply" disabled={true}>
                        Faculty Sign-Up
                    </CTAButton>
                </div>
            </div>
        </div>
    );
};
