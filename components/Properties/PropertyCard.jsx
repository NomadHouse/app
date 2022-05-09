import Image from 'next/image';
import BarcelonaImage from '../../images/barcelona_property_one.jpeg';

const PropertyCard = ({ imageFile, price, description, address, propertyManager }) => {
	return (
		<div className="bg-white mx-1 space-y-3 text-black border-2 border-gray-200 border-b-4 shadow-lg scroll-smooth">
			<Image src={imageFile ? imageFile : BarcelonaImage} alt="city_image" className="w-full h-full" />
			<p className="text-2xl font-semibold">${price}</p>
			<p>{description}</p>
			<p>{address}</p>
			<p className="uppercase text-gray-500 text-sm">{propertyManager}</p>
		</div>
	);
};

export default PropertyCard;
