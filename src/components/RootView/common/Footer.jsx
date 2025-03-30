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
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-blue-400 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/services" className="text-gray-300 hover:text-blue-400 transition-colors">Our Services</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="/areas" className="text-gray-300 hover:text-blue-400 transition-colors">Service Areas</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a></li>
              <li><a href="/faq" className="text-gray-300 hover:text-blue-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-blue-400 pb-2">Services</h3>
            <ul className="space-y-2">
              <li><a href="/services/drain-cleaning" className="text-gray-300 hover:text-blue-400 transition-colors">Drain Cleaning</a></li>
              <li><a href="/services/water-heater" className="text-gray-300 hover:text-blue-400 transition-colors">Water Heater Repair</a></li>
              <li><a href="/services/pipe-repair" className="text-gray-300 hover:text-blue-400 transition-colors">Pipe Repair</a></li>
              <li><a href="/services/leak-detection" className="text-gray-300 hover:text-blue-400 transition-colors">Leak Detection</a></li>
              <li><a href="/services/emergency" className="text-gray-300 hover:text-blue-400 transition-colors">Emergency Services</a></li>
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
            &copy; {new Date().getFullYear()} PrimeFlow Plumbing. All rights reserved By - <Link to="https://najatul-islam.vercel.app/" target="_blank" className="hover:underline text-primaryBlue">Md Najatul islam</Link>.
          </p>
          <div className="flex space-x-6">
            <a href="/privacy" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Terms of Service</a>
            <a href="/sitemap" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;