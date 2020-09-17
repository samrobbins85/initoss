function MainContent(props) {
	const toggle = props.toggle ? "opacity-75 sm:opacity-100" : "";
	return (
		<div className={`${toggle} z-0 bg-white p-4 flex-grow`}>
			{props.children}
		</div>
	);
}

export default MainContent;
