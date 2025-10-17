'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function DashboardPage() {
  const stats = [
    { label: 'Wallet Balance', value: '₦0.00', color: 'text-green-600', bg: 'bg-green-50' },
    { label: 'Transactions', value: '0', color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'This Month', value: '₦0.00', color: 'text-purple-600', bg: 'bg-purple-50' },
  ]

  const quickActions = [
    { name: 'Buy Airtime', link: '/dashboard/airtime', icon: '📱', color: 'from-blue-500 to-cyan-500' },
    { name: 'Buy Data', link: '/dashboard/data', icon: '📶', color: 'from-purple-500 to-pink-500' },
    { name: 'Pay Cable TV', link: '/dashboard/tv', icon: '📺', color: 'from-green-500 to-teal-500' },
    { name: 'Pay Electricity', link: '/dashboard/electricity', icon: '⚡', color: 'from-orange-500 to-red-500' },
  ]

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold text-gray-900">Welcome back!</h1>
        <p className="text-gray-600 mt-1">Here's what's happening with your account</p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`${stat.bg} rounded-xl p-6`}
          >
            <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
            <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <motion.div
              key={action.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link
                href={action.link}
                className="block bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all text-center"
              >
                <div className={`text-5xl mb-3 bg-gradient-to-br ${action.color} bg-clip-text text-transparent`}>
                  {action.icon}
                </div>
                <h3 className="font-semibold text-gray-900">{action.name}</h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Transactions</h2>
        <div className="text-center py-12 text-gray-500">
          No transactions yet. Start by purchasing a service!
        </div>
      </div>
    </div>
  )
}

