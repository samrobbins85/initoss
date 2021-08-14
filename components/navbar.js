import React from "react";
import { FeedbackFish } from "@feedback-fish/react";
import ActiveLink from "@/components/ActiveLink";
import Link from "next/link";
const NavBar = React.forwardRef((props, ref) => {
	return (
		<nav className="fixed h-16 p-4 bg-white border-b border-gray-200 shadow w-full z-20 flex justify-between">
			<span className="visible md:hidden" ref={ref}>
				<button
					onClick={() => props.toggleFunction()}
					aria-label="Open Side Navbar"
				>
					<svg
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						viewBox="0 0 24 24"
						stroke="currentColor"
						className="h-5"
					>
						<path d="M4 6h16M4 12h16M4 18h16"></path>
					</svg>
				</button>
			</span>
			<span className="block ">
				<Link href="/">
					<a className="text-xl">
						<span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500 text-center inline-block">
							init
						</span>
						.
						<span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-500 text-center inline-block">
							OSS
						</span>
					</a>
				</Link>
			</span>
			<div className="hidden md:flex justify-start items-center ">
				<ActiveLink href="/learn_code" activeClassName="font-semibold">
					<a className="px-4">Learn to Code</a>
				</ActiveLink>
				<ActiveLink
					href="/learn_contribute"
					activeClassName="font-semibold"
				>
					<a className="px-4">Learn to Contribute</a>
				</ActiveLink>
				<ActiveLink
					href="/practice_contribute"
					activeClassName="font-semibold"
				>
					<a className="px-4">Practice Contributing</a>
				</ActiveLink>
				<ActiveLink href="/contribute" activeClassName="font-semibold">
					<a className="px-4">Contribute</a>
				</ActiveLink>
			</div>
			<div className="flex gap-4">
				<FeedbackFish projectId="dcf722e7ac0c13">
					<button>Send feedback</button>
				</FeedbackFish>
				<a
					className="flex"
					href="https://github.com/init-OSS/initoss"
					aria-label="GitHub Repository"
				>
					<svg viewBox="0 0 24 24" className="h-5 self-center">
						<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
					</svg>
				</a>
			</div>
		</nav>
	);
});

NavBar.displayName = "NavBar";

export default NavBar;
