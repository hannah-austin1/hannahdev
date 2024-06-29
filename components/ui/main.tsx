import { CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { ReactElement } from "react";

export const MainContent = ({ items }: { items: Array<ReactElement> }) => (
  <main className="flex-1 p-2 my-2 page-ui">
    <CarouselContent>
      {items.map((item, index) => (
        <CarouselItem key={index}>{item}</CarouselItem>
      ))}
    </CarouselContent>
  </main>
);
