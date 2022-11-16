import styles from "styles/ComicGridFallback.module.css";

export function ComicGridFallback({ children }) {
	return (
		<div className={styles.container}>
			<p className={styles.content}>{children}</p>
		</div>
	);
}
