const round = (num) =>
	num
		.toFixed(7)
		.replace(/(\.[0-9]+?)0+$/, "$1")
		.replace(/\.0$/, "");
const rem = (px) => `${round(px / 16)}rem`;
const colors = require("tailwindcss/colors");
module.exports = {
	purge: [
		"./components/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./layouts/**/*.{js,ts,jsx,tsx}",
		"./lib/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				gray: colors.gray,
				teal: colors.teal,
				orange: colors.orange,
				fuchsia: colors.fuchsia,
				cyan: colors.cyan,
				lime: colors.lime,
				"light-blue": colors.lightBlue,
				rose: colors.rose,
				emerald: colors.emerald,
				"cool-gray": colors.coolGray,
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						"code::after": {
							content: "none",
						},
						"code::before": {
							content: "none",
						},
						"pre code::after": {
							content: "none",
						},
						code: {
							backgroundColor: theme("colors.gray.200"),
							color: theme("colors.gray.700"),
							padding: "4px",
							borderRadius: rem(2),
						},
						blockquote: {
							quotes: "none",
						},
						pre: {
							backgroundColor: theme("colors.cool-gray.800"),
						},
					},
				},
			}),
		},
	},
	variants: { animation: ["responsive", "hover"] },
	plugins: [require("@tailwindcss/typography")],
};
