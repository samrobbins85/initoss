const round = (num) =>
	num
		.toFixed(7)
		.replace(/(\.[0-9]+?)0+$/, "$1")
		.replace(/\.0$/, "");
const rem = (px) => `${round(px / 16)}rem`;
module.exports = {
	theme: {
		extend: {
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
					},
				},
			}),
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
