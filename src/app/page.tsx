import { Layout } from "@/components/utils/Layout";
import { Hero } from "@/components/home/hero";
import { Programs } from "@/components/about/Programs";
import { Impact } from "@/components/about/Impact";
import { Gallery } from "@/components/about/Gallery";
import { CTA } from "@/components/about/CTA";

export default function Home() {
    return (
        <Layout>
            <Hero />
            <Programs />
            <Impact />
            <Gallery />
            <CTA />
        </Layout>
    );
}
