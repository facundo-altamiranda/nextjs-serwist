import withSerwistInit from "@serwist/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true
};

const withSerwist = withSerwistInit({
  cacheOnFrontEndNav: true,
  swSrc: "sw.ts",
  swDest: "public/sw.js",
  reloadOnOnline: true,
  // disable: process.env.NODE_ENV === "development",
});

export default withSerwist(nextConfig);