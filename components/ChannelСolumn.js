import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Header from './Header'
import ChannelList from './ChannelList'

export default function ChannelColumn() {
	return <>
		<div className=" basis-1/6 bg-zinc-700">
			<Header>
				<div className="flex justify-between h-full px-4">
					<div className='my-auto text-xl font-bold'>Game Center</div>
					<div className='my-auto'>
						<ChevronDownIcon
							className='h-8 transition-all cursor-pointer aspect-square'
						/>
					</div>
				</div>
			</Header>
			<ChannelList />
		</div>
	</>
}