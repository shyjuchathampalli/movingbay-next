import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import PetServices from "@/components/PetServices";
import About from "@/components/About";
import CorporateRelocation from "@/components/CorporateRelocation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Banner />
      <PetServices />
      <CorporateRelocation />
      <About />
      <Footer />
    </>
  );
}