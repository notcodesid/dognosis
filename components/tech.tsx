'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import olfac_plot from "@/assets/olfac_plot.webp"

export default function TheTechSection() {
  return (
    <section className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-bold text-center text-white mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          The Tech
        </motion.h2>
        <div className="flex flex-col lg:flex-row items-start gap-12">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src={olfac_plot}
              alt="ERP waves from canine olfaction pilot - green and black tea"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <p className="text-sm text-gray-400 mt-2 text-center">
              ERP waves from canine olfaction pilot - green and black tea
            </p>
          </motion.div>
          <motion.div
            className="lg:w-1/2 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-white text-lg">
              A robust platform to collect and understand canine neural activity is technologically feasible.
            </p>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Background of Neurotech + AI</h3>
              <p className="text-gray-300">
                Tremendous progress is being made in skin-interfaced bioelectronics, e.g. liquid metal-elastomer composites <a href="https://www.science.org/doi/10.1126/sciadv.adf0575" className="text-blue-400 hover:text-blue-300">(Science, 2023),</a>  and the future of EEG is rife with innovation <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6431319/" className="text-blue-400 hover:text-blue-300">(Wearable EEG and Beyond, 2019),</a>  . At the same time, progress in artificial intelligence is at an inflexion point and AI systems are already being used to make sense of neural data, with some success  <a href="https://sites.google.com/view/stablediffusion-with-brain/" className="text-blue-400 hover:text-blue-300">(Stable Diffusion can reconstruct images from fMRI data),</a> . The field of machine learning models in EEG analysis continues to develop, with deep learning maturing in real-world settings 
                <a href="https://ieeexplore.ieee.org/abstract/document/9721187" className="text-blue-400 hover:text-blue-300">(IEEE, 2022).</a> 
             

              </p>
            </div>
            <p className="text-gray-300">
              A growing number of human EEG studies use commercial consumer products such as Muse, with clever algorithms capable of by-passing constraints imposed by noisy data from a limited number of electrodes. There is no reason the same cannot apply for dogs. While difficult challenges certainly exist, such as deriving high-quality SNR during motion and through fur and a thicker skull, and designing suitable form factors for the large variation of canine skulls, they are not impossible to surmount and imperfect MVPs will still be able to deliver considerable use-cases whilst providing data to further refine models.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}