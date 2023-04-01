import * as React from 'react'
import TextArea from '../TextArea'
import MessageList from './MessageList';
// export { generalHistory, additionalHistory, privateHistory } from './ChatHistory'

function getChannel(id) {
	switch (id) {
		case 1:
			return generalHistory
		case 2:
			return additionalHistory
		case 3:
			return privateHistory
	}
}

export default function ChatField({ contacts, activeChannelID }) {
	const [input, setInput] = React.useState('');
	// const [message, setMessage] = React.useState(history);

	function onChange(value, _event) {
		setInput(value.slice(0, 140))
	};

	function handleKeyDown(event) {
		if (event.keyCode == 13 && event.shiftKey == false) {
			event.preventDefault();
			// setMessage([...message],
			// 	{ messageID: history.messageID++, text: input })
			setInput('')
			alert('Your tweet has been sent!')
		}
	}


	return <>
		<div className="flex flex-col w-full">
			<div>
				<div className="h-[50rem] relative">
					<MessageList history={getChannel(activeChannelID)} contacts={contacts} />
				</div>
				<TextArea
					className='block focus:outline-none mx-auto w-[95%] p-2 basis-1/6 rounded bg-zinc-500 text-white font-bold resize-none'
					onChange={onChange}
					placeholder='Input up to 140 characters...'
					rows={2}
					value={input}
					onKeyDown={handleKeyDown}
				/>
			</div>
		</div>
	</>
}

export const generalHistory = [
	{
		messageID: 1,
		senderID: 1,
		text: 'Welcome to the General channel'
	},
	{
		messageID: 2,
		senderID: 3,
		text: 'Hello!'
	},
]

export const additionalHistory = [
	{
		messageID: 1,
		senderID: 1,
		text: 'Welcome to the Additional channel'
	},
	{
		messageID: 2,
		senderID: 4,
		text: 'Hello!'
	},
]

export const privateHistory = [
	{
		messageID: 1,
		senderID: 1,
		text: 'Welcome to the Private channel'
	},
	{
		messageID: 2,
		senderID: 5,
		text: 'Hello!'
	},
]