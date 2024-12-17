import React, { useState, useEffect } from 'react'
import foodbg1 from '../Assets/foodbg1.jpg';
import foodbg2 from '../Assets/foodbg2.jpg';

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0)
  const images = [foodbg1, foodbg2 ]

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, 3000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <section className="relative h-[600px] w-full overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
      ))}
      <div className="relative h-full flex flex-col items-center justify-center text-white text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">DELICIOUS FOOD</h1>
        <p className="text-3xl md:text-5xl font-semibold">10% OFF</p>
      </div>
    </section>
  )
}

