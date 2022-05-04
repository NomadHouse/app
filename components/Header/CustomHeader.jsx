import Head from 'next/head';

const CustomHeader = ({ title }) => {
	return (
		<Head>
			<title>{title}</title>
			<meta
				name="description"
				content="NomadHouse is bringing real estate transactions on chain to unlock hyper fractional ownership. Their bet is that the liquidity of ownership is optimal for the growing class of remote workers—the nightly cost on property you own is ~1/6th the cost of an Airbnb."
			/>
			<link rel="icon" href="/favicon.ico" />
		</Head>
	);
};

export default CustomHeader;
