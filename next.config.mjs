/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "uflhlnzneonkashuqqds.supabase.co",
        protocol: "https"
      }
    ]
  }
};

export default nextConfig;
