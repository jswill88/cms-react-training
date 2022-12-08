/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "i.annihil.us",
				pathname: "/u/prod/marvel/**",
			},
		],
		formats: ["image/avif", "image/webp"],
	},
};

module.exports = nextConfig;
