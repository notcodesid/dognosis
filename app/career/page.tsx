'use client'

import { motion } from 'framer-motion'

const CareerPage = () => {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Join Our Team
        </motion.h2>
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p>
            Dognosis is an ambitious, long-term project whose success entails fundamentally new paradigms of
            understanding the world — how we relate with other species, the way we conceptualize the role of
            technology, and the manner in which we practice medicine.
          </p>
          <p>
            We are looking for curious and passionate people to join us on our mission. More about who we&apos;re
            looking for <a href="https://docs.google.com/document/d/1x7-zxRtbFgDLrKLoSI36htgMxo-gRgOyMwT_7Uu_PUM/edit" className="text-blue-400 hover:text-blue-300">here</a>. In short, we are looking for people to solve novel and challenging problems across
            domains of neurotechnology, electronic/mechanical design, olfactory science, embedded systems,
            signal processing, computational modelling, cognitive neuroscience and machine learning.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default CareerPage