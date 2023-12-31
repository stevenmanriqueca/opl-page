import '@/styles/globals.css'
import { theme } from '@/styles/theme/theme'
import { ThemeProvider } from '@mui/material/styles'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
