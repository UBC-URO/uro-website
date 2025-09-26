export const NAV = {
    items: [
        { kind: "link", label: "Home", href: "/" },
        {
            kind: "menu",
            label: "About",
            links: [
                { label: "What is URO?", href: "/about" },
                { label: "The Team", href: "/team" },
            ],
        },
        {
            kind: "menu",
            label: "Programs",
            products: [
                {
                    title: "REX",
                    href: "/rex",
                    src: "/rex1.jpg",
                    description: "Our Flagship Undergraduate research mentorship program.",
                },
                {
                    title: "Research Coaches",
                    href: "/research-coaches",
                    src: "/research-coaches1.jpg",
                    description: "Mentorship program connecting senior undergraduates with aspiring researchers.",
                },
            ],
        },
        {
            kind: "menu",
            label: "Events",
            products: [
                {
                    title: "LSRN",
                    href: "/lsrn",
                    src: "/lsrn2.jpg",
                    description: "URO’s largest annual event for students specializing in the life sciences.",
                },
                {
                    title: "RIF",
                    href: "/rif",
                    src: "https://assets.aceternity.com/demos/tailwindmasterkit.webp",
                    description: "Production ready Tailwind CSS components.",
                },
                {
                    title: "IOC",
                    href: "/ioc",
                    src: "https://assets.aceternity.com/demos/tailwindmasterkit.webp",
                    description: "Production ready Tailwind CSS components.",
                },
                {
                    title: "Upcoming Events",
                    href: "/upcoming-events",
                    src: "https://assets.aceternity.com/demos/tailwindmasterkit.webp",
                    description: "Production ready Tailwind CSS components.",
                },
                {
                    title: "Past Events",
                    href: "/past-events",
                    src: "https://assets.aceternity.com/demos/tailwindmasterkit.webp",
                    description: "Production ready Tailwind CSS components.",
                },
            ],
        },
        // {
        //     kind: "link",
        //     label: "CJUR",
        //     href: "https://cjur.ca/",
        // },
        // {
        //     kind: "link",
        //     label: "Get Involved",
        //     href: "/get-involved",
        // },
        { kind: "link", label: "Contact", href: "/contact" },
    ],
} as const;
