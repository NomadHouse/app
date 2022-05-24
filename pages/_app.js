// Providers - Redux
import store, { persistor } from 'app/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// Providers - Moralis
import { MoralisProvider } from 'react-moralis';

// Layout Component
import Layout from 'components/Layout';

// Font Awesome - Icons Setup
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

// Global Styles TailwindCSS
import 'styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<MoralisProvider serverUrl={process.env.NEXT_PUBLIC_SERVER_URL} appId={process.env.NEXT_PUBLIC_APP_ID}>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</MoralisProvider>
			</PersistGate>
		</Provider>
	);
}

export default MyApp;
