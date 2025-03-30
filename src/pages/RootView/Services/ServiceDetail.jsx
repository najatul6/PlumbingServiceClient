import { FaCheck, FaClock, FaMoneyBillWave, FaShieldAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { id } = useParams();
  
  // In a real app, you would fetch this data based on the ID
  const service = {
    id: 1,
    name: "Drain Cleaning",
    description: "Professional drain cleaning services using state-of-the-art hydro jetting technology to clear even the toughest clogs.",
    priceRange: "$99 - $299",
    duration: "1-2 hours",
    benefits: [
      "Prevents future clogs",
      "Eliminates foul odors",
      "Improves water flow",
      "Extends pipe lifespan"
    ],
    process: [
      "Inspection with camera",
      "High-pressure water jetting",
      "Complete debris removal",
      "Final inspection"
    ],
    emergency: true,
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#2c3e50] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{service.name}</h1>
              <p className="text-lg mb-6">{service.description}</p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-white bg-opacity-20 px-4 py-2 rounded-lg">
                  <FaMoneyBillWave className="mr-2" />
                  <span>{service.priceRange}</span>
                </div>
                <div className="flex items-center bg-white bg-opacity-20 px-4 py-2 rounded-lg">
                  <FaClock className="mr-2" />
                  <span>{service.duration}</span>
                </div>
                {service.emergency && (
                  <div className="flex items-center bg-red-600 px-4 py-2 rounded-lg">
                    <FaClock className="mr-2" />
                    <span>24/7 Emergency Service</span>
                  </div>
                )}
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src={service.image} 
                alt={service.name} 
                className="rounded-lg shadow-xl w-full h-auto max-h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-[#2c3e50] mb-6">About This Service</h2>
            <p className="text-gray-700 mb-8">
              Our professional drain cleaning service uses advanced hydro jetting technology to completely clear your pipes of debris, grease, and mineral buildup. Unlike traditional snaking methods, hydro jetting cleans the entire diameter of the pipe and leaves the interior surfaces clean to prevent future clogs.
            </p>

            <div className="mb-12">
              <h3 className="text-xl font-semibold text-[#2c3e50] mb-4">Our Process</h3>
              <div className="space-y-4">
                {service.process.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      <span className="text-blue-600 font-bold">{index + 1}</span>
                    </div>
                    <p className="text-gray-700 flex-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#2c3e50] mb-4">When You Need This Service</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span>Slow draining sinks or tubs</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span>Recurring clogs</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span>Gurgling sounds from drains</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span>Foul odors from drains</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-6">
              <h3 className="text-xl font-semibold text-[#2c3e50] mb-4">Service Benefits</h3>
              <ul className="space-y-3 mb-8">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <div className="flex items-center mb-2">
                  <FaShieldAlt className="text-blue-500 mr-2" />
                  <h4 className="font-semibold">Our Guarantee</h4>
                </div>
                <p className="text-sm text-gray-700">
                  All our services come with a 100% satisfaction guarantee. If you&#39;re not happy, we&#39;ll make it right.
                </p>
              </div>

              <button className="w-full bg-[#e74c3c] hover:bg-[#c0392b] text-white font-semibold py-3 px-4 rounded-lg transition-colors mb-3">
                Book Emergency Service
              </button>
              <button className="w-full bg-[#3498db] hover:bg-[#2980b9] text-white font-semibold py-3 px-4 rounded-lg transition-colors">
                Schedule Appointment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#2c3e50] mb-8">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* These would be other service cards */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;