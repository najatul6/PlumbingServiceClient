import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ServiceCategory = ({ category }) => {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="h-48 overflow-hidden">
                <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gray-100 p-2 rounded-full">
                        {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-[#2c3e50]">{category.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{category.description}</p>

                <div className="mb-6">
                    <h4 className="font-medium text-gray-800 mb-2">Services Include:</h4>
                    <ul className="space-y-1">
                        {category.services.map((service, index) => (
                            <li key={index} className="flex items-center">
                                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                {service}
                            </li>
                        ))}
                    </ul>
                </div>

                <Link
                    to={`/services/${category.id}`}
                    className="inline-block w-full text-center bg-[#3498db] hover:bg-[#2980b9] text-white font-medium py-2 px-4 rounded transition-colors"
                >
                    View Services
                </Link>
            </div>
        </div>
    );
};

ServiceCategory.propTypes = {
    category: PropTypes.any
};


export default ServiceCategory;