import { useState } from "react";
import mdconvert from "../lib/remark";

export default function definition(props) {
	const [defin, setDefin] = useState("Definition");
	if (defin === "Definition") {
		mdconvert(setDefin, props.children);
	}
	return (
		<div className="border border-gray-400 rounded p-4 mx-2 my-6">
			<span className="block text-2xl font-semibold text-black">
				{props.name}
			</span>
			<div dangerouslySetInnerHTML={{ __html: defin }} />
		</div>
	);
}
