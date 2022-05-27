import { useState } from 'react';

import Image from 'next/image';
import { Button, Checkbox, Dropdown } from 'web3uikit';
import { useMoralis } from 'react-moralis';
import moment from 'moment';

import Header from 'components/Header/CustomHeader';
import ListingMap from 'components/ListingMap';
import { listings } from 'data/listings';

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
	const { user, isAuthenticated, Moralis } = useMoralis();
	const [tosAccepted, setTosAccepted] = useState(false);
	const [isPending, setisPending] = useState(false);
	const [purchaseWeek, setPurchaseWeek] = useState(false);

	// Generate Array of ISO 8061 week numbers with date ranges
	function weekDates() {
		return (weekDates = Array.from({ length: 52 }, (v, i) => {
			let weekNum = i + 1;
			let week = moment().year('2022').isoWeek(weekNum);
			return {
				id: weekNum,
				label: `Wk${weekNum} ${week.isoWeekday(1).format('MM/DD/YYYY')} to ${week
					.isoWeekday(7)
					.format('MM/DD/YYYY')}`,
			};
		}));
	}

	async function handlePurchase(listing) {
		const options = {
			type: 'erc721',
			receiver: user.get('ethAddress'),
			contractAddress: listing.contractAddress,
			tokenId: purchaseWeek,
		};
		setisPending(true);
		try {
			await Moralis.transfer(options);
			console.log(`TX: ${tx}`);
		} catch (err) {
			console.error(err);
		} finally {
			setisPending(false);
		}
	}

	return (
		<div className="grid grid-cols-wrap gap-4 md:grid-cols-3 sm:grid-cols-1">
			<div className="md:col-span-2 col-span-1">
				<div >
					<Image alt='' classname="bg-gray-200 border-slate-800 rounded-lg drop-shadow-2xl" src={listing.imageFile} width={900} height={600} />
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
								options={weekDates()}
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
					onClick={() => handlePurchase()}
					text={!isAuthenticated ? "Please Connect Wallet": "Confirm Payment"}
					theme="colored"
					color="blue"
					isLoading={isPending}
					disabled={!tosAccepted || !purchaseWeek || !isAuthenticated}
					loadingText="Purchasing..."
					isTransparent="false"
				/>
			</div>
		</div>
	);
};

export default Listing;
