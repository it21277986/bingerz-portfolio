'use client'

import { motion } from 'framer-motion'
import { FaDatabase, FaChartLine, FaTools, FaComments } from 'react-icons/fa'

const skills = {
  'Business Tools': [
    { name: 'JIRA', level: 90 },
    { name: 'Confluence', level: 85 },
    { name: 'MS Visio', level: 80 },
    { name: 'MS Project', level: 75 },
  ],
  'Communication': [
    { name: 'Requirements Gathering', level: 95 },
    { name: 'Stakeholder Management', level: 90 },
    { name: 'Documentation', level: 85 },
    { name: 'Presentation', level: 90 },
  ],
  'Methodologies': [
    { name: 'Agile', level: 90 },
    { name: 'Waterfall', level: 85 },
    { name: 'Scrum', level: 85 },
    { name: 'BPMN', level: 80 },
  ],
    'Data Analysis': [
    { name: 'SQL', level: 90 },
    { name: 'Excel', level: 95 },
    { name: 'Power BI', level: 85 },
    { name: 'Tableau', level: 80 },
  ],
}

const icons = {
  'Data Analysis': FaDatabase,
  'Business Tools': FaTools,
  'Communication': FaComments,
  'Methodologies': FaChartLine,
}

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => {
              const Icon = icons[category as keyof typeof icons]
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
                >
                  <div className="flex items-center mb-4">
                    <Icon className="w-6 h-6 mr-2 text-blue-600" />
                    <h3 className="text-xl font-semibold">{category}</h3>
                  </div>
                  <div className="space-y-4">
                    {skillList.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-sm text-gray-500">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-blue-600 h-2 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 