import MainContent from "../components/main_content";
import NavBar from "../components/navbar";
import Head from "next/head";
import Footer from "@/components/footer";
import TopSidebar from "@/components/sidebar/top_sidebar";
import { useRef, useEffect, useState } from "react";

export default function Practice_Contribute({ sidebar, setSidebar }) {
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
				<title>{"init.OSS"}</title>
				<meta
					name="description"
					content="Getting started with contributing to open source software"
				/>
			</Head>
			<NavBar toggleFunction={toggleSidebar} ref={node2} />
			<div className="flex">
				<TopSidebar toggle={sidebar} ref={node} />
				<div className="flex flex-col min-h-screen w-full">
					<MainContent toggle={sidebar}>
						<div className="p-6 pt-24 pb-12 flex justify-center">
							<div className="grid">
								<div className="text-center text-6xl leading-none tracking-tight">
									<h1>Coming Soon</h1>
								</div>

								<h2 className="text-lg text-gray-700 pt-6 text-center">
									Browse the other pages until this is
									complete
								</h2>
							</div>
						</div>
					</MainContent>
					<Footer />
				</div>
			</div>
		</>
	);
}
