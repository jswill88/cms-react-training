import { useState } from "react";
import { useFetch } from "../hooks";
import { Comic, ComicGridFallback } from "components";
import { FallbackStatus, ComicProps } from "../types"

const BASE_URL = `https://gateway.marvel.com/v1/public/comics?apikey=${process.env.apiKey}&limit=15`;

type FallbackText = {
	[K in FallbackStatus]: string;
}

const fallbackText: FallbackText = {
	loading: "Waiting to load comics",
	error: "Error loading comics",
	empty: "No comics to show"
};

export function ComicGrid() {
	const [offset, setOffset] = useState(0);

	const url = `${BASE_URL}&offset=${offset}`;

	const { results = [], status } = useFetch<ComicProps>(url);

	if (status in fallbackText) {
		return <ComicGridFallback>{fallbackText[status]}</ComicGridFallback>;
	}

	return (
		<section
			style={{
				display: "grid",
				gridTemplateColumns: "repeat(auto-fill, minmax(183px, 1fr))",
				gap: "30px 20px",
			}}
		>
			{results.map((comic: ComicProps )=> (
				<Comic key={comic.id} {...comic} />
			))}
		</section>
	);
}
