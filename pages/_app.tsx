import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import { Provider } from "react-redux";
import { store } from "../store/store";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pageKey = router.route;
  return (
    <Layout>
      <Provider store={store}>
        <AnimatePresence mode="wait">
          <Component key={pageKey} {...pageProps} />
        </AnimatePresence>
      </Provider>
    </Layout>
  );
}
