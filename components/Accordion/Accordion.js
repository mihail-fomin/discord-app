import * as React from 'react'
import Item from './Item'
import { UserPlusIcon } from '@heroicons/react/24/outline'

export default function Accordion({ items, icon, activeIndex, setActiveIndex }) {
	return (
		<div>
			{
				items.map((item, i) => {
					return <Item active={activeIndex == i} onClick={() => setActiveIndex(i)}>
						<div className='accordion-item group'>
							{icon}
							{item.title}
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