const breakPoints = {
  mobile: 768,
  desktop: 1280,
};

export const mediaQuery = (key: keyof typeof breakPoints) => {
  return (style: TemplateStringsArray | string) =>
    `@media (max-width: ${breakPoints[key]}px) { ${style} }`;
};
