'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ServiceCard from '@/components/ServiceCard'

export default function HomePage() {
  const services = [
    {
      title: 'Airtime Top-Up',
      description: 'Purchase airtime for all Nigerian networks instantly',
      icon: '📱',
      link: '/dashboard/airtime',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Data Bundles',
      description: 'Buy affordable data plans for MTN, Airtel, Glo, 9mobile',
      icon: '📶',
      link: '/dashboard/data',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Cable TV',
      description: 'Subscribe to DStv, GOtv, Startimes instantly',
      icon: '📺',
      link: '/dashboard/tv',
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Electricity Bills',
      description: 'Pay for prepaid and postpaid electricity meters',
      icon: '⚡',
      link: '/dashboard/electricity',
      color: 'from-orange-500 to-red-500'
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Fast & Reliable
              <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent"> VTU Service</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Buy airtime, data bundles, pay cable TV and electricity bills instantly
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/register" className="btn-primary px-8 py-4 text-lg">
                Get Started
              </Link>
              <Link href="/login" className="btn-secondary px-8 py-4 text-lg">
                Login
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Everything you need in one place</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '⚡', title: 'Instant Delivery', desc: 'Automated processing in seconds' },
              { icon: '🔒', title: 'Secure Payments', desc: 'Bank-level encryption' },
              { icon: '💰', title: 'Best Prices', desc: 'Competitive rates guaranteed' },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card p-8 text-center"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

