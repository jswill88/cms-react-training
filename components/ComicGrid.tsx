import { useState, useEffect } from "react";
import { useFetch } from "hooks";
import {
	Comic,
	ComicGridFallback,
	Pager,
	FilterForm,
	Favorites,
} from "components";
import { FallbackStatus, ComicProps } from "../types";
import GridContextProvider from "state/GridContext";

type FallbackText = {
	[K in FallbackStatus]: string;
};

const BASE_URL_START = "https://gateway.marvel.com/v1/public";
const BASE_URL_END = `/comics?apikey=${process.env.apiKey}&limit=15`;

const fallbackText: FallbackText = {
	loading: "Waiting to load comics",
	error: "Error loading comics",
	empty: "No comics to show",
};

export function ComicGrid() {
	const [offset, setOffset] = useState(0);
	const [filter, setFilter] = useState([]);

	useEffect(() => setOffset(0), [filter]);

	const url = `${BASE_URL_START}${filter.join(
		"/"
	)}${BASE_URL_END}&offset=${offset}`;

	const { results = [], status, total } = useFetch<ComicProps>(url);

	if (status in fallbackText) {
		return <ComicGridFallback>{fallbackText[status]}</ComicGridFallback>;
	}

	return (
		<GridContextProvider>
			<div>
				<FilterForm setFilter={setFilter} filter={filter} />
				<section
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(auto-fill, minmax(183px, 1fr))",
						gap: "30px 20px",
					}}
				>
					{results.map((comic: ComicProps) => (
						<Comic key={comic.id} {...comic} />
					))}
				</section>
				<Favorites />
				<Pager offset={offset} total={total} setOffset={setOffset} />
			</div>
		</GridContextProvider>
	);
}
