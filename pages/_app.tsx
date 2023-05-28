import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { store } from "@/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "@/store/store";
import axios from "axios";
import Script from "next/script";
import Layout from "@/components/Layout";
import GlobalModal from "@/components/Modals/GlobalModal";
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
axios.defaults.withCredentials = true;
const queryClient = new QueryClient();

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function App({
  Component,
  pageProps: { ...pageProps },
}: AppProps) {
  const router = useRouter();
  const pageKey = router.route;
  function kakaoInit() {
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
  }
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <Layout>
            <GlobalModal />
            <AnimatePresence>
              <Component key={pageKey} {...pageProps} />
              <Script
                src="https://developers.kakao.com/sdk/js/kakao.js"
                onLoad={kakaoInit}
              />
            </AnimatePresence>
          </Layout>
        </PersistGate>
      </Provider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
