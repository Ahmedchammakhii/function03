import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { MyProvider } from '../hooks/useAccount'
import { WagmiProvider } from 'wagmi'
import { config } from '@/hooks/config'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
  const queryClient = new QueryClient() 

export default function App({ Component, pageProps }: AppProps) {

  return    <WagmiProvider config={config}> 
  <QueryClientProvider client={queryClient}>
  <MyProvider><Component {...pageProps} /></MyProvider></QueryClientProvider> </WagmiProvider>

}
