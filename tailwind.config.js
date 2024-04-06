/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			boxShadow: {
				custom: '0px 4px 6px #364e7e1a',
			},
			fontSize: {
				xs: '12px', // 12px
				sm: '14px', // 14px
				base: '16px',
				medium:'20px', // 16px
				lg: '30px', // 18px
				xl: '1.25rem', // 20px
				'2xl': '2rem', // 24px
				'3xl': '1.875rem', // 30px
				'4xl': '2.25rem', // 36px
				'5xl': '3rem', // 48px
				'6xl': '4rem', // 64px
				'7xl': '5rem', // 80px
			},
			fontFamily: {
				sans: ['Plus Jakarta Sans', 'sans-serif'],
			},
			colors: {
				background: 'rgba(var(--background))',
				brand: 'rgba(var(--brand))',
				secondaryBackground: 'rgba(var(--secondaryBackground))',
				text: 'rgba(var(--text))',
				subTitle: 'rgba(var(--subTitle))',
				scroll: 'rgba(var(--scroll))',
				border: 'rgba(var(--border))',
				gray: 'rgba(var(--gray))',
			},
		},
	},

	plugins: [require('daisyui')],
	darkMode: 'class',
};
