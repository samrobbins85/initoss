module.exports = {
	purge: [
		"./components/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./layouts/**/*.{js,ts,jsx,tsx}",
		"./lib/**/*.{js,ts,jsx,tsx}",
		"./notes/**/*.md",
	],
	theme: {
		extend: {
			colors: {
				code: {
					green: "var(--color-code-green)",
					yellow: "var(--color-code-yellow)",
					purple: "var(--color-code-purple)",
					red: "var(--color-code-red)",
					blue: "var(--color-code-blue)",
					white: "var(--color-code-white)",
				},
				"green-150": "#e6ffee",
			},
		},
		typography: {
			default: {
				css: {
					pre: {
						code: {
							"&:after": { content: "none !important" },
						},
					},
				},
			},
		},
	},
	variants: {},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/custom-forms"),
	],
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
};
