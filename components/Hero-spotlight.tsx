import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'

function HeroSpotlight() {

  const headingText = "Full stack web developer, innovator, and ocean lover."
  return (
    <div className='pb-24 pt-40'>
      <div>
        {/*  */}
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='#04c8c1' />
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='#04c8c1' />
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='#04c8c1' />
      </div>
      <div className='flex justify-center relative my-16 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <h1 className="font-sans font-bold text-center text-[40px] md:text-4xl lg:text-5xl max-w-80 md:max-w-md lg:max-w-xl">
            {/* Provide accessible option for heading level 1 text */}
            <span aria-hidden="true">
              <TextGenerateEffect words={headingText} />
            </span>
            <span className='sr-only'>{headingText}</span>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default HeroSpotlight