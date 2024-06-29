import { Button } from "@/components/ui/button";
import { PlayIcon } from "@/components/icons/icons";
import { Lyrics } from "@/components/ui/lyrics";

export const Home = () => (
  <div className="h-full flex items-center justify-center space-x-6 bg-gradient-to-b from-primary to-gradient p-6 rounded-lg shadow-lg">
    <img
      src="/placeholder.svg"
      alt="Album Art"
      className="w-60 h-60 rounded-lg shadow-lg"
    />
    <div className="space-y-2">
      <div className="text-4xl font-bold ">Hannah Austin</div>
      <div className="text-lg ">
        Tech lead, full stack developer and lover of all things creative
      </div>
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
