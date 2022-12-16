import { useState, useEffect } from "react";
import { useFetch } from "hooks";
import { Pager, FilterForm, Favorites, MobileFilterBar } from "components";
import Grid from "./Grid";
import { ComicProps, BuildDataProps } from "../../types";
import { useAppContext } from "state/AppContext";
import styles from "styles/ComicGrid.module.css";

const BASE_URL_START = "https://gateway.marvel.com/v1/public";
const BASE_URL_END = `/comics?apikey=${process.env.apiKey}&limit=15`;

export function ComicGrid({ buildData }: BuildDataProps) {
	const [offset, setOffset] = useState(0);
	const { filter } = useAppContext();

	const useBuildData =
		!offset &&
		((!filter.length && buildData.initial.status === "success") ||
			(filter.length &&
				buildData[filter[0].slice(1)][filter[1]].status === "success"));

	const buildComics = filter.length
		? buildData[filter[0].slice(1)][filter[1]].data.results
		: buildData.initial.data.results;
	const buildTotal = filter.length
		? buildData[filter[0].slice(1)][filter[1]].data.total
		: buildData.initial.data.total;

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
