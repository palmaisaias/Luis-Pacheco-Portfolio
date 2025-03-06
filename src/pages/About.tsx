// src/pages/About.tsx

import React from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'

const About: React.FC = () => {
  return (
    <AnimatedSection className="container mx-auto p-8">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-8 text-4xl font-bold mb-4"
      >
        About Me
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg text-gray-700 mb-4"
      >
        I'm Luis Pacheco, an inventory manager dedicated to optimizing retail operations through strategic inventory control, accurate forecasting, and process efficiency.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-lg text-gray-700"
      >
        With years of experience managing large-scale inventory systems, I focus on driving operational excellence, enhancing stock accuracy, and delivering measurable results in retail efficiency.
      </motion.p>
    </AnimatedSection>
  )
}

export default About