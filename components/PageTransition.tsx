import React, { useEffect } from "react";
import styled from "styled-components";
import { motion, HTMLMotionProps } from "framer-motion";
import { useRouter } from "next/router";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { pageDirectionHandler } from "../store/pageTransitionSlice";

type PageTransitionProps = HTMLMotionProps<"div">;

function PageTransition({ children }: PageTransitionProps) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  useEffect(() => {
    const routeChange = (url: string) => {
      console.log("url", url);
      dispatch(pageDirectionHandler({ pathname: url }));
    };
    router.events.on("routeChangeComplete", routeChange);
    return () => {
      router.events.off("routeChangeComplete", routeChange);
    };
  }, []);

  const { pageDirection } = useAppSelector((state) => state.page);
  const onTheRight = { x: "100%" };
  const inTheCenter = { x: 0 };
  const onTheLeft = { x: "-100%" };
  const transition = { duration: 0.4, ease: "easeInOut" };
  return (
    <PageTransitionDiv
      initial={pageDirection === "right" ? onTheRight : onTheLeft}
      animate={inTheCenter}
      exit={pageDirection === "right" ? onTheLeft : onTheRight}
      transition={transition}
    >
      {children}
    </PageTransitionDiv>
  );
}

export default PageTransition;

const PageTransitionDiv = styled(motion.div)`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 18%;
`;
