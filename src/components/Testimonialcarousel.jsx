import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import foodbg1 from '../Assets/foodbg1.jpg';
import foodbg2 from '../Assets/foodbg2.jpg';


const testimonials = [
  {
    id: 1,
    name: "Peter ",
    role: "Banker",
    image: foodbg1,
    quote: "I love the food, at least it wasnt what i ordered vs what i got, I got exactly the meal i ordered and from my favourite restaurant"
  },
  {
    id: 2,
    name: "Aurora",
    role: "Banker",
    image: foodbg2,
    quote: "I am happy about the speed at which my order got delivered to my doorstep."
  },
  {
    id: 3,
    name: "Mike",
    role: "Product Manager",
    image: foodbg1,
    quote: "Its a good thing we have a food delivery app now in ogoja. Thank God for Eatwell"
  }
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div 
      className="py-10 bg-[#f8f8f8] flex items-center justify-center ">
      <div className="relative w-full max-w-6xl px-12">
        {/* Navigation Buttons */}
        <button
          onClick={prevTestimonial}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-black hover:text-gray-600 transition-colors"
          aria-label="Previous testimonial"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <button
          onClick={nextTestimonial}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-black hover:text-gray-600 transition-colors"
          aria-label="Next testimonial"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        {/* Testimonial Content */}
        <div className="bg-white p-8 rounded-none shadow-none">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            {/* Profile Section */}
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full border-4 border-red-500 overflow-hidden mb-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                {testimonials[currentIndex].name}
              </h3>
              <p className="text-gray-500 mt-1">{testimonials[currentIndex].role}</p>
            </div>

            {/* Testimonial Text */}
            <div className="flex-1 mt-0 md:mt-14 md:pl-8">
              <p className="text-gray-600 text-sm md:text-md leading-relaxed ">
                {testimonials[currentIndex].quote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

