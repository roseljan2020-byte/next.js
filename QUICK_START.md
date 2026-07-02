# ContentAI - Quick Start Guide (5 Minutes)

## ✅ Step 1: Prerequisites
- [ ] Node.js installed (https://nodejs.org) - Download v18+
- [ ] Git installed (https://git-scm.com)
- [ ] Anthropic API key (https://console.anthropic.com)

---

## 🚀 Step 2: Clone & Setup (3 minutes)

```bash
# 1. Create a new folder for your project
mkdir content-ai
cd content-ai

# 2. Create a Next.js project
npx create-next-app@latest . --typescript=no --tailwind=yes --eslint=no

# 3. Install required packages
npm install lucide-react

# 4. Copy the files from this folder:
# - pages/index.js (from pages_index.js)
# - pages/api/generate.js (from pages_api_generate.js)
# - tailwind.config.js
# - package.json
```

---

## 🔑 Step 3: Add Your API Key (1 minute)

```bash
# 1. Create a .env.local file in the root directory
touch .env.local

# 2. Add your API key (copy from https://console.anthropic.com):
ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxxx

# 3. Save the file
```

---

## 🎯 Step 4: Run Locally (1 minute)

```bash
# Start the development server
npm run dev

# Open your browser to:
http://localhost:3000

# You should see the ContentAI interface!
```

---

## 📤 Step 5: Deploy to Vercel (Free - 2 minutes)

### Option A: Command Line (Easiest)
```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Deploy
vercel

# Follow the prompts, select your project folder

# 3. Add environment variable in Vercel Dashboard:
# Settings → Environment Variables
# ANTHROPIC_API_KEY = sk-ant-xxxxx

# Done! Your app is live at: content-ai.vercel.app
```

### Option B: GitHub → Vercel (Recommended for long-term)
1. Push your code to GitHub
2. Go to https://vercel.com
3. Click "Import Project"
4. Select your GitHub repo
5. Add the ANTHROPIC_API_KEY environment variable
6. Click Deploy

Your app is now live and accessible 24/7.

---

## 💰 Step 6: Start Selling (Add Payment Processing)

### Install Stripe
```bash
npm install @stripe/react-js stripe
```

### Get Stripe Keys
1. Go to https://stripe.com
2. Sign up for free
3. Get your Publishable & Secret keys
4. Add to your .env.local:
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
```

### Simple Pricing Setup
- Free: 5 generations/month
- Pro ($29/month): Unlimited
- Enterprise ($99/month): API access

---

## ✨ Test It Works

1. Go to http://localhost:3000 (or your Vercel URL)
2. Fill in:
   - What: "Sustainable water bottles"
   - Audience: "Eco-conscious millennials"
   - Tone: "Professional"
3. Click "Generate Content"
4. **Wait 3-5 seconds** (this is API latency)
5. See AI-generated marketing copy! 🎉

---

## 🐛 Troubleshooting

### "Error: API key not found"
**Solution**: Check that ANTHROPIC_API_KEY is in .env.local and restart the dev server

### "Port 3000 already in use"
**Solution**: `npm run dev -- -p 3001` (use port 3001 instead)

### "Content generation is slow"
**Solution**: This is normal! Claude takes 3-5 seconds. This is how it works.

### "Nothing happens when I click Generate"
**Solution**: 
1. Check browser console (F12) for errors
2. Make sure API key is valid
3. Restart dev server: Ctrl+C then `npm run dev`

---

## 📊 What's Next?

1. **Add more content types** (blog posts, product reviews, etc.)
2. **Add user accounts** (save generated content)
3. **Add payment processing** (start collecting money)
4. **Add email capture** (build your mailing list)
5. **Marketing** (tell people about it!)

---

## 💡 Pro Tips

✅ **Deploy ASAP** - Even with just the MVP, put it live. Get feedback.

✅ **Price it high** - Most creators underprice. Charge $29-99/month minimum.

✅ **Talk to users** - Spend 30 mins/week on calls with customers.

✅ **Track metrics** - Monitor: signups, conversions, churn, customer happiness.

✅ **Iterate fast** - New feature every week. Listen to feedback.

---

## 📞 Need Help?

- **Anthropic API Docs**: https://docs.anthropic.com
- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Deploy Guide**: https://vercel.com/docs
- **Stripe Integration**: https://stripe.com/docs

---

## 🎯 Your Growth Timeline

| Week | Goal | Action |
|------|------|--------|
| 1 | Deploy live | Push to Vercel |
| 1-2 | First users | Share on Twitter, ProductHunt |
| 2-3 | First paying customer | Offer free trial, ask for feedback |
| Month 1 | 10 paying customers | Write 2 blog posts, ask for referrals |
| Month 3 | 50 customers, $2,500/mo | Better marketing, add features |
| Month 6 | 200 customers, $10,000/mo | Run ads, hire help |
| Year 1 | 1,000+ customers, $50k/mo | Serious business now! |

---

**You've got this! 🚀 Your first $1M is just 1,000 customers at $100/month. Start now.**

Good luck! 🔥
