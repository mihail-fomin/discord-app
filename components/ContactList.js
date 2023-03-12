export default function ContactList({ contacts }) {

	function countOnline() {
		let count = 0
		for (let contact of contacts) {
			if (contact.online == true) { count++ }
		}
		return count
	}

	function countOffline() {
		let count = 0
		for (let contact of contacts) {
			if (contact.online == false) { count++ }
		}
		return count
	}

	return <>
		<section className="h-full px-4 bg-zinc-700 basis-1/4">
			<h2>Online: {countOnline()}</h2>
			<ul className="text-xl text-gray-300">
				{contacts.map(contact =>
					<li key={contact.id}>
						{contact.online == true ? contact.name : ''}

					</li>
				)}
			</ul>
			<h2>Offline: {countOffline()}</h2>
			<ul className="contact-list">
				{contacts.map(contact =>
					<li key={contact.id}>

						{contact.online == false ? contact.name : ''}

					</li>
				)}
			</ul>
		</section>
	</>
}