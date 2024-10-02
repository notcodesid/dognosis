'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import { Linkedin } from 'lucide-react'

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio?: string;
  image: string | StaticImageData;
  linkedinUrl?: string
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, role, bio, image, linkedinUrl }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [imageError, setImageError] = useState(false)

  const handleImageError = () => {
    setImageError(true)
  }

  return (
    <motion.div
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg relative"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64">
        {imageError ? (
          <div className="w-full h-full flex items-center justify-center bg-gray-700 text-gray-400">
            {name}
          </div>
        ) : (
          <Image
            src={image}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="w-full h-full object-center"
            onError={handleImageError}
          />
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
        <p className="text-gray-400">{role}</p>
      </div>
      {isHovered && (
        <motion.div
          className="absolute inset-0 bg-gray-900 bg-opacity-90 p-6 flex flex-col justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-gray-300 mb-4 overflow-y-auto max-h-40">{bio}</p>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </motion.div>
      )}
    </motion.div>
  )
}

export default TeamMemberCard