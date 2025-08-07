# Next.js Wagmi Magic Connector Demo

This demo showcases a minimal Next.js application with a single wallet connect button.
It integrates the MetaMask connector from [`wagmi`](https://wagmi.sh) and the
[`@magiclabs/wagmi-connector`](https://docs.magic.link) to allow passwordless
Magic Wallet connections.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Set your Magic publishable key in an `.env.local` file:
   ```bash
   NEXT_PUBLIC_MAGIC_API_KEY=YOUR_KEY
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

The app exposes a single **Connect Wallet** button. It attempts to connect
with MetaMask first and falls back to Magic if MetaMask is unavailable.
