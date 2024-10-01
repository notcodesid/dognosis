'use client'

import { motion } from 'framer-motion'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Dognosis</h3>
            <p className="text-gray-400">Reimagining the relationship between humans and our best friends</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors duration-300">About</a></li>
              <li><a href="/science" className="text-gray-400 hover:text-white transition-colors duration-300">Science</a></li>
              <li><a href="/team" className="text-gray-400 hover:text-white transition-colors duration-300">Team</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <motion.a href="https://x.com/dognosis" target="_blank" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Twitter className="w-6 h-6" />
              </motion.a>
              <motion.a href="https://www.instagram.com/dog.nosis" target="_blank" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Instagram className="w-6 h-6" />
              </motion.a>
              <motion.a href="https://www.linkedin.com/company/dognosis" target="_blank" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Linkedin className="w-6 h-6" />
              </motion.a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">&copy; {currentYear} Dognosis. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer