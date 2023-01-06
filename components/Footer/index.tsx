import { Logo } from "components/Logo";
import styles from "styles/Footer.module.css";

export function Footer() {
	return (
		<footer className={styles.container}>
			<Logo containerStyles={styles.logo} />
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
