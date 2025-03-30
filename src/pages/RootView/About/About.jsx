import { FaAward, FaUsers, FaCheckCircle, FaHandsHelping } from "react-icons/fa";
import { GiPlumber } from "react-icons/gi";
import TeamMemberCard from "../components/TeamMemberCard";
import Testimonials from "../components/Testimonials";
import ServiceAreas from "../components/ServiceAreas";
import OurStory from "@/components/RootView/About/OurStory";

const AboutPage = () => {
  const stats = [
    { value: "12+", label: "Years Experience", icon: <FaAward className="text-blue-500" size={24} /> },
    { value: "5,000+", label: "Happy Customers", icon: <FaUsers className="text-green-500" size={24} /> },
    { value: "24/7", label: "Emergency Service", icon: <FaCheckCircle className="text-red-500" size={24} /> },
    { value: "100%", label: "Satisfaction Guarantee", icon: <FaHandsHelping className="text-yellow-500" size={24} /> }
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Mike Johnson",
      position: "Master Plumber",
      experience: "15 years",
      bio: "Specializes in commercial plumbing and large-scale projects.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      id: 2,
      name: "Sarah Williams",
      position: "Residential Plumbing Expert",
      experience: "10 years",
      bio: "Passionate about eco-friendly plumbing solutions.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
    },
    {
      id: 3,
      name: "David Chen",
      position: "Emergency Services Lead",
      experience: "8 years",
      bio: "Available 24/7 for your plumbing emergencies.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    }
  ];

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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-[#2c3e50] mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#2c3e50] mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Licensed professionals dedicated to solving your plumbing problems right the first time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map(member => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </section>

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