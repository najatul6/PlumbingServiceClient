import { Link } from "react-router-dom";

const ServiceAreas = () => {
    const areas = [
      "Portland", "Beaverton", "Hillsboro", "Gresham", 
      "Vancouver", "Lake Oswego", "Tigard", "Wilsonville"
    ];
  
    return (
      <section className="py-16 bg-[#2c3e50] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">We Serve These Areas</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Proudly providing plumbing services throughout the metro area.
            </p>
          </div>
  
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {areas.map((area, index) => (
              <div 
                key={index} 
                className="bg-white bg-opacity-10 p-4 rounded-lg text-center hover:bg-opacity-20 transition-colors"
              >
                {area}
              </div>
            ))}
          </div>
  
          <div className="text-center mt-10">
            <Link 
              to="/areas" 
              className="inline-block bg-white text-[#2c3e50] hover:bg-gray-100 font-semibold py-2 px-6 rounded-lg transition-colors"
            >
              View All Service Areas
            </Link>
          </div>
        </div>
      </section>
    );
  };

export default ServiceAreas;