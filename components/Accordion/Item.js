import { twMerge } from "tailwind-merge"

export default function Item({ active, children, onClick }) {
	const commonCn = `flex w-full p-2 rounded text-zinc-300 cursor-pointer hover:text-white`
	const activeCn = active ? `
	text-white bg-zinc-500
	` : ``

	return (
		<div className={twMerge(commonCn + activeCn)} onClick={onClick} >
			{children}
		</div>
	)
}