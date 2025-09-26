import { Layout } from "@/components/utils/Layout";
import { Overview } from "@/components/programs/rex/Overview";
import { Schedule } from "@/components/programs/rex/Schedule";
import { MenteesInfo } from "@/components/programs/rex/MenteesInfo";
import { FAQ } from "@/components/shared/FAQ";
import { MentorsInfo } from "@/components/programs/rex/MentorsInfo";
import { rexFAQ } from "@/data/FAQ";

export default function REXPage() {
    return (
        <Layout>
            <Overview />
            <Schedule />
            <MentorsInfo />
            <MenteesInfo />
            <FAQ items={rexFAQ} />
        </Layout>
    );
}
