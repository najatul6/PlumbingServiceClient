import { FaPhone, FaClock, FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-blue-50 py-16 md:py-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Content */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2c3e50] mb-4">
            24/7 Emergency Plumbing Services
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Licensed professionals at your door in under 90 minutes. 
            Same-day service with upfront pricing and satisfaction guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/book-now" 
              className="bg-[#3498db] hover:bg-[#2980b9] text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors"
            >
              Book Online Now
            </Link>
            <a 
              href="tel:5551234567" 
              className="bg-[#e74c3c] hover:bg-[#c0392b] text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
            >
              <FaPhone /> Call: (555) 123-4567
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <FaClock className="text-[#2ecc71]" size={20} />
              <span className="text-gray-700">24/7 Availability</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-[#2ecc71]" size={20} />
              <span className="text-gray-700">Licensed & Insured</span>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1600881336149-ca8b0a6e0c0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
            alt="Professional Plumber at Work"
            className="rounded-lg shadow-xl w-full h-auto max-h-[400px] object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection