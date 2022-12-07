import Head from "next/head";
import styles from "styles/Home.module.css";
import { Montserrat, Karla } from "@next/font/google";
const karla = Karla({ variable: "--karla", subsets: ["latin"] });
const montserrat = Montserrat({ variable: "--montserrat", subsets: ["latin"] });
import { ComicGrid, Header, HeroImage, IntroPanel, Footer } from "components";
import AppContextProvider from "state/AppContext";

export default function Home() {
	return (
		<div
			className={`${styles.container} ${karla.variable} ${montserrat.variable}`}
		>
			<AppContextProvider>
				<Head>
					<title>CMS React Training</title>
					<meta name="description" content="Generated by create next app" />
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<Header />
				<HeroImage />
				<main className={styles.main}>
					<IntroPanel />
					<ComicGrid />
				</main>
				<Footer />
			</AppContextProvider>
		</div>
	);
}
