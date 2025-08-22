import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@radix-ui/react-accordion";
import Link from "next/link";
import { NAV } from "@/lib/nav";

export const MobileNavbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="md:hidden py-5">
            {/* Menu Trigger */}
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M3 6h18M3 12h18M3 18h18" />
                    </svg>
                </SheetTrigger>

                {/* Sheet Panel */}
                <SheetContent side="bottom" className="h-[60%] rounded-t-2xl p-6 flex flex-col items-center w-full">
                    <div className="w-full">
                        {/* Accordion sections */}

                        <Accordion type="single" collapsible>
                            {NAV.items.map((item) => {
                                if (item.kind === "link") {
                                    return (
                                        <AccordionItem key={item.label} value={item.label}>
                                            <Link href={item.href} onClick={() => setOpen(false)} className="block px-4 py-3 text-sm font-medium text-foreground hover:bg-muted">
                                                {item.label}
                                            </Link>
                                        </AccordionItem>
                                    );
                                }
                                return (
                                    <AccordionItem key={item.label} value={item.label} className="[&[data-state=open]>h3]:bg-muted/50">
                                        <AccordionTrigger className="text-sm px-4 py-3 font-medium hover:no-underline hover:bg-muted/50">{item.label}</AccordionTrigger>
                                        <AccordionContent className="px-2 pb-3">
                                            <ul className="flex flex-col">
                                                {item.links &&
                                                    item.links.map((l) => (
                                                        <li key={l.label}>
                                                            <Link
                                                                href={l.href}
                                                                onClick={() => setOpen(false)}
                                                                className="block text-sm rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-muted"
                                                            >
                                                                {l.label}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                {item.products &&
                                                    item.products.map((p) => (
                                                        <li key={p.title}>
                                                            <Link
                                                                href={p.href}
                                                                onClick={() => setOpen(false)}
                                                                className="block text-sm rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-muted"
                                                            >
                                                                {p.title}
                                                            </Link>
                                                        </li>
                                                    ))}
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                );
                            })}
                            {/* 
                            <AccordionItem value="about" className="[&[data-state=open]>h3]:bg-muted/50">
                                <AccordionTrigger className="px-4 py-3 text-base font-medium hover:no-underline hover:bg-muted/50">About</AccordionTrigger>
                                <AccordionContent className="px-2 pb-3">
                                    <ul className="flex flex-col">
                                        <li>
                                            <Link
                                                href="/about"
                                                onClick={() => setOpen(false)}
                                                className="block rounded-lg px-3 py-2 text-[15px] text-muted-foreground hover:text-foreground hover:bg-muted"
                                            >
                                                Overview
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/team"
                                                onClick={() => setOpen(false)}
                                                className="block rounded-lg px-3 py-2 text-[15px] text-muted-foreground hover:text-foreground hover:bg-muted"
                                            >
                                                Team
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/membership"
                                                onClick={() => setOpen(false)}
                                                className="block rounded-lg px-3 py-2 text-[15px] text-muted-foreground hover:text-foreground hover:bg-muted"
                                            >
                                                Membership
                                            </Link>
                                        </li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="programs" className="[&[data-state=open]>h3]:bg-muted/50">
                                <AccordionTrigger className="px-4 py-3 text-base font-medium hover:no-underline hover:bg-muted/50">Programs</AccordionTrigger>
                                <AccordionContent className="px-2 pb-3">
                                    <ul className="flex flex-col">
                                        <li>
                                            <Link
                                                href="/programs"
                                                onClick={() => setOpen(false)}
                                                className="block rounded-lg px-3 py-2 text-[15px] text-muted-foreground hover:text-foreground hover:bg-muted"
                                            >
                                                All Programs
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/programs/rex"
                                                onClick={() => setOpen(false)}
                                                className="block rounded-lg px-3 py-2 text-[15px] text-muted-foreground hover:text-foreground hover:bg-muted"
                                            >
                                                REX
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="/programs/lsrn"
                                                onClick={() => setOpen(false)}
                                                className="block rounded-lg px-3 py-2 text-[15px] text-muted-foreground hover:text-foreground hover:bg-muted"
                                            >
                                                LSRN
                                            </Link>
                                        </li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem> */}
                        </Accordion>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
};
