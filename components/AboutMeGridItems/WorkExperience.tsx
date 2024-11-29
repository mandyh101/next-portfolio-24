import React from 'react'

const WorkExperience = () => {
  const leftLists = ['ReactJS', 'Express', 'Typescript']
  const rightLists = ['VueJS', 'NuxtJS', 'GraphQL']
  return (
    <div className="bentoGridItemInner relative">
      <h3 className="">Tech Stack</h3>
      <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
        {/* tech stack lists */}
        <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
          {leftLists.map((item, i) => (
            <span
              key={i}
              className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
            >
              {item}
            </span>
          ))}
          <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
        </div>
        <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
          <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
          {rightLists.map((item, i) => (
            <span
              key={i}
              className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WorkExperience
