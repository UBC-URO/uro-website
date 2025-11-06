import Link from "next/link";
import { ReactNode } from "react";

export const CTAButton = ({ href, children, disabled = false }: { href: string; children: ReactNode; disabled?: boolean }) => {
    return (
        <>
            {disabled ? (
                <button disabled className="inline-flex items-center rounded-xl bg-slate-300 px-5 py-3 text-slate-500 cursor-not-allowed opacity-60">
                    {children}
                </button>
            ) : (
                <Link href={href} className="inline-flex items-center rounded-xl bg-teal-600 px-5 py-3 text-white hover:bg-teal-700 transition">
                    {children}
                </Link>
            )}
        </>
    );
};
