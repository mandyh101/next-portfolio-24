import HeroWave from "@/components/Hero-wave";
import HeroSpotlight from "@/components/Hero-spotlight";

export default function Home() {
  return (
    <main className="relative bg-seasalt-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <HeroSpotlight />
        {/* <HeroWave /> */}
      </div>
    </main>
  );
}
