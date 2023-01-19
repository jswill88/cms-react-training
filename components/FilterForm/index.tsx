import React from "react";
import Filter from "./Filter";
import { CREATORS, CHARACTERS } from "lib/filterData";
import styles from "styles/FilterForm.module.css";

export function FilterForm() {
	return (
		<form className={styles.container}>
			<h3 className={styles.title}>Filter by:</h3>
			<Filter name="creator" options={CREATORS} />
			<Filter name="character" options={CHARACTERS} />
		</form>
	);
}
