import React from 'react'
import Availability from './AboutMeGridItems/Availability'
import WorkExperience from './AboutMeGridItems/WorkExperience'
import Goal from './AboutMeGridItems/Goal'
import Values from './AboutMeGridItems/Values'
import Interests from './AboutMeGridItems/Interests'
import Location from './AboutMeGridItems/Location'

const AboutMeGrid = () => {
  return (
    <div id="me" className="max-w-5xl mx-auto">
      <h2 className="text-center my-8">
        Working with
        <span className="text-sea-green-800"> me</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* First Column */}
        <div className="grid grid-rows-6 gap-4">
          <div className="bentoGridItem group border border-aquamarine-500 row-span-1 flex flex-col justify-center">
            <Availability />
          </div>
          <div className="bentoGridItem group row-span-2 bg-aquamarine-100">
            <Goal />
          </div>
          <div className="bentoGridItem group relative row-span-2 rounded-lg overflow-hidden">
            <Interests />
          </div>
        </div>

        {/* Second Column */}
        <div className="grid grid-rows-6 gap-4">
          <div className="bentoGridItem group row-span-1 bg-tropical-indigo-100">
            <Values />
          </div>
          <div className="bentoGridItem group row-span-3">
            <WorkExperience />
          </div>
          <div className="bentoGridItem row-span-1 bg-sea-green-100">
            <Location />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMeGrid
