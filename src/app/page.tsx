"use client";

import Link from "next/link";
import Image from "next/image";
import { Container, Layout, Section } from "@/components/utils/Layout";
import { Card, CardContent } from "@/components/ui/card";
import CarouselComponent from "@/components/home/carousel";
import { Users, Megaphone, Cpu, Calendar, BookOpen, Award, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
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

/* ---------- small helpers ---------- */

function StatPill({ value, label, icon }: { value: string; label: string; icon: React.ReactNode }) {
    return (
        <div className="flex items-center gap-3 rounded-xl bg-white border px-4 py-3 shadow-sm">
            <div className="inline-flex items-center justify-center rounded-lg border px-2.5 py-2 text-slate-700">{icon}</div>
            <div>
                <div className="text-lg font-semibold text-slate-900 leading-none">{value}</div>
                <div className="text-xs text-slate-600">{label}</div>
            </div>
        </div>
    );
}

function ProgramCard({
    icon,
    title,
    description,
    href,
    gradient,
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
    href: string;
    gradient: string; // e.g. "from-teal-500 to-blue-500"
}) {
    return (
        <Card className="border shadow-sm hover:shadow-md transition">
            <CardContent className="p-6 space-y-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${gradient} flex items-center justify-center`}>{icon}</div>
                <h3 className="text-xl font-bold text-slate-900">{title}</h3>
                <p className="text-slate-600">{description}</p>
                <Link href={href} className="inline-flex items-center font-semibold text-teal-700 hover:underline">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </CardContent>
        </Card>
    );
}

function MetricCard({ value, label, icon }: { value: string; label: string; icon: React.ReactNode }) {
    return (
        <Card className="text-center p-8 border shadow-sm hover:shadow-md transition">
            <CardContent className="space-y-5">
                <div className="w-16 h-16 rounded-2xl bg-white border flex items-center justify-center mx-auto">{icon}</div>
                <h3 className="text-5xl font-bold text-slate-900 leading-none">{value}</h3>
                <p className="text-lg text-slate-600">{label}</p>
            </CardContent>
        </Card>
    );
}
