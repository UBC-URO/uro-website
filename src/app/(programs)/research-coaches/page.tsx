import { CTA } from "@/components/about/CTA";
import { Overview } from "@/components/programs/research-coaches/Overview";
import { Layout } from "@/components/utils/Layout";

export default function ResearchCoachesPage() {
    return (
        <Layout>
            <Overview />
            <CTA />
        </Layout>
    );
}
