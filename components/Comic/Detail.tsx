import styles from "styles/Detail.module.css";

type Props = {
	label: string;
	value: string | number;
	testId: string;
};

export default function Detail(props: Props) {
	const { label, value, testId } = props;

	if (
		value === undefined ||
		value === null ||
		(typeof value === "string" && !value.length)
	) {
		return null;
	}

	return (
		<li className={styles.container} data-testid={testId}>
			<span className={styles.label}>{label}:</span>{" "}
			<span className={styles.value}>{value}</span>
		</li>
	);
}
