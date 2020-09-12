import { useState, useRef, useEffect } from "react";
import MainContent from "../components/main_content";
import Sidebar from "../components/sidebar/sidebar";
import NavBar from "../components/navbar";
import { getTree, getPaths } from "../lib/tree";
import { getPostData } from "../lib/lecture";
import Head from "next/head";
import { useRouter } from "next/router";
import renderMathInElement from "katex/dist/contrib/auto-render.mjs";
import HomePage from "../components/homepage";
function Lecture({ tree, postData, params }) {
	const router = useRouter();
	const node = useRef();
	const node2 = useRef();
	const [sidebarVisible, setSidebarVisible] = useState(false);
	function toggleSidebar() {
		setSidebarVisible(!sidebarVisible);
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

	useEffect(() => {
		router.events.on("routeChangeComplete", function () {
			setSidebarVisible(false);
			renderMathInElement(document.body, {
				delimiters: [
					{ left: "$$", right: "$$", display: true },
					{ left: "$", right: "$", display: false },
					{ left: "\\(", right: "\\)", display: false },
					{ left: "\\[", right: "\\]", display: true },
				],
			});
		});
	}, []);

	useEffect(() => {
		renderMathInElement(document.body, {
			delimiters: [
				{ left: "$$", right: "$$", display: true },
				{ left: "$", right: "$", display: false },
				{ left: "\\(", right: "\\)", display: false },
				{ left: "\\[", right: "\\]", display: true },
			],
		});
	}, []);

	const handleClickOutside = (e) => {
		if (
			node.current.contains(e.target) ||
			node2.current.contains(e.target)
		) {
			// inside click
			return;
		}
		// outside click
		setSidebarVisible(false);
	};
	return (
		<>
			<Head>
				<title>
					{(params.slug !== undefined
						? params.slug[params.slug.length - 1].replace(
								/_/g,
								" "
						  ) + " | "
						: "") + "Sam's Notes"}
				</title>
				<meta
					name="description"
					content="Notes from my course at Durham University"
				/>
			</Head>
			<NavBar toggleFunction={toggleSidebar} ref={node2} />
			<div className="sm:flex main-content">
				<Sidebar
					toggle={sidebarVisible}
					ref={node}
					tree={tree}
					slug={params.slug}
				/>
				<MainContent toggle={sidebarVisible}>
					{postData.contentHtml !== undefined && (
						<>
							<div className="p-6 pt-24 pb-12">
								<h1 className="text-4xl sm:text-6xl text-center font-semibold title">
									{postData.title}
								</h1>
								<h2 className="text-center text-lg text-gray-700">
									{params.slug[1].replace(/_/g, " ")}
								</h2>
							</div>
							<hr className="pb-4" />
							<div className="pb-6">
								<div
									className="prose pb-6 mx-auto"
									dangerouslySetInnerHTML={{
										__html: postData.contentHtml,
									}}
								/>
								<div className="flex justify-center">
									<a
										className="flex content-center hover:underline text-blue-700"
										href={
											"https://github.com/samrobbins85/notes-site/blob/master/notes/" +
											params.slug.join("/") +
											".md"
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
									{params.slug.length <= 2 &&
										params.slug[
											params.slug.length - 1
										].replace(/_/g, " ")}
									{params.slug.length === 3 &&
										params.slug[
											params.slug.length - 2
										].replace(/_/g, " ") +
											" - " +
											params.slug[
												params.slug.length - 1
											].replace(/_/g, " ")}
								</h1>

								<h2 className="text-center text-2xl text-gray-700">
									{params.slug.length === 1
										? "Select a module from the sidebar"
										: "Select a lecture from the sidebar"}
								</h2>
							</>
						)}
				</MainContent>
			</div>
		</>
	);
}

export default Lecture;

export async function getStaticProps({ params }) {
	const postData = await getPostData(params);
	const tree = getTree();
	return {
		props: {
			tree,
			postData,
			params,
		},
	};
}

export async function getStaticPaths() {
	const paths = getPaths();
	return {
		paths: paths,
		fallback: false,
	};
}
