import { Link } from "@/components/shared/Link";
import Image from "next/image";

export const StemcellSponsor = () => {
    return (
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Sponsor</h2>
                <div className="text-lg text-slate-700 leading-relaxed space-y-6">
                    <p>
                        <Link href="https://www.stemcell.com/" label="STEMCELL Technologies" /> provides high-quality cell culture media, cell separation technologies, instruments, accessory products,
                        and educational resources to scientists around the world working on stem cell, immunology, cancer, regenerative medicine, and cellular therapy research. At STEMCELL, we are
                        dedicated to improving lives through advanced knowledge and scientific discovery, through our commitment to fostering diversity and inclusion in STEM and the life sciences
                        industry, and through our investments in sustainability, community, and social responsibility. Rooted in scientific expertise and rigor, we are a company of Scientists Helping
                        Scientists, and we care deeply about making the world a better place.
                    </p>
                </div>
            </div>

            <Image src="/stemcell2.webp" alt="STEMCELL Technologies" width={1920} height={1080} className="object-cover w-full h-auto" />
        </div>
    );
};
