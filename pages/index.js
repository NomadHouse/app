// Custom components
import Header from '../components/Header/CustomHeader';
import MarketPlace from '../components/Marketplace/index';
import ContentWrapper from '../components/UI/ContentWrapper';

export default function Home() {
	return (
		<div>
			<Header title="NomadHouse - Home" />
			<ContentWrapper>
				<MarketPlace />
			</ContentWrapper>
		</div>
	);
}
