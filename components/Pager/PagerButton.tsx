import styles from "styles/PagerButton.module.css";

type Props = { onClick: () => void; children: JSX.Element };

export default function PagerButton({ onClick, children }: Props) {
	return (
		<button onClick={onClick} className={styles.container}>
			{children}
		</button>
	);
}
