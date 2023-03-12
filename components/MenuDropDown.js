import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const links = [
	{ id: 0, label: 'Boost server' },
	{ id: 1, label: 'Invite friends' },
	{ id: 2, label: 'Notification settings' },
	{ id: 3, label: 'Leave server' },
]

export default function MenuDropDown() {
	return <>
		<Menu>
			<Menu.Button className='flex items-center justify-between px-4 cursor-pointer basis-1/6 bg-zinc-700 hover:bg-zinc-600'>
				<div className='text-xl font-bold'>Game Center</div>
				<ChevronDownIcon
					className='h-8 transition-all aspect-square'
				/>
			</Menu.Button>
			<Transition
				enter="transition duration-100 ease-out"
				enterFrom="transform scale-95 opacity-0"
				enterTo="transform scale-100 opacity-100"
				leave="transition duration-75 ease-out"
				leaveFrom="transform scale-100 opacity-100"
				leaveTo="transform scale-95 opacity-0"
			>
				<Menu.Items >
					<ul className='w-48'>
						{links.map((link) => (
							<Menu.Item key={link.id} as={Fragment}>
								{({ active }) => (
									<li
										className={`${active ? 'bg-zinc-500 text-white cursor-pointer p-4 transition-all' : 'bg-zinc-900 text-zinc-300 p-4 '}`}
									>
										{link.label}
									</li>
								)}
							</Menu.Item>
						))}
					</ul>
				</Menu.Items>
			</Transition>
		</Menu>
	</>


}