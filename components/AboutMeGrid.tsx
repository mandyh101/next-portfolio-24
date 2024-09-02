import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { bentoGridItems } from '@/data'
import Availability from './AboutMeGridItems/Availability'
import WorkExperience from './AboutMeGridItems/WorkExperience'
import Goal from './AboutMeGridItems/Goal'
import Values from './AboutMeGridItems/Values'
import Interests from './AboutMeGridItems/Interests'


const AboutMeGrid = () => {
  return (
    <div id='me' className='max-w-4xl mx-auto'>
      <h2 className='text-center my-8'>Working with 
        <span className='text-sea-green-800'> me</span>
      </h2>
      {/* <BentoGrid className='max-w-4xl mx-auto'>
        {bentoGridItems.map((item,i ) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid> */}
      <div className='grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 mx-auto'>
        <Availability />
        <WorkExperience />
        <Goal />
        <Values />
        <Interests />

        {/* {bentoGridItems.map((item, i) => (
          <div key={i} className={`bentoGridItem group ${item.className}`}>
            <div className='bentoGridItemInner'>
              <h3 className='text-neutral-600 dark:text-neutral-200 mb-2 mt-2'>{item.title}</h3>
              <div className='font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300'>{item.description}</div>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  )
}

export default AboutMeGrid