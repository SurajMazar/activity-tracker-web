import { NextPage } from 'next';
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import layoutTypes from '../config/layoutTypes';
import applyLayout from '../layouts';
import store from '../store';
import '../styles/app.scss';


export type NextPageWithLayout = NextPage & {
  layout?: keyof typeof layoutTypes | undefined
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <Provider store={store}>
      { applyLayout(<Component {...pageProps} />, Component.layout) }
    </Provider>
  )
}

export default MyApp
