import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'

type Props = {}

const AboutMeGrid = (props: Props) => {
  return (
    <div id='me'>
      <h2>Working with <span className='text-sea-green-800'>me</span></h2>
      <BentoGrid />
    </div>
  )
}

export default AboutMeGrid