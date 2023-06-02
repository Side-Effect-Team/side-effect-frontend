const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: false,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sideeffectproject.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
