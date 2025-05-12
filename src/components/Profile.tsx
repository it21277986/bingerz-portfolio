'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const Profile = () => {
  return (
    <section id="profile" className="flex items-center py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-start justify-between gap-8"
        >
          {/* Left: Profile Section */}
          <div className="w-full md:w-1/2">
            <div className="relative w-100 h-100 rounded-full overflow-hidden mx-auto md:mx-0">
              <Image
                src="/profile-placeholder.jpg"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="text-center md:text-left mt-8">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold mb-2"
              >
                Binguni Sanjana
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6"
              >
                Associate Business Analyst
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <a
                  href="/cv.pdf"
                  download
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Download CV
                </a>
              </motion.div>
            </div>
          </div>

          {/* Right: About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-3xl font-bold mb-8">About Me</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed">
                I am a seasoned Business Analyst with over 8 years of experience in transforming complex business challenges into actionable solutions. My expertise lies in bridging the gap between business stakeholders and technical teams, ensuring that projects deliver real value to organizations.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                My passion for data-driven decision making and process optimization has helped numerous organizations streamline their operations and achieve their strategic goals. I specialize in requirements gathering, process modeling, and implementing business intelligence solutions that drive growth and efficiency.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                When I&apos;m not analyzing business processes or working on new projects, I enjoy staying up-to-date with the latest industry trends and technologies. I believe in continuous learning and sharing knowledge with the business analysis community.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Profile
