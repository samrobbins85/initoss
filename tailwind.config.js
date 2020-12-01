const colors = require("tailwindcss/colors");
module.exports = {
	presets: [require("@samrobbins/typography")],
	purge: [
		"./components/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./layouts/**/*.{js,ts,jsx,tsx}",
		"./lib/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				gray: colors.coolGray,
				teal: colors.teal,
				orange: colors.orange,
				fuchsia: colors.fuchsia,
				cyan: colors.cyan,
				lime: colors.lime,
				"light-blue": colors.lightBlue,
				rose: colors.rose,
				emerald: colors.emerald,
			},
		},
	},
	variants: { animation: ["responsive", "hover"] },
};
