import React from 'react'
import foodbg1 from '../Assets/foodbg1.jpg';
import foodbg2 from '../Assets/foodbg2.jpg';


export default function Freshmeatpromo() {
  return (
    <section className="bg-gray-50 py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <p className="font-sail text-2xl mb-4">Extra 25% Off</p>
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-500" style={{ WebkitTextStroke: '2px #ef4444' }}>
              Fresh Meat Dishes
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Christmas Sales
            </p>
            <button className="bg-red-500 text-white px-8 py-3 rounded hover:bg-red-600 transition-colors uppercase font-medium">
              Shop Now
            </button>
          </div>

          {/* Image Grid */}
          <div className="lg:w-2/3 relative">
            <div className="flex items-center justify-end space-x-4">
              {/* Decorative Elements */}
              <div className="absolute -left-8 top-1/2 transform -translate-y-1/2">
                <div className="w-12 h-12 rounded-full bg-lime-100 opacity-50" />
                <div className="w-8 h-8 rounded-full bg-red-100 opacity-50 -mt-4 ml-8" />
              </div>

              {/* Food Images */}
              <div className="flex space-x-4 transform -rotate-6">
                {[1, 2, 3].map((index) => (
                  <div
                    key={index}
                    className="w-64 h-96 bg-wood-pattern p-4 transform hover:-translate-y-2 transition-transform duration-300"
                    style={{
                      backgroundImage: "url('/placeholder.svg?height=384&width=256')",
                      backgroundSize: 'cover',
                      transform: `rotate(${index * 2}deg)`,
                    }}
                  >
                    <img
                      src={foodbg1}
                      alt={`Fresh meat dish ${index}`}
                      className="w-80 h-80 rounded-sm object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Decorative Elements */}
              <div className="absolute -right-8 bottom-1/4">
                <div className="w-10 h-10 rounded-full bg-red-100 opacity-50" />
                <div className="w-6 h-6 rounded-full bg-lime-100 opacity-50 mt-4 -ml-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

