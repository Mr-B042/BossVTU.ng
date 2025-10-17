# VTU Service - Full-Stack Application

A complete Virtual Top-Up (VTU) service platform built with modern technologies.

## 🚀 Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **TailwindCSS** - Utility-first CSS
- **Framer Motion** - Smooth animations
- **Supabase Client** - Database client
- **Axios** - HTTP client
- **React Hot Toast** - Notifications

### Backend
- **NestJS** - Node.js framework
- **TypeScript** - Type safety
- **Supabase** - PostgreSQL database
- **JWT** - Authentication
- **Passport** - Auth strategy
- **bcryptjs** - Password hashing

### Database
- **Supabase (PostgreSQL)** - Primary database
- UUID for primary keys
- JSONB for metadata

---

## 📋 Features

✅ **User Authentication**
- Registration with email verification
- JWT-based login
- Role-based access (user/admin)

✅ **Wallet System**
- Virtual wallet for each user
- Fund via Paystack/Flutterwave
- Transaction history

✅ **VTU Services**
- Airtime purchase (MTN, Airtel, Glo, 9mobile)
- Data bundles with various plans
- Cable TV subscription (DStv, GOtv, Startimes)
- Electricity bill payments (all DISCOs)

✅ **Admin Dashboard**
- View all users
- Monitor transactions
- System statistics

✅ **Responsive Design**
- Mobile-first approach
- Works on all devices
- Smooth animations

---

## 📁 Project Structure

```
VTU-App/
├── frontend/               # Next.js frontend
│   ├── app/
│   │   ├── page.tsx       # Homepage
│   │   ├── login/         # Login page
│   │   ├── register/      # Registration
│   │   └── dashboard/     # User dashboard
│   ├── components/        # Reusable components
│   ├── context/           # React context providers
│   ├── utils/             # Utilities & API client
│   └── package.json
│
└── backend/               # NestJS backend
    ├── src/
    │   ├── auth/          # Authentication module
    │   ├── users/         # User management
    │   ├── wallet/        # Wallet operations
    │   ├── services/      # VTU services
    │   ├── transactions/  # Transaction records
    │   ├── admin/         # Admin operations
    │   └── main.ts        # Entry point
    ├── supabase-schema.sql
    └── package.json
```

---

## ⚙️ Setup Instructions

### Prerequisites
- Node.js 18+ installed
- Supabase account
- (Optional) Paystack/Flutterwave account

### 1. Clone & Install

```bash
cd /Users/ahmedsalehcomputer/Downloads/VTU-App

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

### 2. Setup Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to SQL Editor
3. Copy and paste the contents of `backend/supabase-schema.sql`
4. Run the SQL to create tables
5. Get your project URL and anon key from Settings > API

### 3. Configure Environment Variables

**Frontend** (`frontend/.env.local`):
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_API_URL=http://localhost:3001/api
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=pk_test_xxx
```

**Backend** (`backend/.env`):
```env
PORT=3001
SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_KEY=your_supabase_service_role_key
JWT_SECRET=your-secret-key-min-32-characters
FRONTEND_URL=http://localhost:3000
PAYSTACK_SECRET_KEY=sk_test_xxx
FLUTTERWAVE_SECRET_KEY=FLWSECK_TEST-xxx
```

### 4. Run the Application

**Terminal 1 - Backend:**
```bash
cd backend
npm run start:dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

**Access:**
- Frontend: http://localhost:3000
- Backend API: http://localhost:3001/api

---

## 🔐 Default Admin Credentials

```
Email: admin@vtuservice.com
Password: admin123
```

**⚠️ IMPORTANT: Change this password immediately in production!**

---

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Wallet
- `GET /api/wallet/balance` - Get wallet balance
- `POST /api/wallet/fund` - Fund wallet
- `GET /api/wallet/transactions` - Get transactions

### Services
- `POST /api/airtime/buy` - Buy airtime
- `POST /api/data/buy` - Buy data
- `POST /api/tv/pay` - Pay cable TV
- `POST /api/electricity/pay` - Pay electricity

### Admin (requires admin role)
- `GET /api/admin/users` - List all users
- `GET /api/admin/transactions` - List all transactions
- `GET /api/admin/stats` - Get system statistics

---

## 🔌 Payment Gateway Integration

### Paystack
Documentation: https://paystack.com/docs

### Flutterwave
Documentation: https://developer.flutterwave.com/docs

Both are integrated in the wallet funding flow.

---

## 🛠️ Development

### Frontend Development
```bash
cd frontend
npm run dev        # Start dev server
npm run build      # Build for production
npm run start      # Start production server
```

### Backend Development
```bash
cd backend
npm run start:dev  # Start with watch mode
npm run build      # Build
npm run start:prod # Start production
```

---

## 📦 Deployment

### Frontend (Vercel)
```bash
cd frontend
vercel --prod
```

### Backend (Railway/Render/Heroku)
```bash
cd backend
# Set environment variables
npm run build
npm run start:prod
```

---

## 🔒 Security Considerations

✅ **JWT Authentication** - Secure token-based auth
✅ **Password Hashing** - bcryptjs with salt
✅ **CORS Configuration** - Restricted origins
✅ **Input Validation** - class-validator
✅ **SQL Injection Protection** - Supabase client
✅ **Environment Variables** - Sensitive data protected

---

## 📝 To-Do / Enhancements

- [ ] Integrate actual VTU provider APIs
- [ ] Add email notifications
- [ ] Implement webhook handlers for payments
- [ ] Add transaction receipts (PDF)
- [ ] Implement rate limiting
- [ ] Add caching (Redis)
- [ ] Set up monitoring (Sentry)
- [ ] Add automated testing
- [ ] Implement referral system
- [ ] Add API documentation (Swagger)

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

## 📄 License

MIT License - feel free to use this project for your own VTU service!

---

## 📞 Support

For issues and questions:
- Email: support@vtuservice.com
- GitHub Issues: [Link to repo]

---

**Built with ❤️ using Next.js, NestJS, and Supabase**

