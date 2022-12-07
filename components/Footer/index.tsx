import Image from "next/image";
import logo from "assets/logo.png";
import styles from "styles/Footer.module.css";

export function Footer() {
	return (
		<footer className={styles.container}>
			<div className={styles.imgCont}>
				<Image src={logo} width={106} height={106} alt="Comic Closet" />
			</div>
			<div className={styles.links}>
				<a
					href="https://privacy.thewaltdisneycompany.com/en/"
					className={styles.link}
				>
					Privacy Policy
				</a>{" "}
				|{" "}
				<a
					href="https://www.marvel.com/corporate/marvel_unlimited_subscriber_agreement"
					className={styles.link}
				>
					Terms of Service
				</a>
			</div>
			<p>Copyright 2022. Comic Closet, LLC. All rights reserved.</p>
		</footer>
	);
}
