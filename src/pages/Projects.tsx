// src/pages/Projects.tsx

import React from 'react'
import ProjectCard from '../components/ProjectCard'
import AnimatedSection from '../components/AnimatedSection'
import { ResponsiveSankey } from '@nivo/sankey'
import { ResponsiveLine } from '@nivo/line'
import { ResponsiveCirclePacking } from '@nivo/circle-packing'

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

// Dummy data for inventory metrics (Sankey Chart)
// Creative example showing inventory flow through different stages.
const inventorySankeyData = {
  nodes: [
    { id: "Raw Materials" },
    { id: "Assembly" },
    { id: "Quality Check" },
    { id: "Packaging" },
    { id: "Distribution" },
    { id: "Retail" },
    { id: "Returns" },
  ],
  links: [
    { source: "Raw Materials", target: "Assembly", value: 100 },
    { source: "Assembly", target: "Quality Check", value: 90 },
    { source: "Quality Check", target: "Packaging", value: 80 },
    { source: "Packaging", target: "Distribution", value: 70 },
    { source: "Distribution", target: "Retail", value: 60 },
    { source: "Retail", target: "Returns", value: 10 },
    { source: "Assembly", target: "Retail", value: 20 },
  ],
}

// Dummy data for inventory metrics (Line Chart)
// For example, daily sales figures for selected categories over a week.
const inventoryLineData = [
  {
    id: 'Electronics',
    data: [
      { x: 'Mon', y: 20 },
      { x: 'Tue', y: 30 },
      { x: 'Wed', y: 25 },
      { x: 'Thu', y: 35 },
      { x: 'Fri', y: 45 },
    ],
  },
  {
    id: 'Clothing',
    data: [
      { x: 'Mon', y: 15 },
      { x: 'Tue', y: 25 },
      { x: 'Wed', y: 20 },
      { x: 'Thu', y: 30 },
      { x: 'Fri', y: 40 },
    ],
  },
]

// Dummy data for inventory metrics (Circle Packing)
// Representing a hierarchy of inventory by category and subcategory.
const inventoryCirclePackingData = {
  name: 'Inventory',
  children: [
    {
      name: 'Electronics',
      loc: 120,
      children: [
        { name: 'Mobiles', loc: 70 },
        { name: 'Laptops', loc: 50 },
      ],
    },
    {
      name: 'Clothing',
      loc: 80,
      children: [
        { name: 'Men', loc: 40 },
        { name: 'Women', loc: 40 },
      ],
    },
    {
      name: 'Groceries',
      loc: 200,
      children: [
        { name: 'Fruits', loc: 80 },
        { name: 'Vegetables', loc: 120 },
      ],
    },
  ],
}

const Projects: React.FC = () => {
  return (
    <AnimatedSection className="container mx-auto p-8">
      {/* Metrics Section */}
      <section>
        <h1 className="mt-8 text-4xl font-bold mb-8">Metrics</h1>
        
        {/* Sankey Chart for Inventory Flow */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">Inventory Flow</h2>
          <div style={{ height: 500 }}>
            <ResponsiveSankey
              data={inventorySankeyData}
              margin={{ top: 40, right: 160, bottom: 40, left: 50 }}
              align="justify"
              colors={{ scheme: 'category10' }}
              nodeOpacity={1}
              nodeHoverOthersOpacity={0.35}
              nodeThickness={18}
              nodeSpacing={24}
              nodeBorderWidth={0}
              nodeBorderColor={{
                from: 'color',
                modifiers: [['darker', 0.8]],
              }}
              nodeBorderRadius={3}
              linkOpacity={0.5}
              linkHoverOthersOpacity={0.1}
              linkContract={3}
              enableLinkGradient={true}
              labelPosition="outside"
              labelOrientation="vertical"
              labelPadding={16}
              labelTextColor={{
                from: 'color',
                modifiers: [['darker', 1]],
              }}
              legends={[
                {
                  anchor: 'bottom-right',
                  direction: 'column',
                  translateX: 130,
                  itemWidth: 100,
                  itemHeight: 14,
                  itemDirection: 'right-to-left',
                  itemsSpacing: 2,
                  itemTextColor: '#999',
                  symbolSize: 14,
                  effects: [
                    {
                      on: 'hover',
                      style: {
                        itemTextColor: '#000'
                      }
                    }
                  ]
                }
              ]}
            />
          </div>
        </div>
        
        {/* Line Chart for Daily Sales */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Daily Sales Trend</h2>
          <div style={{ height: 400 }}>
          <ResponsiveLine
  data={inventoryLineData}
  margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
  xScale={{ type: 'point' }}
  yScale={{
    type: 'linear',
    min: 'auto',
    max: 'auto',
    stacked: false,
    reverse: false,
  }}
  axisTop={null}
  axisRight={null}
  axisBottom={{
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: 'Day',
    legendOffset: 36,
    legendPosition: 'middle',
  }}
  axisLeft={{
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: 'Sales',
    legendOffset: -40,
    legendPosition: 'middle',
  }}
  pointSize={10}
  pointColor={{ theme: 'background' }}
  pointBorderWidth={2}
  pointBorderColor={{ from: 'serieColor' }}
  pointLabelYOffset={-12}
  useMesh={true}
/>
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
