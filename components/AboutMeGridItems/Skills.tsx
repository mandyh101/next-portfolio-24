import React from 'react'

const Skills = () => {
  const leftLists = [
    'ReactJS',
    'VueJS',
    'Typescript',
    'Javascript',
    'PHP',
    'Laravel',
  ]
  const centerLists = ['CSS', 'HTML', 'Figma', 'Tailwind']
  const rightLists = [
    'Agile project management',
    'Communication',
    'Big picture thinking',
    'Empathy',
    'Information gathering',
    'Account management',
  ]
  return (
    <div className="bentoGridItemInner relative">
      <h3 className="text-3xl font-light text-tropical-indigo-600 mb-4">
        My skill stack
      </h3>
      <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
        {/* tech stack lists */}
        <div className="flex flex-col gap-3 md:gap-3 lg:gap-4">
          {leftLists.map((item, i) => (
            <span
              key={i}
              className="py-2 px-2 text-xs opacity-50 
                    lg:opacity-100 rounded-lg border-2 border-sea-green-400 text-center bg-seasalt-white shadow-md hover:bg-sea-green-500 hover:text-seasalt-white min-w-[110px]"
            >
              <p className="font-normal">{item}</p>
            </span>
          ))}
          <span className="py-4 px-3 rounded-lg text-center bg-sea-green-400"></span>
        </div>
        <div className="flex flex-col gap-3 md:gap-3 lg:gap-4 max-h-[250px] lg:max-h-[300px]">
          <span className="py-4 px-3 rounded-lg bg-sea-green-400"></span>
          {centerLists.map((item, i) => (
            <span
              key={i}
              className="py-2 px-2 text-xs lg:text-base opacity-50 
                  lg:opacity-100 rounded-lg border-2 border-sea-green-400 text-center bg-seasalt-white shadow-md hover:bg-sea-green-500 hover:text-seasalt-white"
            >
              <p className="font-normal">{item}</p>
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-3 md:gap-3 lg:gap-4">
          {rightLists.map((item, i) => (
            <span
              key={i}
              className="py-2 px-2 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg border-2 border-sea-green-400 text-center bg-seasalt-white shadow-md hover:bg-sea-green-500 hover:text-seasalt-white"
            >
              <p className="font-normal">{item}</p>
            </span>
          ))}
          <span className="py-4 px-3 rounded-lg text-center bg-sea-green-400"></span>
        </div>
      </div>
    </div>
  )
}

export default Skills
