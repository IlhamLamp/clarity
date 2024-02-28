/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn-icons-png.flaticon.com'
            },
            {
                protocol: 'https',
                hostname: 'clarity-tailwind.preview.uideck.com'
            }
        ]
    }
};

export default nextConfig;
