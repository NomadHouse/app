import Header from 'components/Header/CustomHeader';
import MarketPlace from 'components/Marketplace/index';
import PageTitle from 'components/Typography/PageTitle'

export default function Home() {
	return (
		<div className='max-w-100 mt-20'>
			<Header title="NomadHouse - Home" />
			<PageTitle title="Inspiration for your next adventure" />
			<MarketPlace />
		</div>
	);
}
