import { Layout } from "@/components/utils/Layout";
import { FAQ } from "@/components/shared/FAQ";
import { iocFAQ } from "@/data/FAQ";
import { Timeline } from "@/components/events/ioc/Timeline";
import { Overview } from "@/components/events/ioc/Overview";

export default function EventsPage() {
    return (
        <Layout>
            <Overview />
            <Timeline />
            <FAQ items={iocFAQ} />
        </Layout>
    );
}
