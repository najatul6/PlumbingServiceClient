import { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, User, LogIn, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import plumbingAnimation from "@/assets/Animations/plumbingAnimation.json";
import useAuth from "@/hooks/useAuth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "react-toastify";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 5);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success('Logged out successfully!');
        navigate("/");
      })
      .catch((error) => {
        toast.error(`Logout failed: ${error.message}`);
      });
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Service Areas", path: "/areas" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className={`sticky top-0 z-40 bg-[#2c3e50] shadow-xl transition-all ${isScrolled ? "py-2 shadow-md" : "py-3"}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo with animation */}
        <NavLink to="/" className="flex items-center gap-2">
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
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                `text-sm font-medium transition-colors ${
                  isActive 
                    ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1" 
                    : "text-white hover:text-blue-500"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Auth Buttons - Desktop */}
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                {/* <Button variant="ghost" className="gap-2 rounded-full px-0 py-0"> */}
                  <Avatar className="h-7 w-7 hover:border-2 hover:border-blue-700 cursor-pointer">
                    <AvatarImage src={user.photoURL} />
                    <AvatarFallback>
                      {user.displayName?.charAt(0) || "U"}
                    </AvatarFallback>
                  </Avatar>
                  {/* <span className="hidden lg:inline">Account</span> */}
                {/* </Button> */}
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-gray-300 shadow-xl ">
                <DropdownMenuItem onClick={() => navigate("/my-profile")}>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button variant="outline" size="sm" className="gap-2" onClick={() => navigate("/auth/login")}>
                <LogIn size={16} />
                <span>Login</span>
              </Button>
              <Button size="sm" className="gap-2" onClick={() => navigate("/auth/register")}>
                <User size={16} />
                <span>Register</span>
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-3 flex flex-col gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => 
                  `py-2 px-3 rounded-md text-sm font-medium ${
                    isActive 
                      ? "bg-blue-50 text-blue-600" 
                      : "text-gray-700 hover:bg-gray-50"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="flex gap-3 mt-3">
              {user ? (
                <>
                  <Button variant="outline" className="flex-1 gap-2" onClick={() => navigate("/my-profile")}>
                    <User size={16} />
                    <span>Profile</span>
                  </Button>
                  <Button className="flex-1 gap-2" onClick={handleLogout}>
                    <LogOut size={16} />
                    <span>Logout</span>
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="outline" className="flex-1 gap-2" onClick={() => navigate("/auth/login")}>
                    <LogIn size={16} />
                    <span>Login</span>
                  </Button>
                  <Button className="flex-1 gap-2" onClick={() => navigate("/auth/register")}>
                    <User size={16} />
                    <span>Register</span>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;