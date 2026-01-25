'use client'

import { motion } from 'framer-motion'
import { FaBriefcase } from 'react-icons/fa'

const experiences = [
  {
    title: 'Associate Business Analyst',
    company: 'Axcertro Pvt Ltd',
    duration: 'Jan 2025 - Present',
    responsibilities: [
      'Lead requirements gathering and analysis for enterprise-wide digital transformation projects',
      'Develop and maintain business process models using BPMN',
      'Create and manage project documentation using JIRA and Confluence',
      'Collaborate with stakeholders to define and prioritize project requirements',
      'Conduct user acceptance testing and provide training to end-users',
    ],
  },
  {
    title: 'Business Analyst Intern',
    company: 'Axcertro Pvt Ltd',
    duration: 'June 2024 – Dec 2024',
    responsibilities: [
      'Analyzed business processes and identified improvement opportunities',
      'Created detailed functional specifications and user stories',
      'Facilitated workshops with business stakeholders',
      'Developed and maintained project schedules',
      'Conducted data analysis to support business decisions',
    ],
  },
  {
    title: 'Freelance Business Analyst (Part Time)',
    company: 'Jx Tech USA',
    duration: 'Jan 2025 – Dec 2025',
    responsibilities: [
      'Assisted in gathering and documenting business requirements',
      'Created process flow diagrams and user interface mockups',
      'Participated in system testing and quality assurance',
      'Supported project managers in project coordination',
      'Maintained project documentation and reports',
    ],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
          <div className="max-w-4xl mx-auto">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <FaBriefcase className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold">{experience.title}</h3>
                      <span className="text-gray-600 dark:text-gray-300">
                        {experience.duration}
                      </span>
                    </div>
                    <h4 className="text-lg text-blue-600 dark:text-blue-400 mb-4">
                      {experience.company}
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                      {experience.responsibilities.map((responsibility, idx) => (
                        <li key={idx}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                {index < experiences.length - 1 && (
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

export default Experience 