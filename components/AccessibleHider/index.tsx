import React, { useRef, useEffect } from "react";

type Props = {
	children?: React.ReactNode;
	active: boolean;
	className?: string;
};

export function AccessibleHider(props: Props) {
	const { active } = props;
	const otherProps = { ...props };
	delete otherProps.active;
	const ref = useRef(null);

	useEffect(() => {
		if (!active && ref) {
			ref.current
				.querySelectorAll("button, input, select, a")
				.forEach((btn) => {
					btn.setAttribute("aria-hidden", true);
					btn.setAttribute("tabindex", -1);
				});
		}

		if (active && ref) {
			ref.current
				.querySelectorAll("button, input, select, a")
				.forEach((btn) => {
					btn.setAttribute("aria-hidden", false);
					btn.removeAttribute("tabindex");
				});
		}
	}, [active]);

	return <div ref={ref} {...otherProps} />;
}
