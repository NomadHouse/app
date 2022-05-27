import Header from 'components/Header/CustomHeader';
import PageTitle from 'components/Typography/PageTitle';
import React, { useState } from 'react';
import { useMoralis, useNFTBalances } from 'react-moralis';
import { NFTBalance } from 'web3uikit';



function Portfolio() {
	const { data: NFTBalances } = useNFTBalances();
	const { Moralis, chainId, user } = useMoralis();
	const [visible, setVisibility] = useState(false);

	console.log('NFTBalances', NFTBalances);
	console.log('MoralisUser', user);
	return (
		<>
			<Header title="Portfolio | NomadHouse" />
			<PageTitle title="Portfolio" />
			<div className="flex-wrap m-auto w-1/1 gap-2.5">
				<NFTBalance address={user.get('ethAddress')} chain="eth" />
			</div>
		</>
	);
}

export default Portfolio;
