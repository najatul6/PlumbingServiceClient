import OurStory from "@/components/RootView/About/OurStory";
import OurTeam from "@/components/RootView/About/OurTeam";
import Stats from "@/components/RootView/About/Stats";
import OurValues from "@/components/RootView/About/OurValues";
import HeroSection from "@/components/RootView/About/HeroSection";
import Testimonials from "@/components/RootView/Home/Testimonials";
import ServiceAreas from "@/components/RootView/Home/ServiceAreas";

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