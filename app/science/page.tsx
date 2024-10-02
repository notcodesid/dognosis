'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import image1 from "@/assets/disease_detection_table.webp"
import image2 from "@/assets/covid_detection.webp"
import TheTechSection from '@/components/tech'

interface NestedToggleProps {
  title: React.ReactNode;
  content: React.ReactNode;
  image: any;
}

const NestedToggle = ({ title, content, image }: NestedToggleProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="mt-4 bg-gray-700 rounded-lg overflow-hidden">
      <button
        className="w-full px-4 py-2 flex justify-between items-center text-left text-white hover:bg-gray-600 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold">{title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-2 text-gray-300">
              <Image
                src={image}
                alt={typeof title === 'string' ? title : 'Table'}
                width={800}
                height={400}
                className="mt-4 rounded-lg"
              />
              <div className="mt-4">{content}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const ScienceSection = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section)
  }

  const sections = [
    {
      title: 'Canine Cognitive Neuroscience',
      content: (
        <>
          <p className="mb-4">
            With modern and comfortable custom-designed canine BCI systems facilitating high bandwidth
            data, the ability to classify and predict perceptual stimuli, emotional states, coarse cognitive
            thoughts, personality traits and brain health/functioning is scientifically sound.
          </p>
          <p className="mb-4">
            Recent studies show that scalp EEG can provide meaningful inferences on face processing
            (<a href="https://www.nature.com/articles/s41598-020-76808-8" className="text-blue-400 hover:text-blue-300">Nature Scientific Reports, 2020</a>),
            human vs dog vocalizations (<a href="https://royalsocietypublishing.org/doi/10.1098/rsos.211769" className="text-blue-400 hover:text-blue-300">Royal Society, 2022</a>) and known
            vs unknown words (<a href="https://royalsocietypublishing.org/doi/10.1098/rsos.200851" className="text-blue-400 hover:text-blue-300">Royal Society, 2020</a>). These inferences were possible despite limitations
            from using wired human systems and electrodes that are several years behind current state-of-
            the-art as well as relying on sparse data (few dogs and total minutes recorded).
          </p>
          <h4 className="text-lg font-semibold mb-2">Papers</h4>
          <ul className="list-disc list-inside mb-4">
            <li><a href="https://osf.io/xngf5" className="text-blue-400 hover:text-blue-300">Towards A 4E Approach to Canine Olfaction</a></li>
            <li><a href="https://www.biorxiv.org/content/10.1101/2023.08.14.552730v1.abstract" className="text-blue-400 hover:text-blue-300">Non-Invasive Canine Electroencephalography (EEG) : A Systematic Review [preprint]</a></li>
            <li><a href="https://www.biorxiv.org/content/10.1101/2023.08.14.552730v1.abstract" className="text-blue-400 hover:text-blue-300">Towards Canine BCIs [Advanced Robotics, 2024]</a></li>
            <li><a href="https://www.techrxiv.org/articles/preprint/A_Human-Canine_Interface_From_Sensors_Haptics_and_AI/24082260" className="text-blue-400 hover:text-blue-300">A Human-Canine Interface from Sensors, Haptics, and AI [preprint]</a></li>
          </ul>
        </>
      ),
    },
    {
      title: 'Dogs as Models for Humans',
      content: (
        <>
          <p className="mb-4">
            Learning about disease and cognition in dogs can have profound ramifications for humans.
          </p>
          <p className="mb-4">
            A growing consensus is emerging that dogs are a highly robust model for comparative
            neuroscience and medicine. This is possibly because of:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Our shared co-evolution and living environment.</li>
            <li>Our shared propensity to naturally develop conditions such as dementia, epilepsy, and
              ADHD, among others.</li>
            <li>The natural experiment emergent from the tremendous neural and genetic variation
              amongst breeds.</li>
          </ul>
          <p>
            This is why companies like Rejuvenate Bio (George Church) and research efforts like the NIH-
            funded Dog Aging Project are focusing their longevity efforts on dogs, with Loyal being a
            pioneer having received <a href="https://loyalfordogs.com/posts/loyal-announces-historic-fda-milestone-for-large-dog-lifespan-extension-drug" className="text-blue-400 hover:text-blue-300">FDA approval</a> for their longevity treatment for large dogs.
          </p>
        </>
      ),
    },
    {
      title: 'Disease Detection Dogs',
      content: (
        <>
          <p className="mb-4">
            Detection dogs has been evaluated in detection multiple types of diseases and biological
            conditions in humans, animals, and even <a href="https://www.pnas.org/doi/abs/10.1073/pnas.1914296117" className="text-blue-400 hover:text-blue-300">plants</a>. A handy table from a 2021 paper
            summarizes twenty papers:
          </p>
          <NestedToggle
            title={
              <>
                Detection Dogs Table 1 : All diseases{' '}
                <a href="https://bmcinfectdis.biomedcentral.com/articles/10.1186/s12879-021-06523-8" className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">
                  (BMC, 2021)
                </a>
              </>
            }
            content="The above table does not include the large number of studies investigating detection dogs for
            Covid19, summarized below in a table from the same paper:"
            image={image1}
          />
       
          <NestedToggle
            title={
              <>
                Detection Dogs Table 2 : Covid{' '}
                <a href="https://bmcinfectdis.biomedcentral.com/articles/10.1186/s12879-021-06523-8" className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">
                  (BMC, 2021)
                </a>
              </>
            }
            content=""
            image={image2}
          />
          <p className="mt-4 mb-4">
            For a brief discussion, see the Substack essay <a href="https://www.nature.com/articles/s42003-021-02232-9" className="text-blue-400 hover:text-blue-300">Canine Medical Intuitives</a>. One point worth
            highlighting is that, in one study that explicitly compared the two, detection dogs were more
            accurate than gold standard PCR for Covid-19 (<a href="https://www.nature.com/articles/s42003-021-02232-9" className="text-blue-400 hover:text-blue-300">Nature, 2021</a>).
          </p>
          <p>
            Despite increased interest in devising machine olfaction approaches to disease and other kinds
            of detection, dogs appear to retain the best combination of accuracy, practicality, reliability and
            cost-effectiveness, for olfactory detection.
          </p>
        </>
      ),
    },
  ]

  return (
    <section id="science" className="py-20 bg-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8">The Science</h2>
        <div className="space-y-4">
          {sections.map((section) => (
            <div key={section.title} className="bg-gray-800 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 flex justify-between items-center text-left text-white hover:bg-gray-700 transition-colors duration-200"
                onClick={() => toggleSection(section.title)}
              >
                <span className="text-xl font-semibold">{section.title}</span>
                <motion.div
                  animate={{ rotate: activeSection === section.title ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6" />
                </motion.div>
              </button>
              <AnimatePresence>
                {activeSection === section.title && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 py-4 text-gray-300">
                      {section.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      <TheTechSection />
    </section>
  )
}

export default ScienceSection