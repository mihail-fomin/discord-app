import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import {
	ArrowTrendingUpIcon,
	UserPlusIcon,
	BellIcon,
	ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline'

const links = [
	{ name: 'Boost server', href: '#', icon: ArrowTrendingUpIcon },
	{ name: 'Invite friends', href: '#', icon: UserPlusIcon },
	{ name: 'Notification settings', href: '#', icon: BellIcon },
	{ name: 'Leave server', href: '#', icon: ArrowRightOnRectangleIcon },
]


export default function Example() {
	return (
		<Popover className="relative">
			<Popover.Button className="flex items-center justify-between w-1/6 h-12 px-4 cursor-pointer bg-zinc-700 hover:bg-zinc-600">
				<div className='text-xl font-bold'>Game Center</div>
				<ChevronDownIcon className='h-8 transition-all aspect-square' aria-hidden="true" />
			</Popover.Button>

			<Transition
				as={Fragment}
				enter="transition ease-out duration-200"
				enterFrom="opacity-0 translate-y-1"
				enterTo="opacity-100 translate-y-0"
				leave="transition ease-in duration-150"
				leaveFrom="opacity-100 translate-y-0"
				leaveTo="opacity-0 translate-y-1"
			>
				<Popover.Panel className="absolute z-10 flex px-3 mt-4 w-80 max-w-max">
					<div className="flex-auto w-screen max-w-md overflow-hidden leading-6 rounded-lg shadow-lg bg-zinc-900">
						<div className="p-2">
							{links.map((item) => (
								<div key={item.name} className="relative flex p-2 rounded cursor-pointer gap-x-6 group hover:bg-zinc-500 text-zinc-400 hover:text-white">
									<div className="flex items-center justify-center flex-none w-6 h-6 mt-1 rounded-lg group-hover:text-white">
										<item.icon className="w-6 h-6 text-gray-400 group-hover:text-white" aria-hidden="true" />
									</div>
									<div>
										<a href={item.href} className="font-semibold">
											{item.name}
										</a>
									</div>
								</div>
							))}
						</div>

					</div>
				</Popover.Panel>
			</Transition>
		</Popover>
	)
}