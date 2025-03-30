import EmergencyBanner from "@/components/RootView/Home/EmergencyBanner";
import HeroSection from "@/components/RootView/Home/HeroSection";
import ServiceAreas from "@/components/RootView/Home/ServiceAreas";
import ServicesSection from "@/components/RootView/Home/ServicesSection";
import Testimonials from "@/components/RootView/Home/Testimonials";
import WhyChooseUs from "@/components/RootView/Home/WhyChooseUs";

const Home = () => {
  return (
   <div>
     <HeroSection />
      <EmergencyBanner />
      <ServicesSection />
      <WhyChooseUs />
      <Testimonials />
      <ServiceAreas />
   </div>
  );
};

export default Home;
