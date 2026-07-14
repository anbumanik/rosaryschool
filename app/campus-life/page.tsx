import TopUtilityBar from "@/components/home/TopUtilityBar";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import OurCampus from "@/components/campus-life/OurCampus";

export const metadata = {
  title: "Campus Life | Rosary Matriculation Higher Secondary School, Chennai",
  description: "Explore our beautiful campus, state-of-the-art facilities, and vibrant student life at Rosary Matriculation Higher Secondary School.",
};

export default function CampusLifePage() {
  return (
    <>
      <TopUtilityBar />
      <Header />
      <main className="bg-[#F5F7FA] min-h-screen">
        {/* Page intro */}
        <div className="px-4 sm:px-6 pt-12 pb-4 max-w-7xl mx-auto">
          <p className="text-[10px] font-black tracking-[0.22em] text-[#D4AF37] uppercase mb-2">
            Experience Rosary
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-navy-dark">
            Campus Life
          </h1>
        </div>

        {/* Our School Campus section */}
        <OurCampus />

      </main>
      <Footer />
    </>
  );
}
