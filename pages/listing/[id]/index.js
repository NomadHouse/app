import { Map, Marker, ZoomControl, Overlay } from 'pigeon-maps';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

import { listings } from 'data/listings';
import Header from 'components/Header/CustomHeader';
import ContentWrapper from 'components/UI/ContentWrapper';
import PageTitle from 'components/Typography/PageTitle';
import ListingMap from 'components/ListingMap';
import Image from 'next/image';
import { Button, Checkbox } from 'web3uikit';
import BackBtnIcon from 'components/Buttons/BackBtnIcon';

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
	return (
		<>
			<BackBtnIcon/>
			<Header title="Listing | NomadHouse" />

			<div className="flex-row gap-3 my-4">
				<div className="w-1/2">
					<Image src={listing.imageFile} width={900} height={600} />
					<ListingMap lat={listing.lat} long={listing.long} />
				</div>
				<PageTitle className="w-2/5" title={listing.address} />
				<p>{listing.description}</p>

				<div className="my-4">
					<ol>
						<li>{listing.price} investment</li>
						<li></li>
						<li>0% Transaction fee</li>
					</ol>
				</div>
				<Checkbox
					id="tos-checkbox"
					label={
						<div>
							I have read the{' '}
							<a href="/tos" target="_blank">
								<u>Terms & Conditions</u>
							</a>
						</div>
					}
					onChange={() => {}}
				/>
				<Button
					id="purchase-button-primary"
					onClick={() => {
						setIsLoading(true);
					}}
					text="Confirm Payment"
					theme="colored"
					color="#9d5af4"
					isLoading={isLoading}
					loadingText="Purchasing..."
				/>
			</div>
		</>
	);
};

export default Listing;
