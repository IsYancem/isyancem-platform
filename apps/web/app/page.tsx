import AboutSection from "../components/home/AboutSection";
import AmbientBackground from "../components/home/AmbientBackground";
import ContactSection from "../components/home/ContactSection";
import HeroSection from "../components/home/HeroSection";
import HomeClientEffects from "../components/home/HomeClientEffects";
import Navbar from "../components/home/Navbar";
import ProjectsSection from "../components/home/ProjectsSection";
import SiteFooter from "../components/home/SiteFooter";
import StatsSection from "../components/home/StatsSection";


export default function Home() {
  return (
    <>
      <HomeClientEffects />
      <AmbientBackground />

      <div className="shell">
        <Navbar />
        <HeroSection />
        <StatsSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
        <SiteFooter />
      </div>
    </>
  );
}