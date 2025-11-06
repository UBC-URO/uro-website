import * as React from "react";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const images = ["/about1.jpg", "/lsrn1.jpg", "/research-coaches1.jpg", "/rex1.jpg", "/lsrn2.jpg", "/about2.jpg"];

export default function ImageCarousel() {
    return (
        <Carousel className="w-full">
            <CarouselContent>
                {images.map((src, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="relative aspect-square overflow-hidden rounded-3xl shadow-lg">
                            <Image
                                src={src}
                                alt={`Carousel image ${index + 1}`}
                                fill
                                className="object-cover transition-transform duration-500 hover:scale-105"
                                sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                                quality={70}
                                priority={index === 0}
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
