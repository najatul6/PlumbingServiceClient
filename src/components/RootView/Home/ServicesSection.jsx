import { FaWrench, FaTint, FaFireExtinguisher, FaShower } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: <FaTint size={32} className="text-blue-500" />,
      title: "Drain Cleaning",
      description: "Clear clogged drains with our advanced hydro-jetting technology.",
      price: "From $99",
      emergency: true
    },
    {
      id: 2,
      icon: <FaFireExtinguisher size={32} className="text-red-500" />,
      title: "Water Heater Repair",
      description: "Expert repair and replacement for all water heater types.",
      price: "From $199",
      emergency: true
    },
    {
      id: 3,
      icon: <FaWrench size={32} className="text-green-500" />,
      title: "Pipe Repair",
      description: "Fix leaks and broken pipes with minimal disruption.",
      price: "From $149",
      emergency: false
    },
    {
      id: 4,
      icon: <FaShower size={32} className="text-purple-500" />,
      title: "Bathroom Plumbing",
      description: "Complete bathroom plumbing installations and repairs.",
      price: "From $249",
      emergency: false
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#2c3e50] mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive plumbing solutions for residential and commercial properties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-blue-50 p-3 rounded-full">
                    {service.icon}
                  </div>
                  {service.emergency && (
                    <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded-full">
                      24/7
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-[#2c3e50] mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-[#3498db]">{service.price}</span>
                  <Link 
                    to={`/services/${service.id}`} 
                    className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  >
                    Details →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link 
            to="/services" 
            className="inline-block border-2 border-[#3498db] text-[#3498db] hover:bg-[#3498db] hover:text-white font-semibold py-2 px-6 rounded-lg transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;