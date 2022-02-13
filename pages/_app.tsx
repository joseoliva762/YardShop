import type { AppProps } from 'next/app'
import Header from '@components/Header';
import '@styles/globals.css'
import AppContext from '@contexts/AppContext';
import useInitialState from '@hooks/useInitialState';
import Script from 'next/script';

function MyApp({ 
  Component: App, 
  pageProps 
}: AppProps) {
  const initialState = useInitialState();
  const googleTagManagerId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_CONFIG_TAG;

  return (
    <>
      <AppContext.Provider value={initialState}>
        <div className='bg-shop-white min-h-screen flex flex-col mx-auto items-center'>
          <Header />
          <App {...pageProps} />
        </div>
      </AppContext.Provider>
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=${googleTagManagerId}`} />
      <Script id="google-analytics" strategy="afterInteractive">
        { 
          `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleTagManagerId}');
          `
        }
      </Script>
    </>
  );
}
export default MyApp
