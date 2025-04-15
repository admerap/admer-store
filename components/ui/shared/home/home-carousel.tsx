'use client';
import * as React from 'react';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function HomeCarousel({
    items,
}: {
    items: {
        image: string;
        url: string;
        title: string;
        buttonCaption: string;
    }[];
}) {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: false })
    );

    return (
        <Carousel
            dir="ltr"
            plugins={[plugin.current]}
            className="w-full mx-auto"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {items.map((item) => (
                    <CarouselItem key={item.title}>
                        <Link href={item.url}>
                            <div className="flex aspect-[16/6] items-center justify-center p-6 relative -m-1">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className='object-cover rounded-lg'
                                    priority
                                />
                                <div className="absolute w-1/3 left-16 md:left-32 top-1/2 transform -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg">
                                    <h2 className='text-xl md:text-6xl font-bold mb-4 text-primary'>{item.title}</h2>
                                    <Button className='hidden md:block'>
                                        {item.buttonCaption}
                                    </Button>
                                </div>
                            </div>
                        </Link>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2">
                Prev
            </CarouselPrevious>
            <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2">
                Next
            </CarouselNext>
        </Carousel>
    );
}