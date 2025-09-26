import { Link } from "@/components/shared/Link";
import { WorkshopsTable } from "./WorkshopsTable";

export const Workshops = () => {
    return (
        <>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Workshops</h2>
            <div className="text-lg text-slate-700 leading-relaxed space-y-6">
                <p>
                    Evolving every year, LSRN’s workshops are the most anticipated part of the evening. We host 15+ workshops, including ‘Opportunities at BC Children’s Hospital’, ‘MD vs MD/PhD vs
                    PhD’, and ‘How to Approach Faculty’.
                </p>
                <p>This year, we are excited to introduce the following workshops:</p>
            </div>
            <WorkshopsTable />
            <div className="text-lg text-slate-700 leading-relaxed space-y-6">
                <p>*These workshops are hosted at 2 different timeslots. Feel free to attend just one session.</p>
                <p>
                    Please visit <Link href="https://docs.google.com/document/d/1ixYL2yanAThb0c8uCNycepfJwiI0EK1qfQhDCLu1yY8/edit?usp=sharing" label="here" /> for more details about the workshops.
                </p>
            </div>
        </>
    );
};
