import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppContext } from "state/AppContext";
import { ImageWithBlur } from "components";
import { ComicProps } from "types";
import styles from "styles/Favorites.module.css";
import { animated, useTransition } from "react-spring";

export function Favorites() {
	const { favorites, toggleFavorite } = useAppContext();
	const favoritesArr: ComicProps[] = Object.values(favorites);

	const transitions = useTransition(favoritesArr, {
		from: { opacity: 0, life: "0%", marginBottom: 0.2 },
		enter: { opacity: 1, marginBottom: 0 },
		leave: { opacity: 0, marginBottom: 1 },
		keys: ({ id }) => id,
		sort: (a, b) => (a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1),
	});

	const formattedThumbnailPath = ({ path, extension }) => {
		if (!(path && extension)) return "";
		return `${path}/portrait_small.${extension}`;
	};

	return (
		<div className={styles.container}>
			<h3 className={styles.title}>Favorites</h3>
			{favoritesArr.length ? (
				<div className={styles.cards}>
					{transitions(({ opacity, marginBottom }, item?: ComicProps) => (
						<animated.div
							className={styles.card}
							style={{
								opacity: opacity.to({ range: [0, 1], output: [0, 1] }),
								marginBottom: marginBottom.to({
									range: [0, 1],
									output: ["0", "-300px"],
								}),
							}}
						>
							<button
								onClick={() => toggleFavorite({ id: item.id })}
								className={styles.button}
							>
								<FontAwesomeIcon icon="times" />
							</button>
							<div className={styles.imgCont}>
								<ImageWithBlur
									src={formattedThumbnailPath(item.thumbnail)}
									alt={item.title}
									width={50}
									height={75}
								/>
							</div>
							<div>
								<h3 className={styles.cardTitle}>{item.title}</h3>
								{item.issueNumber ? (
									<p className={styles.issue}>Issue: {item.issueNumber}</p>
								) : null}
							</div>
						</animated.div>
					))}
				</div>
			) : (
				<p className={styles.emptyMessage}>Select comics to save!</p>
			)}
		</div>
	);
}
