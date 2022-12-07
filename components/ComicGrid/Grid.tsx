import { Comic } from "components";
import { ComicProps, FallbackStatus } from "types";
import ComicGridFallback from "./ComicGridFallback";
import styles from "styles/ComicGrid.module.css";

type FallbackText = {
	[K in FallbackStatus]: string;
};

const fallbackText: FallbackText = {
	loading: "Waiting to load comics",
	error: "Error loading comics",
	empty: "No comics to show",
};

type Props = {
	results: ComicProps[];
	status: string;
};

export default function Grid(props: Props) {
	const { results, status } = props;

	if (status in fallbackText) {
		return <ComicGridFallback>{fallbackText[status]}</ComicGridFallback>;
	}

	return (
		<section className={styles.cardGrid}>
			{results.map((comic: ComicProps) => (
				<Comic key={comic.id} {...comic} />
			))}
		</section>
	);
}
