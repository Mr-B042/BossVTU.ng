'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'

export default function CableTVPage() {
  const [formData, setFormData] = useState({
    provider: '',
    smartCardNumber: '',
    package: '',
    customerName: '',
  })
  const [loading, setLoading] = useState(false)
  const [verifying, setVerifying] = useState(false)

  const providers = [
    { name: 'DStv', packages: ['DStv Compact', 'DStv Premium', 'DStv Confam'] },
    { name: 'GOtv', packages: ['GOtv Jinja', 'GOtv Jolli', 'GOtv Max'] },
    { name: 'Startimes', packages: ['Basic', 'Smart', 'Classic'] },
  ]

  const verifySmartCard = async () => {
    if (!formData.smartCardNumber || !formData.provider) return
    
    setVerifying(true)
    try {
      // TODO: Implement actual verification
      setTimeout(() => {
        setFormData({ ...formData, customerName: 'John Doe' })
        toast.success('Smart card verified!')
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
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tv/pay`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast.success('Cable TV subscription successful!')
        setFormData({ provider: '', smartCardNumber: '', package: '', customerName: '' })
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
        <h1 className="text-3xl font-bold text-gray-900">Cable TV Subscription</h1>
        <p className="text-gray-600 mt-1">Subscribe to DStv, GOtv, or Startimes</p>
      </motion.div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Provider Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Select Provider
            </label>
            <div className="grid grid-cols-3 gap-3">
              {providers.map((provider) => (
                <button
                  key={provider.name}
                  type="button"
                  onClick={() => setFormData({ ...formData, provider: provider.name, package: '' })}
                  className={`p-4 border-2 rounded-lg transition-all ${
                    formData.provider === provider.name
                      ? 'border-primary-600 bg-primary-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="font-semibold">{provider.name}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Smart Card Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Smart Card Number
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                required
                className="input-field"
                placeholder="1234567890"
                value={formData.smartCardNumber}
                onChange={(e) => setFormData({ ...formData, smartCardNumber: e.target.value })}
              />
              <button
                type="button"
                onClick={verifySmartCard}
                disabled={verifying}
                className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 whitespace-nowrap"
              >
                {verifying ? 'Verifying...' : 'Verify'}
              </button>
            </div>
            {formData.customerName && (
              <p className="text-sm text-green-600 mt-2">
                Customer: {formData.customerName}
              </p>
            )}
          </div>

          {/* Package Selection */}
          {formData.provider && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Select Package
              </label>
              <div className="grid md:grid-cols-2 gap-3">
                {providers.find(p => p.name === formData.provider)?.packages.map((pkg) => (
                  <button
                    key={pkg}
                    type="button"
                    onClick={() => setFormData({ ...formData, package: pkg })}
                    className={`p-4 border-2 rounded-lg transition-all ${
                      formData.package === pkg
                        ? 'border-primary-600 bg-primary-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-semibold">{pkg}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={loading || !formData.provider || !formData.package || !formData.customerName}
            className="w-full btn-primary disabled:opacity-50"
          >
            {loading ? 'Processing...' : 'Subscribe Now'}
          </button>
        </form>
      </div>
    </div>
  )
}

