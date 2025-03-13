import { FaBuilding, FaMapMarkerAlt, FaCode, FaPaperPlane, FaCheck, FaSpinner } from 'react-icons/fa';

interface CompanyCardProps {
  name: string;
  email: string;
  location: string;
  roles: string[];
  isSending: boolean;
  isSent: boolean;
}

const CompanyCard = ({ name, email, location, roles, isSending, isSent }: CompanyCardProps) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
          <FaBuilding className="text-white text-xl" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">{name}</h3>
          <p className="text-gray-400 flex items-center gap-2">
            <FaMapMarkerAlt className="text-blue-500" />
            {location}
          </p>
        </div>
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-center gap-2 text-gray-300">
          <FaCode className="text-blue-500" />
          <div className="flex flex-wrap gap-2">
            {roles.map((role, index) => (
              <span 
                key={index}
                className="text-sm bg-gray-700/50 px-2 py-1 rounded-lg"
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`w-full px-4 py-3 rounded-lg flex items-center justify-center gap-2 transition-all backdrop-blur-sm ${
          isSent
            ? 'bg-green-600/90 hover:bg-green-600'
            : 'bg-blue-600/90 hover:bg-blue-600'
        }`}
      >
        {isSending ? (
          <>
            <FaSpinner className="animate-spin" />
            <span>Sending to {email}...</span>
          </>
        ) : isSent ? (
          <>
            <FaCheck />
            <span>Email Sent Successfully!</span>
          </>
        ) : (
          <>
            <FaPaperPlane />
            <span>Processing...</span>
          </>
        )}
      </div>
    </div>
  );
};

export default CompanyCard;
