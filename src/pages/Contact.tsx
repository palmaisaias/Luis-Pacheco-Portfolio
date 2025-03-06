// src/pages/Contact.tsx

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic (e.g., send an email)
    console.log(formData)
    // Reset form data after submission
    setFormData({ name: '', email: '', message: '' })
  }

  // Variants for the form container and fields to enable staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const fieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <AnimatedSection className="container mx-auto p-8">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-8 text-4xl font-bold mb-4"
      >
        Contact Me
      </motion.h1>
      <motion.form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto space-y-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fieldVariants}>
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </motion.div>
        <motion.div variants={fieldVariants}>
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </motion.div>
        <motion.div variants={fieldVariants}>
          <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows={5}
            required
          />
        </motion.div>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          variants={fieldVariants}
          className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition-colors duration-300"
        >
          Send Message
        </motion.button>
      </motion.form>
    </AnimatedSection>
  )
}

export default Contact