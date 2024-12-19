import React from 'react';
import { ShoppingCart, PenToolIcon as Tool, Truck, Star, Phone } from 'lucide-react';
import foodbg2 from '../Assets/foodbg2.jpg';

const Productsandservicesp = () => {
  const offerings = [
    {
      title: "Food, drinks, groceries and pharmaceutical products",
      description: "Here in Eatwell, we deliver these products from your favourite stores directly to your doorstep",
      icon: <ShoppingCart className="h-6 w-6 text-[#ef4444]" />
    },
    {
      title: "Delivery Services",
      description: "We as a company will ensure to actively keep in touch with the restaurants, riders, and ultimately with the customers just to ensure smooth service delivery",
      icon: <Truck className="h-6 w-6 text-[#ef4444]" />
    },
    {
      title: "Quality Assurance",
      description: "Our watch word in Eatwell will be centered on trust. We promise to manage our customers time efficiently",
      icon: <Star className="h-6 w-6 text-[#ef4444]" />
    },
    {
      title: "Customer Support",
      description: "Dedicated customer service to assist you before, during, and after your purchase/order",
      icon: <Phone className="h-6 w-6 text-[#ef4444]" />
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8f8f8] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Products and Services</h1>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {offerings.map((offering, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-4">
                  {offering.icon}
                </div>
                <h3 className="font-bold text-xl mb-2">{offering.title}</h3>
                <p className="text-gray-600">{offering.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img className="h-48 w-full object-cover md:w-48" src={foodbg2} alt="Featured Product" />
            </div>
            <div className="p-4">
              <div className="uppercase tracking-wide text-xs font-semibold text-[#ef4444]">Featured Product</div>
              <h2 className="block mt-1 text-lg leading-tight font-medium text-black">Ergonomic Office Chair</h2>
              <p className="mt-2 text-gray-600">
                Experience unparalleled comfort with our latest ergonomic office chair. Designed to support your body throughout the workday, this chair combines style with functionality.
              </p>
              <div className="mt-4">
                <a href="#" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#ef4444] hover:bg-[#d13f3f]">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productsandservicesp;

