// src/pages/Projects.tsx

import React, { useState, useEffect } from 'react'
import ProjectCard from '../components/ProjectCard'
import AnimatedSection from '../components/AnimatedSection'
import { ResponsiveCirclePacking } from '@nivo/circle-packing'
import { ResponsiveBar } from '@nivo/bar'

// Example project data; replace with real projects as needed.
const projects = [
  {
    title: 'Project One',
    description: 'A brief description of Project One.',
    imageUrl: 'https://via.placeholder.com/400x300',
    projectUrl: 'https://example.com/project-one',
  },
  {
    title: 'Project Two',
    description: 'A brief description of Project Two.',
    imageUrl: 'https://via.placeholder.com/400x300',
    projectUrl: 'https://example.com/project-two',
  },
  // Add more projects here...
]

// Enhanced dummy data for inventory metrics (Circle Packing) - Complex & Interesting
const inventoryCirclePackingData = {
  name: 'Nordstrom Inventory',
  children: [
    {
      name: 'Apparel',
      loc: 300,
      children: [
        {
          name: 'Men',
          loc: 150,
          children: [
            { name: 'Shirts', loc: 50 },
            { name: 'Pants', loc: 40 },
            { name: 'Jackets', loc: 30 },
            { name: 'Accessories', loc: 30 },
          ],
        },
        {
          name: 'Women',
          loc: 150,
          children: [
            { name: 'Dresses', loc: 60 },
            { name: 'Tops', loc: 40 },
            { name: 'Skirts', loc: 30 },
            { name: 'Accessories', loc: 20 },
          ],
        },
      ],
    },
    {
      name: 'Footwear',
      loc: 200,
      children: [
        {
          name: 'Men',
          loc: 100,
          children: [
            { name: 'Sneakers', loc: 40 },
            { name: 'Formal', loc: 30 },
            { name: 'Boots', loc: 30 },
          ],
        },
        {
          name: 'Women',
          loc: 100,
          children: [
            { name: 'Heels', loc: 40 },
            { name: 'Flats', loc: 30 },
            { name: 'Boots', loc: 30 },
          ],
        },
      ],
    },
    {
      name: 'Beauty',
      loc: 150,
      children: [
        {
          name: 'Skincare',
          loc: 80,
          children: [
            { name: 'Moisturizers', loc: 40 },
            { name: 'Cleansers', loc: 20 },
            { name: 'Serums', loc: 20 },
          ],
        },
        {
          name: 'Makeup',
          loc: 70,
          children: [
            { name: 'Lipsticks', loc: 30 },
            { name: 'Foundations', loc: 20 },
            { name: 'Mascara', loc: 20 },
          ],
        },
      ],
    },
    {
      name: 'Accessories',
      loc: 100,
      children: [
        {
          name: 'Bags',
          loc: 60,
          children: [
            { name: 'Handbags', loc: 40 },
            { name: 'Backpacks', loc: 20 },
          ],
        },
        {
          name: 'Watches',
          loc: 40,
          children: [
            { name: 'Smartwatches', loc: 20 },
            { name: 'Luxury', loc: 20 },
          ],
        },
      ],
    },
  ],
}

const InventoryAccuracyChart = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640) // using 640px as mobile breakpoint
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const data = [
    {
      location: 'Cerritos',
      Accuracy: 97.7,
    },
    {
      location: 'Brea',
      Accuracy: 95.2,
    },
    {
      location: 'SoCal Avg.',
      Accuracy: 94.8,
    },
    {
      location: 'Company Avg.',
      Accuracy: 93.6,
    },
  ]

  // On mobile, rotate the tick labels 45° with extra padding
  const tickRotation = isMobile ? 45 : 0
  const tickPadding = isMobile ? 10 : 5
  // Increase bottom margin on mobile to prevent text from being cut off
  const margin = isMobile
    ? { top: 50, right: 130, bottom: 80, left: 60 }
    : { top: 50, right: 130, bottom: 50, left: 60 }

  return (
    <ResponsiveBar
      data={data}
      keys={['Accuracy']}
      indexBy="location"
      margin={margin}
      padding={0.3}
      colors={{ scheme: 'nivo' }}
      borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      axisBottom={{
        tickSize: 5,
        tickPadding: tickPadding,
        tickRotation: tickRotation,
        legend: isMobile ? '' : 'Location',
        legendPosition: 'middle',
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Inventory Accuracy (%)',
        legendPosition: 'middle',
        legendOffset: -50,
      }}
      labelFormat={value => `${value}%`}
      borderRadius={5}
      labelTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
      animate={true}
    />
  )
}

const Projects: React.FC = () => {
  return (
    <AnimatedSection className="container mx-auto p-8">
      {/* Metrics Section */}
      <section>
        <h1 className="mt-8 text-4xl font-bold mb-8">Metrics</h1>
        
        {/* Inventory Accuracy Chart */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Inventory Accuracy</h2>
          {/* Responsive container: height adjusts on mobile */}
          <div className="h-64 sm:h-80 md:h-[400px]">
            <InventoryAccuracyChart />
          </div>
        </div>

        {/* Circle Packing Chart for Inventory Hierarchy */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Inventory Hierarchy</h2>
          <div style={{ height: 500 }}>
            <ResponsiveCirclePacking
              data={inventoryCirclePackingData}
              margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
              id="name"
              value="loc"
              colors={{ scheme: 'nivo' }}
              childColor={{
                from: 'color',
                modifiers: [['brighter', 0.4]],
              }}
              padding={4}
              enableLabels={true}
              labelsFilter={(n) => n.node.depth === 2}
              labelsSkipRadius={10}
              labelTextColor={{
                from: 'color',
                modifiers: [['darker', 2]],
              }}
              borderWidth={1}
              borderColor={{
                from: 'color',
                modifiers: [['darker', 0.5]],
              }}
              defs={[
                {
                  id: 'lines',
                  type: 'patternLines',
                  background: 'none',
                  color: 'inherit',
                  rotation: -45,
                  lineWidth: 5,
                  spacing: 8,
                },
              ]}
              fill={[
                {
                  match: {
                    depth: 1,
                  },
                  id: 'lines',
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mt-16">
        <h1 className="text-4xl font-bold mb-8">My Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>
    </AnimatedSection>
  )
}

export default Projects