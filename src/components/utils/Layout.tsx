import React from "react";
import { cn } from "@/lib/utils";

export function Container({ className, children }: React.PropsWithChildren<{ className?: string }>) {
    return <div className={cn("mx-auto w-full max-w-7xl px-8 sm:px-12 lg:px-16", className)}>{children}</div>;
}

export function Section({ className, children }: React.PropsWithChildren<{ className?: string }>) {
    return <section className={cn("relative py-12 lg:py-20", className)}>{children}</section>;
}

export function Layout({ className, children }: React.PropsWithChildren<{ className?: string }>) {
    const items = React.Children.toArray(children);

    return (
        <div className="min-h-screen flex flex-col">
            {items.map((child, idx) => {
                const isEven = idx % 2 === 0;
                const gradient = isEven ? "bg-gradient-to-b from-white to-teal-50" : "bg-gradient-to-b from-teal-50 to-white";

                const isLastItem = idx === items.length - 1;
                const flexClass = isLastItem ? "flex-1" : "";

                return (
                    <Section key={idx} className={cn(gradient, flexClass, className)}>
                        <Container>{child}</Container>
                    </Section>
                );
            })}
        </div>
    );
}
