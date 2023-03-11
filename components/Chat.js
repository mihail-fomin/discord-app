import Header from './Header'
import ChatField from './ChatField'
import ContactList from './ContactList'

export default function Channels() {
	return <>
		<div className=" basis-5/6">
			<Header></Header>
			<div className="flex">
				<ChatField></ChatField>
				<ContactList></ContactList>
			</div>

		</div>
	</>
}

const contacts = [
	{ name: 'Taylor', online: true },
	{ name: 'Alice', online: false },
	{ name: 'Bob', online: false },
	{ name: 'Christian', online: true },
	{ name: 'Mary', online: false },
];