import Lottie from "lottie-react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import plumbingAnimation from "@/assets/Animations/plumbingAnimation.json";

const Footer = () => {
  return (
    <footer className="bg-[#2c3e50] text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-20 w-20">
              <Lottie
                            animationData={plumbingAnimation}
                            loop={true}
                            className="w-full h-full"
                        />
              </div>
              <h3 className="text-xl font-bold text-wrap">PrimeFlow Plumbing</h3>
            </div>
            <p className="text-gray-300">
              Licensed and insured plumbing professionals serving your area since 2010.
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <FaFacebook size={20} />
              </Link>
              <Link to="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <FaTwitter size={20} />
              </Link>
              <Link to="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <FaInstagram size={20} />
              </Link>
              <Link to="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <FaLinkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-blue-400 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-blue-400 transition-colors">Our Services</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/areas" className="text-gray-300 hover:text-blue-400 transition-colors">Service Areas</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-blue-400 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-blue-400 pb-2">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/drain-cleaning" className="text-gray-300 hover:text-blue-400 transition-colors">Drain Cleaning</Link></li>
              <li><Link to="/services/water-heater" className="text-gray-300 hover:text-blue-400 transition-colors">Water Heater Repair</Link></li>
              <li><Link to="/services/pipe-repair" className="text-gray-300 hover:text-blue-400 transition-colors">Pipe Repair</Link></li>
              <li><Link to="/services/leak-detection" className="text-gray-300 hover:text-blue-400 transition-colors">Leak Detection</Link></li>
              <li><Link to="/services/emergency" className="text-gray-300 hover:text-blue-400 transition-colors">Emergency Services</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-blue-400 pb-2">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <FaPhoneAlt className="mt-1 text-blue-400" />
                <div>
                  <p className="text-gray-300">24/7 Emergency Service</p>
                  <a href="tel:5551234567" className="font-medium hover:text-blue-400 transition-colors">(555) 123-4567</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-blue-400" />
                <div>
                  <p className="text-gray-300">123 Plumbing Street</p>
                  <p className="text-gray-300">Your City, ST 12345</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaEnvelope className="mt-1 text-blue-400" />
                <a href="mailto:info@primeflow.com" className="font-medium hover:text-blue-400 transition-colors">info@primeflow.com</a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} PrimeFlow Plumbing. All rights reserved By - <Link to="https://najatul-islam.vercel.app/" target="_blank" className="hover:underline text-primaryBlue font-bold">Md Najatul islam</Link>.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Terms of Service</Link>
            <Link to="/sitemap" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;