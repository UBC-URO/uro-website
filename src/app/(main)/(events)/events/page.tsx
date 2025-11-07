"use client";

import { Layout } from "@/components/utils/Layout";
import { EventsSection } from "@/components/events/info/EventsSection";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function EventsPage() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const showPast = searchParams.get("past") === "true";

    const handleFilterChange = (isPast: boolean) => {
        if (isPast) {
            router.push("/events?past=true");
        } else {
            router.push("/events");
        }
    };

    return (
        <Layout>
            <EventsSection showPast={showPast} onFilterChange={handleFilterChange} />
        </Layout>
    );
}
