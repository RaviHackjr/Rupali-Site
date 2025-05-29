import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ScreenshotGallery from "@/components/screenshot-gallery";
import TeamSection from "@/components/team-section";
import DownloadSection from "@/components/download-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-horror-black text-white overflow-x-hidden">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Creepster&family=Nosifer&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ScreenshotGallery />
      <TeamSection />
      <DownloadSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
