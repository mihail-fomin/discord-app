import { twMerge } from 'tailwind-merge'
import Menu from './Menu/Menu'
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
				"flex justify-between items-center",
				"shadow shadow-zinc-800",
				"h-12 w-full",
				className
			)}
		>
			<Menu />
			<div className='px-4 text-xl basis-5/6'>{getChannelName(activeChannelID)}</div>
		</header>
	</>
}