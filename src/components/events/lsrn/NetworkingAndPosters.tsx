import Image from "next/image";
import Link from "next/link";

const COLLABORATORS = [
    "Biochemistry Student Association",
    "Biological Science Society",
    "BioPhysics Student Society",
    "CAPS Student Association",
    "Science Undergraduate Society",
    "Medical Genetics Club",
    "UBC-BCIT Biotechnology Club",
    "UBC BIOMOD",
];

export const NetworkingAndPosters = () => {
    return (
        <>
            {/* Text Column */}
            <div className="space-y-10">
                {/* Networking & Boothing */}
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Networking &amp; Boothing Session</h2>
                    <p className="text-lg text-slate-700 leading-relaxed">
                        In the mingling session, we invite all our collaborators, attendees, sponsors, and speakers to celebrate the evening. Visit our club collaborators’ booths to learn more about
                        their initiatives!
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-2 text-slate-700">
                        {COLLABORATORS.map((c) => (
                            <li key={c} className="flex items-start gap-2">
                                <span className="mt-2 h-2 w-2 rounded-full bg-teal-500" />
                                <span>{c}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Poster Presentation */}
                <div className="space-y-6">
                    <h3 className="text-2xl md:text-3xl font-semibold text-slate-900">Poster Presentation</h3>
                    <p className="text-lg text-slate-700 leading-relaxed">
                        UBC undergraduate researchers are invited to showcase their work through poster presentations at our event. It’s a fantastic opportunity to share your research, gain experience
                        in scientific discourse, and connect with a supportive and curious community!
                    </p>
                    <div>
                        <Link
                            href="/" // TODO: replace with your RSVP route or external URL
                            className="inline-flex items-center rounded-xl bg-teal-600 px-5 py-3 text-white hover:bg-teal-700 transition"
                        >
                            RSVP to Present Your Poster
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};
