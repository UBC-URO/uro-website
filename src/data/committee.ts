import { Member, Committee } from "@/types/committee";

const MEMBERS: Member[] = [
    {
        name: "Jade Park",
        role: "President",
        image: "https://i.pravatar.cc/160?img=11",
        bio: "Leads strategy, partnerships, and campus initiatives. Previously SWE intern at a fintech startup.",
        linkedin: "https://www.linkedin.com/in/jade-park",
    },
    {
        name: "Ethan Liu",
        role: "VP Engineering",
        image: "https://i.pravatar.cc/160?img=22",
        bio: "Full-stack dev focused on TypeScript, React, and Supabase. Loves building internal tooling.",
        linkedin: "https://www.linkedin.com/in/ethan-liu",
    },
    {
        name: "Sofia Morales",
        role: "VP Programs",
        image: "https://i.pravatar.cc/160?img=33",
        bio: "Runs REX & LSRN. Designs hands-on workshops that blend research skills with real projects.",
        linkedin: "https://www.linkedin.com/in/sofia-morales",
    },
    {
        name: "Arjun Mehta",
        role: "Research Coach",
        image: "https://i.pravatar.cc/160?img=44",
        bio: "ML enthusiast mentoring students on literature reviews, experimentation, and reproducibility.",
        linkedin: "https://www.linkedin.com/in/arjun-mehta",
    },
    {
        name: "Mina Cho",
        role: "Design Lead",
        image: "https://i.pravatar.cc/160?img=55",
        bio: "Owns branding and UX. Figma wizard who turns messy ideas into crisp interfaces.",
        linkedin: "https://www.linkedin.com/in/mina-cho",
    },
    {
        name: "Leo Nguyen",
        role: "Operations",
        image: "https://i.pravatar.cc/160?img=66",
        bio: "Keeps events on track—logistics, budgets, vendors, and snacks. Spreadsheet enjoyer.",
        linkedin: "https://www.linkedin.com/in/leo-nguyen",
    },
    {
        name: "Priya Shah",
        role: "Marketing Lead",
        image: "https://i.pravatar.cc/160?img=67",
        bio: "Owns growth channels, content calendar, and brand voice across socials and email.",
        linkedin: "https://www.linkedin.com/in/priya-shah",
    },
    {
        name: "Daniel Kim",
        role: "Events Lead",
        image: "https://i.pravatar.cc/160?img=68",
        bio: "Runs kickoff, mixers, and showcase nights. Vendor wrangler and venue whisperer.",
        linkedin: "https://www.linkedin.com/in/daniel-kim",
    },
    {
        name: "Hannah Wright",
        role: "Finance Lead",
        image: "https://i.pravatar.cc/160?img=69",
        bio: "Budgeting, reimbursements, grants, and sponsor invoicing. Loves tidy ledgers.",
        linkedin: "https://www.linkedin.com/in/hannah-wright",
    },
    {
        name: "Marco Rossi",
        role: "Outreach Lead",
        image: "https://i.pravatar.cc/160?img=12",
        bio: "Partnerships, recruitment, and campus outreach. Bridges students with mentors and labs.",
        linkedin: "https://www.linkedin.com/in/marco-rossi",
    },
    {
        name: "Alice Zhang",
        role: "Editor-in-Chief (CJUR)",
        image: "https://i.pravatar.cc/160?img=13",
        bio: "Leads the editorial board and manages peer review for CJUR.",
        linkedin: "https://www.linkedin.com/in/alice-zhang",
    },
    {
        name: "Noah Patel",
        role: "Copy Editor (CJUR)",
        image: "https://i.pravatar.cc/160?img=14",
        bio: "Style guide hawk. Ensures clarity, correctness, and consistency in all CJUR pieces.",
        linkedin: "https://www.linkedin.com/in/noah-patel",
    },
];

export const COMMITTEES: Committee[] = [
    {
        name: "Social Events Committee (SEC)",
        description: "Plans community mixers, kickoff, and showcase nights; handles venues, vendors, and swag.",
        members: [MEMBERS[7], MEMBERS[5], MEMBERS[4], MEMBERS[6]], // Daniel, Leo, Mina, Priya
    },
    {
        name: "Research Experience (REX)",
        description: "Pairs students with mentors, runs research-skills workshops, and coordinates project showcases.",
        members: [MEMBERS[2], MEMBERS[3], MEMBERS[9], MEMBERS[10]], // Sofia, Arjun, Marco, Alice
    },
    {
        name: "Marketing & Brand Strategy (MBS)",
        description: "Content, social media, photography, and brand guidelines; collaborates on web updates.",
        members: [MEMBERS[6], MEMBERS[4], MEMBERS[1]], // Priya, Mina, Ethan
    },
    {
        name: "Internal Operations Committee (IOC)",
        description: "Budgeting, tooling, documentation, and process; ensures smooth cross-committee execution.",
        members: [MEMBERS[5], MEMBERS[8], MEMBERS[1]], // Leo, Hannah, Ethan
    },
    {
        name: "Community Outreach, Recruitment & Engagement (CORE)",
        description: "Partnerships, tabling, info sessions, and onboarding for new members.",
        members: [MEMBERS[9], MEMBERS[6], MEMBERS[0], MEMBERS[2]], // Marco, Priya, Jade, Sofia
    },
    {
        name: "Canadian Journal of Undergraduate Research (CJUR)",
        description: "Student-run editorial board managing peer review and publication.",
        members: [MEMBERS[10], MEMBERS[11], MEMBERS[3]], // Alice, Noah, Arjun
    },
];
