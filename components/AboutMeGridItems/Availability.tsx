import React from 'react'

const Availability = () => {
  return (
    <div className="bentoGridItemInner">
      <h3 className="sr-only">Availability</h3>
      <p className="text-3xl font-sans font-light">
        <span className="text-aquamarine-400 group-hover:text-aquamarine-500">
          Available
        </span>{' '}
        to work
      </p>
      {/* <p className="font-normal">in Ōtautahi (Christchurch) and remote.</p> */}
    </div>
  )
}

export default Availability
