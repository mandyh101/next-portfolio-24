'use client';
import React from 'react'

const ButtonPrimary = ({
  title,
  icon,
  isRotatingIcon,
  // handleClick,
  otherClasses,
}: {
  title: string
  icon?: React.ReactNode
  isRotatingIcon?: boolean
  position?: string
  // handleClick?: () => void
  otherClasses?: string
}) => {

  // TODO make this dynamic / pass in a prop to determine the target element
  const handleClick = () => {
    const targetElement = document.getElementById('me');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
      <>
          <button
            onClick={handleClick}
            className={`font-sans font-medium w-full sm:w-60 overflow-hidden text-center px-4 py-2 rounded-lg bg-tropical-indigo-500 text-night tracking-wide text-base hover:-translate-y-1 hover:bg-tropical-indigo-600 transform transition duration-500 hover:shadow-md uppercase active:bg-tropical-indigo-700 group flex justify-center items-center gap-2 ${otherClasses}`}
          >
            {title}
            {icon && (
              <span className={`${isRotatingIcon ? 'transform transition-transform duration-200 group-hover:rotate-45' : ''}`}>
              {icon}
            </span>
            )}
          </button>
      </>
  )
}

export default ButtonPrimary