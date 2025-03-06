// src/pages/About.tsx

import React from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'

const About: React.FC = () => {
  return (
    <AnimatedSection className="container mx-auto p-8">
      {/* About Me Section */}
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
        className="text-lg text-gray-700 mb-8"
      >
        With years of experience managing large-scale inventory systems, I focus on driving operational excellence, enhancing stock accuracy, and delivering measurable results in retail efficiency.
      </motion.p>

      {/* Professional Experience Section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
        <div className="mb-6">
          <h3 className="text-2xl font-semibold">Inventory Control Manager</h3>
          <p className="text-lg text-gray-600">Nordstrom | Cerritos, CA | 2022 - Present</p>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>Leads a team of 25-40 associates, including mentoring assistant managers.</li>
            <li>Conducts thorough analyses to resolve inventory discrepancies, improving accuracy and reducing shrinkage.</li>
            <li>Oversees strategic planning for efficient shipment unloading and optimal storage solutions.</li>
            <li>Spearheaded RFID technology implementation for improved real-time inventory tracking and data accuracy.</li>
            <li>Organizes and executes biannual physical inventory assessments, ensuring precise compliance and productivity through effective scheduling and forecasting.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Inventory Control Manager</h3>
          <p className="text-lg text-gray-600">Nordstrom Rack | Brea, CA | 2020 - 2022</p>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>Managed a collaborative team of 20-26 members with two assistant managers.</li>
            <li>Implemented efficient inbound/outbound processes and provided comprehensive staff training.</li>
            <li>Optimized productivity across processing, fulfillment, and merchandise support operations.</li>
            <li>Performed daily inventory data checks to maintain accurate records.</li>
            <li>Built strategic partnerships with sales managers to align inventory strategies with business goals.</li>
            <li>Successfully devised and executed strategic plans to eliminate inventory backlog, significantly improving operational efficiency.</li>
          </ul>
        </div>
      </motion.div>

      {/* Education & Certifications Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Education & Certifications</h2>
        <div className="mb-4">
          <h3 className="text-2xl font-semibold">Kaizen Conference, Nordstrom (2023)</h3>
          <p className="text-lg text-gray-700 mt-2">Comprehensive training in Kaizen methodologies.</p>
        </div>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.8 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Technical</h3>
          <p className="text-lg text-gray-700">
            Google Suite, Microsoft Office (Excel, PowerPoint)
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Professional</h3>
          <p className="text-lg text-gray-700">
            Inventory Management, Data Analysis, Data Collection & Reporting, Team Leadership, Problem-Solving, Strategic Planning, Public Speaking, Critical Thinking, KPI Setting & Attainment, Executive Collaborations
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Languages</h3>
          <p className="text-lg text-gray-700">
            English (Native), Spanish (Proficient)
          </p>
        </div>
      </motion.div>
    </AnimatedSection>
  )
}

export default About