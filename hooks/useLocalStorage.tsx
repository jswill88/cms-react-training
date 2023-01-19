export function useLocalStorage(key: string) {
	const setLocal = (value) => {
		localStorage.setItem(key, JSON.stringify(value));
	};

	const getLocal = () => {
		return JSON.parse(localStorage.getItem(key));
	};

	return { getLocal, setLocal };
}
