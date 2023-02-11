/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	env: {
		SERVER_URL: process.env.SERVER_URL
	},
	async rewrites() {
		return [
			{
				source: '/uploads/:path*',
				destination: `http://localhost:4200/uploads/:path*`
			}
		];
	}
};

module.exports = nextConfig;
