/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			fontFamily: {
				serif: ["Merriweather", "Georgia", "serif"],
				sans: ["Poppins", "system-ui", "sans-serif"],
			},
		},
	},
	plugins: [],
};
