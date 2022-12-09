import styles from "styles/ComicGridFallback.module.css";

type Props = {
	children: React.ReactNode;
};

export default function ComicGridFallback({ children }: Props) {
	return (
		<div className={styles.container}>
			<div className={styles.content}>{children}</div>
		</div>
	);
}
