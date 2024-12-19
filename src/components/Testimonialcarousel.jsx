import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import foodbg1 from '../Assets/foodbg1.jpg';
import foodbg2 from '../Assets/foodbg2.jpg';


const testimonials = [
  {
    id: 1,
    name: "LUIES CHARLS",
    role: "Iphone Developer",
    image: foodbg1,
    quote: "I am quite impressed with the quality and design of this beautiful Telos bed. The delivery person was good and installed everything perfectly in my room. I love the wooden grains and the finish of the bed."
  },
  {
    id: 2,
    name: "SARAH PARKER",
    role: "UI Designer",
    image: foodbg2,
    quote: "The attention to detail in their furniture is remarkable. Every piece I've purchased has exceeded my expectations in terms of both quality and aesthetics."
  },
  {
    id: 3,
    name: "MIKE JOHNSON",
    role: "Product Manager",
    image: foodbg1,
    quote: "Outstanding customer service and premium quality furniture. The installation team was professional and efficient. Highly recommended!"
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

