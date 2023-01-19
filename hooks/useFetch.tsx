import { useState, useEffect } from "react";
import { Status } from "../types";

export function useFetch<T>(url: string): {
	results?: T[];
	status: Status;
	total?: number;
} {
	const [data, setData] = useState<{
		status?: string;
		data?: { results: T[]; total: number };
	} | null>(null);
	const [status, setStatus] = useState<Status>("loading");

	const checkData = (data) => {
		if (!data || (data && data.status !== "Ok")) {
			setStatus("error");
			setData(null);
			return;
		}
		setStatus("success");
	};

	const getData = async () => {
		setData(null);
		try {
			setStatus("loading");
			const res = await fetch(url);
			const data: { status: string; data?: { results: T[]; total: number } } =
				await res.json();
			setData(data);
			checkData(data);
		} catch (e) {
			console.error(e);
			setStatus("error");
		}
	};

	useEffect(() => {
		getData();
	}, [url]);

	if (status === "success") {
		let results = data?.data?.results;
		if (!results || !results.length) setStatus("empty");
		let total = data.data.total;
		return { results, status, total };
	}

	return { status };
}
