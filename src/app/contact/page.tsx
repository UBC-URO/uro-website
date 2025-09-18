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
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Contact Us</h1>
                    <div className="mt-10 flex flex-col gap-4 items-center">
                        <div className="flex justify-center px-6 py-3 rounded-full bg-teal-500 p-8 hover:shadow-lg">
                            <a href="https://www.instagram.com/uro_ubc/?hl=en">
                            <span className="p-3 text-xl font-semibold text-white">Instagram</span>
                            </a>
                        </div>
                        <div className="flex justify-center px-6 py-3 rounded-full bg-teal-500 p-8 hover:shadow-lg">
                            <a href="mailto:EMAILADDRESS@gmail.com">
                            <span className="p-3 text-xl font-semibold text-white">Email</span>
                            </a>
                        </div>
                    </div>  
                </Container>
            </div>
        </>
    );
}
