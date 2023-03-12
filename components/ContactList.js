import { twMerge } from "tailwind-merge"



export default function ContactList({ contacts }) {

	function countOnline() {
		let count = 0
		for (let contact of contacts) {
			if (contact.online == true) { count++ }
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

		return <div className="flex gap-2 items-center group cursor-pointer">
			<div className="h-12 my-2 aspect-square relative ">
				<img className="h-full  rounded-full" src={contact.avatar} alt="#" />
				<div className={twMerge(offlineCn + onlineCn)}></div>
			</div>
			<div>{contact.name}</div>
		</div>
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
					<li key={contact.id} className="hover:bg-zinc-600 hover:text-white rounded px-2">
						{contact.online == true ? showMember(contact) : ''}

					</li>
				)}
			</ul>
			<h2>Offline: {countOffline()}</h2>
			<ul className="contact-list">
				{contacts.map(contact =>
					<li key={contact.id} className="hover:bg-zinc-600 hover:text-white rounded px-2">

						{contact.online == false ? showMember(contact) : ''}

					</li>
				)}
			</ul>
		</section>
	</>
}