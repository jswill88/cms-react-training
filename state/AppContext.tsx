import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "hooks";

type Props = { children: React.ReactNode }

const AppContext = createContext({
	favorites: {},
	toggleFavorite: ({}) => {},
	filter: [],
	setFilter: ([]) => {},
});

export default function AppContextProvider({ children }: Props) {
	const { getLocal, setLocal } = useLocalStorage("favorites");
	const [favorites, setFavorites] = useState({});
	const [filter, setFilter] = useState([]);
	const [loaded, setLoaded] = useState(false)

	const addFavorite = (obj) => {
		if (Object.keys(favorites).length >= 10) return;
		setFavorites((curr) => {
			if (curr === null) return { [obj.id]: obj }
			return { ...curr, [obj.id]: obj }
		});
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
		setFavorites(getLocal() || {});
		setLoaded(true)
	}, []);

	useEffect(() => {
		if (favorites && loaded) {
			setLocal(favorites);
		}
	}, [favorites, loaded]);

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
