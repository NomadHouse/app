import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { useRouter } from 'next/router';

const BackBtn = () => {
	const router = useRouter();

	return (
		<div className="w-full max-w-7xl mt-2 px-4">
			{router.pathname !== '/' && (
				<button type="button" onClick={() => router.back()} className="text-violet font-bold m-2">
					<FontAwesomeIcon icon={faChevronLeft} style={{ fontSize: '30px' }} />
				</button>
			)}{' '}
		</div>
	);
};

export default BackBtn;
