'use client'

import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://linkedin.com/in/yourprofile',
    },
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/yourusername',
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      url: 'https://twitter.com/yourhandle',
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      url: 'mailto:your.email@example.com',
    },
  ]

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-8">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={link.name}
                >
                  <Icon className="w-6 h-6" />
                </a>
              )
            })}
          </div>
          <div className="text-center">
            <p className="text-gray-400 mb-2">
            Let&apos;s connect and discuss how I can help with your business needs
            </p>
            <a
              href="mailto:your.email@example.com"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              your.email@example.com
            </a>
          </div>
          <div className="mt-8 text-gray-500 text-sm">
            © {currentYear} Binguni Sanjana. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 