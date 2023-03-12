import ChatField from './ChatField'
import ContactList from './ContactList'

export default function Channels() {
	return <>
		<div className="flex basis-5/6 ">
			<ChatField></ChatField>
			<ContactList contacts={contacts}></ContactList>
		</div>
	</>
}

const contacts = [
	{ id: 0, name: 'Taylor', online: true },
	{ id: 1, name: 'Alice', online: false },
	{ id: 2, name: 'Bob', online: false },
	{ id: 3, name: 'Christian', online: true },
	{ id: 4, name: 'Mary', online: false },
];