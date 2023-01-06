import Image, { ImageProps } from "next/image";

export function ImageWithBlur(props: ImageProps) {
	return (
		<Image
			placeholder="blur"
			blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP08gquBwADNQFojSzfpQAAAABJRU5ErkJggg=="
			{...props}
		/>
	);
}
