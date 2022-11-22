import { useState, useEffect } from "react";
import { Status } from '../types'

export function useFetch<T>(url: string): { results?: T[], status: Status } {
	const [data, setData] = useState<{ status?: string, data?: { results: T[] } } | null>(null);
	const [status, setStatus] = useState<Status>("loading")

	const checkData = data => {
		if(!data || (data && data.status !== "Ok")) {
			setStatus("error")
			setData(null);
			return;
		}
		setStatus("success")
	}

	const getData = async () => {
		setData(null)
		try {
			setStatus("loading")
			const res = await fetch(url);
			const data: { status: string, data?: { results: T[] } } = await res.json();
			setData(data);
			checkData(data)
		} catch (e) {
			console.error(e);
			setStatus("error")
		}
	};

	useEffect(() => {
		getData();
	}, [url]);
	
	if(status === "success") {
		let results = data?.data?.results;
		if (!results || !results.length) setStatus("empty")
		return { results, status };
	}

	return { status };
}
