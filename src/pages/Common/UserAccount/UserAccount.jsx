import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Pencil, Check, X, Share2 } from "lucide-react";

const UserAccount = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Md Najatul Islam");
  const [email] = useState("najatulislam11@gmail.com");
  const [tempName, setTempName] = useState(name);

  const handleSave = () => {
    setName(tempName);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempName(name);
    setIsEditing(false);
  };

  const handleShareProfile = () => {
    const profileUrl = `${window.location.origin}/user/${encodeURIComponent(name.toLowerCase().replace(/\s+/g, '-'))}`;
    
    navigator.clipboard.writeText(profileUrl)
      .then(() => {
        toast.success("Profile URL copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
        toast.error("Failed to copy profile URL");
      });
  };

  return (
    <div className="max-w-md mx-auto my-8 bg-gradient-to-br from-blue-50 to-purple-50 shadow-xl rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
      {/* Cover Photo */}
      <div className="h-48 bg-gradient-to-r from-indigo-500 to-purple-600 relative">
        <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
          <span className="text-white text-opacity-80 text-sm">Cover Photo</span>
        </div>
      </div>

      {/* Profile Picture */}
      <div className="flex justify-center -mt-20 relative">
        <div className="relative group">
          <img
            className="w-40 h-40 rounded-full border-4 border-white object-cover shadow-lg transition-transform duration-300 group-hover:scale-105"
            src="https://www.najatulislam.me/najatul6.png"
            alt="Profile"
          />
          <div className="absolute inset-0 bg-black/30 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Pencil className="text-white w-6 h-6" />
          </div>
        </div>
      </div>

      {/* User Info */}
      <div className="px-6 py-4 text-center space-y-4">
        {isEditing ? (
          <div className="flex flex-col items-center space-y-3">
            <Input
              value={tempName}
              onChange={(e) => setTempName(e.target.value)}
              className="text-center text-lg font-semibold w-full max-w-xs"
            />
            <div className="flex space-x-2">
              <Button
                size="sm"
                onClick={handleSave}
                className="bg-green-600 hover:bg-green-700"
              >
                <Check className="mr-1 h-4 w-4" /> Save
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={handleCancel}
              >
                <X className="mr-1 h-4 w-4" /> Cancel
              </Button>
            </div>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
            <p className="text-gray-600 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              {email}
            </p>
            <Button
              onClick={() => setIsEditing(true)}
              variant="outline"
              className="mt-2"
            >
              <Pencil className="mr-2 h-4 w-4" /> Edit Profile
            </Button>
          </>
        )}

        {/* Stats */}
        <div className="flex justify-center items-center gap-3 pt-4 border-t border-gray-200 mt-4">
          <p className="text-gray-500">Member Since:</p>
          <p className="font-bold text-indigo-600">142 Days Ago</p>
        </div>
      </div>

      {/* Share Profile Button */}
      <div className="px-6 py-4 border-t border-gray-200">
        <Button 
          onClick={handleShareProfile}
          className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700"
        >
          <Share2 className="mr-2 h-4 w-4" />
          Share Profile
        </Button>
      </div>
    </div>
  );
};

export default UserAccount;