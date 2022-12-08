import Image from "next/image";
import moment from "moment/moment";
import { Button } from "./Button";
import { Detail } from "./Detail";
import styles from "styles/Comic.module.css";

export function Comic(props) {
	const { title, thumbnail, issueNumber, creators, publishDate } = props;

	const formattedDate = (date) => {
		if (!date) return null;
		return moment(publishDate).format("MMMM Do, YYYY");
	};

	const formattedCreators = (creators) => {
		if (!creators.length) return null;
		return creators
			.map(({ name }) => {
				const nameArr = name.split(" ");
				if (nameArr.length === 1) return nameArr[0];
				return [nameArr.pop() + ",", ...nameArr].join(" ");
			})
			.join(" | ");
	};

	return (
		<article>
			<div className={styles.topSection}>
				<div className={styles.imgCont}>
					<Image
						placeholder="blur"
						width={300}
						height={451}
						blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP08gquBwADNQFojSzfpQAAAABJRU5ErkJggg=="
						src={thumbnail}
						alt={title}
						className={styles.img}
					/>
				</div>
				<Button />
			</div>
			<div>
				<h2 className={styles.title}>{title}</h2>
				<ul>
					<Detail label="Issue" value={issueNumber} />
					<Detail label="Published" value={formattedDate(publishDate)} />
					<Detail label="Creators" value={formattedCreators(creators)} />
				</ul>
			</div>
		</article>
	);
}
