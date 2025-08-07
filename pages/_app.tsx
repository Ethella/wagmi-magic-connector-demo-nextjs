import type { AppProps } from 'next/app'
import { WagmiConfig, configureChains, createConfig } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { mainnet } from 'wagmi/chains'
import { metaMask } from 'wagmi/connectors/metaMask'
import { MagicConnector } from '@magiclabs/wagmi-connector'
import '../styles/globals.css'

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [publicProvider()],
)

const connectors = [
  metaMask(),
  new MagicConnector({
    options: {
      apiKey: process.env.NEXT_PUBLIC_MAGIC_API_KEY || '',
    },
  }),
]

const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={config}>
      <Component {...pageProps} />
    </WagmiConfig>
  )
}
