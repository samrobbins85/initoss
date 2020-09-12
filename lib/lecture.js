import fs from "fs";
import path from "path";
import matter from "gray-matter";
import emoji from "remark-emoji";
import math from "../lib/remark-math";
import highlightCode from "@mapbox/rehype-prism";
import Definition from "../components/definition";
import Important from "../components/important";
import Theorem from "../components/theorem";
import Corollary from "../components/corollary";
import Lemma from "../components/lemma";
import Problem from "../components/problem";
import slug from "remark-slug";
import Heading from "remark-autolink-headings";
var link = require("../components/link");
const babel = require("@babel/core");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");
const mdx = require("@mdx-js/mdx");
const { MDXProvider, mdx: createElement } = require("@mdx-js/react");
const transform = (code) =>
	babel.transform(code, {
		plugins: [
			"@babel/plugin-transform-react-jsx",
			"@babel/plugin-proposal-object-rest-spread",
		],
	}).code;
const renderWithReact = async (mdxCode) => {
	const jsx = await mdx(mdxCode, {
		skipExport: true,
		remarkPlugins: [slug, emoji, math],
		rehypePlugins: [highlightCode],
	});
	const code = transform(jsx);
	const scope = { mdx: createElement };
	const fn = new Function(
		"React",
		...Object.keys(scope),
		`${code}; return React.createElement(MDXContent)`
	);
	const element = fn(React, ...Object.values(scope));

	const MyH1 = (props) => (
		<div className="overflow-x-auto">
			<table className="table-auto" {...props} />
		</div>
	);
	const components = {
		table: MyH1,
		Definition,
		Important,
		Theorem,
		Corollary,
		Lemma,
		Problem,
	};
	const elementWithProvider = React.createElement(
		MDXProvider,
		{ components },
		element
	);
	return renderToStaticMarkup(elementWithProvider);
};

const postsDirectory = path.join(process.cwd(), "notes");

export async function getPostData(params) {
	const isHome = "home";
	if (Object.keys(params).length === 0) {
		return { isHome };
	}
	const fullPath = path.join(postsDirectory, `/${params.slug.join("/")}.md`);
	try {
		const fileContents = fs.readFileSync(fullPath, "utf8");
	} catch {
		return { params };
	}
	const fileContents = fs.readFileSync(fullPath, "utf8");

	const matterResult = matter(fileContents);
	const contentHtml = await renderWithReact(matterResult.content);
	return {
		params,
		contentHtml,
		...matterResult.data,
	};
}
