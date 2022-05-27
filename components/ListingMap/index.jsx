import { Map, Overlay, ZoomControl } from 'pigeon-maps';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const ListingMap = ({ lat, long }) => {
	const coordinates = [Number(lat), Number(long)];
	return (
		<>
			<Map defaultCenter={coordinates} defaultZoom={14} mouseEvents={false} touchEvents={false} height={250}>
				<ZoomControl />
				<Overlay anchor={coordinates}>
					<FontAwesomeIcon
						icon={faLocationDot}
						style={{
							fontSize: '30px',
							color: 'red',
						}}
					/>
				</Overlay>
			</Map>
		</>
	);
};

export default ListingMap;
