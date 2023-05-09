import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { store } from "@/store/store";
import Layout from "@/components/Layout";
import GlobalModal from "@/components/Modals/GlobalModal";
const queryClient = new QueryClient();

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const router = useRouter();
  const pageKey = router.route;
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <Provider store={store}>
          <Layout>
            <GlobalModal />
            <AnimatePresence mode="wait">
              <Component key={pageKey} {...pageProps} />
            </AnimatePresence>
          </Layout>
        </Provider>
        <ReactQueryDevtools />
      </SessionProvider>
    </QueryClientProvider>
  );
}
