import { useRouter } from 'next/router';

import { Map, Marker, ZoomControl, Overlay } from 'pigeon-maps';
import MarketPlaceSearchBar from '../../../../../../components/Marketplace/SearchBar';
import BackBtnIcon from '../../../../../../components/Buttons/BackBtnIcon';
import PropertyCard from '../../../../../../components/Properties/PropertyCard';
import PropertyCardsWrapper from '../../../../../../components/UI/PropertyCardsWrapper';

import properties from '../../../../../../propertyData.json';
import MapCitiesWrapper from '../../../../../../components/UI/MapCitiesWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const CityPage = () => {
	const router = useRouter();
	const { cityName, cityCountry, lat, long } = router.query;

	const specificProperties = properties.filter((property) => property.city === cityName);

	return (
		<MapCitiesWrapper>
			<MarketPlaceSearchBar />
			<div className="mt-16 mb-4 flex items-center justify-between">
				<BackBtnIcon onClick={() => router.back()} />
				<h1 className="text-2xl">
					Properties available in{' '}
					<span className="text-3xl text-violet font-semibold">
						{cityName}, {cityCountry}
					</span>
				</h1>
			</div>

			<div className="flex flex-col sm:flex-row">
				<div>
					<Map height={600} width={600} defaultCenter={[Number(lat), Number(long)]} defaultZoom={13}>
						<ZoomControl />
						{specificProperties[0]?.properties.map((property) => {
							return (
								<Overlay key={property.id} anchor={[Number(property.lat), Number(property.long)]}>
									<FontAwesomeIcon
										icon={faLocationDot}
										style={{
											fontSize: '30px',
											color: 'red',
										}}
									/>
								</Overlay>
							);
						})}
					</Map>
				</div>

				<div className="w-full overflow-y-auto" style={{ height: '600px' }}>
					<PropertyCardsWrapper>
						{specificProperties[0]?.properties.map((property) => {
							console.log(property);
							return (
								<PropertyCard
									key={property.id}
									image={property.imageFile}
									price={property.price}
									description={property.description}
									address={property.address}
									propertyManager={property.propertyManager}
								/>
							);
						})}
					</PropertyCardsWrapper>
				</div>
			</div>
		</MapCitiesWrapper>
	);
};

export default CityPage;
