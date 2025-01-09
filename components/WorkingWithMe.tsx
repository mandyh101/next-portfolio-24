'use client'
import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

interface AvailabilityProps {
  isAvailable?: boolean
}

const WorkingWithMe: React.FC<AvailabilityProps> = ({ isAvailable = true }) => {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, 300])
  return (
    <section className="section-container section-padding relative min-h-screen overflow-hidden">
      <div className="relative ml-auto p-4 md:w-3/4 bg-seasalt-white/60 backdrop-blur-sm min-h-screen z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <h2 className="text-left my-8">
            Working with
            <span className="text-sea-green-800"> me</span>
          </h2>
          <div className="space-y-6">
            <div className="flex items-center gap-3">
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
              <p className="text-xl font-light">
                {isAvailable ? 'Available ' : 'Unavailable '}
                for work
              </p>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-3xl font-light leading-relaxed mb-8"
            >
              I&apos;m on a mission to build technology and solutions that have
              a{' '}
              <span className="text-tropical-indigo-600">positive impact</span>{' '}
              on people and communities.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="prose prose-lg max-w-none space-y-6 text-neutral-700"
          >
            <p className="font-light">
              As a full-stack developer with a background in marketing and
              communications, I bring a unique blend of human and technical
              skills to every project, giving me an excellent ability to create
              user-centered solutions. Based in Ōtautahi (Christchurch),
              Aotearoa (New Zealand) and with extensive experience as a remote
              worker, I&apos;m able to effectively collaborate across
              cross-functional teams in hybrid and fully remote environments.
            </p>
            <p className="font-light">
              My approach is built on three core values: challenge,
              collaboration and communication. I thrive on challenge; complex
              problems are opportunities for growth and new approaches. I
              believe good teamwork is key for innovation, so collaboration and
              supporting colleagues to achieve shared goals is important to me.
              I prioritise clear communication to support alignment between
              goals, expectations and outcomes through active listening,
              documentation, and establishing feedback loops with clients and
              stakeholders.
            </p>
            <p className="font-light">
              When I&apos;m not at my computer, you&apos;ll find me embracing
              the outdoors as a water woman, mountain biker, and trail runner.
              I&apos;m also a yoga teacher and actively contribute to my
              community as a member of Climate Action Tech, Women in Tech
              Christchurch, and as a volunteer Surf Life Guard at Taylors
              Mistake Surf Life Saving Club.
            </p>
          </motion.div>
        </motion.div>
      </div>
      {/* Desktop parallax Image */}
      <motion.div
        className="hidden md:block absolute md:left-0 md:top-0 w-1/2 overflow-hidden rounded-sm"
        style={{ y }}
      >
        <div className="aspect-[4/3]">
          <Image
            src="/images/mandysurfs.jpg"
            alt="Mandy surfing"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>
      </motion.div>
      {/* Mobile image fade */}
      <motion.div
        className="block md:hidden overflow-hidden rounded-sm w-full"
        initial={{ opacity: 0, y: 100 }} // Start 100px below and invisible
        whileInView={{ opacity: 1, y: 0 }} // Move to natural position and fade in
        transition={{
          duration: 0.7, // Slightly longer duration for smoother motion
          ease: 'easeOut', // Add easing for more natural movement
        }}
      >
        <Image
          src="/images/mandysurfs.jpg"
          style={{
            objectFit: 'cover',
            position: 'relative',
            width: '100%',
            height: 'auto',
            aspectRatio: '4/3',
          }}
          alt="Mandy surfing"
          width={1000}
          height={750}
          priority
        />
      </motion.div>
    </section>
  )
}

export default WorkingWithMe
