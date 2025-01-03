import React from 'react'
import Availability from './AboutMeGridItems/Availability'
import Skills from './AboutMeGridItems/Skills'
import Goal from './AboutMeGridItems/Goal'
import Values from './AboutMeGridItems/Values'
import Interests from './AboutMeGridItems/Interests'
import Location from './AboutMeGridItems/Location'

const AboutMeGrid = () => {
  return (
    <section id="me" className="section-container section-padding">
      <h2 className="text-center my-8">
        Working with
        <span className="text-sea-green-800"> me</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 md:grid-rows-[auto_auto_auto_auto]">
        <div className="bentoGridItem md:col-span-1 group bg-gradient-to-br from-aquamarine-50 to-transparent md:flex md:justify-center md:items-center">
          <Availability />
        </div>

        <div className="bentoGridItem md:col-span-3 lg:col-span-2 group bg-aquamarine-100 hover:bg-aquamarine-200 transition-colors">
          <Goal />
        </div>

        <div className="bentoGridItem md:col-span-4 lg:col-span-3 md:row-span-6 lg:row-span-3 group bg-gradient-to-br from-tropical-indigo-100 to-transparent">
          TBC
        </div>

        <div className="bentoGridItem md:col-span-2 lg:col-span-3 md:row-span-2 group bg-tropical-indigo-100 hover:bg-tropical-indigo-200 transition-colors h-full">
          <Values />
        </div>

        <div className="bentoGridItem md:col-span-2 md:row-span-2 lg:col-span-3 group bg-aquamarine-100 hover:bg-aquamarine-200 transition-colors">
          <Location />
        </div>

        <div className="bentoGridItem md:col-span-2 md:row-span-4 lg:col-span-3 group min-h-[300px]">
          <Interests />
        </div>
      </div>
    </section>
  )
}

export default AboutMeGrid
