import { useState } from "react";
import { useFetch } from "../hooks";
import { Comic, ComicGridFallback } from "../components";
import { FallbackStatus } from "../types"

const BASE_URL = `https://gateway.marvel.com/v1/public/comics?apikey=${process.env.apiKey}&limit=15`;

type FallbackText = {
	[K in FallbackStatus]: string;
}

type ComicType = {
	id: string;
}

const fallbackText: FallbackText = {
	loading: "Waiting to load comics",
	error: "Error loading comics",
};

export function ComicGrid() {
	const [offset, setOffset] = useState<Number>(0);

	const url = `${BASE_URL}&offset=${offset}`;

	const { data, status } = useFetch<ComicType>(url);

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
			{data.map((comic) => (
				<Comic key={comic.id} {...comic} />
			))}
		</section>
	);
}
