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
	{ id: 0, name: 'Taylor', online: true, avatar: 'https://ik.imagekit.io/i7lh9dcka/Cat_avatar/01.jpg?updatedAt=1678605031822' },
	{ id: 1, name: 'Alice', online: false, avatar: 'https://ik.imagekit.io/i7lh9dcka/Cat_avatar/02.jpg?updatedAt=1678605032028' },
	{ id: 2, name: 'Bob', online: false, avatar: 'https://ik.imagekit.io/i7lh9dcka/Cat_avatar/03.jpg?updatedAt=1678605031974' },
	{ id: 3, name: 'Christian', online: true, avatar: 'https://ik.imagekit.io/i7lh9dcka/Cat_avatar/04.jpg?updatedAt=1678605031882' },
	{ id: 4, name: 'Mary', online: false, avatar: 'https://ik.imagekit.io/i7lh9dcka/Cat_avatar/05.jpg?updatedAt=1678605031956' },
];