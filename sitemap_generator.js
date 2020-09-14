const sitemap = require("nextjs-sitemap-generator");

sitemap({
	baseUrl: "https://csnotes.me",
	pagesDirectory: __dirname + "/page_content",
	targetDirectory: "public/",
	ignoredExtensions: ["js", "map"],
	ignoredPaths: ["[fallback]"],
});
