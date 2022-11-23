import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "hooks/useLocalStorage";

const GridContext = createContext({
	favorites: {},
	toggleFavorite: ({}) => {},
});

export default function GridContextProvider({ children }) {
	const { getLocal, setLocal } = useLocalStorage("favorites");
	const [favorites, setFavorites] = useState(getLocal());

	const addFavorite = (obj) => {
		setFavorites((curr) => ({ ...curr, [obj.id]: obj }));
	};

	const deleteFavorite = (id) => {
		setFavorites((curr) => {
			delete curr[id];
			return { ...curr };
		});
	};

	const toggleFavorite = (obj) => {
		if (!(obj.id in favorites)) {
			addFavorite(obj);
			return;
		}
		deleteFavorite(obj.id);
	};

	useEffect(() => {
		setLocal(favorites);
	}, [favorites]);

	const state = {
		favorites,
		toggleFavorite,
	};

	return <GridContext.Provider value={state}>{children}</GridContext.Provider>;
}

export function useGridContext() {
	return useContext(GridContext);
}
