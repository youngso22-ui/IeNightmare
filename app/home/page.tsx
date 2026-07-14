import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Herocomponent from "../components/home/Herocomponent";
import FeaturedPlayer from "../components/home/FeaturedPlayer";
import Countdown from "../components/home/Countdown";
import TeamStats from "../components/home/TeamStats";
import LatestNews from "../components/home/LatestNews";
import Sponsors from "../components/home/Sponsors";
import Instagramfeed from "../components/home/Instagramfeed";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white">
        <Herocomponent />

        <FeaturedPlayer />

        <Countdown />

        <TeamStats />

        <LatestNews />

        <Sponsors />

        <Instagramfeed />
      </main>

      <Footer />
    </>
  );
}