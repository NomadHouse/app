import { Map, Marker, ZoomControl } from 'pigeon-maps';

const ListingMap = (lat, long) => {
	return (
			<div className="container mx-auto aspect-video">
				<Map
					defaultCenter={[Number(lat), Number(long)]}
					defaultZoom={13}
					defaultHeight={400}
					defaultWidth={600}
					mouseEvents={false}
					touchEvents={false}
				>
					<ZoomControl />
					<Marker anchor={[Number(lat), Number(long)]}/>
				</Map>
			</div>
	);
};

export default ListingMap;
