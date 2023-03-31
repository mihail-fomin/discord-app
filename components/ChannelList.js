import * as React from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Accordion from './Accordion/Accordion'

export const channels = [
	{ title: "General channel", type: 'text', id: 1 },
	{ title: "Additional channel", type: 'text', id: 2 },
	{ title: "Private channel", type: 'text', id: 3 },
	{ title: "Voice channel", type: 'voice', id: 4 },
	{ title: "AFK", type: 'voice', id: 5 },
	{ title: "For hamsters", type: 'voice', id: 6 }
]

export default function ChannelList({ activeChannelID, setActiveChannelID }) {
	const activeIndex = channels.findIndex(channel => channel.id == activeChannelID)

	const textChannels = channels.filter(channel => channel.type == "text")
	const voiceChannels = channels.filter(channel => channel.type == "voice")


	// const onTextChannelChange = (offset) => {
	// 	const result = channels.find((_channel, i) =>
	// 		offset == i
	// 	)
	// 	if (result) {
	// 		setActiveChannelID(result.id)
	// 	}
	// }

	// const onVoiceChannelChange = (offset) => {
	// 	const result = channels.find((_channel, i) =>
	// 		offset == i
	// 	)
	// 	if (result) {
	// 		setActiveChannelID(result.id)
	// 	}
	// }

	function setOffset(type) {
		const textChannels = channels.filter(channel => channel.type == "text")
		return function setIndex(index) {
			let result
			switch (type) {

				case "text":
					result = textChannels.find((_channel, i) =>
						index == i
					)
					if (result) {
						console.log(result);
						setActiveChannelID(result.id)
					}
					break;
				case "voice":
					result = voiceChannels.find((_channel, i) =>
						index == i
					)
					if (result) {
						console.log(result);
						setActiveChannelID(result.id)
					}
					break;
			}
		}
	}


	return <>
		<section className='bg-zinc-700 basis-1/6'>
			<Disclosure>
				{({ open }) => (
					<>
						<Disclosure.Button className='accordion-header'>
							<ChevronRightIcon
								className={`${open ? 'rotate-90 transform transition-all duration-300' : ''
									} h-5 w-5 transition-all duration-300`}
							/>
							<div className='opacity-70 hover:opacity-100'>TEXT CHANNELS</div>
						</Disclosure.Button>
						<Disclosure.Panel className="accordion-panel ">
							<Accordion
								icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
									<path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
								</svg>}
								items={textChannels}
								activeIndex={activeIndex}
								setActiveIndex={setOffset('text')} />
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
			{/* <Disclosure>
				{({ open }) => (
					<>
						<Disclosure.Button className='accordion-header'>
							<ChevronRightIcon
								className={`${open ? 'rotate-90 transform transition-all duration-300' : ''
									} h-5 w-5 transition-all duration-300`}
							/>
							<div className='opacity-70 hover:opacity-100'>VOICE CHANNELS</div>
						</Disclosure.Button>
						<Disclosure.Panel className="accordion-panel ">
							<Accordion
								icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
									<path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
								</svg>}
								items={voiceChannels}
								activeIndex={activeIndex}
								setActiveIndex={setOffset('voice')}
							/>
						</Disclosure.Panel>
					</>
				)}
			</Disclosure> */}
		</section>
	</>
}