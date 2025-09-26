"use client";

import * as React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ExternalLink } from "lucide-react";

type TeamMemberCardProps = {
    name: string;
    role: string;
    image?: string;
    linkedin?: string;
};

export const MemberInfo = ({ name, role, image, linkedin }: TeamMemberCardProps) => {
    return (
        <div className="group relative">
            <div className="flex flex-col items-center text-center p-4 rounded-xl bg-white shadow-md border border-slate-200 hover:shadow-lg transition-transform duration-200 hover:-translate-y-1">
                {/* Avatar */}
                <div className="relative mb-3">
                    <Avatar className="h-16 w-16 ring-2 ring-slate-100 shadow-sm">
                        <AvatarImage src={image} alt={name} className="object-cover" />
                        <AvatarFallback className="bg-gradient-to-br from-teal-100 to-blue-100 text-teal-700 font-semibold text-lg">
                            {name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                        </AvatarFallback>
                    </Avatar>
                    {linkedin && (
                        <a
                            href={linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute -bottom-1 -right-1 w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center shadow-sm opacity-90 hover:opacity-100 transition-opacity"
                        >
                            <ExternalLink className="w-3 h-3 text-white" />
                        </a>
                    )}
                </div>

                {/* Text */}
                <h3 className="text-sm font-semibold text-slate-900 mb-0.5">{name}</h3>
                <p className="text-xs text-slate-500">{role}</p>
            </div>
        </div>
    );
};
