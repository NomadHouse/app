import Header from 'components/Header/CustomHeader';
import MarketPlace from 'components/Marketplace/index';
import PageTitle from 'components/Typography/PageTitle'

export default function Home() {
	return (
		<div className='max-w-100'>
			<PageTitle class title="Inspiration for your next adventure" />
			<Header title="NomadHouse - Home" />
			<MarketPlace />
		</div>
	);
}
