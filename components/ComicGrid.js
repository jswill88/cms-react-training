import { useState } from "react";
import useFetch from "hooks/useFetch";
import { Comic, ComicGridFallback } from "components";

const BASE_URL = `https://gateway.marvel.com/v1/public/comics?apikey=${process.env.apiKey}&limit=15`;

const fallbackText = {
	loading: "Waiting to load comics",
	error: "Error loading comics",
};

export function ComicGrid() {
	const [offset, setOffset] = useState(0);

	const url = `${BASE_URL}&offset=${offset}`;

	const { data, status, total } = useFetch(url);

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
			{data.results.map((comic) => (
				<Comic key={comic.id} {...comic} />
			))}
		</section>
	);
}
