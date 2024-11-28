'use client'
import React, { useState } from 'react'
import { FaCircleArrowRight, FaCircleArrowLeft } from 'react-icons/fa6'

const Values = () => {
  const [currentStep, setCurrentStep] = useState(0)

  const content = [
    {
      intro: (
        <p className="text-3xl font-sans font-light">
          I value{' '}
          <span className="text-aquamarine-400 group-hover:text-aquamarine-500">
            challenge
          </span>
          ,{' '}
          <span className="text-aquamarine-400 group-hover:text-aquamarine-500">
            teamwork
          </span>
          , and{' '}
          <span className="text-aquamarine-400 group-hover:text-aquamarine-500">
            communication
          </span>
          ...
        </p>
      ),
      showForward: true,
    },
    {
      intro: (
        <p className="text-lg font-normal font-serif leading-relaxed">
          I thrive on{' '}
          <span className="text-xl text-aquamarine-500 font-sans">
            challenge
          </span>
          . Complex problems motivate me to learn, adapt, and grow. I approach
          new ideas and problems as an opportunity to expand my skills and push
          beyond my comfort zone.
        </p>
      ),
      showForward: true,
    },
    {
      intro: (
        <p className="text-lg font-normal font-serif leading-relaxed">
          In my opinion, great{' '}
          <span className="text-xl text-aquamarine-500 font-sans">
            teamwork
          </span>{' '}
          leads to innovation. I believe in fostering collaboration, sharing
          ideas, and supporting my colleagues to reach our shared goals.
        </p>
      ),
      showForward: true,
    },
    {
      intro: (
        <p className="text-lg font-normal font-serif leading-relaxed">
          Clear{' '}
          <span className="text-xl text-aquamarine-500 font-sans">
            communication
          </span>{' '}
          is essential to me. I reflect this in how I prioritise active
          listening, thoughtful documentation, and keeping stakeholders informed
          throughout the development process.
        </p>
      ),
      showForward: false,
    },
  ]

  const handleNext = () => {
    if (currentStep < content.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="bentoGridItemInner flex flex-col h-full gap-4">
      <h3 className="sr-only">Values</h3>
      {content[currentStep].intro}
      <div className="mt-auto flex flex-row justify-between items-center">
        <div className="flex items-center gap-2">
          {currentStep > 0 && (
            <button
              onClick={handleBack}
              className="flex items-center gap-2 font-normal hover:text-aquamarine-500 font-serif"
            >
              <FaCircleArrowLeft className="text-3xl text-aquamarine-400 hover:text-aquamarine-500" />
              Back
            </button>
          )}
        </div>
        {content[currentStep].showForward && (
          <button
            onClick={handleNext}
            className="flex items-center gap-2 font-normal hover:text-aquamarine-500 font-serif group"
          >
            {currentStep === 0 ? 'Click to learn more...' : 'Next'}
            <FaCircleArrowRight className="text-3xl text-aquamarine-400 hover:text-aquamarine-500" />
          </button>
        )}
      </div>
    </div>
  )
}

export default Values
