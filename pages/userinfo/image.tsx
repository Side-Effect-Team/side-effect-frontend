import { useRouter } from "next/router";
import { motion } from "framer-motion";
import PageTransition from "../../components/PageTransition";

export default function image() {
  const router = useRouter();
  return (
    <PageTransition>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        nickname
        <button onClick={() => router.push("/")}>home</button>
      </motion.div>
    </PageTransition>
  );
}