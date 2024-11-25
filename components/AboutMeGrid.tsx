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
    // <div id="me" className="max-w-4xl mx-auto">
    //   <h2 className="text-center my-8">
    //     Working with
    //     <span className="text-sea-green-800"> me</span>
    //   </h2>
    //   {/* <BentoGrid className='max-w-4xl mx-auto'>
    //     {bentoGridItems.map((item,i ) => (
    //       <BentoGridItem
    //         id={item.id}
    //         key={i}
    //         title={item.title}
    //         description={item.description}
    //         className={i === 3 || i === 6 ? "md:col-span-2" : ""}
    //       />
    //     ))}
    //   </BentoGrid> */}
    //   <div className="grid md:grid-rows-10 grid-cols-1 md:grid-cols-2 gap-4 mx-auto">
    //     <Availability />
    //     <WorkExperience />
    //     <Goal />
    //     <Values />
    //     <Interests />

    //     {/* {bentoGridItems.map((item, i) => (
    //       <div key={i} className={`bentoGridItem group ${item.className}`}>
    //         <div className='bentoGridItemInner'>
    //           <h3 className='text-neutral-600 dark:text-neutral-200 mb-2 mt-2'>{item.title}</h3>
    //           <div className='font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300'>{item.description}</div>
    //         </div>
    //       </div>
    //     ))} */}
    //   </div>
    // </div>
    <div id="me" className="max-w-5xl mx-auto">
      {/* Grid container with responsive columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* First Column */}
        <div className="grid grid-rows-6 gap-4">
          <div className="bentoGridItem group border border-aquamarine-500 row-span-1">
            <Availability />
          </div>
          <div className="bentoGridItem group rounded-lg p-4 row-span-2 bg-aquamarine-100 justify-center flex flex-col">
            <Goal />
          </div>
          <div className="bentoGridItem group relative row-span-3 rounded-lg overflow-hidden">
            <Interests />
          </div>
        </div>

        {/* Second Column */}
        <div className="grid grid-rows-6 gap-4">
          <div className="bentoGridItem group row-span-2 bg-tropical-indigo-100">
            <Values />
          </div>
          <div className="bg-gray-500 rounded-lg p-4 row-span-3">
            Box 5 (3 rows)
          </div>
          <div className="bg-gray-600 rounded-lg p-4 row-span-1">
            Box 6 (1 row)
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMeGrid
