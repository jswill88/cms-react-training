import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PagerButton from "./PagerButton";
import styles from "styles/Pager.module.css";

type Props = {
	offset: number;
	total: number;
	setOffset: (setValueFunction: (number) => number) => void;
};

export function Pager({ offset, total, setOffset }: Props) {
	if (!total) return null;
	const firstItem = offset + 1;
	const lastItem = Math.min(offset + 15, total);

	const handleOffset = (up?: boolean) => {
		if (up) {
			if (lastItem === total) return;
			setOffset((offset) => offset + 15);
			return;
		}
		if (firstItem === 1) return;
		setOffset((offset) => offset - 15);
	};

	return (
		<div className={styles.container}>
			<PagerButton
				onClick={() => handleOffset(false)}
				disabled={firstItem === 1}
			>
				<FontAwesomeIcon icon="angle-left" />
			</PagerButton>
			<span className={styles.text}>
				{firstItem}-{lastItem} of {total}
			</span>
			<PagerButton
				onClick={() => handleOffset(true)}
				disabled={lastItem === total}
			>
				<FontAwesomeIcon icon="angle-right" />
			</PagerButton>
		</div>
	);
}
