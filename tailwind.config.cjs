/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}','./node_modules/flowbite/**/*.js',"./node_modules/tw-elements/dist/js/**/*.js"],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		  },
		  colors: {
			'Primary-Black':  '#1a1a1a',
			'Primary-Black-50':'#a3a19f',
			'Primary-Color':'#B09E6F',
			'Primary-Gradient':'#D9CDAC',
			'Primary-Blue':  '#0B2C3D',
			'Primary-Accent':  '#38C5E3',
			'Primary-Text':  '#E5E5DB',

		  },
		  
		extend: {},
	},
	plugins: [require('flowbite/plugin'), require("tw-elements/dist/plugin.cjs")],
}
