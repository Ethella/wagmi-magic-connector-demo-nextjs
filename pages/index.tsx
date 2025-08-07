import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { useState } from 'react'

export default function Home() {
  const { address, isConnected } = useAccount()
  const { connect, connectors, error } = useConnect()
  const { disconnect } = useDisconnect()
  const [connecting, setConnecting] = useState(false)

  const handleConnect = async () => {
    setConnecting(true)
    try {
      // Try MetaMask first
      await connect({ connector: connectors[0] })
    } catch {
      const magic = connectors.find((c) => c.id === 'magic')
      if (magic) {
        await connect({ connector: magic })
      }
    } finally {
      setConnecting(false)
    }
  }

  if (isConnected) {
    return (
      <div>
        <p>Connected as {address}</p>
        <button onClick={() => disconnect()}>Disconnect</button>
      </div>
    )
  }

  return (
    <div>
      <button onClick={handleConnect} disabled={connecting}>
        {connecting ? 'Connecting...' : 'Connect Wallet'}
      </button>
      {error && <p>{error.message}</p>}
    </div>
  )
}
