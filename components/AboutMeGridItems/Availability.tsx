import React from 'react'

interface AvailabilityProps {
  isAvailable?: boolean
}

const Availability: React.FC<AvailabilityProps> = ({ isAvailable = true }) => {
  return (
    <div className="bentoGridItemInner flex items-center gap-4 md:flex-col md:text-center">
      <h3 className="sr-only">Availability</h3>
      <div className="relative">
        <div
          className={`h-4 w-4 rounded-full blur-sm ${
            isAvailable
              ? 'bg-aquamarine-400 group-hover:bg-aquamarine-500'
              : 'bg-red-400 group-hover:bg-red-500'
          }`}
        />
        {/* First pulse ring for rippling pulse effect */}
        <div
          className={`absolute -inset-2 rounded-full blur-sm animate-pulse ${
            isAvailable ? 'bg-aquamarine-400/20' : 'bg-red-400/20'
          }`}
        />
        {/* second pulse ring for rippling pulse effect  */}
        <div
          className={`absolute -inset-1 rounded-full blur-sm animate-pulse ${
            isAvailable ? 'bg-aquamarine-300/30' : 'bg-red-400/30'
          }`}
        />
      </div>
      <p className="text-xl font-sans font-light">
        <span
          className={`${
            isAvailable ? 'text-aquamarine-400' : 'text-red-400'
          } group-hover:text-aquamarine-500 transition-colors`}
        >
          {isAvailable ? 'Available' : 'Unavailable'}
        </span>{' '}
        for work
      </p>
    </div>
  )
}

export default Availability
