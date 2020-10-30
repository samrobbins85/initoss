import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function getPostData(params, category) {
	const postsDirectory = path.join(process.cwd(), "page_content/" + category);

	const isHome = "home";
	if (Object.keys(params).length === 0) {
		return { isHome };
	}
	const fullPath = path.join(postsDirectory, `/${params.slug.join("/")}.mdx`);
	try {
		const fileContents = fs.readFileSync(fullPath, "utf8");
	} catch {
		return { params };
	}
	const fileContents = fs.readFileSync(fullPath, "utf8");

	const matterResult = matter(fileContents);
	const contentHtml = matterResult.content;
	return {
		params,
		contentHtml,
		...matterResult.data,
	};
}
