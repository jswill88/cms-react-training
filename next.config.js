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
	env: {
		apiKey: "537c2a055f0aa0541bb7bd3939d55c7f",
	},
};

module.exports = nextConfig;
