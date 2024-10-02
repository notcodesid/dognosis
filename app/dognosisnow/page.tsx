'use client'

import { motion } from 'framer-motion'

const DonateSection = () => {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Dognosis Now
        </motion.h2>
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div>
            <h3 className="text-2xl font-semibold mb-4">Advisors</h3>
            <ul className="space-y-4">
              <li>
                <h4 className="font-semibold"> <a href="https://lakeviewhospitals.in/dr-shashikant-kulgod/" className="text-blue-400 hover:text-blue-300">Dr Shashikant Kulgod</a> </h4>
                <p>Gastroenterologist and laparoscopic surgeon. Director - Brahmadanda Healthcare Services, Radon Oncology, Rajalakshmi Children Foundation, Vigilomics, Soulmates.</p>
              </li>
              <li>
                <h4 className="font-semibold"> <a href="https://www.radoncancercentre.com/doctors/dr-sanjeev-kulgod" className="text-blue-400 hover:text-blue-300">Dr Sanjeev Kulgod </a>  </h4>
                <p>Surgical oncologist. Director - Radon Oncology and Foundation, Vigilomics. 2024 Midcon Chairman of the Indian Association of Surgical Oncologists.</p>
              </li>
              <li>
                <h4 className="font-semibold text-blue-400 hover:text-blue-300"> Dr Vijayalakshmi Kulgod </h4>
                <p>Pediatrician. Director - Rajalakshmi Children Foundation, Soulmates. Animal healthcare advocate.</p>
              </li>
              <li>
                <h4 className="font-semibold text-blue-400 hover:text-blue-300" >Dr Sheetal Kulgod</h4>
                <p>Gynecologist. Director - Radon Foundation. Organizer of cancer screening camps for women.</p>
              </li>
              <li>
                <h4 className="font-semibold text-blue-400 hover:text-blue-300">Dror Robinson</h4>
                <p>Medical Doctor and MedTech founder. Angel investor.</p>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Collaborators</h3>
            <ul className="space-y-2">
              <li> <a href="https://www.radoncancercentre.com/about-us/foundation" className="text-blue-400 hover:text-blue-300"> Radon Cancer Foundation </a></li>
              <li>
              <a href="https://sympoiesis.xyz/" className="text-blue-400 hover:text-blue-300">   Sympoiesis Technologies </a></li>
              <li>Karnataka Institute of Medical Sciences, Hubli</li>
              <li>Karnataka Cancer Therapy and Research Institute, Hubli</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Supporters</h3>
            <ul className="space-y-2">
              <li>Emergent Ventures India</li>
              <li>Boost VC</li>
              <li>1517 Fund</li>
              <li>gradCapital</li>
              <li>Govt of India and Telangana State T-Hub health-tech program</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DonateSection