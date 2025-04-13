/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["nyc3.digitaloceanspaces.com"], // Add your allowed domain here
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hotelmania.nyc3.cdn.digitaloceanspaces.com",
        port: "",
        pathname: "/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "nyc3.digitaloceanspaces.com",
        port: "",
        pathname: "/hotelmania/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
