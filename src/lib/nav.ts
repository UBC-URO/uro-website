export const NAV = {
    items: [
        { kind: "link", label: "Home", href: "/" },
        {
            kind: "menu",
            label: "About",
            links: [
                { label: "Team", href: "/team" },
                // { label: "Membership", href: "/membership" },
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
