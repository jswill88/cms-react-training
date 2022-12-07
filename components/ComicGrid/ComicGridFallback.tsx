import styles from "styles/ComicGridFallback.module.css";

type Props = {
	children: React.ReactNode
}

export default function ComicGridFallback({ children }: Props) {
	return (
		<div className={styles.container}>
			<p className={styles.content}>{children}</p>
		</div>
	);
}
