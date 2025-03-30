import EmergencyBanner from "@/components/RootView/Home/EmergencyBanner";
import ServiceAreas from "@/components/RootView/Home/ServiceAreas";
import Testimonials from "@/components/RootView/Home/Testimonials";
import HeroSection from "@/components/RootView/Services/HeroSection";
import PopularServices from "@/components/RootView/Services/PopularServices";
import ServiceCategories from "@/components/RootView/Services/ServiceCategories";

const ServicesPage = () => {
  

  

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <HeroSection/>

      {/* Emergency Banner */}
      <EmergencyBanner />

      {/* Service Categories */}
     <ServiceCategories />

      {/* Popular Services */}
      <PopularServices/>

      {/* Service Areas */}
      <ServiceAreas />

      {/* Testimonials */}
      <Testimonials />
    </div>
  );
};

export default ServicesPage;