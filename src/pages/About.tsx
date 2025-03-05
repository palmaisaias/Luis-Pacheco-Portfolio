// src/pages/About.tsx

import React from 'react'
import AnimatedSection from '../components/AnimatedSection'

const About: React.FC = () => {
  return (
    <AnimatedSection className="container mx-auto p-8">
      <h1 className="mt-8 text-4xl font-bold mb-4">About Me</h1>
      <p className="text-lg text-gray-700 mb-4">
      I'm Luis Pacheco, an inventory manager dedicated to optimizing retail operations through strategic inventory control, accurate forecasting, and process efficiency.
      </p>
      <p className="text-lg text-gray-700">
      With years of experience managing large-scale inventory systems, I focus on driving operational excellence, enhancing stock accuracy, and delivering measurable results in retail efficiency.
      </p>
    </AnimatedSection>
  )
}

export default About