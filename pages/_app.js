import "../styles/index.css";
import "../styles/prism-atom-dark.css";
import {  useState } from "react";
function MyApp({ Component, pageProps }) {
	const [sidebar, setSidebar] = useState(false);
	return (
		<Component sidebar={sidebar} setSidebar={setSidebar} {...pageProps} />
	);
}

export default MyApp;
