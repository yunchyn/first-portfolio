import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

export default function SlideCarousel({ slides }) {
  return (
    <div className="w-1/2 max-w-[500px] mr-8">
      <Carousel
        className="w-full mr-8"
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
      >
        <CarouselContent>
          {slides.map((src, idx) => (
            <CarouselItem
              key={idx}
              className="flex items-center justify-center"
              // className="relative aspect-square w-full"
            >
              <img
                src={src}
                alt={`slide-${idx}`}
                className="w-full object-cover rounded-lg"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
