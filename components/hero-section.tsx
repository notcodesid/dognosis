'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import image1 from "../assets/dogsense_render1_midjourney.webp"
import image2 from "../assets/dogsense_render1_midjourney 2.webp"

export default function HeroSection() {
  return (
    <section className="bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Reimagining the relationship between humans and our best friends
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Leveraging non-invasive brain-computer interfaces to decipher the canine mind in real time.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.a
                href="#about"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-center transition duration-300 ease-in-out"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.a>
              <motion.a
                href="#contact"
                className="bg-transparent hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-6 rounded-lg border-2 border-white text-center transition duration-300 ease-in-out"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Involved
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            className="relative h-[400px] md:h-[500px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src={image1}
              alt="Dog with neurotech headband"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-2xl"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60 rounded-lg"></div>
          </motion.div>
        </div>
      </div>
      <div className="bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-wrap justify-center items-center gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Image
              src={image2}
              alt="Dogs with neurotech headbands"
              width={300}
              height={300}
              className="rounded-lg shadow-md"
            />
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Advancing Canine Cognitive Neuroscience</h2>
              <p className="text-gray-300 max-w-md">
                Our custom-designed canine BCI systems facilitate high bandwidth data, allowing us to classify and predict perceptual stimuli, emotional states, and cognitive processes in dogs.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}