This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## 🧪 Testing

### Cross-Browser Compatibility
- Configured with `browserslist` (last 2 versions of major browsers)
- Includes tests for DOM APIs, CSS features, and JS functionality

### Component Testing
- Jest + React Testing Library setup
- 9 comprehensive tests for Button component
- Covers:
  - Basic rendering
  - Interaction states
  - Accessibility (ARIA attributes)
  - Style consistency

### Visual Regression (Coming Soon)
- Puppeteer setup in place
- Visual tests temporarily disabled during dependency resolution

## 🛠 Development Setup

```bash
# Install dependencies
npm install

# Run tests
npm test

# Start development server
npm run dev
```

## 🌐 Live Site

View the deployed application at:  
[https://slantedculture.netlify.app/](https://slantedculture.netlify.app/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR-DEPLOY-ID/deploy-status)](https://app.netlify.com/sites/slantedculture/deploys)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!