import * as React from 'react'
import Header from '../../components/Header';
import Body from '../../components/Body'


export default function Home() {

	return (
		<>
			<div className="grid grid-rows-header">
				<Header className="z-10" />
				<Body />
			</div>
		</>
	)
}
