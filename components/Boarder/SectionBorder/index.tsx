import { Border, SectionHeaderWrapper, SectionTitle } from "./styled";
interface SectionBorderProps {
  title: string;
}
export default function SectionBorder({ title }: SectionBorderProps) {
  return (
    <SectionHeaderWrapper>
      <SectionTitle>{title}</SectionTitle>
      <Border></Border>
    </SectionHeaderWrapper>
  );
}
