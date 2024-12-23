/** @type {import('next').NextConfig} */
const nextConfig = {
//   basePath: '/recognize_app',
//   assetPrefix: '/recognize_app',
  async headers() {
      return [
          {
              source: "/api/:path*",
              headers: [
                  { key: "Access-Control-Allow-Origin", value: "*" },
                  { key: "Access-Control-Allow-Methods", value: "GET,POST,OPTIONS" },
                  { key: "Access-Control-Allow-Headers", value: "Content-Type" },
              ],
          },
      ];
  },
};

export default nextConfig;
