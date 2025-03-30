import { Link } from "react-router-dom";
import useAuth from "@/hooks/useAuth";
import Lottie from "lottie-react";
import plumbingAnimation from "@/assets/Animations/plumbingAnimation.json";

const DashboardHeader = () => {
  const { user } = useAuth();
  return (
    <header className="flex shadow-md py-1 px-4 sm:px-7 bg-[#2c3e50] min-h-[70px] tracking-wide z-[110] fixed top-0 w-full">
      <div className="flex flex-wrap items-center justify-between gap-4 w-full relative bg-[#2c3e50]">
        <Link to="/" className="flex justify-center items-center gap-2">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 text-white flex items-center justify-center rounded-full">
            <Lottie 
              animationData={plumbingAnimation} 
              loop={true} 
              className="w-full h-full"
            />
          </div>
          <span className="text-md font-bold text-white md:block">
            PrimeFlow Plumbing
          </span>
        </Link>
        </Link>

        <Link to="/dashboard/my-profile">
          <img
            src={
              user?.photoURL ||
              "https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png"
            }
            alt="profile-pic"
            className="w-10 h-10 rounded-full border-2 border-baseColor cursor-pointer"
          />
        </Link>
        
      </div>
    </header>
  );
};

export default DashboardHeader;