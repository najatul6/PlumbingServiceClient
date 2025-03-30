import Testimonials from "../components/Testimonials";
import ServiceAreas from "../components/ServiceAreas";
import OurStory from "@/components/RootView/About/OurStory";
import OurTeam from "@/components/RootView/About/OurTeam";
import Stats from "@/components/RootView/About/Stats";
import OurValues from "@/components/RootView/About/OurValues";
import HeroSection from "@/components/RootView/About/HeroSection";

const AboutPage = () => {

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <HeroSection />

      {/* Our Story */}
      <OurStory />

      {/* Stats */}
      <Stats />

      {/* Our Team */}
      <OurTeam />

      {/* Our Values */}
      <OurValues />

      {/* Testimonials */}
      <Testimonials />

      {/* Service Areas */}
      <ServiceAreas />
    </div>
  );
};

export default AboutPage;