import { COMMITTEES } from "@/data/committee";
import { CommitteeSection } from "@/components/team/ComitteeSection";
import { Layout } from "@/components/utils/Layout";

export default function TeamPage() {
    const totalMembers = COMMITTEES.reduce((total, c) => {
        const leaders = c.leaders?.length ?? 0;
        const members = c.members?.length ?? 0;
        return total + leaders + members;
    }, 0);

    return (
        <Layout>
            Currently under construction!
            {/* <section className="relative">
                <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-8">
                    <div className="space-y-4 text-center">
                        <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight text-balance">Meet our exceptional team</h1>
                        <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed text-pretty">
                            Dedicated leaders and innovators driving research excellence across {COMMITTEES.length} specialized committees
                        </p>
                    </div>

                    <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-accent" />
                            <span>{totalMembers} Team Members</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-accent" />
                            <span>{COMMITTEES.length} Committees</span>
                        </div>
                    </div>
                </div>
            </section>

            {COMMITTEES.map((committee, index) => {
                return (
                    <div key={index}>
                        <CommitteeSection committee={committee} />
                    </div>
                );
            })} */}
        </Layout>
    );
}
