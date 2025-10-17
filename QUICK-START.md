# VTU Service - Quick Start Guide

Get your VTU service running in 10 minutes! ⚡

---

## 🎯 Quick Installation

### 1. Install Node.js (if not installed)

**macOS:**
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install node
```

**Windows:**
Visit https://nodejs.org/ and download the installer.

**Verify:**
```bash
node --version  # Should show v18+ or higher
npm --version   # Should show v9+ or higher
```

---

### 2. Install Dependencies

```bash
cd /Users/ahmedsalehcomputer/Downloads/VTU-App

# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install
```

---

### 3. Setup Supabase (5 minutes)

1. **Create account** at https://supabase.com (it's free!)

2. **Create new project:**
   - Click "New Project"
   - Name: VTU-Service
   - Set database password (save it!)
   - Choose region
   - Wait ~2 minutes for setup

3. **Run SQL Schema:**
   - Click "SQL Editor" in sidebar
   - Click "New Query"
   - Copy contents from `backend/supabase-schema.sql`
   - Paste and click "Run"
   - ✅ Tables created!

4. **Get API Keys:**
   - Go to Settings → API
   - Copy "Project URL"
   - Copy "anon public" key
   - Copy "service_role" key (secret!)

---

### 4. Configure Environment Variables

#### Frontend: Create `frontend/.env.local`

```env
NEXT_PUBLIC_SUPABASE_URL=paste_your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=paste_your_anon_key_here
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

#### Backend: Create `backend/.env`

```env
PORT=3001
SUPABASE_URL=paste_your_project_url_here
SUPABASE_SERVICE_KEY=paste_your_service_role_key_here
JWT_SECRET=my-super-secret-jwt-key-min-32-characters
FRONTEND_URL=http://localhost:3000
```

---

### 5. Start the Application

**Open 2 terminals:**

**Terminal 1 - Backend:**
```bash
cd /Users/ahmedsalehcomputer/Downloads/VTU-App/backend
npm run start:dev
```

Wait for: `🚀 Server running on http://localhost:3001/api`

**Terminal 2 - Frontend:**
```bash
cd /Users/ahmedsalehcomputer/Downloads/VTU-App/frontend
npm run dev
```

Wait for: `▲ Next.js 14.0.4` and `Local: http://localhost:3000`

---

### 6. Access the Application

**Open browser:** http://localhost:3000

**Test with admin account:**
```
Email: admin@vtuservice.com
Password: admin123
```

---

## ✅ Verification Checklist

- [ ] Node.js installed (v18+)
- [ ] Dependencies installed (both frontend & backend)
- [ ] Supabase project created
- [ ] Database tables created (run SQL schema)
- [ ] Environment variables configured
- [ ] Backend running on port 3001
- [ ] Frontend running on port 3000
- [ ] Can access http://localhost:3000
- [ ] Can login with admin credentials

---

## 🎉 You're Done!

Your VTU service is now running! You can:

- ✅ Register new users
- ✅ Login to dashboard
- ✅ View wallet balance
- ✅ Access admin panel (with admin account)
- ✅ Test service pages (airtime, data, TV, electricity)

---

## 🔄 Next Time You Run the App

Just run these two commands in separate terminals:

```bash
# Terminal 1
cd /Users/ahmedsalehcomputer/Downloads/VTU-App/backend && npm run start:dev

# Terminal 2
cd /Users/ahmedsalehcomputer/Downloads/VTU-App/frontend && npm run dev
```

---

## 🐛 Quick Fixes

**Can't install dependencies?**
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

**Port already in use?**
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or change port
npm run dev -- -p 3002
```

**Database connection failed?**
- Check Supabase project is active
- Verify API keys in .env files
- Ensure service_role key (not anon key) in backend

---

**Need help?** Check `SETUP-GUIDE.md` for detailed instructions!

**Happy coding! 🚀**

