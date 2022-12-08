import "styles/globals.css";
import { AppProps } from "next/app";

import { library, config } from '@fortawesome/fontawesome-svg-core'
import { faBolt} from '@fortawesome/free-solid-svg-icons'
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
library.add(faBolt)

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default MyApp;
