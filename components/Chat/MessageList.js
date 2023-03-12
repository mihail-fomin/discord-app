export default function MessageList({ contacts, history }) {

	function getName(id) {
		for (let person of contacts) {
			if (id === person.id) {
				return person.name
			}
		}
	}

	function getAvatar(id) {
		for (let person of contacts) {
			if (id === person.id) {
				return person.avatar
			}
		}
	}

	return <>
		<div className="absolute bottom-5 left-10">
			<ul className="">
				{history.map(message => (
					<li key={message.messageID}>
						<div className="flex gap-4 my-4">
							<img className="w-12 rounded-full" src={getAvatar(message.senderID)} alt="#" />
							<div className="flex flex-col">
								<div className="font-bold">{getName(message.senderID)}</div>
								<div>{message.text}</div>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	</>
}

