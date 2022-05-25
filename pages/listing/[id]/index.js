import { Map, Marker, ZoomControl, Overlay } from 'pigeon-maps';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

import { listings } from 'data/listings';
import Header from 'components/Header/CustomHeader';
import ListingMap from 'components/ListingMap';
import Image from 'next/image';
import { Button, Checkbox, Dropdown } from 'web3uikit';

// TODO: Fix Map display
// TODO: Add inveted triangle li bullets
// TODO: Fetch available weeks from listing NFT metadata

export const getStaticProps = async ({ params }) => {
	const listingsList = listings.filter((p) => p.id.toString() === params.id);
	return {
		props: {
			listing: listingsList[0],
		},
	};
};

export const getStaticPaths = async () => {
	const paths = listings.map((listing) => ({
		params: { id: listing.id.toString() },
	}));
	return { paths, fallback: false };
};

const Listing = ({ listing }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [tosAccepted, setTosAccepted] = useState(false);

	return (
		<div className="grid grid-cols-wrap gap-4 md:grid-cols-3 sm:grid-cols-1">
			{/* <ListingImages/>  */}
			<div className="md:col-span-2 sm:col-span-1">
				<Image alt='' src={listing.imageFile} width={900} height={600} />
				<div className="hidden md:block w-auto h-3/5">
					<ListingMap lat={Number(listing.lat)} long={Number(listing.long)} />
				</div>
			</div>
			<div className="col-span-1 space-y-4 mb-8">
				<div className="space-y-4 mb-4">
					<h1 className="text-4xl">{listing.address}</h1>
					<h2 className="text-xl">{listing.description}</h2>
					<span>
						{/* <Dropdown /> */}
						<h2 className="text-xl font-bold my-4">Share: $DATE</h2>
					</span>
					<Header title="Listing | NomadHouse" />
					<ul className="list-disc mx-4 py-4 text-md space-y-2">
						<li>{listing.price} investment</li>
						<li> $20 / month dues subsciption</li>
						<li>0% Transaction fee</li>
					</ul>
				</div>
				<Checkbox
					id="tos-checkbox"
					label={
						<div>
							I have read the{' '}
							<a
								href="https://gateway.pinata.cloud/ipfs/QmaWJMaPnNnPnSdVMy5DRDE1funjMcJQuLhbSDuYuZmzG1"
								target="_blank"
								rel="noreferrer"
							>
								<u>Terms & Conditions</u>
							</a>
						</div>
					}
					onChange={() => setTosAccepted(!tosAccepted)}
				/>
				<Button
					className="m-8"
					id="purchase-button-primary"
					onClick={() => setIsLoading(true)}
					text="Confirm Payment"
					theme="colored"
					color="blue"
					isLoading={isLoading}
					disabled={!tosAccepted}
					loadingText="Purchasing..."
					isTransparent="false"
				/>
			</div>
		</div>
	);
};

export default Listing;
