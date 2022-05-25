import { Map, Marker, ZoomControl } from 'pigeon-maps';
import { theme } from 'tailwind.config';

const ListingMap = (lat, long) => {
	return (
		<>
			<Map defaultCenter={[Number(lat), Number(long)]} defaultZoom={8} mouseEvents={false} touchEvents={false}>
				<ZoomControl />
				<Marker anchor={[Number(lat), Number(long)]} />
			</Map>
		</>
	);
};

export default ListingMap;
