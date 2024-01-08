import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { MyProvider } from './components/useAccount'

export default function App({ Component, pageProps }: AppProps) {
  return   <MyProvider><Component {...pageProps} /></MyProvider>
}
