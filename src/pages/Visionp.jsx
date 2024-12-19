import React from 'react';
import { ArrowRight } from 'lucide-react';
import foodbg1 from '../Assets/foodbg1.jpg';
import foodbg2 from '../Assets/foodbg2.jpg';

const Visionp = () => {
  return (
    <div className="min-h-screen bg-[#f8f8f8] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Vision</h1>
        
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img className="h-48 w-full object-cover md:w-48" src={foodbg1} alt="Vision" />
            </div>
            <div className="p-4">
              <div className="uppercase tracking-wide text-sm text-[#ef4444] font-semibold">Shaping the Future</div>
              <p className="mt-2 text-gray-600">
                Eliminating the long waiting time in getting a meal from your Favourite Restaurant, with our platform we want you to be able to order and get your meal delivered to your doorstep directly from a Restaurant of your Choosing.
              </p>
              <div className="mt-4">
                <a href="#" className="inline-flex items-center text-xs text-[#ef4444] hover:text-[#ca4747]">
                  Learn more about our mission
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img className="h-48 w-full object-cover" src={foodbg2} alt="Innovation" />
            <div className="p-4">
              <h3 className="font-bold text-xl mb-2">Innovation</h3>
              <p className="text-gray-600">We are in the business of delivering happiness to your location</p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img className="h-48 w-full object-cover" src={foodbg1} alt="Sustainability" />
            <div className="p-4">
              <h3 className="font-bold text-xl mb-2">Sustainability</h3>
              <p className="text-gray-600">Changing the former narratives of food, and pharmaceutical service with our user-friendly interface</p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img className="h-48 w-full object-cover" src={foodbg2} alt="Customer Satisfaction" />
            <div className="p-4">
              <h3 className="font-bold text-xl mb-2">Customer Satisfaction</h3>
              <p className="text-gray-600">Easing the stress by ordering products conviniently using the eatwell app from the comfort of your home</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visionp;

