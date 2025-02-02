'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import ButtonPrimary from './ui/ButtonPrimary'
import { FaArrowRight } from 'react-icons/fa6'
import SocialLinks from './ui/SocialLinks'

function HeroSpotlight() {
  const headingText: string =
    'Full-stack web developer, innovator, and activator.'
  return (
    <section className="pb-8 sm:pb-10 md:pb-12 lg:pb-16 pt-40">
      <div>
        {/*  */}
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="#04c8c1"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="#04c8c1"
        />
        <Spotlight
          className="top-28 left-80 h-[80vh] w-[50vw]"
          fill="#04c8c1"
        />
      </div>
      <div className="flex justify-center relative my-16 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <div className="flex flex-col space-y-4  md:max-w-lg lg:max-w-xl items-center">
            <h1 className="font-sans text-center text-[40px] md:text-4xl lg:text-5xl">
              {/* Provide accessible option for heading level 1 text */}
              <span aria-hidden="true">
                <TextGenerateEffect words={headingText} />
              </span>
              <span className="sr-only">{headingText}</span>
            </h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1.5,
                delay: 1,
                ease: 'easeIn',
              }}
            >
              <p className="text-center text-mono-grey-300 font-light">
                Kia ora, I&apos;m Mandy – here to create accessible,
                intentional, and efficient web applications with a user-centered
                approach.
              </p>
            </motion.div>
            <SocialLinks />
            <ButtonPrimary
              title="Learn more"
              icon={<FaArrowRight />}
              isRotatingIcon
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSpotlight
