import { Map, Marker, ZoomControl } from 'pigeon-maps';
import { theme } from 'tailwind.config';

const ListingMap = (lat, long) => {
	return (
		<div className="w-1/1 h-3/5 pb-10">
			<Map defaultCenter={[Number(lat), Number(long)]} defaultZoom={8} mouseEvents={false} touchEvents={false}>
				<ZoomControl />
				<Marker anchor={[Number(lat), Number(long)]} />
			</Map>
		</div>
	);
};

export default ListingMap;
