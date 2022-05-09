import Card from './Card';
import SearchBar from './SearchBar';
import Title from './Title';
import CardsWrapper from '../UI/CardsWrapper';

import cities from '../../citiesData.json';

const Marketplace = () => {
	return (
		<>
			<SearchBar />
			<Title title="Inspiration for your next adventure" />
			<CardsWrapper>
				{cities &&
					cities.map((city) => {
						return (
							<Card
								image={
									city.image === 'york'
										? 'bg-york'
										: city.image === 'medellin'
										? 'bg-medellin'
										: city.image === 'berlin'
										? 'bg-berlin'
										: city.image === 'paris'
										? 'bg-paris'
										: city.image === 'london'
										? 'bg-london'
										: city.image === 'barcelona'
										? 'bg-barcelona'
										: null
								}
								key={city.id}
								href={`/city/${city.city}/${city.country}/${city.lat}/${city.long}`}
								city={city.city}
								country={city.country}
								ranking={city.ranking}
								mbps={city.mbps}
								price={city.price}
								weather={city.weather}
							/>
						);
					})}
			</CardsWrapper>
		</>
	);
};

export default Marketplace;
