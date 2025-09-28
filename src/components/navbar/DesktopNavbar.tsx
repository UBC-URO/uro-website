import { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { NAV } from "@/lib/nav";

export const DesktopNavbar = () => {
    const [active, setActive] = useState<string | null>(null);

    return (
        <Menu className="hidden md:flex items-center" setActive={setActive}>
            {NAV.items.map((item) => {
                if (item.kind === "link") {
                    return (
                        <HoveredLink key={item.label} href={item.href}>
                            {item.label}
                        </HoveredLink>
                    );
                }

                // kind === "menu"
                return (
                    <MenuItem key={item.label} setActive={setActive} active={active} item={item.label}>
                        {/* Vertical link list */}
                        {"links" in item && item.links && (
                            <div className="flex flex-col space-y-4 text-sm">
                                {item.links.map((l) => (
                                    <HoveredLink key={l.label} href={l.href}>
                                        {l.label}
                                    </HoveredLink>
                                ))}
                            </div>
                        )}

                        {/* Product grid */}
                        {"products" in item && item.products && (
                            <div className="text-sm grid lg:grid-cols-2 gap-10 p-4">
                                {item.products.map((p) => (
                                    <ProductItem key={p.title} title={p.title} href={p.href} src={p.src} description={p.description} />
                                ))}
                            </div>
                        )}
                    </MenuItem>
                );
            })}
        </Menu>
    );
};

{
    /* <HoveredLink href="/">Home</HoveredLink>
            <MenuItem setActive={setActive} active={active} item="About">
                <div className="flex flex-col space-y-4 text-sm">
                    <HoveredLink href="/team">Team</HoveredLink>
                    <HoveredLink href="/">Membership</HoveredLink>
                </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Programs">
                <div className="text-sm grid lg:grid-cols-2 gap-10 p-4">
                    <ProductItem title="REX" href="https://algochurn.com" src="https://assets.aceternity.com/demos/algochurn.webp" description="Prepare for tech interviews like never before." />
                    <ProductItem
                        title="LSRN"
                        href="https://tailwindmasterkit.com"
                        src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                        description="Production ready Tailwind css components for your next project"
                    />
                    <ProductItem
                        title="RIF"
                        href="https://gomoonbeam.com"
                        src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                        description="Never write from scratch again. Go from idea to blog in minutes."
                    />
                    <ProductItem
                        title="Research Coaches"
                        href="https://userogue.com"
                        src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                        description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                    />
                </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="CJUR">
                <div className="flex flex-col space-y-4 text-sm">
                    <HoveredLink href="/hobby">Overview</HoveredLink>
                    <HoveredLink href="/individual">Issues</HoveredLink>
                </div>
            </MenuItem>
            <HoveredLink href="/contact">Contact</HoveredLink> */
}
