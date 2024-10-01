'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import olfac_plot from "@/assets/olfac_plot.webp"
export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  }

  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Dognosis</h2>
            <p className="text-lg mb-6">
              Dognosis is reimagining the relationship between humans and our best friends through cutting-edge technology and neuroscience.
            </p>
            <p className="text-lg mb-6">
              Our mission is to decipher the canine mind in real-time, unlocking new possibilities for communication, health, and understanding between humans and dogs.
            </p>
            <motion.a
              href="#science"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Science
            </motion.a>
          </motion.div>
          <motion.div variants={itemVariants} className="relative h-[400px]">
            <Image
              src={olfac_plot}
              alt="ERP at channel Fz"
              layout="fill"
              objectFit="contain"
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-20"
        >
          <motion.h3 variants={itemVariants} className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Key Features of Our Technology
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Non-Invasive BCI",
                description: "Our brain-computer interfaces are designed specifically for dogs, ensuring comfort and safety.",
              },
              {
                title: "Real-Time Analysis",
                description: "Advanced AI algorithms process canine brain activity, providing instant insights.",
              },
              {
                title: "Wide Applications",
                description: "From enhancing communication to early disease detection, our technology opens new possibilities.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <h4 className="text-xl font-semibold mb-4">{feature.title}</h4>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}