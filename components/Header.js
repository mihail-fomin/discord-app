import { twMerge } from 'tailwind-merge'
import Menu from './Menu'
import { channels } from './ChannelList'

export default function Header({ className = "", activeChannelID }) {

	function getChannelName(id) {
		for (let channel of channels) {
			if (channel.id === id) {
				return channel.title
			}
		}
	}

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
			<div>{getChannelName(activeChannelID)}</div>
		</header>
	</>
}