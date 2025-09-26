import type { Member } from "@/types/committee";
import { CalendarIcon, ExternalLink } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";

function getInitials(name?: string) {
    if (!name) return "NA";
    const parts = name.trim().split(/\s+/);
    const first = parts[0]?.[0] ?? "";
    const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
    return (first + last).toUpperCase();
}

export function MemberCard({
    member,
    isLeader = false,
    className,
    size = 72, // avatar diameter in px
}: {
    member: Member;
    isLeader?: boolean;
    className?: string;
    size?: number;
}) {
    const src = member.image || "/placeholder.svg";
    const joined = member.joinedAt // optional: Date | string on your Member type
        ? new Date(member.joinedAt as any).toLocaleString("default", { month: "long", year: "numeric" })
        : undefined;

    return (
        <HoverCard openDelay={80}>
            {/* Avatar trigger (wrapped in a button for a11y) */}
            <HoverCardTrigger asChild>
                <button
                    type="button"
                    aria-label={`View ${member.name}'s profile`}
                    className={cn(
                        "relative inline-flex items-center justify-center rounded-full overflow-hidden border shadow-sm",
                        "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring transition hover:brightness-[0.98]",
                        className
                    )}
                    style={{ width: size, height: size }}
                >
                    <Avatar className="h-full w-full">
                        <AvatarImage src={src} alt={member.name} />
                        <AvatarFallback className="text-sm">{getInitials(member.name)}</AvatarFallback>
                    </Avatar>

                    {/* leader dot */}
                    {isLeader && (
                        <span className="absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-full bg-accent grid place-items-center shadow-md">
                            <span className="h-2 w-2 rounded-full bg-accent-foreground" />
                        </span>
                    )}
                </button>
            </HoverCardTrigger>

            {/* Card content */}
            <HoverCardContent>
                <div className="space-y-3">
                    {/* Full Name */}
                    <h4 className="text-base font-semibold leading-tight">{member.name}</h4>

                    {/* Links */}
                    <div className="flex flex-col gap-1">
                        {member.linkedin && (
                            <Button asChild variant="link" className="h-auto p-0 text-sm justify-start">
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1">
                                    <ExternalLink className="h-3.5 w-3.5" />
                                    LinkedIn
                                </a>
                            </Button>
                        )}
                        {member.github && (
                            <Button asChild variant="link" className="h-auto p-0 text-sm justify-start">
                                <a href={member.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1">
                                    <ExternalLink className="h-3.5 w-3.5" />
                                    GitHub
                                </a>
                            </Button>
                        )}
                        {member.website && (
                            <Button asChild variant="link" className="h-auto p-0 text-sm justify-start">
                                <a href={member.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1">
                                    <ExternalLink className="h-3.5 w-3.5" />
                                    Website
                                </a>
                            </Button>
                        )}
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    );
}
