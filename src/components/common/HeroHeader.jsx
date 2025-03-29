import { Phone, AlertTriangle, Clock, CheckCircle, Shield } from "lucide-react"
import { Button } from "../ui/button"

const HeroHeader = () => {
    return (
        <div className="bg-blue-100 border-b border-blue-200">
            {/* Top Emergency Bar */}
            <div className="py-2 px-4  flex flex-wrap items-center justify-between max-w-[1440px] mx-auto">
                <div className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-600" />
                    <span className="text-xs font-semibold text-blue-900">
                        24/7 EMERGENCY SERVICE AVAILABLE
                    </span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                    {/* Service Badges */}
                    <div className="flex items-center gap-3 border-r px-2 border-white">
                        <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3 text-blue-600" />
                            <span className="text-xs text-blue-900">90 Min Response</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <CheckCircle className="h-3 w-3 text-green-600" />
                            <span className="text-xs text-blue-900">Licensed</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Shield className="h-3 w-3 text-yellow-600" />
                            <span className="text-xs text-blue-900">5-Yr Warranty</span>
                        </div>
                    </div>

                    {/* Secondary CTA */}
                    <Button
                        variant="ghost"
                        size="sm"
                        className="h-7 gap-1 px-2 text-xs text-blue-800 hover:text-blue-600"
                    >
                        <span>FREE ESTIMATES</span>
                    </Button>
                </div>
                <Button
                    variant="emergency"
                    size="sm"
                    className="h-7 gap-1 px-2 text-xs"
                >
                    <Phone className="h-3 w-3" />
                    <span>CALL NOW: (555) 123-4567</span>
                </Button>
            </div>


        </div>
    )
}

export default HeroHeader