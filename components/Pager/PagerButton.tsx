import styles from "styles/PagerButton.module.css";

type Props = {
	onClick: () => void;
	children: JSX.Element;
	disabled: boolean;
};

export default function PagerButton({ onClick, children, disabled }: Props) {
	return (
		<button onClick={onClick} className={styles.container} disabled={disabled}>
			{children}
		</button>
	);
}
