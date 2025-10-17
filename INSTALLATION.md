# VTU Service - Installation & Setup Guide

## 📁 Project Structure

Your VTU folder now contains:

```
VTU/
├── index.html              ← Original landing page (kept)
├── script.js               ← Original scripts (kept)
├── styles.css              ← Original styles (kept)
├── app/                    ← NEW: Next.js Application
│   ├── app/
│   │   ├── page.tsx       # Homepage
│   │   ├── layout.tsx     # Root layout
│   │   ├── login/         # Login page
│   │   ├── register/      # Registration
│   │   └── dashboard/     # User dashboard
│   ├── components/        # Reusable components
│   ├── utils/             # API & Supabase clients
│   ├── context/           # React contexts
│   └── package.json
├── backend-api/            ← NEW: NestJS Backend
│   ├── src/
│   │   ├── auth/          # Authentication
│   │   ├── users/         # User management
│   │   ├── wallet/        # Wallet operations
│   │   ├── services/      # VTU services
│   │   ├── transactions/  # Transaction records
│   │   ├── admin/         # Admin panel
│   │   └── main.ts        # Entry point
│   ├── supabase-schema.sql
│   └── package.json
└── Documentation files...
```

---

## 🚀 Installation Steps

### Step 1: Install Node.js (if not installed)

Check if installed:
```bash
node --version
```

If not installed, download from https://nodejs.org/ (LTS version)

### Step 2: Install Dependencies

```bash
cd /Users/ahmedsalehcomputer/Downloads/VTU

# Install frontend (Next.js app)
cd app
npm install

# Install backend (NestJS API)
cd ../backend-api
npm install
```

This will take 2-5 minutes depending on your internet speed.

### Step 3: Setup Supabase Database

1. **Create Supabase account:**
   - Go to https://supabase.com
   - Sign up (free)
   - Click "New Project"

2. **Configure project:**
   - Name: BossVTU
   - Database Password: (create and save it!)
   - Region: Select closest to you
   - Wait ~2 minutes for setup

3. **Create database tables:**
   - In Supabase dashboard, click "SQL Editor"
   - Open file: `backend-api/supabase-schema.sql`
   - Copy ALL the SQL code
   - Paste in SQL Editor
   - Click "Run"
   - ✅ Tables created!

4. **Get API keys:**
   - Go to Settings → API
   - Copy these 3 values:
     * Project URL
     * anon public key
     * service_role key

### Step 4: Configure Environment Variables

**Frontend** - Create `app/.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=paste_your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=paste_your_anon_key_here
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

**Backend** - Create `backend-api/.env`:

```env
PORT=3001
SUPABASE_URL=paste_your_project_url_here
SUPABASE_SERVICE_KEY=paste_your_service_role_key_here
JWT_SECRET=create-a-random-32-character-string-here
FRONTEND_URL=http://localhost:3000
```

### Step 5: Run the Application

**Open 2 terminals:**

**Terminal 1 - Start Backend:**
```bash
cd /Users/ahmedsalehcomputer/Downloads/VTU/backend-api
npm run start:dev
```

Wait for: `🚀 Server running on http://localhost:3001/api`

**Terminal 2 - Start Frontend:**
```bash
cd /Users/ahmedsalehcomputer/Downloads/VTU/app
npm run dev
```

Wait for: `Ready on http://localhost:3000`

### Step 6: Test the Application

1. Open browser: http://localhost:3000
2. You should see the VTU Service homepage
3. Click "Get Started" to register
4. Or login with admin:
   - Email: admin@vtuservice.com
   - Password: admin123

---

## ✅ Verification Checklist

After setup, verify:

- [ ] Node.js installed (run `node --version`)
- [ ] Frontend dependencies installed (`app/node_modules` exists)
- [ ] Backend dependencies installed (`backend-api/node_modules` exists)
- [ ] Supabase project created
- [ ] Database tables created (check Supabase Table Editor)
- [ ] `app/.env.local` file created with correct values
- [ ] `backend-api/.env` file created with correct values
- [ ] Backend running (Terminal 1 shows "Server running")
- [ ] Frontend running (Terminal 2 shows "Ready on")
- [ ] Can access http://localhost:3000
- [ ] Can login with admin credentials

---

## 🎯 What You Can Do Now

✅ **View Homepage** - Modern landing page
✅ **Register Account** - Create new user
✅ **Login** - Access dashboard
✅ **Dashboard** - View wallet & quick actions
✅ **Buy Airtime** - Select network, enter phone, buy
✅ **Buy Data** - Choose plan, purchase
✅ **Pay Cable TV** - DStv, GOtv, Startimes
✅ **Pay Electricity** - All DISCOs supported
✅ **Admin Panel** - View users, transactions, stats

---

## 🔧 Troubleshooting

### "Cannot find module"
```bash
cd app
rm -rf node_modules package-lock.json
npm install
```

### "Port 3000 already in use"
```bash
lsof -ti:3000 | xargs kill -9
npm run dev
```

### "Database connection failed"
- Check Supabase project is active
- Verify API keys are correct
- Use service_role key in backend (not anon key)

### "JWT error"
- Ensure JWT_SECRET is at least 32 characters
- Clear browser localStorage
- Login again

---

## 📂 File Organization

### Original Files (Preserved)
- `index.html` - Your original landing page
- `script.js` - Original JavaScript
- `styles.css` - Original styles

### New Application
- `app/` - Full Next.js application
- `backend-api/` - Complete NestJS backend
- `README.md` - This file

You can keep using the original HTML files or switch to the new Next.js app!

---

## 🎨 Features

### User Features
- User registration & login
- Virtual wallet
- Airtime purchase
- Data bundles
- Cable TV subscription
- Electricity payments
- Transaction history

### Admin Features
- User management
- Transaction monitoring
- System statistics
- Analytics dashboard

---

## 📞 Support

For detailed guides:
- `SETUP-GUIDE.md` - Step-by-step setup
- `API-DOCUMENTATION.md` - API endpoints
- `QUICK-START.md` - Fast setup guide

---

**Your full-stack VTU service is ready!** 🚀

