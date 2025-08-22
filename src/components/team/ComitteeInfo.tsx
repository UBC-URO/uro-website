import { Committee } from "@/types/committee";
import { MemberList } from "./MemberList";

export const CommitteeInfo = ({ name, description, members }: Committee) => {
    return (
        <section className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold text-[#4B9C8E]">{name}</h1>
                <div className="text-sm">{description}</div>
            </div>
            <MemberList members={members} />
        </section>
    );
};
