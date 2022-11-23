import Image from "next/image";
import moment from "moment/moment";
import { Button, Detail } from "components";
import styles from "styles/Comic.module.css";
import { ComicProps, Date, Creators } from '../types'

export function Comic(props: ComicProps) {
	const { title, thumbnail, issueNumber, creators, dates } = props;

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
		<article>
			<div className={styles.topSection}>
				<div className={styles.imgCont}>
					<Image
						width={300}
						height={451}
						placeholder="blur"
						blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP08gquBwADNQFojSzfpQAAAABJRU5ErkJggg=="
						src={`${thumbnail.path}.${thumbnail.extension}`}
						alt={title}
						className={styles.img}
					/>
				</div>
				<Button />
			</div>
			<div>
				<h2 className={styles.title}>{title}</h2>
				<ul>
					<Detail label="Issue" value={issueNumber} testId="issue-number" />
					<Detail label="Published" value={formattedDate(dates)} testId="published-date"/>
					<Detail label="Creators" value={formattedCreators(creators)} testId="creators" />
				</ul>
			</div>
		</article>
	);
}
