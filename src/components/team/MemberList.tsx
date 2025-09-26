import { Member } from "@/types/committee";
import { MemberInfo } from "./MemberInfo";

export const MemberList = ({ members }: { members: Member[] }) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
            {members.map((member: Member) => (
                <MemberInfo key={member.name} {...member} />
            ))}
        </div>
    );
};
