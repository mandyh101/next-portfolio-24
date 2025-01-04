'use client'
import React from 'react'
import { Tabs } from './ui/Tabs'
import { motion } from 'framer-motion'

interface Skill {
  name: string
  level?: number
  description?: string
  icon?: React.ReactNode
}

interface SkillCategories {
  [key: string]: Skill[]
}

interface TabContentProps {
  skills: Skill[]
}

const TabContent: React.FC<TabContentProps> = ({ skills }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-3xl mx-auto">
    {skills.map((skill) => (
      <div
        key={skill.name}
        className="group relative bg-white rounded-lg p-3 shadow-sm
                     border border-gray-100 hover:border-sea-green-400
                     transition-all duration-300 ease-in-out"
      >
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-800">
            {skill.name}
          </span>
          <div
            className="h-1.5 w-1.5 rounded-full bg-sea-green-400
                         group-hover:scale-125 transition-transform"
          />
        </div>
      </div>
    ))}
  </div>
)

const Skills: React.FC = () => {
  const skillCategories: SkillCategories = {
    Technical: [
      { name: 'ReactJS', level: 90 },
      { name: 'VueJS', level: 85 },
      { name: 'TypeScript', level: 88 },
      { name: 'JavaScript', level: 92 },
      { name: 'PHP', level: 80 },
      { name: 'Laravel', level: 82 },
      { name: 'CSS (Tailwind, Sass)', level: 90 },
      { name: 'HTML', level: 95 },
      { name: 'Figma', level: 85 },
      { name: 'Tailwind', level: 92 },
    ],
    Human: [
      { name: 'Excellent communicator', level: 90 },
      { name: 'Go-getter', level: 85 },
      { name: 'Change agent', level: 92 },
      { name: 'Systems thinking', level: 92 },
      { name: 'Agile project management', level: 92 },
    ],
    Learning: [
      {
        name: 'AI fundamentals',
        description: 'AI for everyone - DeepLearning.AI',
      }, //https://www.coursera.org/learn/ai-for-everyone?action=enroll
      {
        name: 'Green software practitioner',
        description: 'The Green Software Foundation',
      }, //https://learn.greensoftware.foundation/carbon-efficiency
    ],
  }

  const tabs = [
    {
      title: 'Technical',
      value: 'technical',
      content: <TabContent skills={skillCategories['Technical']} />,
    },
    {
      title: 'Human',
      value: 'human',
      content: <TabContent skills={skillCategories['Human']} />,
    },
    {
      title: 'Learning',
      value: 'learning',
      content: <TabContent skills={skillCategories['Learning']} />,
    },
  ]

  return (
    <section className="section-container section-padding relative min-h-[500px]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="font-light text-center my-8">
          My <span className="text-sea-green-800">skill</span> set
        </h2>
        <Tabs
          tabs={tabs}
          containerClassName="mb-4"
          activeTabClassName="bg-tropical-indigo-500"
          tabClassName="text-sm font-medium border border-tropical-indigo-400"
          contentClassName="mt-4"
        />
      </motion.div>
    </section>
  )
}

export default Skills
