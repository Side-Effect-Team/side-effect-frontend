import styled from "styled-components";
import { motion } from "framer-motion";
interface Props {
  children: string | undefined;
}
export default function ErrorMessage({ children }: Props) {
  return (
    <ErrorMessageWrapper
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </ErrorMessageWrapper>
  );
}
const ErrorMessageWrapper = styled(motion.div)`
  color: ${(p) => p.theme.colors.danger};
  margin-top: 15px;
`;
