// src/components/ProjectCard.tsx

import React from 'react'
import { motion } from 'framer-motion'

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  projectUrl: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  projectUrl,
}) => {
  return (
    <motion.div
      className="bg-white rounded-lg overflow-hidden shadow-md transform hover:shadow-xl transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
    >
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 text-primary px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
        >
          View Project
        </a>
      </div>
    </motion.div>
  )
}

export default ProjectCard