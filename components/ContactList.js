import { twMerge } from "tailwind-merge"

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

	function showMember(contact) {
		const offlineCn = `
			absolute right-0 bottom-1
		 	ring ring-zinc-700 group-hover:ring-zinc-600
		   bg-green-600 rounded-full
			w-2 aspect-square
			`
		const onlineCn = contact.online ? `` : ` bg-red-600`

		return <div className="flex items-center gap-2 cursor-pointer group">
			<div className="relative h-12 my-2 aspect-square ">
				<img className="h-full rounded-full" src={contact.avatar} alt="#" />
				<div className={twMerge(offlineCn + onlineCn)}></div>
			</div>
			<div>{contact.name}</div>
		</div>
	}


	return <>
		<section className="h-full px-4 bg-zinc-700 basis-1/4">
			<h2>Online: {countOnline()}</h2>
			<ul className="text-gray-300">
				{contacts.map(contact =>
					<li key={contact.id} className="px-2 rounded hover:bg-zinc-600 hover:text-white">
						{contact.online == true ? showMember(contact) : ''}

					</li>
				)}
			</ul>
			<h2>Offline: {countOffline()}</h2>
			<ul className="contact-list">
				{contacts.map(contact =>
					<li key={contact.id} className="px-2 rounded hover:bg-zinc-600 hover:text-white">

						{contact.online == false ? showMember(contact) : ''}

					</li>
				)}
			</ul>
		</section>
	</>
}