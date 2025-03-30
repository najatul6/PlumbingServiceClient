const Testimonials = () => {
    const testimonials = [
      {
        id: 1,
        name: "Sarah Johnson",
        location: "Portland, OR",
        rating: 5,
        comment: "They fixed our burst pipe at 2 AM during a freezing night. Professional, fast, and reasonably priced. Lifesavers!",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg"
      },
      {
        id: 2,
        name: "Michael Chen",
        location: "Seattle, WA",
        rating: 5,
        comment: "The plumber arrived within the promised window and diagnosed our water heater issue immediately. Excellent service.",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
      },
      {
        id: 3,
        name: "Emily Rodriguez",
        location: "Vancouver, WA",
        rating: 5,
        comment: "Courteous technicians who cleaned up after themselves. Will definitely use PrimeFlow for all our plumbing needs.",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg"
      }
    ];
  
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2c3e50] mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don&apos;t just take our word for it - hear from our satisfied customers.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-gray-50 p-6 rounded-lg border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic">&quot;{testimonial.comment}&quot;</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default Testimonials;