'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import dogImage from "../assets/dogsense_render1_midjourney.webp"
import image2 from "../assets/dogsense_render1_midjourney 2.webp"

export default function HeroSection() {
  return (
    <section className="bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <motion.div
          className="text-center max-w-4xl mx-auto"
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
        </motion.div>

        {/* The Premise Section */}
        <motion.div
          className="mt-20 bg-gray-800 rounded-lg shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-[300px] md:h-full">
              <Image
                src={dogImage}
                alt="Close-up of a dog"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-8">
              <motion.h2
                className="text-3xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                The Premise
              </motion.h2>
              <motion.ul
                className="space-y-4 text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >

                <li className="">
                  <span className="mr-2">1.</span>
                  Dogs can do what humans cannot, such as detecting <a href="https://runsandtumbles.substack.com/p/canine-medical-intuitives-2023-update" target='_blank' className='text-blue-400 hover:text-blue-300'>28+ diseases </a> in real-time, often with higher accuracies than our best diagnostics.
                </li>


                <li>
                  <span className="mr-2">2.</span>
                  Today, there are more dogs on Earth than ever in human history. The United States had more canines than children in 2020 and data from Brazil, China and India point towards population booms worldwide.
                </li>
                <li>
                  <span className="mr-2">3.</span>
                  For the first time ever, we have the ability to map brain activity using non-invasive, highly portable, and relatively inexpensive devices.
                </li>
              </motion.ul>
            </div>
          </div>
        </motion.div>

        {/* The Idea Section */}
        <div className="mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="flex flex-col lg:flex-row items-center gap-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="lg:w-1/2">
                <Image
                  src={image2}
                  alt="Dogs with neurotech headbands"
                  width={600}
                  height={600}
                  className="rounded-lg shadow-md"
                />
              </div>
              <div className="lg:w-1/2 space-y-6">
                <motion.h2
                  className="text-3xl md:text-4xl font-bold text-white text-center lg:text-left"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  The Idea
                </motion.h2>
                <motion.p
                  className="text-gray-300 text-lg text-center lg:text-left"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  Leveraging non-invasive brain-computer interfaces powered by EEG/fNIRS and powerful AI algorithms, we can begin to decipher the canine mind in real time.
                </motion.p>
                <motion.div
                  className="space-y-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  <p className="text-white font-semibold text-center lg:text-left">This has three major potential cascades:</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 text-center lg:text-left">
                    <li>
                      <span className="font-semibold">Symbiosis</span> - Increasing the bandwidth of human-canine communication, cooperation and welfare.
                    </li>
                    <li>
                      <span className="font-semibold">Partners not Pets</span> - Increasing affordances available for all dogs to be free-agents capable of providing for each other and our collective health, security and understanding.
                    </li>
                    <li>
                      <span className="font-semibold">Unleashing Disease-Sniffing Dogs</span> - Real-world applications of canine olfaction to allow for cost-effective, accurate, and non-invasive tests.
                    </li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}