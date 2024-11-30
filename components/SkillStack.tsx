import React from 'react'
import { Tabs } from './ui/Tabs' // Adjust import path as needed

interface Skill {
  name: string
  level: number
}

interface SkillCategories {
  [key: string]: Skill[]
}

interface TabContentProps {
  skills: Skill[]
}

const TabContent: React.FC<TabContentProps> = ({ skills }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4">
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

        <div className="mt-2 h-1 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-sea-green-400 rounded-full transition-all duration-500 ease-out
                       group-hover:opacity-80"
            style={{ width: `${skill.level}%` }}
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
    ],
    Design: [
      { name: 'CSS', level: 90 },
      { name: 'HTML', level: 95 },
      { name: 'Figma', level: 85 },
      { name: 'Tailwind', level: 92 },
    ],
    'Soft Skills': [
      { name: 'Agile project management', level: 88 },
      { name: 'Communication', level: 95 },
      { name: 'Big picture thinking', level: 90 },
      { name: 'Empathy', level: 95 },
      { name: 'Information gathering', level: 85 },
      { name: 'Account management', level: 87 },
    ],
  }

  const tabs = [
    {
      title: 'Technical',
      value: 'technical',
      content: <TabContent skills={skillCategories['Technical']} />,
    },
    {
      title: 'Design',
      value: 'design',
      content: <TabContent skills={skillCategories['Design']} />,
    },
    {
      title: 'Soft Skills',
      value: 'soft-skills',
      content: <TabContent skills={skillCategories['Soft Skills']} />,
    },
    // TODO add learning tab?
    // {
    //   title: 'Want to learn',
    //   value: 'learning',
    //   content: <TabContent skills={skillCategories['Want to learn']} />,
    // },
  ]

  return (
    <section className="section-container section-padding relative min-h-[650px] sm:min-h-[500px]">
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
    </section>
  )
}

export default Skills
