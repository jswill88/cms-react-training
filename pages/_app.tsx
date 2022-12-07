import "styles/globals.css";
import { AppProps } from "next/app";

import { library, config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
	faBolt,
	faFilter,
	faTimes,
	faAngleLeft,
	faAngleRight,
	faBars,
} from "@fortawesome/free-solid-svg-icons";
config.autoAddCss = false;
library.add(faBolt, faFilter, faTimes, faAngleLeft, faAngleRight, faBars);

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default MyApp;
