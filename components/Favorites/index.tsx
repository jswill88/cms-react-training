import { useGridContext } from "state/GridContext";

export function Favorites() {
	const { favorites, toggleFavorite } = useGridContext();
	const favoritesArr = Object.values(favorites);
	if (!favoritesArr.length) return null;
	return (
		<div>
			{favoritesArr.map(({ thumbnail, title, id, issueNumber }) => (
				<div key={id}>
					<button onClick={() => toggleFavorite({ id })}>delete</button>
					<h3>{title}</h3>
					<p>{issueNumber}</p>
				</div>
			))}
		</div>
	);
}
