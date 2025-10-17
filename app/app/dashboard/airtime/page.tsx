'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'

export default function AirtimePage() {
  const [formData, setFormData] = useState({
    network: '',
    phone: '',
    amount: '',
  })
  const [loading, setLoading] = useState(false)

  const networks = [
    { name: 'MTN', logo: '🟡', discount: '2%' },
    { name: 'Airtel', logo: '🔴', discount: '2%' },
    { name: 'Glo', logo: '🟢', discount: '2.5%' },
    { name: '9mobile', logo: '🟢', discount: '3%' },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/airtime/buy`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast.success('Airtime purchase successful!')
        setFormData({ network: '', phone: '', amount: '' })
      } else {
        toast.error('Purchase failed. Please try again.')
      }
    } catch (error) {
      toast.error('An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold text-gray-900">Buy Airtime</h1>
        <p className="text-gray-600 mt-1">Purchase airtime for any Nigerian network</p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Purchase Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold mb-6">Airtime Top-Up</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Network Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Select Network
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {networks.map((network) => (
                    <button
                      key={network.name}
                      type="button"
                      onClick={() => setFormData({ ...formData, network: network.name })}
                      className={`p-4 border-2 rounded-lg transition-all ${
                        formData.network === network.name
                          ? 'border-primary-600 bg-primary-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="text-3xl mb-2">{network.logo}</div>
                      <div className="font-semibold">{network.name}</div>
                      <div className="text-xs text-green-600">{network.discount} discount</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  className="input-field"
                  placeholder="08012345678"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              {/* Amount */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Amount (₦)
                </label>
                <input
                  type="number"
                  required
                  min="50"
                  max="50000"
                  className="input-field"
                  placeholder="1000"
                  value={formData.amount}
                  onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                />
                <div className="flex gap-2 mt-2">
                  {['100', '200', '500', '1000', '2000'].map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => setFormData({ ...formData, amount: amt })}
                      className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded"
                    >
                      ₦{amt}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={loading || !formData.network}
                className="w-full btn-primary disabled:opacity-50"
              >
                {loading ? 'Processing...' : 'Buy Airtime'}
              </button>
            </form>
          </div>
        </div>

        {/* Summary Card */}
        <div className="lg:col-span-1">
          <div className="bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl p-6 text-white sticky top-24">
            <h3 className="text-lg font-bold mb-4">Summary</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm opacity-80">Network</p>
                <p className="font-semibold">{formData.network || '-'}</p>
              </div>
              <div>
                <p className="text-sm opacity-80">Phone</p>
                <p className="font-semibold">{formData.phone || '-'}</p>
              </div>
              <div>
                <p className="text-sm opacity-80">Amount</p>
                <p className="text-2xl font-bold">₦{formData.amount || '0'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

