type Member = {
    name: string;
    role: string;
    image: string;
    bio: string;
    linkedin?: string;
};

type Committee = {
    name: string;
    description: string;
    leaders: Member[];
    members: Member[];
};

export type { Member, Committee };
