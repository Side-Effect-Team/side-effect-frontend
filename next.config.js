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
        port: "443",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
