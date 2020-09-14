const dirTree = require("directory-tree");

function removesize(tree) {
	var prop;
	for (prop in tree) {
		if (prop === "size" || prop === "path" || prop === "type") {
			delete tree[prop];
		} else if (prop === "children") {
			var element;
			for (element in tree[prop]) {
				removesize(tree[prop][element]);
			}
		}
	}
}

export function getTree() {
	const tree = dirTree("page_content/Learn_to_Code");
	removesize(tree);
	return tree;
}

export function getPaths() {
	const tree = dirTree("page_content");
	const list = [{ params: { slug: [] } }];

	for (var i of tree.children) {
		list.push({ params: { slug: [i.name] } });
	}
	return list;
}
