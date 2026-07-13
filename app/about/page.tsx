import TopUtilityBar from "@/components/home/TopUtilityBar";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import HeroBanner from "@/components/about/HeroBanner";
import SealStory from "@/components/about/SealStory";
import FoundingStory from "@/components/about/FoundingStory";
import OurFoundress from "@/components/about/OurFoundress";
import GoalsGrid from "@/components/about/GoalsGrid";
import OurPrincipals from "@/components/about/OurPrincipals";

export const metadata = {
  title: "About Us | Rosary Matriculation Higher Secondary School, Chennai",
  description:
    "Learn about Rosary Matriculation Higher Secondary School — our founding story, school seal, mission, and goals shaping confident leaders since 1950.",
};

export default function AboutPage() {
  return (
    <>
      <TopUtilityBar />
      <Header />
      <main className="bg-[#F5F7FA] min-h-screen">
        {/* Page intro */}
        <div className="px-4 sm:px-6 pt-12 pb-4">
          <p className="text-[10px] font-black tracking-[0.22em] text-[#D4AF37] uppercase mb-2">
            Our Story
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-navy-dark">
            About Us
          </h1>
        </div>

        {/* Sections — full width, small side padding on mobile only */}
        <div className="pb-20 flex flex-col gap-8 px-4 sm:px-6">
          {/* 1. Hero Banner */}
          <HeroBanner />

          {/* 2. School Seal */}
          <SealStory />

          {/* 3. Our Founding */}
          <FoundingStory />

          {/* 3.5. Our Foundress */}
          <OurFoundress />

          {/* 4. Goals & Objectives */}
          <GoalsGrid />

          {/* 5. Our Principals */}
          <OurPrincipals />
        </div>
      </main>
      <Footer />
    </>
  );
}
