'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'

export default function ElectricityPage() {
  const [formData, setFormData] = useState({
    disco: '',
    meterNumber: '',
    meterType: 'prepaid',
    amount: '',
    customerName: '',
  })
  const [loading, setLoading] = useState(false)
  const [verifying, setVerifying] = useState(false)

  const discos = [
    'AEDC', 'EKEDC', 'IBEDC', 'IKEDC', 'KEDCO', 'PHED', 'JED', 'KAEDCO'
  ]

  const verifyMeter = async () => {
    if (!formData.meterNumber || !formData.disco) return
    
    setVerifying(true)
    try {
      // TODO: Implement actual meter verification
      setTimeout(() => {
        setFormData({ ...formData, customerName: 'John Doe - 123 Main Street' })
        toast.success('Meter verified!')
        setVerifying(false)
      }, 1500)
    } catch (error) {
      toast.error('Verification failed')
      setVerifying(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/electricity/pay`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast.success('Electricity bill payment successful!')
        setFormData({ disco: '', meterNumber: '', meterType: 'prepaid', amount: '', customerName: '' })
      } else {
        toast.error('Payment failed')
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
        <h1 className="text-3xl font-bold text-gray-900">Pay Electricity Bill</h1>
        <p className="text-gray-600 mt-1">Pay for prepaid or postpaid meters</p>
      </motion.div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Disco Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Electricity Distribution Company
            </label>
            <select
              required
              className="input-field"
              value={formData.disco}
              onChange={(e) => setFormData({ ...formData, disco: e.target.value })}
            >
              <option value="">Select DISCO</option>
              {discos.map((disco) => (
                <option key={disco} value={disco}>{disco}</option>
              ))}
            </select>
          </div>

          {/* Meter Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Meter Type
            </label>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, meterType: 'prepaid' })}
                className={`flex-1 p-4 border-2 rounded-lg transition-all ${
                  formData.meterType === 'prepaid'
                    ? 'border-primary-600 bg-primary-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                Prepaid
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, meterType: 'postpaid' })}
                className={`flex-1 p-4 border-2 rounded-lg transition-all ${
                  formData.meterType === 'postpaid'
                    ? 'border-primary-600 bg-primary-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                Postpaid
              </button>
            </div>
          </div>

          {/* Meter Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Meter Number
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                required
                className="input-field"
                placeholder="12345678901"
                value={formData.meterNumber}
                onChange={(e) => setFormData({ ...formData, meterNumber: e.target.value })}
              />
              <button
                type="button"
                onClick={verifyMeter}
                disabled={verifying}
                className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
              >
                {verifying ? 'Verifying...' : 'Verify'}
              </button>
            </div>
            {formData.customerName && (
              <p className="text-sm text-green-600 mt-2">
                {formData.customerName}
              </p>
            )}
          </div>

          {/* Amount */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Amount (₦)
            </label>
            <input
              type="number"
              required
              min="1000"
              className="input-field"
              placeholder="5000"
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
            />
            <div className="flex gap-2 mt-2">
              {['1000', '2000', '5000', '10000'].map((amt) => (
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
            disabled={loading || !formData.customerName}
            className="w-full btn-primary disabled:opacity-50"
          >
            {loading ? 'Processing...' : 'Pay Bill'}
          </button>
        </form>
      </div>
    </div>
  )
}

