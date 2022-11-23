import styles from "styles/Detail.module.css";

export function Detail(props: { label: string, value: string | number, testId: string }) {
	const { label, value, testId } = props;

	if (!value || (typeof value === "string" && !value.length)) return null;

	return (
		<li className={styles.container}>
			<span className={styles.label}>{label}:</span>{" "}
			<span className={styles.value} data-testid={testId}>{value}</span>
		</li>
	);
}
