import Lottie from "lottie-react";
import { CheckCircle, Clock, Phone, Shield } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import plumbingAnimation from "../../assets/Animations/plumbingAnimation.json";

const HeroHeader = () => {
  return (
    <section className="bg-blue-50 px-4 py-8 md:py-12">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
        {/* Text Content - First on mobile, spans first column on desktop */}
        <div className="md:col-span-1 space-y-2">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-900 leading-tight">
            24/7 Emergency Plumbing Services
          </h1>
          <p className="text-base text-blue-800">
            Fast, reliable plumbing solutions when you need them most.
          </p>
        </div>

        {/* CTA Buttons - Second on mobile, second column on desktop */}
        <div className="md:col-span-1 flex flex-col sm:flex-row gap-3">
          <Button size="lg" className="gap-2 w-full sm:w-auto">
            <Phone size={18} />
            <span>(555) 123-4567</span>
          </Button>
          <Button variant="secondary" size="lg" asChild className="w-full sm:w-auto">
            <Link to="/book-online">Book Online</Link>
          </Button>
        </div>

        {/* Trust Badges - Third on mobile, third column on desktop */}
        <div className="md:col-span-1 grid grid-cols-2 gap-3 md:gap-4">
          <div className="flex items-center gap-2 text-sm md:text-base text-blue-800">
            <CheckCircle className="text-green-500 size-4 md:size-5" />
            <span>Licensed</span>
          </div>
          <div className="flex items-center gap-2 text-sm md:text-base text-blue-800">
            <Clock className="text-blue-500 size-4 md:size-5" />
            <span>90 Min Response</span>
          </div>
          <div className="flex items-center gap-2 text-sm md:text-base text-blue-800 col-span-2">
            <Shield className="text-yellow-500 size-4 md:size-5" />
            <span>5-Year Guarantee</span>
          </div>
        </div>

        {/* Animation - Last on mobile, fourth column on desktop */}
        <div className="md:col-span-1 w-full h-40 md:h-48 lg:h-56">
          <Lottie
            animationData={plumbingAnimation}
            loop={true}
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroHeader;