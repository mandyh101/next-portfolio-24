'use client'
import React from 'react'
import { motion } from 'framer-motion'

interface AvailabilityProps {
  isAvailable?: boolean
}

const WorkingWithMe: React.FC<AvailabilityProps> = ({ isAvailable = true }) => {
  return (
    <section className="section-container section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto space-y-12"
      >
        <h2 className="text-center my-8">
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
            className="text-4xl font-light leading-relaxed"
          >
            I&apos;m on a mission to build technology and solutions that have a{' '}
            <span className="text-tropical-indigo-600">positive impact</span> on
            people and communities.
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
            communications, I bring a unique blend of human and technical skills
            to every project, giving me an excellent ability to create
            user-centered solutions. Based in Ōtautahi (Christchurch), Aotearoa
            (New Zealand) and with extensive experience as a remote worker,
            I&apos;m able to effectively collaborate across cross-functional
            teams in hybrid and fully remote environments.
          </p>

          <p className="font-light">
            My approach is built on three core values: challenge, collaboration
            and communication. I thrive on challenge, viewing complex problems
            as opportunities for growth and innovation. I believe in the power
            of teamwork, fostering collaboration and supporting colleagues to
            achieve shared goals. And I prioritise clear and effective
            communication, emphasising active listening, documentation and
            establishiing feedback loops with clients and stakeholders
            throughout the development process.
          </p>

          <p className="font-light">
            When I&apos;m not at my computer, you&apos;ll find me embracing the
            outdoors as a water woman, mountain biker, and trail runner.
            I&apos;m also a yoga teacher and actively contribute to my community
            as a member of Climate Action Tech, Women in Tech Christchurch, and
            as a volunteer Surf Life Guard at Taylors Mistake Surf Life Saving
            Club.
          </p>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="pt-8 border-t border-neutral-200"
        >
          <h3 className="text-2xl font-light mb-6">Technical Expertise</h3>
          <div className="flex flex-wrap gap-3">
            {[
              'ReactJS',
              'VueJS',
              'TypeScript',
              'JavaScript',
              'PHP',
              'Laravel',
              'CSS',
              'HTML',
              'Figma',
              'Tailwind',
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-aquamarine-50 text-aquamarine-700 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div> */}
      </motion.div>
    </section>
  )
}

export default WorkingWithMe
