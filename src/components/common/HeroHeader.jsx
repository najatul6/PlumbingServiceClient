import Lottie from "lottie-react"
import { CheckCircle, Clock, Phone, Shield } from "lucide-react"
import { Button } from "../ui/button"
import { Link } from "react-router-dom"
import plumbingAnimation from "../../assets/Animations/plumbingAnimation.json"

const HeroHeader = () => {
    return (
        <section className=" bg-blue-50 px-2">
            <div className="flex gap-6 justify-between px-2 items-center  max-w-[1440px] mx-auto border border-red-600">


                <div>
                    <h1 className="text-lg font-bold text-blue-900 leading-snug">
                        24/7 Emergency Plumbing Services
                    </h1>
                    <p className="text-sm text-blue-800">
                        Fast, reliable plumbing solutions when you need them most.
                    </p>
                </div>

                {/* CTA Buttons - simplified */}
                <div className="flex justify-center items-center gap-4">
                    <Button size="lg" className="gap-2 w-full sm:w-auto">
                        <Phone size={18} />
                        <span>(555) 123-4567</span>
                    </Button>
                    <Button variant="secondary" size="lg" asChild className="w-full sm:w-auto">
                        <Link to="/book-online">Book Online</Link>
                    </Button>
                </div>

                {/* Trust Badges - made more compact */}
                <div className="">
                    <div className="flex items-center gap-2 text-sm text-blue-800">
                        <CheckCircle className="text-green-500 size-4" />
                        <span>Licensed</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-blue-800">
                        <Clock className="text-blue-500 size-4" />
                        <span>90 Min Response</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-blue-800">
                        <Shield className="text-yellow-500 size-4" />
                        <span>5-Year Guarantee</span>
                    </div>
                </div>

                {/* Right Content - Animation */}
                <div className="">
                    <Lottie
                        animationData={plumbingAnimation}
                        loop={true}
                        className="w-full h-20"
                    />
                </div>
            </div>
        </section>
    )
}

export default HeroHeader