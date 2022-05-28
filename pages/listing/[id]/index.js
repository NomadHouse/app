import { useEffect, useState } from 'react';
import { useMoralis, useWeb3ExecuteFunction } from 'react-moralis';

import Image from 'next/image';
import { Button, Checkbox, Dropdown } from 'web3uikit';

import Header from 'components/Header/CustomHeader';
import ListingMap from 'components/ListingMap';
import { listings } from 'data/listings';
import ABI from 'data/marketplaceAbi.json';

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
	const [tosAccepted, setTosAccepted] = useState(false);
	const [purchaseWeek, setPurchaseWeek] = useState(false);

	const { Moralis, user, isAuthenticated, enableWeb3 } = useMoralis();

	// Call buy Marketplace function
	const {
		error: buyError,
		fetch: buyShare,
		isLoading: isBuyLoading,
	} = useWeb3ExecuteFunction({
		abi: ABI,
		contractAddress: listing.contractAddress,
		functionName: 'buy',
		msgValue: Moralis.Units.ETH('0.000000000000000001'),
		params: {
			listingId: purchaseWeek,
		},
	});

	// Call getListings Marketplace function
	const {
		data: sharesAvailable,
		error: fetchShareserror,
		fetch: fetchAvailableShares,
	} = useWeb3ExecuteFunction({
		abi: ABI,
		contractAddress: listing.contractAddress,
		functionName: 'getListings',
		params: {
			start: 1,
			length: 5,
		},
	});

	useEffect(() => {
		enableWeb3();
		fetchAvailableShares();
		console.log(sharesAvailable);
	}, [user]);

	return (
		<div className="grid grid-cols-wrap gap-4 md:grid-cols-3 sm:grid-cols-1">
			<div className="md:col-span-2 col-span-1">
				<div>
					<Image
						alt=""
						className="bg-gray-200 border-slate-800 rounded-lg drop-shadow-2xl"
						src={listing.imageFile}
						width={900}
						height={600}
					/>
				</div>
				<div className="md:h-3/5 md:block hidden">
					<ListingMap lat={listing.lat} long={listing.long} />
				</div>
			</div>
			<div className="col-span-1 space-y-4 mb-0 bg-gray-200 border-slate-800 rounded-lg drop-shadow-2xl p-4 order-2">
				<div className="space-y-4 mb-4">
					<h1 className="text-4xl">{listing.address}</h1>
					<h2 className="text-xl">{listing.description}</h2>
					<span>
						{/* <Dropdown /> */}
						<h2 className="text-xl font-bold my-4">
							Share:{' '}
							<Dropdown
								icon={'calendar'}
								options={[
									{ id: 1, label: 'Week 1' },
									{ id: 2, label: 'Week 2' },
									{ id: 3, label: 'Week 3' },
									{ id: 4, label: 'Week 4' },
								]}
								onChange={(selectedOption) => setPurchaseWeek(selectedOption.id)}
							/>
						</h2>
					</span>
					<Header title="Listing | NomadHouse" />
					<ul className="list-disc mx-4 py-4 text-md space-y-2">
						<li>{listing.price} investment</li>
						<li>$20 / month dues subsciption</li>
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
					onClick={async () => await buyShare()}
					text={!isAuthenticated ? 'Please Connect Wallet' : 'Buy Now'}
					theme="colored"
					color="blue"
					isLoading={isBuyLoading}
					disabled={!tosAccepted || !purchaseWeek || !isAuthenticated}
					loadingText="Purchasing..."
					isTransparent="false"
				/>
			</div>
		</div>
	);
};

export default Listing;
