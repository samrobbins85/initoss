import "../styles/index.css";
import "../styles/prism-atom-dark.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
function MyApp({ Component, pageProps }) {
	const [sidebar, setSidebar] = useState(false);
	const router = useRouter();
	useEffect(() => {
		const handleRouteChange = (url) => {
			gtag.pageview(url);
		};
		router.events.on("routeChangeComplete", handleRouteChange);
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.events]);
	return (
		<Component sidebar={sidebar} setSidebar={setSidebar} {...pageProps} />
	);
}

export default MyApp;
