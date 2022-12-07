import Image from "next/image";
import styles from "styles/HeroImage.module.css";
import heroImage from "assets/hero-photo.png";
import heroDecoration from "assets/halftone.png";

export function HeroImage() {
	return (
		<div className={styles.container}>
			<div className={styles.imgCont}>
				<Image
					src={heroImage}
					width={1440}
					height={650}
					alt="Room of marvel comics"
					className={styles.heroImage}
					placeholder="blur"
				/>
			</div>
			<h1 className={styles.title}>Comic Closet</h1>
			<Image
				src={heroDecoration}
				width={1440}
				height={176}
				alt=""
				aria-hidden="true"
				className={styles.decoration}
				placeholder="blur"
			/>
		</div>
	);
}
