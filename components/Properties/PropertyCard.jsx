import Image from 'next/image';
import Link from 'next/link';
import BarcelonaImage from 'images/barcelona_property_one.jpeg';

const PropertyCard = ({ key, href, imageFile, price, description, address, propertyManager }) => {
	return (
		<Link key={key} href={href} passHref>
			<div className="bg-white mx-1 space-y-3 text-black border-2 border-gray-200 border-b-4 shadow-lg scroll-smooth cursor-pointer">
				<Image src={imageFile ? imageFile : BarcelonaImage} alt="city_image" className="w-full h-full" />
				<p className="text-2xl font-semibold">${price}</p>
				<p>{description}</p>
				<p>{address}</p>
				<p className="uppercase text-gray-500 text-sm">{propertyManager}</p>
			</div>
		</Link>
	);
};

export default PropertyCard;
