const CardsWrapper = (props) => {
	return (
		<div className="max-w-6xl mx-auto px-4 py-8 bg-blue-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
			{props.children}
		</div>
	);
};

export default CardsWrapper;
