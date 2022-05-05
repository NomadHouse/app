const plugin = require('tailwindcss/plugin');

module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				violet: '#9d5af4',
				white: '#ffffff',
				black: '#000000',
			},
			backgroundImage: {
				york: "url('/cities_images/new_york.jpeg')",
				medellin: "url('/cities_images/medellin.jpeg')",
				berlin: "url('/cities_images/berlin.jpeg')",
			},
			textShadow: {
				sm: '0 1px 2px var(--tw-shadow-color)',
				DEFAULT: '0 2px 4px var(--tw-shadow-color)',
				lg: '0 8px 16px var(--tw-shadow-color)',
			},
		},
	},
	plugins: [
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					'text-shadow': (value) => ({
						textShadow: value,
					}),
				},
				{ values: theme('textShadow') }
			);
		}),
	],
};
