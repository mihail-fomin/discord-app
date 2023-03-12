import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { twMerge } from 'tailwind-merge'
import MenuDrop from './MenuDropDown'
import MenuStyled from './MenuStyled'

export default function Header({ className = "" }) {
	return <>
		<header
			className={twMerge(
				"sticky top-0",
				"shadow shadow-zinc-800",
				"h-12",
				className
			)}
		>
			{/* <div className="flex items-center justify-between px-4 cursor-pointer basis-1/6 bg-zinc-700 hover:bg-zinc-600"> */}
			{/* <div className='text-xl font-bold'>Game Center</div> */}
			{/* <MenuDrop /> */}
			<MenuStyled />
		</header>
	</>
}