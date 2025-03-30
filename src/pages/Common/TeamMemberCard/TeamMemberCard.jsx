import { FaPhone, FaEnvelope } from "react-icons/fa";

const TeamMemberCard = ({ member }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="h-64 overflow-hidden">
        <img 
          src={member.image} 
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#2c3e50] mb-1">{member.name}</h3>
        <p className="text-blue-600 font-medium mb-2">{member.position}</p>
        <p className="text-gray-500 text-sm mb-4">{member.experience} experience</p>
        <p className="text-gray-700 mb-6">{member.bio}</p>
        <div className="flex space-x-4">
          <a 
            href="#" 
            className="text-gray-500 hover:text-blue-500 transition-colors"
            aria-label={`Call ${member.name}`}
          >
            <FaPhone size={18} />
          </a>
          <a 
            href="#" 
            className="text-gray-500 hover:text-blue-500 transition-colors"
            aria-label={`Email ${member.name}`}
          >
            <FaEnvelope size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;