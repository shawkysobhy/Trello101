/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Plus Jakarta Sans', 'sans-serif'],
			},
			colors: {
				background: 'rgba(var(--background))',
				brand: 'rgba(var(--brand))',
				secondaryBackground: 'rgba(var(--secondaryBackground))',
				title: 'rgba(var(--title))',
				subTitle: 'rgba(var(--subTitle))',
				scroll: 'rgba(var(--scroll))',
				border: 'rgba(var(--border))',
				gray: 'rgba(var(--gray))',
			},
		},
	},
	plugins: [require('daisyui')],
};
