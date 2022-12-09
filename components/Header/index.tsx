import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";
import styles from "styles/Header.module.css";
import logo from "assets/logo.png";
import { useAppContext } from "state/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Header() {
	const { favorites } = useAppContext();
	return (
		<header className={styles.container}>
			<div className={styles.imgCont}>
				<Image src={logo} width={106} height={106} alt="Comic Closet" />
			</div>
			<div className={styles.navFavoritesCont}>
				<Nav />
				<Link href="#favorites" className={styles.favorites}>
					<FontAwesomeIcon icon="bolt" /> <span>My Favorites</span>{" "}
					({Object.keys(favorites).length})
				</Link>
			</div>
		</header>
	);
}
