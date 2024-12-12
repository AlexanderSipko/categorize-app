/** @type {import('next').NextConfig} */
const nextConfig = {
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

export default nextConfig;