'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'

export default function DataPage() {
  const [formData, setFormData] = useState({
    network: '',
    phone: '',
    plan: '',
  })
  const [loading, setLoading] = useState(false)

  const dataPlans = {
    MTN: [
      { size: '500MB', duration: '30 days', price: '₦200' },
      { size: '1GB', duration: '30 days', price: '₦350' },
      { size: '2GB', duration: '30 days', price: '₦700' },
      { size: '5GB', duration: '30 days', price: '₦1,500' },
    ],
    Airtel: [
      { size: '750MB', duration: '14 days', price: '₦250' },
      { size: '1.5GB', duration: '30 days', price: '₦500' },
      { size: '3GB', duration: '30 days', price: '₦1,000' },
      { size: '10GB', duration: '30 days', price: '₦3,000' },
    ],
    Glo: [
      { size: '1GB', duration: '30 days', price: '₦300' },
      { size: '2.5GB', duration: '30 days', price: '₦750' },
      { size: '5.8GB', duration: '30 days', price: '₦1,500' },
      { size: '10GB', duration: '30 days', price: '₦2,500' },
    ],
    '9mobile': [
      { size: '1GB', duration: '30 days', price: '₦400' },
      { size: '2GB', duration: '30 days', price: '₦800' },
      { size: '5GB', duration: '30 days', price: '₦1,800' },
      { size: '15GB', duration: '30 days', price: '₦4,500' },
    ],
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/data/buy`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast.success('Data purchase successful!')
        setFormData({ network: '', phone: '', plan: '' })
      } else {
        toast.error('Purchase failed')
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
        <h1 className="text-3xl font-bold text-gray-900">Buy Data</h1>
        <p className="text-gray-600 mt-1">Purchase data bundles for any network</p>
      </motion.div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Network Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Select Network
            </label>
            <div className="grid grid-cols-4 gap-3">
              {['MTN', 'Airtel', 'Glo', '9mobile'].map((network) => (
                <button
                  key={network}
                  type="button"
                  onClick={() => setFormData({ ...formData, network, plan: '' })}
                  className={`p-4 border-2 rounded-lg transition-all ${
                    formData.network === network
                      ? 'border-primary-600 bg-primary-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="font-semibold">{network}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Data Plans */}
          {formData.network && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Select Plan
              </label>
              <div className="grid md:grid-cols-2 gap-3">
                {dataPlans[formData.network as keyof typeof dataPlans]?.map((plan, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setFormData({ ...formData, plan: plan.size })}
                    className={`p-4 border-2 rounded-lg text-left transition-all ${
                      formData.plan === plan.size
                        ? 'border-primary-600 bg-primary-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-bold text-lg">{plan.size}</div>
                    <div className="text-sm text-gray-600">{plan.duration}</div>
                    <div className="text-primary-600 font-bold mt-2">{plan.price}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

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

          <button
            type="submit"
            disabled={loading || !formData.network || !formData.plan}
            className="w-full btn-primary disabled:opacity-50"
          >
            {loading ? 'Processing...' : 'Buy Data'}
          </button>
        </form>
      </div>
    </div>
  )
}

