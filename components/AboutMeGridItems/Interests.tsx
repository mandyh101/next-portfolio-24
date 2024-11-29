import Image from 'next/image'
import React from 'react'

const Interests = () => {
  return (
    <div className="">
      <Image
        src="/images/mandysurfs.jpg"
        alt=""
        className="object-cover"
        fill
      />
      <div className="absolute inset-0 bg-aquamarine-100/50"></div>
      <div className="relative z-10 bentoGridItemInner">
        <h3 className="sr-only">Interests</h3>
        <p className="font-normal text-black">
          Ocean lover, mountain biker, trail runner and yoga teacher. When I'm
          not outside, I'm an active member of Climate Action Tech, Women in
          Tech Christchurch and a volunteer Surf Life Guard at Taylors Mistake
          Surf Life Saving Club.
        </p>
      </div>
    </div>
  )
}

export default Interests
