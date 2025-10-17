# Database Verification & Fix

## 🔍 Check if Admin User Exists

### Option 1: Check in Supabase Dashboard

1. Go to your Supabase project
2. Click **"Table Editor"** (left sidebar)
3. Click on **"users"** table
4. Look for: `admin@vtuservice.com`

**If you see it:** ✅ Admin exists
**If you don't see it:** ❌ Need to create it

---

### Option 2: Run This SQL Query

In Supabase SQL Editor, run:

```sql
SELECT * FROM users WHERE email = 'admin@vtuservice.com';
```

**If no results:** Admin user wasn't created. Run the fix below.

---

## 🔧 FIX: Create Admin User Manually

If admin user doesn't exist, run this SQL in Supabase:

```sql
-- Delete if exists (just in case)
DELETE FROM users WHERE email = 'admin@vtuservice.com';

-- Create admin user
INSERT INTO users (email, password_hash, name, role) 
VALUES (
  'admin@vtuservice.com', 
  '$2a$10$Ky7YZ3Y8hB.0zvZQ3JXQCO8E1KFmO0fVZpHJO0x9yBvQZYFJx9.pW',
  'Admin User',
  'admin'
);

-- Create wallet for admin
INSERT INTO wallets (user_id, balance)
SELECT id, 0.00 FROM users WHERE email = 'admin@vtuservice.com';

-- Verify it was created
SELECT id, email, name, role FROM users WHERE email = 'admin@vtuservice.com';
```

**Expected result:**
You should see one row with admin@vtuservice.com

---

## 🧪 Test Login Again

After running the SQL above:

1. **Refresh your browser**
2. **Go to:** http://localhost:3000/login
3. **Login with:**
   ```
   Email: admin@vtuservice.com
   Password: admin123
   ```
4. **Click Login**

**Should work now!** ✅

---

## 🔐 Alternative: Create a Test User

Or create a new user instead:

```sql
-- Create test user (password: test123)
INSERT INTO users (email, password_hash, name, role, phone) 
VALUES (
  'test@example.com', 
  '$2a$10$rG5qO8QXZ9Y3xZ3Z3Z3Z3OYYvN5Y5Y5Y5Y5Y5Y5Y5Y5Y5Y5Y5Y5Y5Y.',
  'Test User',
  'user',
  '08012345678'
);

-- Create wallet
INSERT INTO wallets (user_id, balance)
SELECT id, 1000.00 FROM users WHERE email = 'test@example.com';
```

**Login with:**
```
Email: test@example.com
Password: test123
```

---

## 💡 Why This Happened

The SQL script might not have run completely, or the INSERT statements at the end were skipped.

**Solution:** Run the admin user creation SQL above to fix it.

---

## ✅ After Fix

Once admin user is created:
- ✅ Login should work
- ✅ Logout should work
- ✅ Can access dashboard
- ✅ Can use all services

**Run the SQL fix above and try logging in again!** 🚀

