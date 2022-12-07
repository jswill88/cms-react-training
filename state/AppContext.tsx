import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "hooks";

const AppContext = createContext({
	favorites: {},
	toggleFavorite: ({}) => {},
	filter: [],
	setFilter: ([]) => {},
});

export default function AppContextProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	if (!global.window) return <>{children}</>;

	const { getLocal, setLocal } = useLocalStorage("favorites");
	const [favorites, setFavorites] = useState(null);
	const [filter, setFilter] = useState([]);

	const addFavorite = (obj) => {
		if (favorites && Object.keys(favorites).length >= 10) return;
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
		setFavorites(getLocal());
	}, []);

	useEffect(() => {
		if (favorites) {
			setLocal(favorites);
		}
	}, [favorites]);

	const state = {
		favorites,
		toggleFavorite,
		filter,
		setFilter,
	};

	return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
}

export function useAppContext() {
	return useContext(AppContext);
}
