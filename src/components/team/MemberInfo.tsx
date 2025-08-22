"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type TeamMemberCardProps = {
    name: string;
    role: string;
    image?: string;
    bio?: string;
    linkedin?: string;
};

export const MemberInfo = ({ name, role, image, bio, linkedin }: TeamMemberCardProps) => {
    return (
        <div className="flex flex-col items-center gap-2">
            <Avatar className="h-16 w-16 ring-2 ring-teal-600 shadow-sm">
                <AvatarImage src={image} alt={name} />
                <AvatarFallback className="bg-teal-100 text-teal-700">{name}</AvatarFallback>
            </Avatar>
            <h3 className="text-base font-semibold text-gray-900">{name}</h3>
            <p className="text-sm text-gray-500">{role}</p>
        </div>
    );
};
