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
	const tree = dirTree("notes");
	removesize(tree);
	return tree;
}

export function getPaths() {
	const tree = dirTree("notes");
	const list = [{ params: { slug: [] } }];

	for (var i of tree.children) {
		list.push({ params: { slug: [i.name] } });
		for (var j of i.children) {
			list.push({ params: { slug: [i.name, j.name] } });
			for (var k of j.children) {
				if (k.name.endsWith(".md")) {
					list.push({
						params: {
							slug: [
								i.name,
								j.name,
								k.name.replace(/\.[^/.]+$/, ""),
							],
						},
					});
				} else {
					list.push({ params: { slug: [i.name, j.name, k.name] } });
					for (var l of k.children) {
						list.push({
							params: {
								slug: [
									i.name,
									j.name,
									k.name,
									l.name.replace(/\.[^/.]+$/, ""),
								],
							},
						});
					}
				}
			}
		}
	}
	return list;
}
