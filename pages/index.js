import MainContent from "../components/main_content";
import NavBar from "../components/navbar";
import Head from "next/head";
import Footer from "@/components/footer";
function Lecture() {
	return (
		<>
			<Head>
				<title>{"init.OSS"}</title>
				<meta
					name="description"
					content="Getting started with contributing to open source software"
				/>
			</Head>
			<NavBar sidebar={false} />
			<div className="flex min-h-screen w-full flex-col">
				<MainContent>
					<div className="p-6 pt-24 pb-12 flex justify-center">
						<link
							href="https://fonts.googleapis.com/css?family=Cookie"
							rel="stylesheet"
						></link>
						<div className="grid">
							<div className="text-center text-6xl leading-none tracking-tight">
								<h1 className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500 text-center inline-block">
									init
								</h1>
								<h1 className="bg-clip-text text-gray-700 text-center inline-block">
									.
								</h1>
								<h1 className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-500 text-center inline-block">
									OSS
								</h1>
							</div>

							<h2 className="text-lg text-gray-700 pt-6 text-center">
								Getting started with contributing to open source
								software
							</h2>
							<h2 className="text-center text-xl pt-12 pb-6">
								If you want to donate:
							</h2>
							<div className="flex justify-center">
								<div className="grid sm:grid-cols-2 gap-4">
									<a
										className="bmc-button"
										href="https://www.buymeacoffee.com/samrobbins"
									>
										<img
											src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
											alt="Buy me a coffee"
										/>
										<span>Buy me a coffee</span>
									</a>
									<div className="flex items-center justify-center">
										<div className="px-4 py-2 border border-gray-400 rounded ">
											<a href="https://github.com/sponsors/samrobbins85/">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
													className="h-4 inline-block stroke-current text-pink-500 pr-2"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
													/>
												</svg>
												Sponsor on GitHub
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</MainContent>
				<Footer />
			</div>
		</>
	);
}

export default Lecture;
