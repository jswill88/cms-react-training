import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppContext } from "state/AppContext";
import { ComicProps } from "types";
import styles from "styles/Favorites.module.css";
import { animated, useTransition, config } from 'react-spring';

export function Favorites() {
	const { favorites, toggleFavorite } = useAppContext();
	const favoritesArr: ComicProps[] = favorites ? Object.values(favorites) : [];

	const transitions = useTransition(favoritesArr, {
		from: { opacity: 0, life: '0%' },
		enter: () => async (next) => {
			await next({ life: '100%' })
			await next({ opacity: 1 })
		},
		leave: { opacity: 0 },
		keys: ({ id }) => id,
		sort: (a, b) => a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1,
		config: config.stiff
	})

	const formattedThumbnailPath = ({ path, extension }) => {
		if (!(path && extension)) return "";
		return `${path}/portrait_small.${extension}`;
	};

	if (!favoritesArr.length) return null;

	return (
		<div className={styles.container}>
			<h3 className={styles.title}>Favorites</h3>
			<div className={styles.cards}>
				{transitions(({opacity}, item?:ComicProps) => (
					<animated.div className={styles.card} style={{ opacity: opacity.to({ range: [0,1], output: [ 0,1 ]}) }} >
						<button
							onClick={() => toggleFavorite({ id: item.id })}
							className={styles.button}
						>
							<FontAwesomeIcon icon="times" />
						</button>
						<div className={styles.imgCont}>
							<Image
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
		</div>
	);
}
