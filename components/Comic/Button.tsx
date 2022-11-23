import styles from "styles/Button.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Button({
	onClick,
	favorited,
}: {
	onClick: () => void;
	favorited: boolean;
}) {
	return (
		<button
			className={`${styles.container} ${favorited ? styles.favorited : ""}`}
			onClick={onClick}
		>
			<FontAwesomeIcon icon="bolt" className={styles.icon} />
		</button>
	);
}
