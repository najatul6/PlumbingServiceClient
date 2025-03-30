import { FaAward, FaUserTie, FaMoneyBillWave, FaShieldAlt } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaUserTie size={40} className="text-blue-500" />,
      title: "Expert Technicians",
      description: "Our plumbers are licensed, background-checked, and highly trained."
    },
    {
      icon: <FaMoneyBillWave size={40} className="text-green-500" />,
      title: "Upfront Pricing",
      description: "No hidden fees - we provide clear quotes before any work begins."
    },
    {
      icon: <FaShieldAlt size={40} className="text-purple-500" />,
      title: "Satisfaction Guarantee",
      description: "We stand behind our work with a 100% satisfaction guarantee."
    },
    {
      icon: <FaAward size={40} className="text-yellow-500" />,
      title: "Award-Winning Service",
      description: "Recognized as the top plumbing service in the region 5 years running."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#2c3e50] mb-4">Why Choose PrimeFlow</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We go above and beyond to deliver exceptional plumbing services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#2c3e50] mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};