import React from 'react'
import Hero from '../components/Hero'

import Toprestraunts from '../components/Toprestraunts'
import Freshmeatpromo from '../components/Freshmeatpromo'
import Testimonialcarousel from '../components/Testimonialcarousel'

export default function Home() {
  return (
    <div>
      <Hero />
      <Toprestraunts />
      <Freshmeatpromo />
      <Testimonialcarousel />
      {/* Add more content for the home page */}
    </div>
  )
}

