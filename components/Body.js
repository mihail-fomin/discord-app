import ChannelList from './ChannelList';
import Chat from './Chat';

export default function Body() {
	return <>
		<main className='flex h-[55.5rem]'>
			<ChannelList />
			<Chat />
		</main>
	</>

}