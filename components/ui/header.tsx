import { Button } from "@/components/ui/button";
import { SearchIcon, UserIcon } from "@/components/icons/icons";

export const Header = () => (
  <header className="px-6 py-4 flex items-center justify-end page-ui">
    <div className="flex items-center gap-4">
      <Button variant="ghost" className="rounded-full p-2">
        <SearchIcon className="w-6 h-6" />
      </Button>
      <Button variant="ghost" className="rounded-full p-2">
        <UserIcon className="w-6 h-6" />
      </Button>
    </div>
  </header>
);
