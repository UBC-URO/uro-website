import { Layout } from "@/components/utils/Layout";
import { FAQ } from "@/components/shared/FAQ";
import { rifFAQ } from "@/data/FAQ";
import { Overview } from "@/components/events/rif/Overview";
import { Process } from "@/components/events/rif/Process";
import { ApplicantInfo } from "@/components/events/rif/ApplicantInfo";
import { Timeline } from "@/components/events/rif/Timeline";

export default function RIFPage() {
    return (
        <Layout>
            <Overview />
            <Process />
            <ApplicantInfo />
            <Timeline />
            <FAQ items={rifFAQ} />
        </Layout>
    );
}
