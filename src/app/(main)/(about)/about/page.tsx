import { Layout } from "@/components/utils/Layout";
import { Mission } from "@/components/about/Mission";
import { Values } from "@/components/about/Values";
import { Impact } from "@/components/about/Impact";
import { Programs } from "@/components/about/Programs";
import { CTA } from "@/components/about/CTA";

export default function AboutPage() {
    return (
        <Layout>
            <Mission />
            <Values />
            <Impact />
            <Programs />
            <CTA />
        </Layout>
    );
}
