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
	{ id: 0, name: 'Taylor', online: true, avatar: '../src/img/01.jpg' },
	{ id: 1, name: 'Alice', online: false, avatar: '../src/img/02.jpg' },
	{ id: 2, name: 'Bob', online: false, avatar: '../src/img/03.jpg' },
	{ id: 3, name: 'Christian', online: true, avatar: '../src/img/04.jpg' },
	{ id: 4, name: 'Mary', online: false, avatar: '../src/img/05.jpg' },
];