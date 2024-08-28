import React from 'react'
import { Spotlight } from './ui/Spotlight'

function HeroSpotlight() {
  return (
    <div className='pb-24 pt-40'>
      <div>
        {/*  */}
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='aquamarine' />
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='aquamarine' />
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='aquamarine' />
      </div>
      <div className='flex justify-center relative my-16 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <h1 className='tracking-widest max-w-80'>
          Full stack web developer, design thinker, and ocean lover.
          </h1>
        </div>
      </div>
    </div>
  )
}

export default HeroSpotlight