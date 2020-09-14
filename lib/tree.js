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

export function getTree(category) {
	const tree = dirTree("page_content/" + category);
	removesize(tree);
	return tree;
}

export function getPaths(category) {
	const tree = dirTree("page_content/" + category);
	const list = [{ params: { slug: [] } }];

	for (var i of tree.children) {
		if (i.name.endsWith(".mdx")) {
			list.push({ params: { slug: [i.name.replace(/\.[^/.]+$/, "")] } });
		} else {
			list.push({ params: { slug: [i.name] } });
			for (var j of i.children) {
				list.push({
					params: { slug: [i.name, j.name.replace(/\.[^/.]+$/, "")] },
				});
			}
		}
	}
	return list;
}
