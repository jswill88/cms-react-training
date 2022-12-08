import styles from "styles/Button.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

export function Button() {
	return (
		<button className={styles.container}>
			<FontAwesomeIcon icon={faBolt} className={styles.icon} />
		</button>
	);
}
