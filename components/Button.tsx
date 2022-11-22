import styles from "styles/Button.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Button() {
	return (
		<button className={styles.container}>
			<FontAwesomeIcon
				icon='bolt'
				className={styles.icon}
			/>
		</button>
	);
}
