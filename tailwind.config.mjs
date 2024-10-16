/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						color: '#333',
						h1: {
							color: '#013D5A',
						},
						h2: {
							color: '#013D5A',
						},
						h3: {
							color: '#013D5A',
						},
						a: {
							color: '#3182ce',
							'&:hover': {
								color: '#2c5282',
							},
						},

					},
				},
			},
		},
		colors:{
			'primaryBlue': '#013D5A',
			'primaryWhite': '#FCF3E3',
			'secondaryBlue': '#BDD3CE',
			'secondaryGreen': '#708c69',
			'secondaryOrange':'#F4A258'
		},
		keyframes: {
			fadein: {
				'0%':{opacity:0},
				'100%': {opacity:1},
			}
		},
		animation:{
			'fadein': "fadein 1s",
		}
	},
	plugins: [],
}
