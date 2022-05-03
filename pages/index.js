// Custom components
import Header from '../components/Header/CustomHeader';
import MarketPlace from '../components/Marketplace/index';

export default function Home() {
	return (
		<div>
			<Header title="NomadHouse - Home" />
			<main>
				<MarketPlace />
			</main>
		</div>
	);
}
