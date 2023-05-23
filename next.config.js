const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: false,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "54.64.103.42",
        port: "8080",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
