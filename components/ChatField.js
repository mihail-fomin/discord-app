import * as React from 'react'
import TextArea from './TextArea'

export default function ChatField() {
	const [input, setInput] = React.useState('');
	function onChange(value, _event) {
		setInput(value.slice(0, 140))
	};

	function handleKeyDown(event) {
		if (event.keyCode == 13 && event.shiftKey == false) {
			event.preventDefault();
			setInput('')
			alert('Your tweet has been sent!')
		}
	}

	return <>
		<div className="flex flex-col w-full">
			<div className="">
				<div className="h-[50rem]">Hi</div>
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