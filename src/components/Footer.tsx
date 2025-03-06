// src/components/Footer.tsx

import React from 'react'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Footer: React.FC = () => {
  return (
    <footer className="mt-8 bg-gray-900 text-white p-6">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <motion.a
            href="https://www.linkedin.com/in/luispacheco"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="hover:text-blue-400"
          >
            <FaLinkedin size={24} />
          </motion.a>
          <motion.a
            href="https://github.com/luispacheco"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="hover:text-blue-400"
          >
            <FaGithub size={24} />
          </motion.a>
          <motion.a
            href="https://twitter.com/luispacheco"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="hover:text-blue-400"
          >
            <FaTwitter size={24} />
          </motion.a>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Luis Pacheco. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer