import Navbar from './Navigation/Navbar';

const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			<main className='flex justify-center grow max-w-7xl mx-auto px-5'>{children}</main>
		</>
	);
};

export default Layout;
