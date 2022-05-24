import config from './profile.config';

export default {
	purge: [ './src/**/*.@(js|jsx)' ],
	content: ['./src/*.{js,jsx}', './src/**/*.{js,jsx}'],
	theme: {
		extend: {},
	},
	plugins: [require('daisyui')],
	daisyui: {
		logs: false,
		rtl: false,
		prefix: "",
		themes: [
			...config.themeConfig.themes,
			{ procyon: config.themeConfig.customTheme },
		],
	},
};
