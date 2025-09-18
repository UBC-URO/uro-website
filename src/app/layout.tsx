import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar/Navbar";

export const metadata: Metadata = {
    title: "URO UBC",
    description: "Undergraduate Research Opportunities at UBC",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                <main className="my-24">{children}</main>
            </body>
        </html>
    );
}
