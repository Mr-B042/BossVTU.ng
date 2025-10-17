'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface Service {
  title: string
  description: string
  icon: string
  link: string
  color: string
}

interface ServiceCardProps {
  service: Service
  index: number
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="card p-8 group"
    >
      <div className={`text-6xl mb-4 bg-gradient-to-br ${service.color} bg-clip-text text-transparent`}>
        {service.icon}
      </div>
      <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-primary-600 transition">
        {service.title}
      </h3>
      <p className="text-gray-600 mb-6">
        {service.description}
      </p>
      <Link
        href={service.link}
        className="inline-block px-6 py-3 bg-gray-100 hover:bg-primary-600 hover:text-white rounded-lg font-semibold transition-all duration-300"
      >
        Get Started →
      </Link>
    </motion.div>
  )
}

