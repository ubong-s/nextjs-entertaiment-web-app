import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { Layout } from '../components';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
   const router = useRouter();

   return (
      <Provider store={store}>
         <Layout>
            <AnimatePresence exitBeforeEnter>
               <Component {...pageProps} key={router.pathname} />
            </AnimatePresence>
         </Layout>
      </Provider>
   );
}

export default MyApp;
