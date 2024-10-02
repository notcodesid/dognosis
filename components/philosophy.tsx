'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Uncannis from "@/assets/Uncannis Familiaris img.webp"

const PhilosophySection = () => {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          The Philosophy
        </motion.h2>
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-gray-300">
            Dognosis resonates with the trifecta of poiesis technology, dialogical living and nosing towards
            aligned uplift, articulated in a manifesto concentrate —
          </p>
          <Link 
            href="https://runsandtumbles.substack.com/p/uncannis-familiaris"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors duration-300"
          >
            <div className="flex items-center p-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Uncannis Familiaris</h3>
                <p className="text-gray-400 mb-2">A Manifesto Concentrate</p>
                <span className="text-blue-400 hover:text-blue-300">
                  Read More
                </span>
              </div>
              <div className="w-32 h-32 relative flex-shrink-0">
                <Image
                  src={Uncannis}
                  alt="Dog silhouette overlooking misty mountains"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </Link>
          <blockquote className="italic border-l-4 border-blue-500 pl-4 py-2 my-4 text-gray-300">
            "Relations are constitutive: dogs and people are emergent as historical beings, as subjects and
            objects to each other, precisely through the verbs of their relating." Donna Haraway, When
            Species Meet
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}

export default PhilosophySection