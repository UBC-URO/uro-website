import type { Committee } from "@/types/committee";
import { MemberCard } from "./MemberCard";
import { cn } from "@/lib/utils";

interface CommitteeSectionProps {
    committee: Committee;
    className?: string;
}

export function CommitteeSection({ committee, className }: CommitteeSectionProps) {
    const leaders = committee.leaders ?? [];
    const members = committee.members ?? [];
    const hasLeaders = leaders.length > 0;
    const hasMembers = members.length > 0;

    return (
        <section aria-label={committee.name} className={cn("relative rounded-3xl border bg-card/30 backdrop-blur-[1px] shadow-sm", "px-4 sm:px-6 lg:px-10 py-10 md:py-14", className)}>
            {/* Decorative accent blobs */}
            <span className="pointer-events-none absolute -top-6 -left-6 h-16 w-16 rounded-2xl bg-gradient-to-r from-teal-400 to-green-400 opacity-25" />
            <span className="pointer-events-none absolute -bottom-8 -right-8 h-24 w-24 rounded-[2rem] bg-gradient-to-r from-teal-400 to-green-400 opacity-25" />

            {/* Header */}
            <div className="text-center space-y-4 mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">{committee.name}</h2>
                {committee.description && <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">{committee.description}</p>}

                <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                    {hasLeaders && (
                        <span className="inline-flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                            {leaders.length} {leaders.length === 1 ? "Leader" : "Leaders"}
                        </span>
                    )}
                    {hasMembers && (
                        <span className="inline-flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                            {members.length} {members.length === 1 ? "Member" : "Members"}
                        </span>
                    )}
                </div>

                <div className="mx-auto mt-2 h-0.5 w-24 rounded-full bg-gradient-to-r from-transparent via-accent to-transparent" />
            </div>

            {/* Leaders */}
            {hasLeaders && (
                <div className="space-y-5 mb-10">
                    <div className="text-center">
                        <h3 className="text-xl font-semibold text-foreground">Leadership</h3>
                    </div>
                    <div
                        className={cn(
                            // denser grid for leaders, larger avatars look good with 2–4 per row
                            "mx-auto grid gap-6",
                            "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
                            // cap width so it doesn’t stretch too wide
                            "max-w-5xl"
                        )}
                    >
                        {leaders.map((leader, idx) => (
                            <div key={idx} className="flex items-center justify-center">
                                {/* Slightly larger avatars for leaders */}
                                <MemberCard member={leader} />
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Divider between leaders and members */}
            {hasLeaders && hasMembers && (
                <div className="my-8 flex justify-center">
                    <div className="h-px w-28 bg-gradient-to-r from-transparent via-border to-transparent" />
                </div>
            )}

            {/* Members */}
            {hasMembers && (
                <div className="space-y-5">
                    <div className="text-center">
                        <h3 className="text-xl font-semibold text-foreground">Members</h3>
                    </div>

                    <div
                        className={cn(
                            "grid gap-5",
                            // auto-fit ensures nice wrapping for many members
                            "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6"
                        )}
                    >
                        {members.map((member, idx) => (
                            <div key={idx} className="flex items-center justify-center">
                                <MemberCard member={member} />
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Empty state */}
            {!hasLeaders && !hasMembers && <div className="mt-6 text-center text-sm text-muted-foreground">No team members listed yet — check back soon.</div>}
        </section>
    );
}
