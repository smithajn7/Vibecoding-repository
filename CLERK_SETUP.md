# Clerk Authentication Setup

This project uses Clerk for authentication. Follow these steps to set up Clerk:

## 1. Create a Clerk Account

1. Go to [clerk.com](https://clerk.com) and create an account
2. Create a new application in your Clerk Dashboard

## 2. Get Your API Keys

1. In your Clerk Dashboard, go to the [API Keys page](https://dashboard.clerk.com/last-active?path=api-keys)
2. Copy your **Publishable Key** and **Secret Key**

## 3. Set Up Environment Variables

Create a `.env.local` file in the root of your project and add your keys:

```bash
# .env.local
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key_here
CLERK_SECRET_KEY=your_secret_key_here
```

**Important:** 
- Replace `your_publishable_key_here` and `your_secret_key_here` with your actual keys
- Never commit your `.env.local` file to version control
- The `.env.local` file is already in `.gitignore`

## 4. Start the Development Server

```bash
npm run dev
```

## 5. Test Authentication

1. Visit `http://localhost:3000`
2. Click "Sign up" to create a new account
3. Click "Sign in" to sign in with existing credentials
4. Once signed in, you'll see the UserButton in the navigation

## Features Included

- ✅ Sign up/Sign in buttons
- ✅ User profile management
- ✅ Sign out functionality
- ✅ Protected routes (ready for implementation)
- ✅ UserButton with profile management

## Next Steps

You can now:
- Add protected routes using Clerk's `auth()` function
- Customize the sign-in/sign-up pages
- Add user-specific content based on authentication state
- Implement role-based access control
