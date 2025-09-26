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
                    <p className="font-medium">📅 Applications will open in January!</p>
                    <Link
                        href="/rif/apply" // replace with actual application link
                        className="inline-flex items-center rounded-xl bg-teal-600 px-5 py-3 text-white hover:bg-teal-700 transition"
                    >
                        Apply for RIF
                    </Link>
                </div>
            </div>

            {/* For Research Staff */}
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">For Research Staff</h2>
                <div className="text-lg text-slate-700 leading-relaxed space-y-6">
                    <p>If your lab is looking for enthusiastic undergraduates to help out in the summer or at any capacity, please sign up to participate in this event!</p>
                    <p>
                        We will do the screening for you! Upon shortlisting, we will pair you with multiple interested students who share similar research interests. Over a 2-hour period, you will
                        have the opportunity to engage in brief one-on-one conversations with each of them.
                    </p>
                    <p>You are free to proceed with any next steps involving the students you’ve interviewed, provided that any decisions are made mutually.</p>
                    <p className="font-medium">📅 The sign-up will open in January!</p>
                    <Link
                        href="/rif/apply" // replace with actual application link
                        className="inline-flex items-center rounded-xl bg-teal-600 px-5 py-3 text-white hover:bg-teal-700 transition"
                    >
                        Faculty Sign-Up
                    </Link>
                </div>
            </div>
        </div>
    );
};
