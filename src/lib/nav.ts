export const NAV = {
    items: [
        { kind: "link", label: "Home", href: "/" },
        {
            kind: "menu",
            label: "About",
            links: [
                { label: "Team", href: "/team" },
                { label: "Membership", href: "/membership" },
            ],
        },
        {
            kind: "menu",
            label: "Programs",
            products: [
                {
                    title: "REX",
                    href: "https://algochurn.com",
                    src: "https://assets.aceternity.com/demos/algochurn.webp",
                    description: "Prepare for tech interviews like never before.",
                },
                {
                    title: "LSRN",
                    href: "https://tailwindmasterkit.com",
                    src: "https://assets.aceternity.com/demos/tailwindmasterkit.webp",
                    description: "Production ready Tailwind CSS components.",
                },
                {
                    title: "RIF",
                    href: "https://gomoonbeam.com",
                    src: "https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png",
                    description: "Go from idea to blog in minutes.",
                },
                {
                    title: "Research Coaches",
                    href: "https://userogue.com",
                    src: "https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png",
                    description: "Respond to government RFPs 10x faster using AI.",
                },
            ],
        },
        {
            kind: "menu",
            label: "CJUR",
            links: [
                { label: "Overview", href: "/hobby" },
                { label: "Issues", href: "/individual" },
            ],
        },
        { kind: "link", label: "Contact", href: "/contact" },
    ],
} as const;
