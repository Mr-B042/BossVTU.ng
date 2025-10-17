# VTU Service - Complete Setup Guide

## 📋 Prerequisites

Before starting, ensure you have:
- ✅ Node.js 18 or higher installed
- ✅ npm or yarn package manager
- ✅ Supabase account (free tier works)
- ✅ Code editor (VS Code recommended)
- ✅ Git (optional)

---

## 🚀 Step-by-Step Setup

### Step 1: Install Node.js

**macOS:**
```bash
# Using Homebrew
brew install node

# Verify installation
node --version
npm --version
```

**Windows:**
Download from https://nodejs.org/

---

### Step 2: Install Dependencies

```bash
# Navigate to project directory
cd /Users/ahmedsalehcomputer/Downloads/VTU-App

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

---

### Step 3: Setup Supabase Database

#### 3.1 Create Supabase Project

1. Go to https://supabase.com
2. Click "New Project"
3. Enter project details:
   - Name: VTU-Service
   - Database Password: (save this!)
   - Region: Choose closest to you
4. Wait for project to be ready (~2 minutes)

#### 3.2 Create Database Tables

1. In your Supabase dashboard, click "SQL Editor"
2. Open the file `backend/supabase-schema.sql`
3. Copy ALL the SQL code
4. Paste into Supabase SQL Editor
5. Click "Run" to execute

**Verify tables created:**
- Go to "Table Editor"
- You should see: users, wallets, transactions, payment_records, api_keys

#### 3.3 Get API Keys

1. Go to Settings → API
2. Copy:
   - **Project URL** (e.g., https://xxxxx.supabase.co)
   - **anon public** key
   - **service_role** secret key (keep secure!)

---

### Step 4: Configure Environment Variables

#### Frontend Configuration

Create `frontend/.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
NEXT_PUBLIC_API_URL=http://localhost:3001/api
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=pk_test_xxxxx
```

#### Backend Configuration

Create `backend/.env`:

```env
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:3000

SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_KEY=your_service_role_key_here

JWT_SECRET=your-super-secret-jwt-key-min-32-chars-change-in-production

# Payment Gateways (optional for now)
PAYSTACK_SECRET_KEY=sk_test_xxxxx
FLUTTERWAVE_SECRET_KEY=FLWSECK_TEST-xxxxx
```

---

### Step 5: Run the Application

#### Start Backend (Terminal 1)

```bash
cd /Users/ahmedsalehcomputer/Downloads/VTU-App/backend
npm run start:dev
```

**Expected output:**
```
🚀 Server running on http://localhost:3001/api
```

#### Start Frontend (Terminal 2)

```bash
cd /Users/ahmedsalehcomputer/Downloads/VTU-App/frontend
npm run dev
```

**Expected output:**
```
▲ Next.js 14.0.4
- Local:        http://localhost:3000
```

---

### Step 6: Test the Application

1. **Open browser:** http://localhost:3000
2. **Register a new account:**
   - Click "Get Started"
   - Fill in details
   - Submit
3. **Login:**
   - Use your credentials
   - You'll be redirected to dashboard
4. **Test admin account:**
   - Email: admin@vtuservice.com
   - Password: admin123

---

## 🔧 Troubleshooting

### Issue: "Supabase URL not defined"

**Solution:**
Check that `.env.local` (frontend) and `.env` (backend) files exist and have correct values.

### Issue: "Cannot connect to database"

**Solution:**
1. Verify Supabase project is active
2. Check API keys are correct
3. Ensure service_role key is used in backend (not anon key)

### Issue: "Port 3000 already in use"

**Solution:**
```bash
# Kill process on port
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```

### Issue: "Module not found"

**Solution:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: "JWT token invalid"

**Solution:**
- Ensure JWT_SECRET is set in backend `.env`
- Must be at least 32 characters
- Clear browser localStorage and login again

---

## 💳 Payment Gateway Setup (Optional)

### Paystack

1. Create account at https://paystack.com
2. Go to Settings → API Keys & Webhooks
3. Copy Test Public Key and Test Secret Key
4. Add to `.env` files

### Flutterwave

1. Create account at https://flutterwave.com
2. Go to Settings → API Keys
3. Copy Test Public Key and Test Secret Key
4. Add to `.env` files

---

## 🧪 Testing

### Test User Flow

1. Register new account
2. Should see dashboard
3. Wallet balance: ₦0.00
4. Try to buy airtime (should fail - insufficient balance)
5. Fund wallet (mock for now)
6. Try services again

### Test Admin Flow

1. Login as admin (admin@vtuservice.com / admin123)
2. Access admin routes
3. View users list
4. View transactions
5. View statistics

---

## 📊 Database Verification

Check your Supabase project:

1. **Users Table:**
   - Should have admin user
   - Can add test users

2. **Wallets Table:**
   - Should have wallet for admin
   - Wallets created on user registration

3. **Transactions Table:**
   - Will populate as services are used

---

## 🎯 Next Steps

### For Development

1. ✅ Complete the setup above
2. ⚙️ Integrate real VTU provider API (e.g., ClubKonnect, Shago)
3. 💳 Set up payment gateway webhooks
4. 📧 Add email notifications
5. 🧪 Write tests

### For Production

1. Change all default passwords
2. Update JWT_SECRET
3. Use production API keys
4. Enable SSL/HTTPS
5. Set up monitoring
6. Configure backups
7. Add rate limiting

---

## 📚 Additional Resources

- **Next.js Docs:** https://nextjs.org/docs
- **NestJS Docs:** https://docs.nestjs.com/
- **Supabase Docs:** https://supabase.com/docs
- **TailwindCSS:** https://tailwindcss.com/docs
- **Framer Motion:** https://www.framer.com/motion/

---

## 🐛 Common Issues & Solutions

**Frontend won't start:**
- Delete `.next` folder and restart

**Backend errors:**
- Check all environment variables are set
- Verify Supabase connection

**Can't login:**
- Check JWT_SECRET matches in backend
- Clear browser localStorage
- Verify user exists in database

---

## 📞 Support

If you encounter issues:
1. Check this guide first
2. Review error messages in console
3. Check browser developer tools
4. Verify environment variables

---

**Happy building! 🚀**

