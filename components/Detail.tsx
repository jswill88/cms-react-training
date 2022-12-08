import styles from "styles/Detail.module.css";

export function Detail(props: { label: string, value: string | number }) {
	const { label, value } = props;

	if (!value || (typeof value === "string" && !value.length)) return null;

	return (
		<li className={styles.container}>
			<span className={styles.label}>{label}:</span>{" "}
			<span className={styles.value}>{value}</span>
		</li>
	);
}
