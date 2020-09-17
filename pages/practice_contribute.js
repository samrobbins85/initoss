import MainContent from "../components/main_content";
import NavBar from "../components/navbar";
import Head from "next/head";
export default function Practice_Contribute() {
	return (
		<>
			<Head>
				<title>{"init.OSS"}</title>
				<meta
					name="description"
					content="Getting started with contributing to open source software"
				/>
			</Head>
			<NavBar />
			<div className="sm:flex main-content">
				<MainContent>
					<div className="p-6 pt-24 pb-12 flex justify-center">
						<div className="grid">
							<div className="text-center text-6xl leading-none tracking-tight">
								<h1>Coming Soon</h1>
							</div>

							<h2 className="text-lg text-gray-700 pt-6 text-center">
								Browse the other pages until this is complete
							</h2>
						</div>
					</div>
				</MainContent>
			</div>
		</>
	);
}
