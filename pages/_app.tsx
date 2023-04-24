import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Roboto_Flex } from 'next/font/google'
import { wrapper } from '../storage/store'
import { Provider } from 'react-redux'

import Header from '@/components/header/header'

const robotoFlex = Roboto_Flex({
  subsets: ['latin', 'cyrillic'],
  preload: true
})

export default function App({ Component, ...rest }: AppProps): React.ReactElement {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store} >

      <div className={robotoFlex.className}>
        <Header page='all'>
          <Component {...props.pageProps} />
        </Header>
      </div>
    </Provider >)

}
