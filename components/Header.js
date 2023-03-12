import { twMerge } from 'tailwind-merge'
import Menu from './Menu'

export default function Header({ className = "" }) {
	return <>
		<header
			className={twMerge(
				"sticky top-0",
				"shadow shadow-zinc-800",
				"h-12",
				className
			)}
		>
			<Menu />
		</header>
	</>
}