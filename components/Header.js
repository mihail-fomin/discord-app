import { twMerge } from 'tailwind-merge'
import Menu from './Menu'

export default function Header({ className = "", activeChannelID }) {
	return <>
		<header
			className={twMerge(
				"sticky top-0",
				"flex",
				"shadow shadow-zinc-800",
				"h-12",
				className
			)}
		>
			<Menu />
			<div>{activeChannelID}</div>
		</header>
	</>
}