"use client";

import { Suspense } from "react";
import { Layout } from "@/components/utils/Layout";
import { EventsSection } from "@/components/events/info/EventsSection";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

function EventsContent() {
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

    return <EventsSection showPast={showPast} onFilterChange={handleFilterChange} />;
}

export default function EventsPage() {
    return (
        <Layout>
            <Suspense fallback={<div>Loading...</div>}>
                <EventsContent />
            </Suspense>
        </Layout>
    );
}
