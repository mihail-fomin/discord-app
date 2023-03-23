import * as React from 'react'
import Header from '../../components/Header';
import Body from '../../components/Body'


export default function Home() {
	const [activeChannelID, setActiveChannelID] = React.useState(0)

	return (
		<>
			<div className="grid grid-rows-header">
				<Header activeChannelID={activeChannelID} className="z-10" />
				<Body activeChannelID={activeChannelID} setActiveChannelID={setActiveChannelID} />
			</div>
		</>
	)
}
