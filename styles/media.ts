export const sizes = {
  mobile: 768,
  laptop: 1024,
  desktop: 1280,
};

const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  mobile: customMediaQuery(sizes.mobile),
  laptop: customMediaQuery(sizes.laptop),
  desktop: customMediaQuery(sizes.desktop),
};
