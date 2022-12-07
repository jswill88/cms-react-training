import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppContext } from "state/AppContext";
import { ComicProps } from "types";
import styles from "styles/Favorites.module.css";

export function Favorites() {
	const { favorites, toggleFavorite } = useAppContext();
	const favoritesArr: ComicProps[] = favorites ? Object.values(favorites) : [];

	const formattedThumbnailPath = ({ path, extension }) => {
		if (!(path && extension)) return "";
		return `${path}/portrait_small.${extension}`;
	};

	if (!favoritesArr.length) return null;

	return (
		<div className={styles.container}>
			<h3 className={styles.title}>Favorites</h3>
			<div className={styles.cards}>
				{favoritesArr.map(({ thumbnail, title, id, issueNumber }) => (
					<div key={id} className={styles.card}>
						<button
							onClick={() => toggleFavorite({ id })}
							className={styles.button}
						>
							<FontAwesomeIcon icon="times" />
						</button>
						<div className={styles.imgCont}>
							<Image
								src={formattedThumbnailPath(thumbnail)}
								alt={title}
								width={50}
								height={75}
							/>
						</div>
						<div>
							<h3 className={styles.cardTitle}>{title}</h3>
							{issueNumber ? (
								<p className={styles.issue}>Issue: {issueNumber}</p>
							) : null}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
