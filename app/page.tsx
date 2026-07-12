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
import Testimonials from "@/components/home/Testimonials";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <>
      <TopUtilityBar />
      <Header />
      <main className="min-h-screen">
        <Hero />
        <StatsBar />
        
        <div className="max-w-[1600px] mx-auto w-full px-4 sm:px-6 lg:px-12 py-12 grid grid-cols-1 xl:grid-cols-12 gap-8">
          <div className="xl:col-span-5 h-full">
            <PrincipalMessage />
          </div>
          <div className="xl:col-span-7 h-full overflow-hidden">
            <LifeGallery />
          </div>
        </div>

        <div className="max-w-[1600px] mx-auto w-full px-4 sm:px-6 lg:px-12 pb-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          <NewsEvents />
          <Achievements />
          <Testimonials />
          <AdmissionsCTA />
        </div>

        <ClubsMarquee />
      </main>
      <Footer />
    </>
  );
}
