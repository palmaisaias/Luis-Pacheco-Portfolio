// src/pages/Home.tsx

import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'

const Home: React.FC = () => {
  return (
    <AnimatedSection className="relative">
      {/* Professional Gradient Hero Section */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 py-24">
        <div className="container mx-auto px-6 text-center">
          {/* Animated Main Heading */}
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-primary mb-6 drop-shadow-xl animated-header"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            Luis Pacheco
          </motion.h1>
          {/* Animated Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-gray-200 mb-12 fade-in"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            Specializing in efficient inventory management, precise forecasting, and optimizing retail operations.
          </motion.p>
          {/* Animated Call-to-Action Button */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <Link
              to="/projects"
              className="btn shadow-xl hover:scale-105 transition-transform"
            >
              Explore My Work
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Engaging Welcome Message Section */}
      <div className="container mx-auto px-6 py-20">
        <motion.div
          className="max-w-4xl mx-auto text-center fade-in"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
<h2 className="mt-8 text-3xl md:text-4xl font-semibold mb-4">
  Streamlining Inventory for Retail Success
</h2>
<p className="text-lg md:text-xl text-gray-700">
  My passion lies in managing and optimizing inventory to ensure seamless operations and superior customer satisfaction. Take a look at my accomplishments and reach out—I'm excited to discuss how we can enhance your retail efficiency together.
</p>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

export default Home
