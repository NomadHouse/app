import Card from './Card';
import SearchBar from './SearchBar';
import Title from './Title';
import CardsWrapper from '../UI/CardsWrapper';

const Marketplace = () => {
	return (
		<>
			<SearchBar />
			<Title title="Inspiration for your next adventure" />
			<CardsWrapper>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</CardsWrapper>
		</>
	);
};

export default Marketplace;
