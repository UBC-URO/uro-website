import Image from "next/image";
import { Container, Layout, Section } from "@/components/utils/Layout";
import { Users, Target, Lightbulb, BookOpen, Calendar, Award, Heart } from "lucide-react";
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
