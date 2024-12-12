/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: '/rec/_next',
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