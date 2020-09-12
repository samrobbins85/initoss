import { useState } from "react";
import mdconvert from "../lib/remark";

export default function lemma(props) {
	const [Lemma, setLemma] = useState("Lemma");
	if (Lemma === "Lemma") {
		mdconvert(setLemma, props.children);
	}
	return (
		<div className="border border-green-400 rounded p-4 mx-2 my-6 bg-green-200">
			<span className="block text-2xl font-semibold text-green-600">
				Lemma
			</span>
			<div dangerouslySetInnerHTML={{ __html: Lemma }} />
		</div>
	);
}
