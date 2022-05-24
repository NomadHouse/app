import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useMoralis } from 'react-moralis';

// Redux Store
import { setUserWalletAddress } from 'features/user/userSlice';
import { persistor } from 'app/store';
import { useDispatch, useSelector } from 'react-redux';

// Setup Modal Library
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

// Custom Components - Modals (popups)
import MetamaskWalletModal from 'components/Modals/MetamaskModal';
import SettingsModal from 'components/Modals/SettingsModal';

// FontAwesome Icons for the Mobile Menu
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBars,
	faWallet,
	faXmark,
	faStore,
	faRectangleList,
	faMoneyCheckDollar,
	faGear,
} from '@fortawesome/free-solid-svg-icons';

const Modal = withReactContent(Swal);

const Navbar = () => {
	const dispatch = useDispatch();
	const [active, setActive] = useState(false);

	const userWalletAddress = useSelector((state) => state.user.userWalletAddress);

	// * Moralis Wallet login and logout >>>>>>>>>>>>>>>>>>>>>> START
	const { isAuthenticated, authenticate, authError, logout, user, isAuthenticating } = useMoralis();

	const loginWallet = async () => {
		if (!isAuthenticated) {
			await authenticate({
				signingMessage: 'Log in using Moralis to NomadHouse.io. Welcome to the next generation of Real State!',
			})
				.then(function (user) {
					dispatch(setUserWalletAddress(user.get('ethAddress')));
				})
				.catch(function (error) {
					console.error(error);
				});
		}
		Modal.close();
	};

	useEffect(() => {
		if (authError !== null) {
			Modal.fire({
				width: '40rem',
				icon: 'warning',
				background: '#ffffff',
				color: '#000',
				confirmButtonColor: '#000',
				showCloseButton: false,
				showCancelButton: false,
				title: `Error Code:	${authError?.code}`,
				text: authError?.message,
				confirmButtonText: 'Ok',
			});
		}
		if (!authError && isAuthenticated && userWalletAddress) {
			Modal.fire({
				width: '40rem',
				background: '#9d5af4',
				color: '#ffffff',
				confirmButtonColor: '#000',
				showCloseButton: false,
				showCancelButton: false,
				title: `Welcome! ...${userWalletAddress.slice(30)}`,
				text: 'Enjoy your	stay at NomadHouse.io!',
				confirmButtonText: 'Ok',
			});
		}
	}, [authError, isAuthenticated, userWalletAddress]);

	const logoutWallet = async () => {
		await logout();
		persistor.purge();
	};
	// * Moralis Wallet login and logout >>>>>>>>>>>>>>>>>>>>>> END

	// Other methods, handleClicks and Modals
	const walletConnection = async () => {
		await Modal.fire({
			width: '32rem',
			background: '#9d5af4',
			showCloseButton: false,
			showConfirmButton: false,
			timerProgressBar: true,
			html: <MetamaskWalletModal connectMetakask={loginWallet} />,
		});
	};

	const handleClick = () => {
		setActive(!active);
	};

	const closeMenu = () => {
		setActive(false);
	};

	const platformSettings = () => {
		setActive(false);
		Modal.fire({
			width: '32rem',
			background: '#9d5af4',
			showCloseButton: false,
			showConfirmButton: false,
			html: <SettingsModal />,
		});
	};

	return (
		<nav className="bg-violet text-white shadow-lg">
			<div className="mx-auto px-12 py-6 md:py-4">
				<div className="flex justify-between">
					<div className="flex items-center space-x-7">
						<div>
							{/* <!-- Website Logo --> */}
							<button onClick={closeMenu}>
								<Link href="/" passHref class="flex items-center py-2 px-2">
									<p className="font-bold text-white text-2xl cursor-pointer">NomadHouse</p>
								</Link>
							</button>
						</div>
						{/* <!-- Primary Navbar items --> */}
						<div className="hidden md:flex items-center space-x-4">
							<Link href="/" passHref className="py-2 px-2">
								<p className="text-white text-lg font-normal cursor-pointer">Marketplace</p>
							</Link>
							<Link href="/portfolio" passHref className="py-2 px-2">
								<p className="text-white text-lg font-normal cursor-pointer">Portfolio</p>
							</Link>
						</div>
					</div>
					{/* <!-- Secondary Navbar items --> */}
					<div className="hidden md:flex items-center space-x-3 ">
						<Link href="/seller" passHref>
							<p className="py-2 px-2 font-normal text-white rounded hover:bg-white hover:text-violet transition duration-300 cursor-pointer">
								Become a seller
							</p>
						</Link>
						{!isAuthenticated ? (
							<button
								onClick={walletConnection}
								className="flex justify-between py-2 px-2 font-semibold text-violet bg-white rounded cursor-pointer"
							>
								<p>Connect Wallet</p>
								<span className="ml-2">
									<FontAwesomeIcon icon={faWallet} style={{ fontSize: '20px' }} />
								</span>
							</button>
						) : (
							<button
								onClick={logoutWallet}
								className="flex justify-between py-2 px-2 font-semibold text-violet bg-white rounded cursor-pointer"
							>
								<p>Disconnect wallet</p>
								<span className="ml-2">
									<FontAwesomeIcon icon={faWallet} style={{ fontSize: '20px' }} />
								</span>
							</button>
						)}

						<button onClick={platformSettings}>
							<p className="py-2 px-2 font-semibold text-white cursor-pointer hover:rotate-180 transition-transform ">
								<FontAwesomeIcon icon={faGear} style={{ fontSize: '30px' }} />
							</p>
						</button>
					</div>
					{/* <!-- Mobile menu button --> */}
					<div className="md:hidden flex items-center">
						<button className="outline-none mobile-menu-button" onClick={handleClick}>
							{active ? (
								<FontAwesomeIcon icon={faXmark} style={{ fontSize: '25px' }} />
							) : (
								<FontAwesomeIcon icon={faBars} style={{ fontSize: '25px' }} />
							)}
						</button>
					</div>
				</div>
			</div>
			{/* <!-- mobile menu --> */}
			<div className={`${active ? 'flex' : 'hidden'} px-12 h-screen w-screen absolute bg-violet`}>
				<ul className="">
					<li>
						<button onClick={closeMenu}>
							<Link href="/" passHref>
								<div className="flex items-center">
									<span>
										<FontAwesomeIcon icon={faStore} style={{ fontSize: '20px' }} />
									</span>
									<p className="block text-sm px-4 py-4 font-semibold cursor-pointer">MarketPlace</p>
								</div>
							</Link>
						</button>
					</li>
					<li>
						<button onClick={closeMenu}>
							<Link href="/portfolio" passHref>
								<div className="flex items-center">
									<span>
										<FontAwesomeIcon icon={faRectangleList} style={{ fontSize: '20px' }} />
									</span>
									<p className="block text-sm px-4 py-4 font-semibold cursor-pointer">Portfolio</p>
								</div>
							</Link>
						</button>
					</li>
					<li>
						<button onClick={closeMenu}>
							<Link href="/seller" passHref>
								<div className="flex items-center">
									<span>
										<FontAwesomeIcon icon={faMoneyCheckDollar} style={{ fontSize: '20px' }} />
									</span>
									<p className="block text-sm px-4 py-4 font-semibold cursor-pointer">
										Become a seller
									</p>
								</div>
							</Link>
						</button>
					</li>
					<li>
						<button onClick={walletConnection}>
							<div className="flex items-center">
								<span>
									<FontAwesomeIcon icon={faWallet} style={{ fontSize: '20px' }} />
								</span>
								<p className="block text-sm px-4 py-4 font-semibold cursor-pointer">Connect Wallet</p>
							</div>
						</button>
					</li>
					<li>
						<button onClick={platformSettings}>
							<div className="flex items-center">
								<span>
									<FontAwesomeIcon icon={faGear} style={{ fontSize: '20px' }} />
								</span>
								<p className="block text-sm px-4 py-4 font-semibold cursor-pointer">Settings</p>
							</div>
						</button>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
