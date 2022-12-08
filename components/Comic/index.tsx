import Image from "next/image";
import moment from "moment/moment";
import Button from "./Button";
import Detail from "./Detail";
import styles from "styles/Comic.module.css";
import { ComicProps, Date, Creators } from "../../types";
import { useAppContext } from "state/AppContext";

export function Comic(props: ComicProps) {
	const { id, title, thumbnail, issueNumber, creators, dates } = props;

	const { toggleFavorite, favorites } = useAppContext();

	const handleClick = () => {
		toggleFavorite({
			thumbnail,
			title,
			id,
			issueNumber,
		});
	};

	const formattedThumbnailPath = ({ path, extension }) => {
		return `${path}/portrait_uncanny.${extension}`;
	};

	const formattedDate = (dates: Date[]): string => {
		if (!dates || !dates.length) return null;
		const { date } = dates.find(({ type }) => type === "focDate") || dates[0];
		const formattedDate = moment(date).format("MMMM Do, YYYY");
		return formattedDate === "Invalid date" ? null : formattedDate;
	};

	const formattedCreators = (creators: Creators): string => {
		if (!creators.items.length) return null;
		return creators.items
			.map(({ name }) => {
				const nameArr = name.split(" ");
				if (nameArr.length === 1) return nameArr[0];
				return [nameArr.pop() + ",", ...nameArr].join(" ");
			})
			.join(" | ");
	};

	return (
		<article className={styles.container}>
			<div className={styles.topSection}>
				<div className={styles.imgCont}>
					<Image
						width={300}
						height={450}
						placeholder="blur"
						blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP08gquBwADNQFojSzfpQAAAABJRU5ErkJggg=="
						src={formattedThumbnailPath(thumbnail)}
						alt={title}
						className={styles.img}
					/>
				</div>
				<Button onClick={handleClick} favorited={favorites && id in favorites} />
			</div>
			<div>
				<h2 className={styles.title}>{title}</h2>
				<ul>
					<Detail label="Issue" value={issueNumber} testId="issue-number" />
					<Detail
						label="Published"
						value={formattedDate(dates)}
						testId="published-date"
					/>
					<Detail
						label="Creators"
						value={formattedCreators(creators)}
						testId="creators"
					/>
				</ul>
			</div>
		</article>
	);
}
