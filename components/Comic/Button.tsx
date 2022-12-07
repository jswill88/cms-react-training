import styles from "styles/Button.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
	onClick: () => void;
	favorited: boolean;
};

export default function Button({ onClick, favorited }: Props) {
	return (
		<button
			className={`${styles.container} ${favorited ? styles.favorited : ""}`}
			onClick={onClick}
		>
			<FontAwesomeIcon icon="bolt" className={styles.icon}></FontAwesomeIcon>
		</button>
	);
}
