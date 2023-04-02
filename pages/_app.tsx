import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Roboto_Flex } from 'next/font/google'
import { store } from '../storage/store'
import { Provider } from 'react-redux'


const robotoFlex = Roboto_Flex({
  subsets: ['latin', 'cyrillic'],
  preload: true
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className={robotoFlex.className}>
        <Component {...pageProps} />
      </div>
    </Provider>)
}