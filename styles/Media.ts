const sizes = {
  xsmall: 400,
  small: 424,
  medium: 768,
  large: 1024,
  xlarge: 1280,
};
const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`;
export const media = {
  custom: customMediaQuery,
  xsmall: customMediaQuery(sizes.xsmall),
  small: customMediaQuery(sizes.small),
  medium: customMediaQuery(sizes.medium),
  large: customMediaQuery(sizes.large),
  xlarge: customMediaQuery(sizes.xlarge),
};
