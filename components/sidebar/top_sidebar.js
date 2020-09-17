// This is the top level sidebar included on the homepage
import ActiveLink from "@/components/ActiveLink";
const TopSidebar = React.forwardRef((props, ref) => {
	const toggle = props.toggle ? "" : "hidden md:block";
	return (
		<div
			className={`${toggle} md:hidden w-full max-w-xs z-10 main-content fixed`}
			ref={ref}
		>
			<div className="h-full p-4 overflow-x-hidden overflow-y-auto text-black bg-white border-r fixed pt-20 w-64 md:w-1/4 lg:w-1/5 max-w-xs">
				<div className="grid gap-y-4">
					<ActiveLink
						activeClassName="font-semibold"
						href="/learn_code"
					>
						<a>Learn to Code</a>
					</ActiveLink>
					<ActiveLink
						activeClassName="font-semibold"
						href="/learn_contribute"
					>
						<a>Learn to Contribute</a>
					</ActiveLink>
					<ActiveLink
						activeClassName="font-semibold"
						href="/practice_contribute"
					>
						<a>Practice Contributing</a>
					</ActiveLink>
					<ActiveLink
						activeClassName="font-semibold"
						href="/contribute"
					>
						<a>Contribute</a>
					</ActiveLink>
				</div>
			</div>
		</div>
	);
});

export default TopSidebar;
