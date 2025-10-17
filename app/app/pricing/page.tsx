'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState('airtime')

  const airtimeData = [
    { network: 'MTN VTU Airtime', customer: '2.00% Discount', reseller: '2.50% Discount', api: '2.50% Discount' },
    { network: 'Glo VTU Airtime', customer: '2.00% Discount', reseller: '2.50% Discount', api: '3.00% Discount' },
    { network: 'Airtel VTU Airtime', customer: '2.00% Discount', reseller: '2.50% Discount', api: '3.00% Discount' },
    { network: '9mobile VTU Airtime', customer: '2.00% Discount', reseller: '2.50% Discount', api: '3.00% Discount' },
  ]

  const ePinsData = [
    { network: 'MTN Recharge Cards (ePINs)', customer: '0.00% Discount', reseller: '0.50% Discount', api: '0.50% Discount' },
    { network: 'Glo Recharge Cards (ePINs)', customer: '0.00% Discount', reseller: '1.00% Discount', api: '1.00% Discount' },
    { network: 'Airtel Recharge Cards (ePINs)', customer: '0.00% Discount', reseller: '1.00% Discount', api: '1.00% Discount' },
    { network: '9mobile Recharge Cards (ePINs)', customer: '0.00% Discount', reseller: '4.00% Discount', api: '4.00% Discount' },
  ]

  const cableTvData = [
    { provider: 'DStv', customer: 'Amount + ₦99 Fee', reseller: '1.00% Discount + ₦0 Fee', api: '1.00% Discount + ₦0 Fee' },
    { provider: 'GOtv', customer: 'Amount + ₦99 Fee', reseller: '1.00% Discount + ₦0 Fee', api: '1.00% Discount + ₦0 Fee' },
    { provider: 'Startimes', customer: 'Amount + ₦99 Fee', reseller: '1.00% Discount + ₦0 Fee', api: '1.50% Discount + ₦0 Fee' },
    { provider: 'Showmax', customer: 'Amount + ₦99 Fee', reseller: '1.00% Discount + ₦0 Fee', api: '1.00% Discount + ₦0 Fee' },
  ]

  const electricityData = [
    { disco: 'Aba (ABEDC)', customer: 'Amount + ₦99 Fee', reseller: '0.10% Discount + ₦0 Fee', api: '1.50% Discount + ₦0 Fee' },
    { disco: 'Abuja (AEDC)', customer: 'Amount + ₦99 Fee', reseller: '0.10% Discount + ₦0 Fee', api: '1.00% Discount + ₦0 Fee' },
    { disco: 'Benin (BEDC)', customer: 'Amount + ₦99 Fee', reseller: '0.10% Discount + ₦0 Fee', api: '1.00% Discount + ₦0 Fee' },
    { disco: 'Eko (EKEDC)', customer: 'Amount + ₦99 Fee', reseller: '0.10% Discount + ₦0 Fee', api: '0.80% Discount + ₦0 Fee' },
    { disco: 'Enugu (EEDC)', customer: 'Amount + ₦99 Fee', reseller: '0.10% Discount + ₦0 Fee', api: '1.00% Discount + ₦0 Fee' },
    { disco: 'Ibadan (IBEDC)', customer: 'Amount + ₦99 Fee', reseller: '0.10% Discount + ₦0 Fee', api: '0.80% Discount + ₦0 Fee' },
    { disco: 'Ikeja (IKEDC)', customer: 'Amount + ₦99 Fee', reseller: '0.10% Discount + ₦0 Fee', api: '0.80% Discount + ₦0 Fee' },
    { disco: 'Jos (JED)', customer: 'Amount + ₦99 Fee', reseller: '0.10% Discount + ₦0 Fee', api: '0.70% Discount + ₦0 Fee' },
    { disco: 'Kaduna (KAEDCO)', customer: 'Amount + ₦99 Fee', reseller: '0.10% Discount + ₦0 Fee', api: '1.00% Discount + ₦0 Fee' },
    { disco: 'Kano (KEDCO)', customer: 'Amount + ₦99 Fee', reseller: '0.10% Discount + ₦0 Fee', api: '0.80% Discount + ₦0 Fee' },
    { disco: 'Portharcourt (PHED)', customer: 'Amount + ₦99 Fee', reseller: '0.10% Discount + ₦0 Fee', api: '1.50% Discount + ₦0 Fee' },
    { disco: 'Yola (YEDC)', customer: 'Amount + ₦99 Fee', reseller: '0.10% Discount + ₦0 Fee', api: '1.00% Discount + ₦0 Fee' },
  ]

  const dataPlansNote = {
    service: 'Data Plans (MTN, Glo, Airtel, 9mobile)',
    customer: 'See Data Page',
    reseller: 'Contact Support',
    api: 'API Endpoint Available'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
              BossVTU.ng
            </Link>
            <div className="flex gap-4">
              <Link href="/login" className="text-gray-600 hover:text-gray-900">
                Login
              </Link>
              <Link href="/register" className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">VTU Pricing</h1>
          <p className="text-xl opacity-90">
            Transparent pricing for Airtime, Data, Cable TV, Electricity & More
          </p>
          <p className="mt-4 text-lg">
            Choose your plan: <strong>Customer</strong> | <strong>Reseller</strong> | <strong>API User</strong>
          </p>
        </div>
      </div>

      {/* Pricing Tiers Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👤</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Customer</h3>
              <p className="text-gray-600">Perfect for personal use</p>
              <p className="text-sm text-gray-500 mt-2">Buy for yourself</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-500"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💼</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Reseller</h3>
              <p className="text-gray-600">Best discounts for resellers</p>
              <p className="text-sm text-gray-500 mt-2">Sell and earn more</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-purple-500"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔌</span>
              </div>
              <h3 className="text-xl font-bold mb-2">API User</h3>
              <p className="text-gray-600">Integrate into your platform</p>
              <p className="text-sm text-gray-500 mt-2">Maximum automation</p>
            </div>
          </motion.div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-xl shadow-md p-2 mb-8 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {[
              { id: 'airtime', label: '📱 Airtime', icon: '📱' },
              { id: 'epins', label: '💳 ePINs', icon: '💳' },
              { id: 'data', label: '📶 Data', icon: '📶' },
              { id: 'cabletv', label: '📺 Cable TV', icon: '📺' },
              { id: 'electricity', label: '⚡ Electricity', icon: '⚡' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Tables */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Airtime Pricing */}
          {activeTab === 'airtime' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="overflow-x-auto"
            >
              <table className="w-full">
                <thead className="bg-gradient-to-r from-primary-600 to-purple-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Network</th>
                    <th className="px-6 py-4 text-center font-semibold">Customer</th>
                    <th className="px-6 py-4 text-center font-semibold bg-green-500">
                      <div className="flex flex-col items-center">
                        <span>Reseller</span>
                        <span className="text-xs font-normal opacity-90">⭐ BEST VALUE</span>
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center font-semibold">API User</th>
                  </tr>
                </thead>
                <tbody>
                  {airtimeData.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 font-medium text-gray-900">{item.network}</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-semibold">{item.customer}</td>
                      <td className="px-6 py-4 text-center text-green-600 font-bold bg-green-50">{item.reseller}</td>
                      <td className="px-6 py-4 text-center text-purple-600 font-semibold">{item.api}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          )}

          {/* ePINs Pricing */}
          {activeTab === 'epins' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="overflow-x-auto"
            >
              <table className="w-full">
                <thead className="bg-gradient-to-r from-primary-600 to-purple-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Recharge Cards</th>
                    <th className="px-6 py-4 text-center font-semibold">Customer</th>
                    <th className="px-6 py-4 text-center font-semibold bg-green-500">
                      <div className="flex flex-col items-center">
                        <span>Reseller</span>
                        <span className="text-xs font-normal opacity-90">⭐ BEST VALUE</span>
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center font-semibold">API User</th>
                  </tr>
                </thead>
                <tbody>
                  {ePinsData.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 font-medium text-gray-900">{item.network}</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-semibold">{item.customer}</td>
                      <td className="px-6 py-4 text-center text-green-600 font-bold bg-green-50">{item.reseller}</td>
                      <td className="px-6 py-4 text-center text-purple-600 font-semibold">{item.api}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          )}

          {/* Data Pricing */}
          {activeTab === 'data' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-12 text-center"
            >
              <div className="max-w-2xl mx-auto">
                <div className="text-6xl mb-6">📶</div>
                <h3 className="text-2xl font-bold mb-4">Data Plans Pricing</h3>
                <p className="text-gray-600 mb-8">
                  Data plan prices vary by network and bundle size. For the most up-to-date pricing:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <Link
                    href="/dashboard/data"
                    className="p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-all border-2 border-blue-200"
                  >
                    <div className="text-3xl mb-2">👤</div>
                    <h4 className="font-bold mb-2">Customers</h4>
                    <p className="text-sm text-gray-600">View Data Page</p>
                  </Link>
                  <div className="p-6 bg-green-50 rounded-xl border-2 border-green-200">
                    <div className="text-3xl mb-2">💼</div>
                    <h4 className="font-bold mb-2">Resellers</h4>
                    <p className="text-sm text-gray-600">Contact Support for Pricing</p>
                  </div>
                  <div className="p-6 bg-purple-50 rounded-xl border-2 border-purple-200">
                    <div className="text-3xl mb-2">🔌</div>
                    <h4 className="font-bold mb-2">API Users</h4>
                    <p className="text-sm text-gray-600">API Endpoint Available</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Cable TV Pricing */}
          {activeTab === 'cabletv' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="overflow-x-auto"
            >
              <table className="w-full">
                <thead className="bg-gradient-to-r from-primary-600 to-purple-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Provider</th>
                    <th className="px-6 py-4 text-center font-semibold">Customer</th>
                    <th className="px-6 py-4 text-center font-semibold bg-green-500">
                      <div className="flex flex-col items-center">
                        <span>Reseller</span>
                        <span className="text-xs font-normal opacity-90">⭐ BEST VALUE</span>
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center font-semibold">API User</th>
                  </tr>
                </thead>
                <tbody>
                  {cableTvData.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 font-medium text-gray-900">{item.provider}</td>
                      <td className="px-6 py-4 text-center text-sm text-gray-600">{item.customer}</td>
                      <td className="px-6 py-4 text-center text-green-600 font-semibold bg-green-50">{item.reseller}</td>
                      <td className="px-6 py-4 text-center text-purple-600 font-semibold">{item.api}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          )}

          {/* Electricity Pricing */}
          {activeTab === 'electricity' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="overflow-x-auto"
            >
              <table className="w-full">
                <thead className="bg-gradient-to-r from-primary-600 to-purple-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">DISCO</th>
                    <th className="px-6 py-4 text-center font-semibold">Customer</th>
                    <th className="px-6 py-4 text-center font-semibold bg-green-500">
                      <div className="flex flex-col items-center">
                        <span>Reseller</span>
                        <span className="text-xs font-normal opacity-90">⭐ BEST VALUE</span>
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center font-semibold">API User</th>
                  </tr>
                </thead>
                <tbody>
                  {electricityData.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 font-medium text-gray-900">{item.disco}</td>
                      <td className="px-6 py-4 text-center text-sm text-gray-600">{item.customer}</td>
                      <td className="px-6 py-4 text-center text-green-600 font-semibold bg-green-50">{item.reseller}</td>
                      <td className="px-6 py-4 text-center text-purple-600 font-semibold">{item.api}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          )}
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-primary-600 to-purple-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-6 opacity-90">
            Join thousands of satisfied customers and start enjoying amazing discounts today!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/register"
              className="px-8 py-4 bg-white text-primary-600 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-lg"
            >
              Create Free Account
            </Link>
            <Link
              href="/login"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold hover:bg-white hover:text-primary-600 transition-all"
            >
              Login to Dashboard
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-lg mb-2">💰 What's the difference between pricing tiers?</h3>
              <p className="text-gray-600">Customers get standard prices, Resellers get better discounts for bulk purchases, and API Users get automated integration with the best rates.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">🚀 How do I become a Reseller?</h3>
              <p className="text-gray-600">Simply register an account, make your first purchase, and contact support to upgrade to a reseller account for better rates.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">🔌 How does API integration work?</h3>
              <p className="text-gray-600">API users can integrate our services directly into their platforms. Contact support for API documentation and credentials.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">⚡ Are transactions instant?</h3>
              <p className="text-gray-600">Yes! All transactions are automated and instant. Airtime, data, and other services are delivered within seconds.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">BossVTU.ng</h3>
              <p className="text-gray-400">Your reliable VTU partner</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/dashboard/airtime">Airtime</Link></li>
                <li><Link href="/dashboard/data">Data</Link></li>
                <li><Link href="/dashboard/tv">Cable TV</Link></li>
                <li><Link href="/dashboard/electricity">Electricity</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/pricing">Pricing</Link></li>
                <li><Link href="/register">Register</Link></li>
                <li><Link href="/login">Login</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-gray-400">support@bossvtu.ng</p>
              <p className="text-gray-400">07045461790</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 BossVTU.ng. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

