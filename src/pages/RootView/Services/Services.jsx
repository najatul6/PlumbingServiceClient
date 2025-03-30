import EmergencyBanner from "@/components/RootView/Home/EmergencyBanner";
import ServiceAreas from "@/components/RootView/Home/ServiceAreas";
import Testimonials from "@/components/RootView/Home/Testimonials";
import ServiceCategory from "@/components/RootView/Services/ServiceCategory";
import { FaWrench, FaTint, FaFireExtinguisher, FaShower, FaTools, FaHome } from "react-icons/fa";

const ServicesPage = () => {
  const serviceCategories = [
    {
      id: 1,
      title: "Residential Plumbing",
      icon: <FaHome className="text-blue-500" size={28} />,
      services: [
        "Drain cleaning & unclogging",
        "Pipe repair & replacement",
        "Water heater services",
        "Toilet repair & installation",
        "Faucet & fixture installation"
      ],
      description: "Complete plumbing solutions for your home with upfront pricing and guaranteed workmanship.",
      image: "https://images.unsplash.com/photo-1600566752227-8f3b9a6f9323?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 2,
      title: "Commercial Plumbing",
      icon: <FaTools className="text-green-500" size={28} />,
      services: [
        "Backflow prevention",
        "Grease trap installation",
        "Water line repair",
        "Sewer line inspection",
        "Commercial fixture installation"
      ],
      description: "Specialized plumbing services for businesses, restaurants, and commercial properties.",
      image: "https://images.unsplash.com/photo-1622372738946-62e02505feb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1132&q=80"
    },
    {
      id: 3,
      title: "Emergency Services",
      icon: <FaFireExtinguisher className="text-red-500" size={28} />,
      services: [
        "Burst pipe repair",
        "Sewage backup",
        "Water heater failure",
        "Gas line leaks",
        "Flooding emergencies"
      ],
      description: "24/7 emergency response for urgent plumbing issues that can't wait.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  const popularServices = [
    {
      id: 1,
      name: "Drain Cleaning",
      icon: <FaTint size={24} className="text-blue-500" />,
      price: "$99+",
      description: "Hydro jetting and snaking for clogged drains",
      emergency: true
    },
    {
      id: 2,
      name: "Water Heater Repair",
      icon: <FaFireExtinguisher size={24} className="text-red-500" />,
      price: "$199+",
      description: "Tank and tankless water heater services",
      emergency: true
    },
    {
      id: 3,
      name: "Pipe Repair",
      icon: <FaWrench size={24} className="text-green-500" />,
      price: "$149+",
      description: "Fix leaks and broken pipes with minimal disruption",
      emergency: false
    },
    {
      id: 4,
      name: "Bathroom Plumbing",
      icon: <FaShower size={24} className="text-purple-500" />,
      price: "$249+",
      description: "Complete bathroom plumbing installations",
      emergency: false
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#2c3e50] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Plumbing Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive solutions for all your plumbing needs with upfront pricing and guaranteed satisfaction.
          </p>
        </div>
      </section>

      {/* Emergency Banner */}
      <EmergencyBanner />

      {/* Service Categories */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#2c3e50] mb-4">Service Categories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We specialize in all types of plumbing services for residential and commercial properties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category) => (
            <ServiceCategory key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2c3e50] mb-4">Popular Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our most requested plumbing services with transparent pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularServices.map((service) => (
              <div 
                key={service.id} 
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-blue-50 p-2 rounded-lg">
                      {service.icon}
                    </div>
                    {service.emergency && (
                      <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded-full">
                        24/7
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-[#2c3e50] mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-[#3498db]">{service.price}</span>
                    <button className="text-blue-600 hover:text-blue-800 font-medium">
                      Book Now →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <ServiceAreas />

      {/* Testimonials */}
      <Testimonials />
    </div>
  );
};

export default ServicesPage;