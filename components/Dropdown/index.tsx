import { useSpring, animated } from "react-spring";
import { AccessibleHider } from "components";
import styles from "styles/Dropdown.module.css";

type Props = {
	show: boolean,
	containerStyles?: string,
	children: React.ReactNode
}

export function Dropdown ({ show, children, containerStyles = "" }: Props) {
	const { y } = useSpring({
		y: show ? 0 : -100
	});
	return (
		<div className={styles.container}>
			<animated.div style={{
				transform: y.to(y => `translateY(${y}%)`)
			}}>
				<AccessibleHider
					className={`${containerStyles} ${
						show ? styles.show : ""
					}`}
					active={show}
				>
					{children}
				</AccessibleHider>
			</animated.div>
		</div>
	)

}