# Environment Variables Setup

## 📝 Create These Files Manually

### 1. Frontend Environment File

**Create this file:** `/Users/ahmedsalehcomputer/Downloads/VTU/app/.env.local`

**Copy this content and replace with your values:**

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_public_key_here

# Backend API URL
NEXT_PUBLIC_API_URL=http://localhost:3001/api

# Payment Gateways (Optional - for later)
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=pk_test_xxx
```

**How to create:**
```bash
# Navigate to app folder
cd /Users/ahmedsalehcomputer/Downloads/VTU/app

# Create the file (macOS/Linux)
touch .env.local

# Open in text editor
open .env.local
```

Then paste the content above and replace:
- `https://your-project.supabase.co` → Your actual Supabase URL
- `your_anon_public_key_here` → Your actual anon key

---

### 2. Backend Environment File

**Create this file:** `/Users/ahmedsalehcomputer/Downloads/VTU/backend-api/.env`

**Copy this content and replace with your values:**

```env
# Server Configuration
PORT=3001
NODE_ENV=development

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:3000

# Supabase Configuration
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_KEY=your_service_role_key_here

# JWT Configuration (MUST be at least 32 characters!)
JWT_SECRET=my-super-secret-jwt-key-change-to-random-32-chars-minimum

# Payment Gateways (Optional - for later)
PAYSTACK_SECRET_KEY=sk_test_xxx
```

**How to create:**
```bash
# Navigate to backend-api folder
cd /Users/ahmedsalehcomputer/Downloads/VTU/backend-api

# Create the file (macOS/Linux)
touch .env

# Open in text editor
open .env
```

Then paste the content above and replace:
- `https://your-project.supabase.co` → Your actual Supabase URL
- `your_service_role_key_here` → Your actual service_role key
- `my-super-secret-jwt-key...` → Any random string (min 32 characters)

---

## 🎯 Quick Method - I'll Create Them for You!

**Just give me these 3 values and I'll create the files:**

1. **Supabase URL:** (from Settings → API)
2. **Anon Key:** (from Settings → API)
3. **Service Role Key:** (from Settings → API - click "Reveal")

**Reply with:**
```
URL: https://xxxxx.supabase.co
ANON: eyJhbG...
SERVICE: eyJhbG...
```

And I'll create both files automatically!

---

## 📍 Where to Find These in Supabase:

1. Go to your Supabase project
2. Click **⚙️ Settings** (bottom left)
3. Click **API**
4. You'll see:
   ```
   Project URL: https://xxxxx.supabase.co
   
   anon public: eyJhbGciOiJI... (long string)
   service_role: eyJhbGciOiJI... (click Reveal button)
   ```

---

**Once you provide the keys, I'll set everything up and we can start the app!** 🚀

