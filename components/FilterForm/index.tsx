import React from "react";
import Filter from "./Filter";
import { CREATORS, CHARACTERS } from "lib/filterData";

export function FilterForm({ filter, setFilter }) {
	return (
		<form>
			<Filter
				name="creator"
				options={CREATORS}
				setFilter={setFilter}
				filter={filter}
			/>
			<Filter
				name="character"
				options={CHARACTERS}
				setFilter={setFilter}
				filter={filter}
			/>
		</form>
	);
}
