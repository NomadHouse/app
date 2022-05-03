import Image from 'next/image';
import MetaMaskLogo from '../../images/MetamaskLogo.svg';

const MetamaskModal = ({ connectMetakask }) => {
	return (
		<div className="text-white flex-row">
			<div className="mt-2 flex justify-center">
				<h1 className="text-2xl">Choose your wallet</h1>
			</div>
			<div className="mt-16 flex flex-col">
				<div className="flex flex-row justify-around mb-14">
					<div className="hover:opacity-70">
						<button className="flex flex-col items-center" onClick={connectMetakask}>
							<Image src={MetaMaskLogo} alt="Metamask Logo" width={125} height={125} className="mb-4" />
							<span className="text-2xl">Metamask</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MetamaskModal;
