import Navbar from "./components/Navbar";
import HeroComponent from "./components/home/Herocomponent";
import Countdown from "./components/home/Countdown";
import FeaturedPlayer from "./components/home/FeaturedPlayer";
import TeamStats from "./components/home/TeamStats";
import LatestNews from "./components/home/LatestNews";
import Sponsors from "./components/home/Sponsors";
import InstagramFeed from "./components/home/Instagramfeed";
import UpcomingTournament from "./components/home/UpcomingTournament";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <HeroComponent />
      <Countdown />
      <FeaturedPlayer />
      <TeamStats />
      <UpcomingTournament />
      <LatestNews />
      <Sponsors />
      <InstagramFeed />
      <Footer />
    </main>
  );
}