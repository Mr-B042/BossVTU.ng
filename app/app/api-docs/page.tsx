'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ApiDocsPage() {
  const [activeSection, setActiveSection] = useState('overview')

  const tableOfContents = [
    { id: 'overview', title: 'Overview' },
    { id: 'base-url', title: 'Base URL' },
    { id: 'authentication', title: 'Authentication' },
    { id: 'endpoints', title: 'Endpoints' },
    { id: 'webhooks', title: 'Webhook Notifications' },
    { id: 'errors', title: 'Error Codes' },
    { id: 'integration', title: 'Integration Guidelines' },
    { id: 'notes', title: 'Additional Notes' },
  ]

  const scrollToSection = (id: string) => {
    setActiveSection(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
              BossVTU.ng API
            </Link>
            <div className="flex gap-4">
              <Link href="/pricing" className="text-gray-600 hover:text-gray-900">
                Pricing
              </Link>
              <Link href="/login" className="text-gray-600 hover:text-gray-900">
                Login
              </Link>
              <Link href="/register" className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
                Get API Access
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-purple-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">VTU API Documentation</h1>
          <p className="text-xl opacity-90">
            Powerful REST API for Airtime, Data, Cable TV, Electricity, Betting & ePINs
          </p>
          <p className="mt-4 text-lg">
            Integrate all VTU services into your application with our robust API
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Sidebar - Table of Contents */}
          <aside className="col-span-12 lg:col-span-3">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <h3 className="font-bold text-lg mb-4">Table of Contents</h3>
              <nav className="space-y-2">
                {tableOfContents.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left px-3 py-2 rounded-lg transition-all ${
                      activeSection === item.id
                        ? 'bg-primary-50 text-primary-700 font-semibold'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="col-span-12 lg:col-span-9">
            <div className="bg-white rounded-xl shadow-lg p-8 space-y-12">
              
              {/* Overview */}
              <section id="overview">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">📚 Overview</h2>
                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The BossVTU.ng API is a powerful REST API designed to enable seamless integration for purchasing services such as airtime, data bundles, electricity bill payments, cable TV subscriptions, betting account funding, and ePINs (recharge card printing).
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    This API empowers developers to integrate all virtual top-up (VTU) and bill payment services available on the BossVTU.ng platform into their applications (web, desktop, or mobile apps).
                  </p>
                  <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
                    <h4 className="font-bold text-green-900 mb-2">🎯 API Benefits:</h4>
                    <ul className="list-disc list-inside text-green-800 space-y-1">
                      <li><strong>1GB Data</strong> at ₦499</li>
                      <li><strong>3% discount</strong> on airtime</li>
                      <li><strong>1.5% discount</strong> on cable TV subscriptions</li>
                      <li><strong>1.5% discount</strong> on electricity payments</li>
                      <li><strong>4% discount</strong> on ePINs</li>
                      <li><strong>₦0.00 service fees</strong></li>
                    </ul>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    All failed orders are <strong className="text-green-600">automatically refunded</strong>.
                  </p>
                </div>
              </section>

              {/* Base URL */}
              <section id="base-url">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">🌐 Base URL</h2>
                <p className="text-gray-700 mb-4">All API requests should be made to:</p>
                <div className="bg-gray-900 text-white p-4 rounded-lg font-mono overflow-x-auto">
                  <code>http://localhost:3001/api</code>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  * In production, replace with your actual domain
                </p>
              </section>

              {/* Authentication */}
              <section id="authentication">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">🔐 Authentication</h2>
                <div className="space-y-6">
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                    <h4 className="font-bold text-blue-900 mb-2">Authentication Requirements:</h4>
                    <ul className="list-disc list-inside text-blue-800 space-y-1">
                      <li>Valid BossVTU.ng user account with <strong>Reseller</strong> role</li>
                      <li>KYC verification for higher transaction limits</li>
                      <li>JWT token obtained from login endpoint</li>
                    </ul>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mt-6">Obtaining an Access Token</h3>
                  <p className="text-gray-700"><strong>Endpoint:</strong> POST <code className="bg-gray-100 px-2 py-1 rounded">/auth/login</code></p>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">Request:</h4>
                    <div className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
{`curl -X POST http://localhost:3001/api/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "your_email@example.com",
    "password": "your_password"
  }'`}
                      </pre>
                    </div>

                    <h4 className="font-semibold text-gray-900">Success Response:</h4>
                    <div className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
{`{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "uuid",
    "email": "your_email@example.com",
    "name": "Your Name",
    "role": "reseller"
  }
}`}
                      </pre>
                    </div>

                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
                      <p className="text-yellow-800">
                        <strong>Important:</strong> Include the token in all subsequent requests:
                      </p>
                      <code className="text-yellow-900 block mt-2">Authorization: Bearer your_access_token</code>
                    </div>
                  </div>
                </div>
              </section>

              {/* Endpoints */}
              <section id="endpoints">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">📡 API Endpoints</h2>
                
                {/* Check Balance */}
                <div className="mb-8 border-l-4 border-blue-500 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Check Wallet Balance</h3>
                  <p className="text-gray-700 mb-2"><strong>Endpoint:</strong> GET <code className="bg-gray-100 px-2 py-1 rounded">/wallet/balance</code></p>
                  <p className="text-gray-700 mb-4"><strong>Authentication:</strong> Required</p>
                  
                  <h4 className="font-semibold text-gray-900 mb-2">Request:</h4>
                  <div className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto mb-4">
                    <pre className="text-sm">
{`curl -X GET http://localhost:3001/api/wallet/balance \\
  -H "Authorization: Bearer your_access_token"`}
                    </pre>
                  </div>

                  <h4 className="font-semibold text-gray-900 mb-2">Response:</h4>
                  <div className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
                    <pre className="text-sm">
{`{
  "balance": 5000.00,
  "currency": "NGN"
}`}
                    </pre>
                  </div>
                </div>

                {/* Purchase Airtime */}
                <div className="mb-8 border-l-4 border-green-500 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Purchase Airtime</h3>
                  <p className="text-gray-700 mb-2"><strong>Endpoint:</strong> POST <code className="bg-gray-100 px-2 py-1 rounded">/airtime/buy</code></p>
                  <p className="text-gray-700 mb-4"><strong>Networks:</strong> MTN, Airtel, Glo, 9mobile</p>
                  
                  <h4 className="font-semibold text-gray-900 mb-2">Request Body:</h4>
                  <div className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto mb-4">
                    <pre className="text-sm">
{`{
  "phone": "08012345678",
  "network": "MTN",
  "amount": 100
}`}
                    </pre>
                  </div>

                  <h4 className="font-semibold text-gray-900 mb-2">cURL Example:</h4>
                  <div className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto mb-4">
                    <pre className="text-sm">
{`curl -X POST http://localhost:3001/api/airtime/buy \\
  -H "Authorization: Bearer your_access_token" \\
  -H "Content-Type: application/json" \\
  -d '{
    "phone": "08012345678",
    "network": "MTN",
    "amount": 100
  }'`}
                    </pre>
                  </div>

                  <h4 className="font-semibold text-gray-900 mb-2">Response:</h4>
                  <div className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
                    <pre className="text-sm">
{`{
  "success": true,
  "message": "Airtime purchase successful",
  "transaction": {
    "id": "uuid",
    "amount": 100,
    "network": "MTN",
    "phone": "08012345678",
    "status": "completed"
  }
}`}
                    </pre>
                  </div>
                </div>

                {/* Purchase Data */}
                <div className="mb-8 border-l-4 border-purple-500 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Purchase Data</h3>
                  <p className="text-gray-700 mb-2"><strong>Endpoint:</strong> POST <code className="bg-gray-100 px-2 py-1 rounded">/data/buy</code></p>
                  
                  <h4 className="font-semibold text-gray-900 mb-2">Request Body:</h4>
                  <div className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto mb-4">
                    <pre className="text-sm">
{`{
  "phone": "08012345678",
  "network": "MTN",
  "plan": "1GB",
  "amount": 499
}`}
                    </pre>
                  </div>

                  <h4 className="font-semibold text-gray-900 mb-2">Response:</h4>
                  <div className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
                    <pre className="text-sm">
{`{
  "success": true,
  "message": "Data purchase successful",
  "transaction": {
    "id": "uuid",
    "plan": "1GB",
    "network": "MTN",
    "phone": "08012345678",
    "status": "completed"
  }
}`}
                    </pre>
                  </div>
                </div>

                {/* Cable TV */}
                <div className="mb-8 border-l-4 border-orange-500 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Cable TV Subscription</h3>
                  <p className="text-gray-700 mb-2"><strong>Endpoint:</strong> POST <code className="bg-gray-100 px-2 py-1 rounded">/tv/pay</code></p>
                  
                  <h4 className="font-semibold text-gray-900 mb-2">Request Body:</h4>
                  <div className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
                    <pre className="text-sm">
{`{
  "smartCardNumber": "1234567890",
  "provider": "DSTV",
  "package": "Compact",
  "amount": 10500
}`}
                    </pre>
                  </div>
                </div>

                {/* Electricity */}
                <div className="mb-8 border-l-4 border-yellow-500 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">5. Electricity Payment</h3>
                  <p className="text-gray-700 mb-2"><strong>Endpoint:</strong> POST <code className="bg-gray-100 px-2 py-1 rounded">/electricity/pay</code></p>
                  
                  <h4 className="font-semibold text-gray-900 mb-2">Request Body:</h4>
                  <div className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
                    <pre className="text-sm">
{`{
  "meterNumber": "12345678901",
  "disco": "EKEDC",
  "meterType": "prepaid",
  "amount": 5000
}`}
                    </pre>
                  </div>
                </div>
              </section>

              {/* Webhooks */}
              <section id="webhooks">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">🔔 Webhook Notifications</h2>
                <p className="text-gray-700 mb-4">
                  Configure webhook URLs in your dashboard to receive real-time notifications about transaction status updates.
                </p>
                
                <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mb-4">
                  <h4 className="font-bold text-purple-900 mb-2">Webhook Events:</h4>
                  <ul className="list-disc list-inside text-purple-800 space-y-1">
                    <li>transaction.completed</li>
                    <li>transaction.failed</li>
                    <li>transaction.refunded</li>
                  </ul>
                </div>

                <h4 className="font-semibold text-gray-900 mb-2">Webhook Payload Example:</h4>
                <div className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
                  <pre className="text-sm">
{`{
  "event": "transaction.completed",
  "data": {
    "transaction_id": "uuid",
    "type": "airtime",
    "amount": 100,
    "status": "completed",
    "timestamp": "2025-10-17T20:30:00Z"
  }
}`}
                  </pre>
                </div>
              </section>

              {/* Error Codes */}
              <section id="errors">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">⚠️ Error Codes</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-6 py-3 text-left font-semibold">Code</th>
                        <th className="px-6 py-3 text-left font-semibold">Message</th>
                        <th className="px-6 py-3 text-left font-semibold">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr>
                        <td className="px-6 py-4 font-mono text-red-600">400</td>
                        <td className="px-6 py-4">Bad Request</td>
                        <td className="px-6 py-4">Invalid parameters</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-4 font-mono text-red-600">401</td>
                        <td className="px-6 py-4">Unauthorized</td>
                        <td className="px-6 py-4">Invalid or missing token</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-mono text-red-600">403</td>
                        <td className="px-6 py-4">Forbidden</td>
                        <td className="px-6 py-4">Insufficient permissions</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-4 font-mono text-red-600">404</td>
                        <td className="px-6 py-4">Not Found</td>
                        <td className="px-6 py-4">Endpoint not found</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-mono text-red-600">422</td>
                        <td className="px-6 py-4">Insufficient Balance</td>
                        <td className="px-6 py-4">Not enough funds in wallet</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-4 font-mono text-red-600">500</td>
                        <td className="px-6 py-4">Server Error</td>
                        <td className="px-6 py-4">Internal server error</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Integration Guidelines */}
              <section id="integration">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">💻 Integration Guidelines</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">JavaScript/Node.js Example</h3>
                    <div className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
{`const API_URL = 'http://localhost:3001/api';
let accessToken = '';

// Login and get token
async function login() {
  const response = await fetch(\`\${API_URL}/auth/login\`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: 'your_email@example.com',
      password: 'your_password'
    })
  });
  const data = await response.json();
  accessToken = data.access_token;
  return accessToken;
}

// Check balance
async function checkBalance() {
  const response = await fetch(\`\${API_URL}/wallet/balance\`, {
    headers: { 'Authorization': \`Bearer \${accessToken}\` }
  });
  return await response.json();
}

// Buy airtime
async function buyAirtime(phone, network, amount) {
  const response = await fetch(\`\${API_URL}/airtime/buy\`, {
    method: 'POST',
    headers: {
      'Authorization': \`Bearer \${accessToken}\`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ phone, network, amount })
  });
  return await response.json();
}

// Usage
(async () => {
  await login();
  const balance = await checkBalance();
  console.log('Balance:', balance);
  
  const result = await buyAirtime('08012345678', 'MTN', 100);
  console.log('Result:', result);
})();`}
                      </pre>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Python Example</h3>
                    <div className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
{`import requests

API_URL = 'http://localhost:3001/api'
access_token = ''

def login():
    response = requests.post(
        f'{API_URL}/auth/login',
        json={
            'email': 'your_email@example.com',
            'password': 'your_password'
        }
    )
    global access_token
    access_token = response.json()['access_token']
    return access_token

def check_balance():
    headers = {'Authorization': f'Bearer {access_token}'}
    response = requests.get(f'{API_URL}/wallet/balance', headers=headers)
    return response.json()

def buy_airtime(phone, network, amount):
    headers = {
        'Authorization': f'Bearer {access_token}',
        'Content-Type': 'application/json'
    }
    data = {
        'phone': phone,
        'network': network,
        'amount': amount
    }
    response = requests.post(
        f'{API_URL}/airtime/buy',
        headers=headers,
        json=data
    )
    return response.json()

# Usage
login()
balance = check_balance()
print('Balance:', balance)

result = buy_airtime('08012345678', 'MTN', 100)
print('Result:', result)`}
                      </pre>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">PHP Example</h3>
                    <div className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
{`<?php
$API_URL = 'http://localhost:3001/api';
$accessToken = '';

function login() {
    global $API_URL, $accessToken;
    
    $ch = curl_init("$API_URL/auth/login");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode([
        'email' => 'your_email@example.com',
        'password' => 'your_password'
    ]));
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    
    $response = curl_exec($ch);
    curl_close($ch);
    
    $data = json_decode($response, true);
    $accessToken = $data['access_token'];
    return $accessToken;
}

function checkBalance() {
    global $API_URL, $accessToken;
    
    $ch = curl_init("$API_URL/wallet/balance");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        "Authorization: Bearer $accessToken"
    ]);
    
    $response = curl_exec($ch);
    curl_close($ch);
    
    return json_decode($response, true);
}

function buyAirtime($phone, $network, $amount) {
    global $API_URL, $accessToken;
    
    $ch = curl_init("$API_URL/airtime/buy");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode([
        'phone' => $phone,
        'network' => $network,
        'amount' => $amount
    ]));
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        "Authorization: Bearer $accessToken",
        "Content-Type: application/json"
    ]);
    
    $response = curl_exec($ch);
    curl_close($ch);
    
    return json_decode($response, true);
}

// Usage
login();
$balance = checkBalance();
print_r($balance);

$result = buyAirtime('08012345678', 'MTN', 100);
print_r($result);
?>`}
                      </pre>
                    </div>
                  </div>
                </div>
              </section>

              {/* Additional Notes */}
              <section id="notes">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">📌 Additional Notes</h2>
                <div className="space-y-4">
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                    <h4 className="font-bold text-blue-900 mb-2">Best Practices:</h4>
                    <ul className="list-disc list-inside text-blue-800 space-y-1">
                      <li>Store your access token securely</li>
                      <li>Refresh tokens regularly (before expiry)</li>
                      <li>Implement proper error handling</li>
                      <li>Use webhooks for real-time updates</li>
                      <li>Test with small amounts first</li>
                      <li>Implement request logging</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-500 p-4">
                    <h4 className="font-bold text-green-900 mb-2">Support:</h4>
                    <p className="text-green-800">
                      For technical support, contact us at <strong>support@bossvtu.ng</strong> or WhatsApp: <strong>07045461790</strong>
                    </p>
                  </div>

                  <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
                    <h4 className="font-bold text-purple-900 mb-2">Rate Limits:</h4>
                    <p className="text-purple-800">
                      API calls are rate-limited to prevent abuse. Current limits: <strong>100 requests per minute</strong>
                    </p>
                  </div>
                </div>
              </section>
            </div>

            {/* CTA */}
            <div className="mt-8 bg-gradient-to-r from-primary-600 to-purple-600 rounded-xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Building?</h2>
              <p className="text-lg mb-6 opacity-90">
                Get API access now and start integrating VTU services into your application!
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/register"
                  className="px-8 py-4 bg-white text-primary-600 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-lg"
                >
                  Create Account
                </Link>
                <Link
                  href="/pricing"
                  className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold hover:bg-white hover:text-primary-600 transition-all"
                >
                  View API Pricing
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">BossVTU.ng</h3>
              <p className="text-gray-400">Powerful VTU API Platform</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/api-docs">API Docs</Link></li>
                <li><Link href="/pricing">Pricing</Link></li>
                <li><Link href="/register">Register</Link></li>
                <li><Link href="/login">Login</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#integration">Sample Code</a></li>
                <li><a href="#errors">Error Codes</a></li>
                <li><a href="#webhooks">Webhooks</a></li>
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

