import { FaFireExtinguisher, FaHome, FaTools } from "react-icons/fa";
import ServiceCategory from "./ServiceCategory"

const ServiceCategories = () => {
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
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHgGYR8LzmCAJ0fmLOQNXDRt2c1reZEOeHow&s"
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
  return (
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
  )
}

export default ServiceCategories