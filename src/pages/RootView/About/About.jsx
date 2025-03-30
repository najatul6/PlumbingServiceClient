import TeamMemberCard from "../components/TeamMemberCard";
import Testimonials from "../components/Testimonials";
import ServiceAreas from "../components/ServiceAreas";
import OurStory from "@/components/RootView/About/OurStory";
import OurTeam from "@/components/RootView/About/OurTeam";
import Stats from "@/components/RootView/About/Stats";

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
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#2c3e50] mb-12 text-center">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-[#2c3e50] mb-3 flex items-center gap-2">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
                Integrity
              </h3>
              <p className="text-gray-700">
                We believe in honest assessments, fair pricing, and doing what&#39;s right - even when no one is watching.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-[#2c3e50] mb-3 flex items-center gap-2">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                Quality
              </h3>
              <p className="text-gray-700">
                We use premium materials and follow best practices to ensure lasting repairs you can depend on.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-[#2c3e50] mb-3 flex items-center gap-2">
                <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
                Reliability
              </h3>
              <p className="text-gray-700">
                When we say we&#39;ll be there, we mean it. Our team shows up on time and gets the job done right.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Service Areas */}
      <ServiceAreas />
    </div>
  );
};

export default AboutPage;