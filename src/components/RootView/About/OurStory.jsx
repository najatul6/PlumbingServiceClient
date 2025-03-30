import { MdPlumbing } from "react-icons/md";

const OurStory = () => {
  return (
    <section className="py-16 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="Our plumbing team at work"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-[#2c3e50] mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded in 2010 by John and Mary Smithson, PrimeFlow Plumbing started as a small family business with one truck and a commitment to honest, reliable service. What began as a local operation has grown into one of the region&#39;s most trusted plumbing companies.
            </p>
            <p className="text-gray-700 mb-4">
              Despite our growth, we&#39;ve maintained our core values of integrity, quality workmanship, and personalized service. Every member of our team is trained to the highest standards and shares our commitment to customer satisfaction.
            </p>
            <p className="text-gray-700 mb-6">
              We&#39;re proud to be a locally-owned business serving our community&#39;s plumbing needs for over a decade. When you choose PrimeFlow, you&#39;re supporting local jobs and getting service from neighbors who care about your home as much as you do.
            </p>
            <div className="flex items-center gap-3">
              <MdPlumbing  className="text-blue-500" size={32} />
              <span className="font-semibold text-[#2c3e50]">Licensed • Insured • Bonded</span>
            </div>
          </div>
        </div>
      </section>
  )
}

export default OurStory