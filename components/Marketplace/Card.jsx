import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi } from '@fortawesome/free-solid-svg-icons';

const MarketPlaceCard = ({ ranking, mbps, city, country, weather, price, image }) => {
	return (
		<div
			className={`bg-blue-300 w-auto h-auto rounded-xl p-6 m-4 space-y-4 text-white bg-cover bg-opacity-10 bg-${image}`}
		>
			{/* Top information */}
			<div className="flex justify-between text-shadow shadow-black pb-12">
				<div className="h-9 border-b-4">
					<p className="text-2xl">{ranking}</p>
				</div>
				{/* For the wifi icon */}
				<div className="flex items-center">
					<span className="mr-2">
						<FontAwesomeIcon icon={faWifi} style={{ fontSize: '20px' }} />
					</span>
					<div className="flex-row text-center">
						<p className="text-2xl">{mbps}</p>
						<p className="text-sm">Mbps</p>
					</div>
				</div>
			</div>
			{/* Central information */}
			<div className="flex-col text-center text-shadow-lg shadow-black">
				<h1 className="text-4xl font-bold pb-4">{city}</h1>
				{/* <p className="text-2xl font-bold pb-4">NY</p> */}
				<p className="text-2xl font-normal">{country}</p>
			</div>
			{/* Bottom information */}
			<div className="flex justify-between text-shadow shadow-black pt-12">
				<p>{weather}</p>
				<p className="text-2xl font-semibold">${price}/mo</p>
			</div>
		</div>
	);
};

export default MarketPlaceCard;
