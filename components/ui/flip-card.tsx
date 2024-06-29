"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import ev from "@/images/ev.png";
import bank from "@/images/bank.png";
import poc from "@/images/pocs.png";

const albums = [
  {
    image: ev,
    alt: "EV Charging App",
    heading: "Tech lead, EV charging app",
    desc: "bla bla blac",
  },
  {
    image: bank,
    alt: "Banking SDK",
    heading: "Software developer, banking SDK",
    desc: "bla bla blac",
  },
  {
    image: poc,
    alt: "Proof of Concepts",
    heading: "Various Proof of Concepts",
    desc: "bla bla blac",
  },
];

interface FlipCardProps {
  image: StaticImageData;
  alt: string;
  heading: string;
  desc: string;
}

export const CardGrid: React.FC = () => {
  return (
    <div className="h-full overflow-scroll auto-rows-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {albums.map((album, index) => (
        <FlipCard
          key={index}
          image={album.image}
          alt={album.alt}
          heading={album.heading}
          desc={album.desc}
        />
      ))}
    </div>
  );
};

export const FlipCard: React.FC<FlipCardProps> = ({
  image,
  alt,
  heading,
  desc,
}) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`aspect-square relative transition-all duration-500 transform-style-preserve-3d cursor-pointer ${
        flipped ? "rotate-y-180" : ""
      } hover:opacity-50`}
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`absolute inset-0 backface-hidden transition-opacity duration-500 ${
          flipped ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="flex items-center justify-center h-full rounded-xl">
          <Image
            src={image}
            width={0}
            height={0}
            sizes="100vw"
            alt={alt}
            className="rounded-xl w-full h-full object-cover"
          />
        </div>
      </div>
      <div
        className={`absolute inset-0 backface-hidden rotate-y-180 transition-opacity duration-500 ${
          flipped ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="bg-card h-full rounded-xl p-6 flex flex-col justify-center">
          <h3 className="text-xl font-semibold text-black">{heading}</h3>
          <p className="mt-2 text-sm text-black">{desc}</p>
        </div>
      </div>
    </div>
  );
};
