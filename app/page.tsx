import HeroWave from "@/components/Hero-wave";
import HeroSpotlight from "@/components/Hero-spotlight";
import { FloatingNav } from "@/components/ui/FloatingNav";
import AboutMeGrid from "@/components/AboutMeGrid";

export default function Home() {

  const navItems = [
    { name: "Me", link: "#me"},
    { name: "Projects", link: "#projects" },
    { name: "Skills", link: "#skills" },
    { name: "Contact", link: "#contact" },
  ]
  
  return (
    <main className="relative bg-seasalt-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav  navItems={navItems}/>
        <HeroSpotlight />
        <AboutMeGrid />
        {/* <HeroWave /> */}
      </div>
    </main>
  );
}
