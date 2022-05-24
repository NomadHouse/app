import Card from './Card';

import CardsWrapper from 'components/UI/CardsWrapper';

import cities from 'citiesData.json';

const Marketplace = () => {
	return (
		<>
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
