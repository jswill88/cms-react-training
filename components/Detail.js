import styles from "styles/Detail.module.css";

export function Detail(props) {
	const { label, value } = props;

	if (!(value || value.length)) return null;

	return (
		<li className={styles.container}>
			<span className={styles.label}>{label}:</span>{" "}
			<span className={styles.value}>{value}</span>
		</li>
	);
}
