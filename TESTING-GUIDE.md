# Testing Guide - VTU Application

## ✅ Login & Logout Fixed!

### What Was Fixed:

1. **Login Issue:**
   - ❌ Was looking for `data.token`
   - ✅ Now correctly uses `data.access_token`
   - ✅ Stores user info in localStorage

2. **Logout Issue:**
   - ❌ Button had no functionality
   - ✅ Now clears localStorage
   - ✅ Redirects to login page
   - ✅ Shows success message

---

## 🧪 Testing Login & Logout

### Test 1: Login with Admin Account

1. **Go to:** http://localhost:3000/login
2. **Enter credentials:**
   ```
   Email: admin@vtuservice.com
   Password: admin123
   ```
3. **Click "Login"**
4. **Expected:**
   - ✅ "Login successful!" toast message
   - ✅ Redirected to /dashboard
   - ✅ See dashboard overview
   - ✅ See wallet balance

### Test 2: Logout

1. **In dashboard, click "Logout"** (top right)
2. **Expected:**
   - ✅ "Logged out successfully!" toast message
   - ✅ Redirected to /login page
   - ✅ Token cleared from localStorage
   - ✅ Can't access dashboard anymore

### Test 3: Register New User

1. **Go to:** http://localhost:3000/register
2. **Fill in the form:**
   ```
   Name: Test User
   Email: test@example.com
   Phone: 08012345678
   Password: password123
   Confirm Password: password123
   ```
3. **Click "Create Account"**
4. **Expected:**
   - ✅ "Registration successful! Please login." message
   - ✅ Redirected to /login
   - ✅ Can now login with new credentials

### Test 4: Login with New User

1. **Use the account you just created**
2. **Login**
3. **Expected:**
   - ✅ See dashboard
   - ✅ Wallet: ₦0.00
   - ✅ Can navigate to services

---

## 🔍 Troubleshooting

### If Login Still Fails:

**Check Backend is Running:**
```bash
# Should show:
🚀 Server running on http://localhost:3001/api
```

**Test API Directly:**
```bash
curl -X POST http://localhost:3001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@vtuservice.com","password":"admin123"}'
```

**Expected Response:**
```json
{
  "access_token": "eyJhbG...",
  "user": {
    "id": "uuid",
    "email": "admin@vtuservice.com",
    "name": "Admin User",
    "role": "admin"
  }
}
```

### If Registration Fails:

**Check Database:**
- Go to Supabase → Table Editor
- Click on "users" table
- Verify tables exist

**Check Console:**
- Press F12 in browser
- Check Console tab for errors
- Check Network tab for API responses

### If Logout Doesn't Work:

**Clear Browser Cache:**
- Press Cmd+Shift+Delete (Mac) or Ctrl+Shift+Delete (Windows)
- Clear browsing data
- Refresh page

**Check localStorage:**
- Open browser console (F12)
- Type: `localStorage.getItem('token')`
- Should return null after logout

---

## 🎯 Complete User Flow Test

### Full Journey:

1. ✅ **Register** new account
2. ✅ **Login** with new credentials
3. ✅ See **dashboard** with ₦0.00
4. ✅ Try to **buy airtime** (will fail - no balance)
5. ✅ **Logout**
6. ✅ **Login** as admin
7. ✅ Access **admin panel** (/admin)
8. ✅ See users list
9. ✅ **Logout** again

---

## 🔐 What Happens During Login:

1. User enters email & password
2. Frontend sends POST to `/api/auth/login`
3. Backend verifies credentials
4. Backend returns JWT token + user info
5. Frontend saves to localStorage:
   - `token`: JWT access token
   - `user`: User object (id, email, name, role)
6. User redirected to /dashboard
7. All future API calls include token in Authorization header

---

## 🚪 What Happens During Logout:

1. User clicks "Logout"
2. Frontend removes from localStorage:
   - `token`
   - `user`
3. Success toast shown
4. User redirected to /login
5. Protected routes no longer accessible

---

## ✅ Expected Behavior

### After Login:
- ✅ Can access /dashboard
- ✅ Can access all dashboard pages
- ✅ Can see wallet balance
- ✅ Token in localStorage
- ✅ User data in localStorage

### After Logout:
- ✅ Can't access /dashboard
- ✅ Redirected to /login if try
- ✅ No token in localStorage
- ✅ No user data in localStorage

---

## 🎉 Login & Logout Are Now Fixed!

**Try it now:**
1. Refresh your browser (http://localhost:3000)
2. Click "Login"
3. Use admin credentials
4. You should be able to login and logout successfully!

**Both servers are running - test away!** 🚀

