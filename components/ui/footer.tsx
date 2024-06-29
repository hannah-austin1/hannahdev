import { Button } from "@/components/ui/button";
import {
  HeartIcon,
  MaximizeIcon,
  PictureInPictureIcon,
  PlayIcon,
  RepeatIcon,
  ShuffleIcon,
  Volume2Icon,
} from "@/components/icons/icons";
import { CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export const Footer = () => (
  <footer className="px-6 py-4 flex items-center justify-between  bg-[rgba(40,40,40,0.70)] rounded-lg shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]">
    <div className="flex items-center gap-4">
      <img
        src="/placeholder.svg"
        width="64"
        height="64"
        alt="Album Art"
        className="rounded"
      />
      <div>
        <div className="font-bold">Song Title</div>
        <div className="text-muted-foreground">Artist Name</div>
      </div>
    </div>
    <div className="flex items-center gap-4">
      <Button variant="ghost" className="rounded-full p-2">
        <ShuffleIcon className="w-6 h-6" />
      </Button>
      <CarouselPrevious />
      <Button variant="ghost" className="rounded-full p-2">
        <PlayIcon className="w-6 h-6" />
      </Button>
      <CarouselNext />
      <Button variant="ghost" className="rounded-full p-2">
        <RepeatIcon className="w-6 h-6" />
      </Button>
    </div>
    <div className="flex items-center gap-4">
      <Button variant="ghost" className="rounded-full p-2">
        <HeartIcon className="w-6 h-6" />
      </Button>
      <Button variant="ghost" className="rounded-full p-2">
        <PictureInPictureIcon className="w-6 h-6" />
      </Button>
      <Button variant="ghost" className="rounded-full p-2">
        <Volume2Icon className="w-6 h-6" />
      </Button>
      <Button variant="ghost" className="rounded-full p-2">
        <MaximizeIcon className="w-6 h-6" />
      </Button>
    </div>
  </footer>
);
