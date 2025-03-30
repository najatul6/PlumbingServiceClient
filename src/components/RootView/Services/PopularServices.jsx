import { FaFireExtinguisher, FaShower, FaTint, FaWrench } from "react-icons/fa";

const PopularServices = () => {
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
    )
}

export default PopularServices