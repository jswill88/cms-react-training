import React, { useState } from "react";
import { FilterForm, Favorites, Dropdown } from "components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "styles/MobileFilterBar.module.css";

type displayStates = "none" | "filter" | "favorites";

export function MobileFilterBar() {
	const [displayState, setDisplayState] = useState<displayStates>("none");

	const handleClick = (state) => {
		setDisplayState((curr) => (curr === state ? "none" : state));
	};

	return (
		<div className={styles.container}>
			<div className={styles.buttonBar}>
				<button
					onClick={() => handleClick("filter")}
					className={styles.buttonBarButton}
				>
					{displayState === "filter" ? "Hide" : ""} Filter{" "}
					<FontAwesomeIcon icon="filter" />
				</button>
				<button
					onClick={() => handleClick("favorites")}
					className={styles.buttonBarButton}
				>
					{displayState === "favorites" ? "Hide" : "Show"} Favorites{" "}
					<FontAwesomeIcon icon="bolt" />
				</button>
			</div>
			<Dropdown show={displayState === "filter"} containerStyles={styles.filterFavoritesCont}>
				<FilterForm />
				<button
					onClick={() => handleClick("filter")}
					className={styles.bottomButton}
				>
					Hide Filter <FontAwesomeIcon icon="filter" />
				</button>
			</Dropdown>
			<Dropdown show={displayState === "favorites"} containerStyles={styles.filterFavoritesCont}>
				<Favorites />
				<button
					onClick={() => handleClick("favorites")}
					className={styles.bottomButton}
				>
					Hide Favorites <FontAwesomeIcon icon="bolt" />
				</button>
			</Dropdown>
		</div>
	);
}