# VTU Service API Documentation

Base URL: `http://localhost:3001/api`

---

## 🔐 Authentication

All protected endpoints require a JWT token in the Authorization header:
```
Authorization: Bearer <your_jwt_token>
```

---

## Authentication Endpoints

### Register User

**POST** `/auth/register`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123",
  "phone": "08012345678"
}
```

**Response (201):**
```json
{
  "message": "Registration successful",
  "userId": "uuid-here"
}
```

---

### Login User

**POST** `/auth/login`

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Response (200):**
```json
{
  "access_token": "jwt_token_here",
  "user": {
    "id": "uuid",
    "email": "john@example.com",
    "name": "John Doe",
    "role": "user"
  }
}
```

---

## 💰 Wallet Endpoints

All wallet endpoints require authentication.

### Get Wallet Balance

**GET** `/wallet/balance`

**Response (200):**
```json
{
  "balance": 5000.00
}
```

---

### Fund Wallet

**POST** `/wallet/fund`

**Request Body:**
```json
{
  "amount": 5000,
  "reference": "PAY-1234567890"
}
```

**Response (200):**
```json
{
  "balance": 5000.00,
  "message": "Wallet funded successfully"
}
```

---

### Get Transactions

**GET** `/wallet/transactions`

**Response (200):**
```json
[
  {
    "id": "uuid",
    "service_type": "airtime",
    "amount": 500,
    "status": "completed",
    "reference": "AIR-1234567890",
    "created_at": "2024-01-15T10:30:00Z"
  }
]
```

---

## 📱 Service Endpoints

### Buy Airtime

**POST** `/airtime/buy`

**Request Body:**
```json
{
  "network": "MTN",
  "phone": "08012345678",
  "amount": 500
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Airtime purchase successful",
  "reference": "AIR-1234567890",
  "amount": 500,
  "phone": "08012345678",
  "network": "MTN"
}
```

**Error (400):**
```json
{
  "statusCode": 400,
  "message": "Insufficient wallet balance"
}
```

---

### Buy Data

**POST** `/data/buy`

**Request Body:**
```json
{
  "network": "MTN",
  "phone": "08012345678",
  "plan": "1GB"
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Data purchase successful",
  "reference": "DATA-1234567890",
  "amount": 350,
  "phone": "08012345678",
  "network": "MTN",
  "plan": "1GB"
}
```

---

### Pay Cable TV

**POST** `/tv/pay`

**Request Body:**
```json
{
  "provider": "DStv",
  "smartCardNumber": "1234567890",
  "package": "DStv Compact"
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Cable TV subscription successful",
  "reference": "TV-1234567890",
  "amount": 10500,
  "smartCardNumber": "1234567890",
  "provider": "DStv",
  "package": "DStv Compact"
}
```

---

### Pay Electricity

**POST** `/electricity/pay`

**Request Body:**
```json
{
  "disco": "EKEDC",
  "meterNumber": "12345678901",
  "meterType": "prepaid",
  "amount": 5000
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Electricity bill payment successful",
  "reference": "ELEC-1234567890",
  "amount": 5000,
  "meterNumber": "12345678901",
  "disco": "EKEDC",
  "token": "1234-5678-9012-3456"
}
```

---

## 👑 Admin Endpoints

Requires `role: admin` in JWT token.

### Get All Users

**GET** `/admin/users`

**Response (200):**
```json
[
  {
    "id": "uuid",
    "email": "user@example.com",
    "name": "User Name",
    "phone": "08012345678",
    "role": "user",
    "created_at": "2024-01-15T10:00:00Z"
  }
]
```

---

### Get All Transactions

**GET** `/admin/transactions`

**Response (200):**
```json
[
  {
    "id": "uuid",
    "user_id": "uuid",
    "service_type": "airtime",
    "amount": 500,
    "status": "completed",
    "reference": "AIR-1234567890",
    "created_at": "2024-01-15T10:30:00Z",
    "users": {
      "name": "John Doe",
      "email": "john@example.com"
    }
  }
]
```

---

### Get System Statistics

**GET** `/admin/stats`

**Response (200):**
```json
{
  "totalUsers": 150,
  "totalTransactions": 1250,
  "completedTransactions": 1180,
  "totalRevenue": 2500000.00
}
```

---

## 🔒 Error Responses

### 401 Unauthorized
```json
{
  "statusCode": 401,
  "message": "Unauthorized"
}
```

### 400 Bad Request
```json
{
  "statusCode": 400,
  "message": "Insufficient wallet balance"
}
```

### 500 Internal Server Error
```json
{
  "statusCode": 500,
  "message": "Internal server error"
}
```

---

## 📝 Request Headers

### Required for all protected routes:
```
Authorization: Bearer <jwt_token>
Content-Type: application/json
```

---

## 🧪 Testing with cURL

### Register User
```bash
curl -X POST http://localhost:3001/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "password": "password123",
    "phone": "08012345678"
  }'
```

### Login
```bash
curl -X POST http://localhost:3001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'
```

### Buy Airtime (with token)
```bash
curl -X POST http://localhost:3001/api/airtime/buy \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "network": "MTN",
    "phone": "08012345678",
    "amount": 500
  }'
```

---

## 🔄 Webhook Integration

For payment gateways (Paystack/Flutterwave):

### Paystack Webhook

**POST** `/webhooks/paystack`

Handles payment verification from Paystack.

### Flutterwave Webhook

**POST** `/webhooks/flutterwave`

Handles payment verification from Flutterwave.

---

## 📦 Rate Limiting (To be implemented)

Recommended limits:
- Authentication: 5 requests/minute
- Services: 10 requests/minute
- Admin: 30 requests/minute

---

**Complete API documentation for VTU Service** 🚀

