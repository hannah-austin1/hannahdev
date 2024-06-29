import { Button } from "@/components/ui/button";
import { PlayIcon } from "@/components/icons/icons";
import { Lyrics } from "@/components/ui/lyrics";
import Album from "@/images/Album.png";
import Image from "next/image";

export const Home = () => (
  <div className="h-full flex items-start justify-center">
    <Image
      src={Album}
      alt="Hannah Austin Album"
      className="w-60 h-60 rounded-lg border-primary border-4"
    />
    <div className="space-y-2">
      <div className="text-4xl font-bold ">Hannah Austin</div>
      <div className="text-lg ">
        Tech lead, full stack developer and lover of all things creative
      </div>
      <div className="text-lg">This site is a work in progress</div>
      <Button
        variant="ghost"
        className="mt-4 p-3 rounded-full flex items-center space-x-2"
      >
        <PlayIcon className="w-8 h-8" />
        <span>Play</span>
      </Button>
      <div className="">
        <Lyrics words="Welcome to my page, where you can find out about my background, my experience, and find some fun surprises along the way" />
      </div>
    </div>
  </div>
);
