const CardsWrapper = (props) => {
	return (
		<div className="px-4 py-8 mt-8 bg-gray-200 border-slate-800 rounded-lg drop-shadow-2xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
			{props.children}
		</div>
	);
};

export default CardsWrapper;
