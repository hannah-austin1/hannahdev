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
    <div className="flex flex-col h-screen overflow-hidden p-2 bg-background text-white">
      <Carousel className="h-full">
        <div className="flex h-full">
          <CarouselSidebar />
          <div className="flex-1 flex flex-col h-full">
            <div className="overflow-scroll">
              <Header />
              <main className="flex-1">
                <MainContent items={items} />
              </main>
            </div>
            <Footer />
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Layout;
