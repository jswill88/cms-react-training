import { useState, useEffect } from "react";
import { useFetch } from "hooks";
import { Pager, FilterForm, Favorites, MobileFilterBar } from "components";
import Grid from "./Grid";
import { ComicProps, BuildProps } from "../../types";
import { useAppContext } from "state/AppContext";
import styles from "styles/ComicGrid.module.css";

const BASE_URL_START = "https://gateway.marvel.com/v1/public";
const BASE_URL_END = `/comics?apikey=${process.env.apiKey}&limit=15`;

export function ComicGrid({
	buildComics,
	buildTotal,
	buildStatus,
}: BuildProps) {
	const [offset, setOffset] = useState(0);
	const { filter } = useAppContext();
	const useBuildData =
		!(offset || filter.length) &&
		buildComics &&
		buildTotal &&
		buildStatus === "success";

	useEffect(() => setOffset(0), [filter]);

	const url = `${BASE_URL_START}${filter.join(
		"/"
	)}${BASE_URL_END}&offset=${offset}`;

	const { results = [], status, total } = useFetch<ComicProps>(url);

	return (
		<div className={styles.container} id="favorites">
			<div>
				<MobileFilterBar />
				<div className={styles.hideMobile}>
					<FilterForm />
				</div>
				<Grid
					results={useBuildData ? buildComics : results}
					status={useBuildData ? undefined : status}
				/>
				<Pager
					offset={offset}
					total={useBuildData ? buildTotal : total}
					setOffset={setOffset}
				/>
			</div>
			<div className={styles.hideMobile}>
				<Favorites />
			</div>
		</div>
	);
}
