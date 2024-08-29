import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";



const SocialLinks = () => {
  return (
    <div className='flex flex-row gap-2'>
      <a 
        className='px-2 py-2 rounded-lg bg-transparent border border-tropical-indigo-500 text-night tracking-wide text-xl hover:-translate-y-1 hover:bg-tropical-indigo-600 transform transition duration-500 hover:shadow-md uppercase active:bg-tropical-indigo-700'
        href='https://github.com/mandyh101'
        target='_blank'
      >
        <FaGithub />
        <span className='sr-only'>Github</span>
      </a>
      <a 
        className='px-2 py-2 rounded-lg bg-transparent border border-tropical-indigo-500 text-night tracking-wide text-xl hover:-translate-y-1 hover:bg-tropical-indigo-600 transform transition duration-500 hover:shadow-md uppercase active:bg-tropical-indigo-700'
        href='https://www.linkedin.com/in/mandyhale88/'
        target='_blank'
        >
          <FaLinkedin />
          <span className='sr-only'>LinkedIn</span>
      </a>
      
    </div>
  )
}

export default SocialLinks