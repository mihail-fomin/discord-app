export default function ContactList({ contacts }) {

	return <>
		<section className="h-full bg-zinc-700 basis-1/4">
			123
			<ul>
				{contacts.map(contact => {
					<li key={contacts.id}>
						{contact.name}
					</li>
				})}
			</ul>
		</section>
	</>
}