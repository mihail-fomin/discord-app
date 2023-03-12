import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { twMerge } from 'tailwind-merge'

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
			<div className='flex h-full'>
				<div className="flex items-center justify-between px-4 basis-1/6 bg-zinc-700">
					<div className='text-xl font-bold '>Game Center</div>
					<div>
						<ChevronDownIcon
							className='h-8 transition-all cursor-pointer aspect-square'
						/>
					</div>
				</div>
			</div>


		</header>
	</>
}