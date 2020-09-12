import { useState } from "react";
import mdconvert from "../lib/remark";

export default function corollary(props) {
	const [Corollary, setCorollary] = useState("Corollary");
	if (Corollary === "Corollary") {
		mdconvert(setCorollary, props.children);
	}
	return (
		<div className="border border-orange-400 rounded p-4 mx-2 my-6 bg-orange-200">
			<span className="block text-2xl font-semibold text-orange-600">
				Corollary
			</span>
			<div dangerouslySetInnerHTML={{ __html: Corollary }} />
		</div>
	);
}
