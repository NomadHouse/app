const PropertyCardsWrapper = (props) => {
	return (
		<div className="w-full rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
			{props.children}
		</div>
	);
};

export default PropertyCardsWrapper;
