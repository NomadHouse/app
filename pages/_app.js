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
		<MoralisProvider serverUrl={process.env.NEXT_PUBLIC_SERVER_URL} appId={process.env.NEXT_PUBLIC_APP_ID}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</MoralisProvider>
	);
}

export default MyApp;
