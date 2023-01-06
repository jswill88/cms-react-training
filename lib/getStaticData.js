import { readFile } from "fs/promises";
import path from "path";

const staticDataDir = path.join(process.cwd(), "static-data.json");

export default async function getStaticData() {
	try {
		const data = await readFile(staticDataDir, "utf-8");
		const parsedData = JSON.parse(data);
		return parsedData;
	} catch (e) {
		console.log(e);
		return [];
	}
}
