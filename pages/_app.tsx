import Layout from '@components/Layout'
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  // se puede envolver en providers la app
  // tambien agregar layouts y props generales
  //
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
