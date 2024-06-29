import { CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { ReactElement } from "react";

export const MainContent = ({ items }: { items: Array<ReactElement> }) => (
  <div className="h-full mx-1 flex-1 bg-gradient-to-b from-primary to-gradient">
    <CarouselContent className="h-full">
      {items.map((item, index) => (
        <CarouselItem key={index}>{item}</CarouselItem>
      ))}
    </CarouselContent>
  </div>
);
