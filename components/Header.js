import { twMerge } from 'tailwind-merge'
import Menu from './Menu'
import { textChannels } from './ChannelList'
import { voiceChannels } from './ChannelList'

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