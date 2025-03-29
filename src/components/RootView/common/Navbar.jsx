import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, User, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import plumbingAnimation from "@/assets/Animations/plumbingAnimation.json"; 
import useAuth from "@/hooks/useAuth";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const {user}=useAuth()

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

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Service Areas", path: "/areas" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className={`sticky top-0 z-40 bg-white shadow-xl transition-all ${isScrolled ? "py-2 shadow-md" : "py-3"}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo with animation */}
        <NavLink 
          to="/" 
          className="flex items-center gap-2 animate__animated animate__fadeInLeft"
        >
          <div className="h-8 w-8  text-white flex items-center justify-center rounded-full">
          <Lottie 
              animationData={plumbingAnimation} 
              loop={true} 
              className="w-full h-full"
            />
          </div>
          <span className="text-md font-bold text-blue-800  md:block">
            PrimeFlow Plumbing
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 animate__animated animate__fadeInDown">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                `text-sm font-medium transition-colors ${
                  isActive 
                    ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1" 
                    : "text-gray-700 hover:text-blue-500"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Auth Buttons - Desktop */}
        <div className="hidden md:flex items-center gap-3 animate__animated animate__fadeInRight">
          <Button variant="outline" size="sm" className="gap-2">
            <LogIn size={16} />
            <span>Login</span>
          </Button>
          <Button size="sm" className="gap-2">
            <User size={16} />
            <span>Register</span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-gray-700 animate__animated animate__fadeInRight"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate__animated animate__fadeInLeft">
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
              <Button variant="outline" className="flex-1 gap-2">
                <LogIn size={16} />
                <span>Login</span>
              </Button>
              <Button className="flex-1 gap-2">
                <User size={16} />
                <span>Register</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;