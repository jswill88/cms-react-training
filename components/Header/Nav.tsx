import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "styles/Nav.module.css";
import { AccessibleHider } from "components/AccessibleHider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Nav() {
	const [active, setActive] = useState(false);
	const [desktop, setDesktop] = useState(null);

	const handleResize = () => {
		if (window.innerWidth >= 1024 && (desktop === false || desktop === null)) {
			setActive(true);
			setDesktop(true);
			return;
		}
		if (window.innerWidth < 1024 && (desktop === true || desktop === null)) {
			setActive(false);
			setDesktop(false);
		}
	};

	useEffect(() => {
		handleResize();
		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div className={styles.container}>
			<button
				className={styles.menuButton}
				onClick={() => setActive((state) => !state)}
			>
				<FontAwesomeIcon icon="bars" />
			</button>
			<AccessibleHider active={active}>
				<nav className={`${styles.nav} ${active ? styles.show : ""}`}>
					<Link href="#">Home</Link>
					<a
						href="https://www.marvel.com/shop/marvel-must-haves"
						target="_blank"
					>
						Shop
					</a>
				</nav>
			</AccessibleHider>
		</div>
	);
}
