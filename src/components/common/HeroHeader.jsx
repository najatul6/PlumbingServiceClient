
import { Phone, AlertTriangle } from "lucide-react";
import { Button } from "../ui/button";

const HeroHeader = () => {
  return (
    <div className="bg-blue-50 border-b border-blue-100 py-3 px-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        {/* Service Tagline */}
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-4 w-4 text-yellow-600" />
          <span className="text-sm font-medium text-blue-900">
            24/7 Emergency Plumbing Services
          </span>
        </div>

        {/* Contact CTA */}
        <Button 
          variant="emergency" 
          size="sm"
          className="h-8 gap-2 px-3 text-xs"
        >
          <Phone className="h-3.5 w-3.5" />
          <span>(555) 123-4567</span>
        </Button>
      </div>
    </div>
  );
};

export default HeroHeader;