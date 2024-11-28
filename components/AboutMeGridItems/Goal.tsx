import React from 'react'

const Goal = () => {
  return (
    <div className="bentoGridItemInner flex flex-col gap-4">
      {/* <h3 className='text-neutral-600 dark:text-neutral-200 mb-2 mt-2'>Goal</h3> */}
      <p className="font-sans text-3xl font-light">🌱 On a mission to...</p>
      <p className="font-normal text-black">
        ...build technolgy and solutions that have a{' '}
        <span className="text-tropical-indigo-600 text-3xl group-hover:text-tropical-indigo-700">
          positive impact
        </span>{' '}
        on people and communities.
      </p>
    </div>
  )
}

export default Goal
