import LinkList from "./LinkList";

const Sidebar = React.forwardRef((props, ref) => {
	const toggle = props.toggle ? "" : "hidden md:block";

	function Submodule_List() {
		return (
			<ul className="divide-transparent pt-4">
				{props.tree.children
					.sort(function (a, b) {
						if ("extension" in a && !("extension" in b)) {
							return -1;
						}
						if ("extension" in b && !("extension" in a)) {
							return 1;
						}
						return 0;
					})
					.map(function (elem) {
						if ("extension" in elem) {
							return (
								<LinkList
									key={elem.name}
									section={props.category}
									lecture={elem.name}
								/>
							);
						} else {
							return (
								<li
									key={elem.name}
									className="text-xl font-semibold my-2"
								>
									{elem.name.replace(/_/g, " ")}
									<ul className="text-base font-normal">
										{elem.children.map((lecture) => (
											<LinkList
												key={lecture.name}
												section={props.category}
												subsection={elem.name}
												lecture={lecture.name}
											/>
										))}
									</ul>
								</li>
							);
						}
					})}
			</ul>
		);
	}

	return (
		<div
			className={`${toggle} sm:relative w-full max-w-xs z-10 main-content fixed`}
			ref={ref}
		>
			<div className="h-full p-4 overflow-x-hidden overflow-y-auto text-black bg-white border-r fixed pt-20 w-64 md:w-1/4 lg:w-1/5 max-w-xs">
				<Submodule_List />
			</div>
		</div>
	);
});

Sidebar.displayName = "Sidebar";

export default Sidebar;
