import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const MarketPlaceSearchBar = () => {
	return (
		<div className="flex justify-center align-center text-center items-center mt-4 mb-8">
			<div className="flex w-3/5 items-center border-b-2 border-violet">
				<FontAwesomeIcon
					icon={faMagnifyingGlass}
					style={{ fontSize: '25px', color: '#9d5af4', marginLeft: '2rem' }}
				/>

				<input
					className="w-full h-12 text-center focus:placeholder:text-transparent placeholder:text-slate-400 sm:text-sm md:text-3xl focus:outline-none text-gray-700"
					placeholder="Where would you like to live?"
					type="text"
				/>
			</div>
		</div>
	);
};

// placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"

export default MarketPlaceSearchBar;
