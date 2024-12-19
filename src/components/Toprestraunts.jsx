import React, { useState } from 'react'
import { Star } from 'lucide-react'
import foodbg1 from "../Assets/foodbg1.jpg";
import foodbg2 from "../Assets/foodbg2.jpg";

const categories = [
  'Priceless',
  'Odaip',
  '90s',
  'Travellers'
]

const products = [
  {
    id: 1,
    name: 'Priceless',
    price: 2500,
    rating: 4,
    image: foodbg1,
  },
  {
    id: 2,
    name: 'Odaip',
    price: 2000,
    rating: 4,
    image: foodbg2
  },
  {
    id: 3,
    name: '90s',
    price: 2200,
    rating: 4,
    image: foodbg1
  },
  {
    id: 4,
    name: 'Travellers',
    price: 1500,
    rating: 5,
    image: foodbg2
  }
]

export default function Toprestraunts() {
  const [activeCategory, setActiveCategory] = useState('CRAWFISH PIE')

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">TOP RESTAURANTS</h2>
      
      {/* Category Tabs */}
      <div className="flex justify-center mb-12">
        <div className="flex space-x-8">
          {categories.map((category) => (
            <button
              key={category}
              className={`pb-2 font-medium transition-colors ${
                activeCategory === category
                  ? 'text-red-500 border-b-2 border-red-500'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col items-center">
            <div className=" mb-4 bg-gray-100 rounded-sm flex items-center justify-center overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className=" object-cover"
              />
            </div>
            <div className="flex mb-2">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className={`w-4 h-4 ${
                    index < product.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'
                  }`}
                />
              ))}
            </div>
            <h3 className="text-lg font-medium mb-2">{product.name}</h3>
            <p className="text-gray-900">N{product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

