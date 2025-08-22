"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { DesktopNavbar } from "./DesktopNavbar";
import { MobileNavbar } from "./MobileNavbar";

export function Navbar({ className }: { className?: string }) {
    return (
        <nav
            className={cn(
                "flex fixed top-6 left-1/2 -translate-x-1/2 z-50 max-w-5xl w-3/4 md:w-auto rounded-full px-6 items-center justify-between gap-10",
                "bg-white/60 backdrop-blur-md border border-black/20 shadow-sm",
                className
            )}
            style={{ WebkitBackdropFilter: "blur(16px)" }}
        >
            {/* Logo */}
            <Link href="/" className="font-extrabold text-2xl text-[#4B9C8E] tracking-wide flex items-center gap-2 select-none">
                <span className="inline-block bg-[#4B9C8E]/10 rounded-full px-3 py-1">URO</span>
            </Link>

            {/* Desktop View */}
            <DesktopNavbar />

            {/* Mobile View */}
            <MobileNavbar />
        </nav>
    );
}
