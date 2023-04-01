import ChannelList from './ChannelList';
import Chat from './Chat/Chat';

export default function Body({ activeChannelID, setActiveChannelID }) {
	return <>
		<main className='flex h-[55.5rem] z-0'>
			<ChannelList activeChannelID={activeChannelID} setActiveChannelID={setActiveChannelID} />
			<Chat activeChannelID={activeChannelID} />
		</main>
	</>

}