'use client'

import { motion } from 'framer-motion'
import { FaGraduationCap } from 'react-icons/fa'

const education = [
  {
    degree: 'BSc (Hons) in Information Technology  – Second Class',
    school: 'Sri Lanka Institute of Information Technology (SLIIT)',
    duration: 'July 2021 - Dec 2025',
    description: 'Specialising in Information Technology',
    achievements: [
      '',
    ],
  },
  {
    degree: 'Certificate in Computer Science',
    school: 'National Institute of Business Management (NIBM)',
    duration: 'Nov 2020 - March 2021',
    description: 'Major in Management Information Systems',
    achievements: [
      '',
    ],
  },
  {
    degree: 'Foundation Course in Human Resource Management',
    school: 'Chartered Institute of Personal Management Sri Lanka (CIPM)',
    duration: 'Sep 2019 - Dec 2019',
    description: 'Major in Management Information Systems',
    achievements: [
      '',
    ],
  },
  {
    degree: 'G.C.E Advanced Level',
    school: 'Anula Vidyalaya Nugegoda',
    duration: 'Jan 2006 - Aug 2020',
    description: 'Studied in Physical Science Stream',
    achievements: [
      '',
    ],
  },
]

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
          <div className="max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <FaGraduationCap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold">{edu.degree}</h3>
                      <span className="text-gray-600 dark:text-gray-300">
                        {edu.duration}
                      </span>
                    </div>
                    <h4 className="text-lg text-blue-600 dark:text-blue-400 mb-2">
                      {edu.school}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {edu.description}
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                {index < education.length - 1 && (
                  <div className="h-px bg-gray-200 dark:bg-gray-700 my-8" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education 