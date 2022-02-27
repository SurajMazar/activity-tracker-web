import { NextPage } from 'next';
import type { AppProps } from 'next/app'
import layoutTypes from '../config/layoutTypes';
import applyLayout from '../layouts';
import '../styles/app.scss';


export type NextPageWithLayout = NextPage & {
  layout?: keyof typeof layoutTypes | undefined
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return applyLayout(<Component {...pageProps} />,Component.layout)
}

export default MyApp
