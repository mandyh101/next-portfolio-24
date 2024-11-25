import Image from 'next/image'
import React from 'react'

const Interests = () => {
  return (
    <div className="bentoGridItem group overflow-hidden relative">
      <Image
        src="/images/mandysurfs.jpg"
        alt=""
        className="object-cover transition duration-200 group-hover:scale-110"
        fill
      />
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10">
        <h3 className="sr-only">Interests</h3>
        <p className="font-normal text-white">
          Ocean lover, mountain biker, trail runner. When I&apos;'m not
          adventuring outside, I am an active member of Climate Action Tech,
          Women in Tech Christchurch and a volunteer Surf Life Guard at Taylors
          Mistake Surf Life Saving Club.{' '}
        </p>
      </div>
    </div>
  )
}

export default Interests
