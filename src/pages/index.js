import * as React from 'react'
import ChannelColumn from '../../components/ChannelСolumn';
import Chat from '../../components/Chat.js';

export default function Home() {
	return (
		<>
			<div className="flex h-screen">
				<ChannelColumn />
				<Chat />
			</div>
		</>
	)
}
