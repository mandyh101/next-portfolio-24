import React from 'react'

const Values = () => {
  return (
    <div className="bentoGridItemInner">
      <h3 className="sr-only">Values</h3>
      <p className="text-3xl font-normal">
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
      <p className="font-normal">Swipe to learn more...</p>
    </div>
  )
}

export default Values
