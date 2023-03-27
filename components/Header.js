import { twMerge } from 'tailwind-merge'
import Menu from './Menu'
import { channels } from './ChannelList'

export default function Header({ className = "", activeChannelID }) {

	function getChannelName(id) {
		for (let channel of channels) {
			console.log(id);
			if (id == channels.id) {
				console.log(channel[title]);
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
			<div>{activeChannelID}</div>
		</header>
	</>
}