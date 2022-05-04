// Providers - Redux
import store, { persistor } from '../app/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// Providers - Moralis
import { MoralisProvider } from 'react-moralis';

// Custom Components
import Navbar from '../components/Navigation/Navbar';
import ContentWrapper from '../components/UI/ContentWrapper';

// Font Awesome - Icons Setup
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

// Global Styles TailwindCSS
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<MoralisProvider serverUrl={process.env.NEXT_PUBLIC_SERVER_URL} appId={process.env.NEXT_PUBLIC_APP_ID}>
					<Navbar />
					<ContentWrapper>
						<Component {...pageProps} />
					</ContentWrapper>
				</MoralisProvider>
			</PersistGate>
		</Provider>
	);
}

export default MyApp;
