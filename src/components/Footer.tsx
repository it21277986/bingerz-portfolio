'use client'

import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/binguni-sanjana-74a06922b/',
    },
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/bingers00',
    },
    {
      name: 'WhatsApp',
      icon: FaWhatsapp,
      url: 'https://wa.me/94717422213',
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      url: 'mailto:sanjanapmb@gmail.com',
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
              href="mailto:sanjanapmb@gmail.com"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              sanjanapmb@gmail.com
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