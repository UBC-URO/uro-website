import { Workshops } from "@/components/events/lsrn/Workshops";
import { Schedule } from "@/components/events/lsrn/Schedule";
import { FAQ } from "@/components/shared/FAQ";
import { Layout } from "@/components/utils/Layout";
import { lsrnFAQ } from "@/data/FAQ";
import { Overview } from "@/components/events/lsrn/Overview";
import { NetworkingAndPosters } from "@/components/events/lsrn/NetworkingAndPosters";

export default function LSRNPage() {
    return (
        <Layout>
            <Overview />
            <Schedule />
            <Workshops />
            <NetworkingAndPosters />
            <FAQ items={lsrnFAQ} />
        </Layout>
    );
}
