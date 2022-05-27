import BackBtn from 'components/Navigation/BackBtn';
import Navbar from './Navigation/Navbar';

const Layout = ({ children }) => {
	return (
		<>
			<Navbar className="z-50" />
			<BackBtn />
			<main className='flex justify-center max-w-7xl mx-auto px-6 '>{children}</main>
		</>
	);
};

export default Layout;
