import styles from "styles/ComicGridFallback.module.css";

export function ComicGridFallback({ children }:{children: string}) {
	return (
		<div className={styles.container}>
			<p className={styles.content}>{children}</p>
		</div>
	);
}
