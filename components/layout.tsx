import { Button } from "@/components/ui/button";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { About } from "@/components/ui/about";
import { SkillList } from "@/components/ui/skill";
import { MainContent } from "@/components/ui/main";
import { Home } from "@/components/ui/home";
import { Carousel, CarouselSidebar } from "@/components/ui/carousel";
import { Experience } from "@/components/ui/experience";

const items = [
  <Home key={0} />,
  <About key={1} />,
  <SkillList key={2} />,
  <Experience key={3} />,
];

function Layout() {
  return (
    <div className="flex flex-col min-h-screen max-h-screen p-3 bg-background text-white">
      <Carousel>
        <div className="flex">
          <CarouselSidebar />
          <div className="flex-1 flex flex-col">
            <Header />
            <MainContent items={items} />
            <Footer />
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Layout;
