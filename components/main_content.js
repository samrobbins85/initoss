function MainContent(props) {
	const toggle = props.toggle ? "opacity-75 sm:opacity-100" : "";
	return (
		<div className={`${toggle} z-0 sm:flex-1 bg-white main-content p-4`}>
			{props.children}
		</div>
	);
}

export default MainContent;
