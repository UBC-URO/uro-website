import { Committee } from "@/types/committee";
import { COMMITTEES } from "@/data/committee";
import { CommitteeInfo } from "@/components/team/ComitteeInfo";
import { cn } from "@/lib/utils";

function Container({ className, children }: React.PropsWithChildren<{ className?: string }>) {
    return <div className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)}>{children}</div>;
}

export default function TeamPage() {
    return (
        <>
            <div className="py-14 sm:py-20">
                <Container className="text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Meet Our Team</h1>
                    <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                        We’re a diverse group of students and mentors building programs, events, and research opportunities for our community.
                    </p>
                </Container>
            </div>
            <Container>
                <div className="flex flex-col gap-20">
                    {COMMITTEES.map((committee: Committee) => (
                        <CommitteeInfo key={committee.name} {...committee} />
                    ))}
                </div>
            </Container>
        </>
    );
}
