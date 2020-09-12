import { useState } from "react";
import mdconvert from "../lib/remark";
export default function important(props) {
	const [Important, setImportant] = useState("Important");
	if (Important === "Important") {
		mdconvert(setImportant, props.children);
	}
	return (
		<div className="border border-red-700 rounded p-4 mx-2 my-6 bg-red-300">
			<span className="block text-xl font-semibold text-red-800 uppercase leading-tight">
				Important
			</span>
			<div
				className="text-black"
				dangerouslySetInnerHTML={{ __html: Important }}
			/>
		</div>
	);
}
