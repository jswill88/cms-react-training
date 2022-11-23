import React from "react";
import PagerButton from "./PagerButton";

type Props = {
	offset: number;
	total: number;
	setOffset: (setValueFunction: (number) => number) => void;
};

export function Pager({ offset, total, setOffset }: Props) {
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
		<div>
			<PagerButton onClick={() => handleOffset(false)} />
			<span>
				{firstItem}-{lastItem} of {total}
			</span>
			<PagerButton onClick={() => handleOffset(true)} />
		</div>
	);
}
