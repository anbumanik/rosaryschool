import TopUtilityBar from "@/components/home/TopUtilityBar";
import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import PrincipalMessage from "@/components/home/PrincipalMessage";
import LifeGallery from "@/components/home/LifeGallery";
import NewsEvents from "@/components/home/NewsEvents";
import Achievements from "@/components/home/Achievements";
import ClubsMarquee from "@/components/home/ClubsMarquee";
import AdmissionsCTA from "@/components/home/AdmissionsCTA";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <>
      <TopUtilityBar />
      <Header />
      <main className="min-h-screen">
        <Hero />
        <StatsBar />
        <PrincipalMessage />
        <LifeGallery />
        <Achievements />
        <NewsEvents />
        <AdmissionsCTA />
        <ClubsMarquee />
      </main>
      <Footer />
    </>
  );
}
