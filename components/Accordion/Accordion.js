import * as React from 'react'
import Item from './Item'
import { UserPlusIcon } from '@heroicons/react/24/outline'

export default function Accordion({ items, icon }) {
	const [activeIndex, setactiveIndex] = React.useState(0)
	return (
		<div>
			{
				items.map((item, i) => {
					return <Item active={activeIndex == i} onClick={() => setactiveIndex(i)}>
						<div className='accordion-item group'>
							{icon}
							{item}
							<div className='accordion-member group-hover:opacity-100'>
								<UserPlusIcon className="w-6 h-6" />
							</div>
						</div>
					</Item>
				})
			}
		</div>
	)
}