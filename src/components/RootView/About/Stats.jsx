import { FaAward, FaCheckCircle, FaHandsHelping, FaUsers } from "react-icons/fa";

const Stats = () => {
    const stats = [
        { value: "12+", label: "Years Experience", icon: <FaAward className="text-blue-500" size={24} /> },
        { value: "5,000+", label: "Happy Customers", icon: <FaUsers className="text-green-500" size={24} /> },
        { value: "24/7", label: "Emergency Service", icon: <FaCheckCircle className="text-red-500" size={24} /> },
        { value: "100%", label: "Satisfaction Guarantee", icon: <FaHandsHelping className="text-yellow-500" size={24} /> }
      ];
  return (
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
  )
}

export default Stats