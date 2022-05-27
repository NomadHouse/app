import Header from 'components/Header/CustomHeader';
import PageTitle from 'components/Typography/PageTitle';
import { useMoralis, useNFTBalances } from 'react-moralis';
import { NFTBalance } from 'web3uikit';

const Portfolio = () => {
	const { data: NFTBalances } = useNFTBalances();
	const { user } = useMoralis();

	console.log('NFTBalances', NFTBalances);
	console.log('MoralisUser', user);
	return (
		<>
			<Header title="Portfolio | NomadHouse" />
			<div className="flex-wrap">
				<PageTitle title="Portfolio" />
				<div>
					<NFTBalance className="my-8" address={user?.get('ethAddress')} chain="kovan" />
				</div>
			</div>
		</>
	);
};

export default Portfolio;
