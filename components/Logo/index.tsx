import Image from "next/image"
import logo from "assets/logo.png";

type Props = {
	containerStyles: string
}

export function Logo({ containerStyles }: Props) {
  return (
	<div className={containerStyles}>
		<Image src={logo} width={106} height={106} alt="Comic Closet" />
	</div>
  )
}