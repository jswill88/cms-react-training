import styles from "styles/Button.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppContext } from "state/AppContext";

type Props = {
	onClick: () => void;
	favorited: boolean;
};

export default function Button({ onClick, favorited }: Props) {
	const { favorites }:{ favorites: {} } = useAppContext();

	return (
		<button
			className={`${styles.container} ${favorited ? styles.favorited : ""} ${
				Object.keys(favorites).length < 10 ? styles.hover : ""
			}`}
			onClick={onClick}
		>
			<FontAwesomeIcon icon="bolt" className={styles.icon}></FontAwesomeIcon>
		</button>
	);
}
