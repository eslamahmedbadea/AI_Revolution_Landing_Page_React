// Importing
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import AiTypes from "../components/AiTypes";
import AiBenefits from "../components/AiBenefits";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <AiTypes />
        <AiBenefits />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default Home;
