import * as React from 'react'
import TextArea from '../TextArea'
import MessageList from './MessageList';


export default function ChatField({ contacts }) {
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
					<MessageList history={history} contacts={contacts} />
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

const history = [
	{
		messageID: 1,
		senderID: 1,
		text: 'Hi there!'
	},
	{
		messageID: 2,
		senderID: 2,
		text: 'Hello!'
	},
]