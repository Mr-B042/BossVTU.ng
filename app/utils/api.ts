import axios from 'axios'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// API Methods
export const authAPI = {
  login: (email: string, password: string) =>
    api.post('/auth/login', { email, password }),
  
  register: (data: { name: string; email: string; password: string; phone: string }) =>
    api.post('/auth/register', data),
  
  logout: () => api.post('/auth/logout'),
}

export const walletAPI = {
  getBalance: () => api.get('/wallet/balance'),
  fundWallet: (amount: number) => api.post('/wallet/fund', { amount }),
  getTransactions: () => api.get('/wallet/transactions'),
}

export const servicesAPI = {
  buyAirtime: (data: { network: string; phone: string; amount: number }) =>
    api.post('/airtime/buy', data),
  
  buyData: (data: { network: string; phone: string; plan: string }) =>
    api.post('/data/buy', data),
  
  payTV: (data: { provider: string; smartCardNumber: string; package: string }) =>
    api.post('/tv/pay', data),
  
  payElectricity: (data: { disco: string; meterNumber: string; meterType: string; amount: number }) =>
    api.post('/electricity/pay', data),
}

export const adminAPI = {
  getUsers: () => api.get('/admin/users'),
  getTransactions: () => api.get('/admin/transactions'),
  getStats: () => api.get('/admin/stats'),
}

export default api

