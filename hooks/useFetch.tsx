import { useState, useEffect } from "react";
import { Status } from '../types'

export function useFetch<T>(url: string): { data: T[], status: Status } {
	const [data, setData] = useState<T[]>([]);
	const [status, setStatus] = useState<Status>("loading");

	const getData = async () => {
		try {
			setStatus("loading");
			const res = await fetch(url);
			const data: { status: string, data: { results: T[] } } = await res.json();
			if (data.status === "Ok" && data?.data?.results) {
				setData(data.data.results);
				setStatus("success");
				return;
			}
			setStatus("error");
		} catch (e) {
			console.error(e);
			setData([]);
			setStatus("error");
		}
	};

	useEffect(() => {
		getData();
	}, [url]);

	return { data, status };
}
