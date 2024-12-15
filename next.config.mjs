/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/recognize_app',
    assetPrefix: '/recognize_app/_next',
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
    // async rewrites() {
    //     return [
    //         {
    //             source: '/rec/:path*',
    //             destination: '/:path*', // Перенаправление вложенных запросов
    //         },
    //         {
    //             source: '/rec',
    //             destination: '/', // Перенаправление на корень
    //         },
    //     ];
    // },
    // async redirects() {
    //     return [
    //         {
    //             source: '/rec',
    //             destination: '/',
    //             permanent: false, // Можно сделать permanent: true, если нужно
    //         },
    //     ];
    // },
};

// export default (phase) => {
//     const isDev = phase === PHASE_DEVELOPMENT_SERVER
//     /**
//      * @type {import('next').NextConfig}
//      */
//     const nextConfig = {
//       assetPrefix: isDev ? undefined : 'https://cdn.mydomain.com',
//     }
//     return nextConfig
//   }

export default nextConfig;