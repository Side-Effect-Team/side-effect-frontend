import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { store } from "@/store/store";
import Layout from "@/components/Layout";
import GlobalModal from "@/components/Modals/GlobalModal";
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pageKey = router.route;
  return (
    <Layout>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <AnimatePresence mode="wait">
            <GlobalModal />
            <Component key={pageKey} {...pageProps} />
          </AnimatePresence>
        </Provider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Layout>
  );
}
