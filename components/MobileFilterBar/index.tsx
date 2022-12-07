import React, { useState } from "react";
import { FilterForm, Favorites, AccessibleHider } from "components";
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
			<AccessibleHider
				className={`${styles.filterFavoritesCont} ${
					displayState === "filter" ? styles.show : ""
				}`}
				active={displayState === "filter"}
			>
				<FilterForm />
				<button
					onClick={() => handleClick("filter")}
					className={styles.bottomButton}
				>
					Hide Filter <FontAwesomeIcon icon="filter" />
				</button>
			</AccessibleHider>
			<AccessibleHider
				className={`${styles.filterFavoritesCont} ${
					displayState === "favorites" ? styles.show : ""
				}`}
				active={displayState === "favorites"}
			>
				<Favorites />
				<button
					onClick={() => handleClick("favorites")}
					className={styles.bottomButton}
				>
					Hide Favorites <FontAwesomeIcon icon="bolt" />
				</button>
			</AccessibleHider>
		</div>
	);
}
