const SettingsModal = () => {
	return (
		<div className="text-white">
			<h1 className="text-4xl pt-4 pb-8">Comming soon...</h1>
			<p>On this modal the user will be able to:</p>
			<ol className="list-disc list-inside flex-col text-left mt-4">
				<div className="ml-4">
					<li>Acess to his profile</li>
					<li>Access to his properties or listings</li>
					{/* eslint-disable-next-line react/no-unescaped-entities */}
					<li>Access to his NFt's</li>
				</div>
			</ol>
		</div>
	);
};

export default SettingsModal;
