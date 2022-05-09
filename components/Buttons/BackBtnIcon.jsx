import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const BackBtnIcon = ({ onClick }) => {
	return (
		<div>
			<button type="button" onClick={onClick} className="text-violet font-bold">
				<FontAwesomeIcon icon={faChevronLeft} style={{ fontSize: '30px' }} />
			</button>
		</div>
	);
};

export default BackBtnIcon;
