import { Map, Marker, ZoomControl } from 'pigeon-maps';

const ListingMap = ({ lat, long }) => {
	const coordinates = [Number(lat), Number(long)];
	return (
		<>
			<Map defaultCenter={coordinates} defaultZoom={14} mouseEvents={false} touchEvents={false}>
				<ZoomControl />
				<Marker anchor={coordinates} width={35} />
			</Map>
		</>
	);
};

export default ListingMap;
