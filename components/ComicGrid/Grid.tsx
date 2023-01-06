import Image from "next/image";
import Spinner from "assets/spinner.gif";
import { Comic } from "components";
import { ComicProps, FallbackStatus } from "types";
import ComicGridFallback from "./ComicGridFallback";
import styles from "styles/ComicGrid.module.css";

type FallbackText = {
	[K in FallbackStatus]: React.ReactNode;
};

const fallbackText: FallbackText = {
	loading: (
		<>
			Waiting to load comics
			<Image
				src={Spinner}
				width={116}
				height={116}
				alt=""
				className={styles.spinner}
			/>
		</>
	),
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
