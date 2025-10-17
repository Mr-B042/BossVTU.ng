# Environment Variables Setup Guide

## 📋 Required Environment Variables

### Frontend Environment Variables

Create file: `frontend/.env.local`

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Backend API URL
NEXT_PUBLIC_API_URL=http://localhost:3001/api

# Payment Gateways (Optional - for wallet funding)
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=pk_test_xxxxxxxxxxxxx
NEXT_PUBLIC_FLUTTERWAVE_PUBLIC_KEY=FLWPUBK_TEST-xxxxxxxxxxxxx
```

### Backend Environment Variables

Create file: `backend/.env`

```env
# Server Configuration
PORT=3001
NODE_ENV=development

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:3000

# Supabase Configuration
SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
SUPABASE_SERVICE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...(service_role key)

# JWT Configuration (MUST be at least 32 characters!)
JWT_SECRET=your-super-secret-jwt-key-change-this-to-something-random-min-32-chars

# Payment Gateways Secret Keys
PAYSTACK_SECRET_KEY=sk_test_xxxxxxxxxxxxx
FLUTTERWAVE_SECRET_KEY=FLWSECK_TEST-xxxxxxxxxxxxx

# VTU Provider API (Optional - for production)
VTU_PROVIDER_API_KEY=your_vtu_provider_api_key
VTU_PROVIDER_API_URL=https://api.vtuprovider.com
```

---

## 🔍 Where to Get These Values

### Supabase Keys

1. Go to https://supabase.com
2. Open your project
3. Click Settings (gear icon) → API
4. Copy:
   - **URL**: Your project URL
   - **anon public**: For frontend
   - **service_role**: For backend (keep secret!)

### Paystack Keys

1. Go to https://paystack.com
2. Login → Settings → API Keys & Webhooks
3. Copy:
   - **Public Key**: For frontend
   - **Secret Key**: For backend

### Flutterwave Keys

1. Go to https://flutterwave.com
2. Login → Settings → API
3. Copy:
   - **Public Key**: For frontend
   - **Secret Key**: For backend

### JWT Secret

Generate a random secret:
```bash
# Option 1: Using Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# Option 2: Using OpenSSL
openssl rand -base64 32

# Option 3: Just use a long random string (min 32 chars)
my-super-secret-jwt-key-12345678901234567890
```

---

## ⚠️ Important Security Notes

### DO NOT:
- ❌ Commit `.env` or `.env.local` files to Git
- ❌ Share your service_role key publicly
- ❌ Use test keys in production
- ❌ Use weak JWT secrets
- ❌ Leave default admin password

### DO:
- ✅ Use different secrets for dev and production
- ✅ Keep service_role key secure
- ✅ Use production keys when deploying
- ✅ Generate strong JWT secrets (32+ characters)
- ✅ Change admin password immediately

---

## 📝 Environment Files Checklist

Before running the app, ensure you have:

- [ ] `frontend/.env.local` created
- [ ] All frontend variables set
- [ ] `backend/.env` created
- [ ] All backend variables set
- [ ] Supabase project created
- [ ] API keys obtained
- [ ] JWT secret generated (min 32 chars)

---

## 🧪 Test Your Configuration

### Test Backend Connection

```bash
cd backend
npm run start:dev
```

**Expected output:**
```
🚀 Server running on http://localhost:3001/api
```

**If you see errors:**
- Check SUPABASE_URL is correct
- Verify SUPABASE_SERVICE_KEY (not anon key!)
- Ensure PORT is available (not in use)

### Test Frontend Connection

```bash
cd frontend
npm run dev
```

**Expected output:**
```
▲ Next.js 14.0.4
- Local:        http://localhost:3000
- Environments: .env.local
```

**Visit:** http://localhost:3000

**If you see errors:**
- Check NEXT_PUBLIC_SUPABASE_URL is correct
- Verify all NEXT_PUBLIC_* variables are set
- Ensure backend is running

---

## 🔄 Switching Environments

### Development (Local)
```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

### Staging
```env
NEXT_PUBLIC_API_URL=https://api-staging.yourapp.com/api
```

### Production
```env
NEXT_PUBLIC_API_URL=https://api.yourapp.com/api
```

---

## 📚 Additional Resources

- **Supabase Docs:** https://supabase.com/docs/guides/auth
- **Next.js Env Variables:** https://nextjs.org/docs/basic-features/environment-variables
- **NestJS Config:** https://docs.nestjs.com/techniques/configuration

---

**Environment setup complete!** ✅

Once all variables are configured, you're ready to run the application!

