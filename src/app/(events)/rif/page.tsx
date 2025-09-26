import { Layout } from "@/components/utils/Layout";
import { FAQ } from "@/components/shared/FAQ";
import { rifFAQ } from "@/data/FAQ";
import { Overview } from "@/components/events/rif/Overview";
import { Process } from "@/components/events/rif/Process";
import { ApplicantInfo } from "@/components/events/rif/ApplicantInfo";

export default function RIFPage() {
    return (
        <Layout>
            <Overview />
            <Process />
            <ApplicantInfo />
            <FAQ items={rifFAQ} />
        </Layout>
    );
}
