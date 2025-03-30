import { FaPhone } from "react-icons/fa";

const EmergencyBanner = () => {
    return (
        <div className="bg-[#e74c3c] text-white py-4">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="flex items-center gap-3 mb-3 md:mb-0">
                        <div className="bg-white p-2 rounded-full">
                            <FaPhone className="text-[#e74c3c]" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">24/7 Emergency Service</h3>
                            <p className="text-sm">Immediate response for urgent plumbing issues</p>
                        </div>
                    </div>
                    <a
                        href="tel:5551234567"
                        className="bg-white text-[#e74c3c] hover:bg-gray-100 font-semibold py-2 px-6 rounded-lg flex items-center gap-2 transition-colors"
                    >
                        <FaPhone /> Call Now: (555) 123-4567
                    </a>
                </div>
            </div>
        </div>
    );
};

export default EmergencyBanner;