import HeroSection from "@/components/RootView/common/HeroSection";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

const ContactPage = () => {
  return (
    <section className="py-10 bg-[#2c3e50] text-white">
      <div className="container mx-auto px-4">

        <HeroSection title="Contact Us" subtitle="Get in touch with our team for inquiries, support, or service requests." />

        {/* Contact Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-3">
              <FaMapMarkerAlt className="text-blue-500" size={20} />
              <h3 className="text-xl font-semibold">Our Location</h3>
            </div>
            <p className="text-gray-300">123 Main Street, Portland, OR</p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-3">
              <FaPhone className="text-green-500" size={20} />
              <h3 className="text-xl font-semibold">Call Us</h3>
            </div>
            <p className="text-gray-300">(555) 123-4567</p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-3">
              <FaEnvelope className="text-yellow-500" size={20} />
              <h3 className="text-xl font-semibold">Email Us</h3>
            </div>
            <p className="text-gray-300">support@example.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-center">Send a Message</h3>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg bg-gray-100 text-black" />
            <input type="email" placeholder="Your Email" className="w-full p-3 rounded-lg bg-gray-100 text-black" />
            <textarea placeholder="Your Message" className="w-full p-3 rounded-lg bg-gray-100 text-black h-32"></textarea>
            <button className="w-full bg-[#3498db] text-white font-semibold py-3 rounded-lg hover:bg-[#2980b9] transition-colors">
              Send Message
            </button>
          </form>
        </div>

        {/* Operating Hours */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-4">Operating Hours</h3>
          <div className="flex justify-center items-center gap-3 bg-[#3498db] text-white p-4 rounded-lg max-w-md mx-auto">
            <FaClock size={20} />
            <p>24/7 Availability - Emergency Services Included</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
