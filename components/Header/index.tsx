import Link from "next/link";
import Nav from "./Nav";
import { Logo } from "components";
import styles from "styles/Header.module.css";
import { useAppContext } from "state/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Header() {
	const { favorites } = useAppContext();
	return (
		<header className={styles.container}>
			<Logo containerStyles={styles.logo} />
			<div className={styles.navFavoritesCont}>
				<Nav />
				<Link href="#favorites" className={styles.favorites}>
					<FontAwesomeIcon icon="bolt" /> <span>My Favorites</span> (
					{Object.keys(favorites).length})
				</Link>
			</div>
		</header>
	);
}
