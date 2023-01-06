import React, { useRef, useEffect } from "react";

type Props = {
	active: boolean;
	Component?: React.ElementType;
} & React.HTMLAttributes<HTMLAllCollection>;

export function AccessibleHider(props: Props) {
	const { active, Component = "div", children, ...otherProps } = props;
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
	}, [active, children]);

	return <Component ref={ref} {...otherProps} children={children} />;
}
