import { useState, useRef, useEffect } from "react";
import MainContent from "@/components/main_content";
import Sidebar from "@/components/sidebar/sidebar";
import NavBar from "@/components/navbar";
import { getTree, getPaths } from "@/lib/tree";
import { getPostData } from "@/lib/lecture";
import Head from "next/head";
import { useRouter } from "next/router";
import HomePage from "@/components/learn_contribute/homepage";
import Footer from "@/components/footer";
import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import slug from "remark-slug";
import highlightCode from "@mapbox/rehype-prism";
import MyImg from "@/components/image";
import Definition from "@/components/definition";
import Important from "@/components/important";
const components = {
	img: MyImg,
	Definition,
	Important,
};
function Lecture({ tree, postData, params, sidebar, setSidebar, source }) {
	const content = hydrate(source, { components });
	const router = useRouter();
	const node = useRef();
	const node2 = useRef();
	function toggleSidebar() {
		setSidebar(!sidebar);
	}

	useEffect(() => {
		if (open) {
			document.addEventListener("mousedown", handleClickOutside);
		} else {
			document.removeEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	});

	// useEffect(() => {
	// 	router.events.on("routeChangeComplete", (url) => {
	// 		if (url !== "/learn_contribute" && url !== "undefined") {
	// 			setSidebar(false);
	// 		}
	// 	});
	// }, []);

	const handleClickOutside = (e) => {
		if (
			node.current.contains(e.target) ||
			node2.current.contains(e.target)
		) {
			// inside click
			return;
		}
		// outside click
		setSidebar(false);
	};
	return (
		<>
			<Head>
				<title>
					{(params.slug !== undefined
						? params.slug[params.slug.length - 1]
								.replace(/_/g, " ")
								.split("-")[1] + " | "
						: "") + "init.OSS"}
				</title>
				<meta
					name="description"
					content="Getting started with contributing to open source software"
				/>
			</Head>
			<NavBar toggleFunction={toggleSidebar} ref={node2} sidebar={true} />
			<div className="flex">
				<Sidebar
					category={"learn_contribute"}
					toggle={sidebar}
					ref={node}
					tree={tree}
					slug={params.slug}
				/>
				<div className="flex flex-col min-h-screen w-full">
					<MainContent toggle={sidebar}>
						{postData.contentHtml !== undefined && (
							<>
								<div className="p-6 pb-12">
									<h1 className="text-4xl sm:text-5xl text-center font-semibold title mt-20">
										{postData.title}
									</h1>
									<h2 className="text-center text-lg text-gray-700">
										{params.slug.length > 1
											? params.slug[0].replace(/_/g, " ")
											: "Learn to Contribute"}
									</h2>
								</div>
								<hr className="pb-4" />
								<div className="pb-6">
									<div className="prose pb-6 mx-auto">
										{content}
									</div>
									<div className="flex justify-center">
										<a
											className="flex content-center hover:underline text-blue-700"
											href={
												"https://github.com/samrobbins85/initoss/blob/master/page_content/Learn_to_Code/" +
												params.slug.join("/") +
												".mdx"
											}
										>
											<svg
												className="h-4 pr-2 self-center"
												role="img"
												viewBox="0 0 24 24"
												xmlns="http://www.w3.org/2000/svg"
											>
												<title>GitHub icon</title>
												<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
											</svg>
											<p>Edit this page on GitHub</p>
										</a>
									</div>
								</div>
							</>
						)}
						{postData.isHome && (
							<div className="p-6 pt-24 pb-12 flex justify-center">
								<HomePage tree={tree} />
							</div>
						)}
						{postData.isHome === undefined &&
							postData.contentHtml === undefined && (
								<>
									<h1 className="pt-20 text-5xl text-center font-bold text-purple-800 w-5/6 mx-auto">
										{params.slug[
											params.slug.length - 1
										].replace(/_/g, " ")}
									</h1>

									<h2 className="text-center text-2xl text-gray-700">
										Select a topic from the sidebar
									</h2>
								</>
							)}
					</MainContent>
					<Footer />
				</div>
			</div>
		</>
	);
}

export default Lecture;

export async function getStaticProps({ params }) {
	const postData = await getPostData(params, "learn_contribute");
	const source = await renderToString(postData.contentHtml, {
		components: components,
		mdxOptions: {
			remarkPlugins: [slug],
			rehypePlugins: [highlightCode],
		},
	});
	const tree = getTree("learn_contribute");
	return {
		props: {
			tree,
			postData,
			params,
			source,
		},
	};
}

export async function getStaticPaths() {
	const paths = getPaths("learn_contribute");
	return {
		paths: paths,
		fallback: false,
	};
}
