import { Committee } from "@/types/committee";
import { MemberList } from "./MemberList";

export const CommitteeInfo = ({ name, description, members }: Committee) => {
    return (
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-slate-200/50">
            <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-slate-900">{name}</h3>
                    <div className="px-4 py-2 bg-gradient-to-r from-teal-100 to-blue-100 rounded-full">
                        <span className="text-sm font-semibold text-teal-700">{members.length} members</span>
                    </div>
                </div>
                <p className="text-slate-600 text-lg leading-relaxed">{description}</p>
            </div>
            <MemberList members={members} />
        </div>
    );
};
