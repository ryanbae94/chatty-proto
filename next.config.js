const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.svg$/,
			// include: path.resolve(__dirname, 'assets/icons'),
			use: ['@svgr/webpack'],
		});
		return config;
	},
};

module.exports = withVanillaExtract(nextConfig);
