import Testimonials from "../components/Testimonials";
import ServiceAreas from "../components/ServiceAreas";
import OurStory from "@/components/RootView/About/OurStory";
import OurTeam from "@/components/RootView/About/OurTeam";
import Stats from "@/components/RootView/About/Stats";
import OurValues from "@/components/RootView/About/OurValues";

const AboutPage = () => {
 

  

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#2c3e50] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About PrimeFlow Plumbing</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Family-owned and operated plumbing service dedicated to quality workmanship and customer satisfaction.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <OurStory />

      {/* Stats */}
      <Stats/>

      {/* Our Team */}
      <OurTeam/>

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