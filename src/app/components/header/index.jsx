import React from 'react';
import * as Logos from '../utils/logos';
import Nav from './assets/nav';
import * as Buttons from '../utils/buttons.jsx';
import * as Icons from '../utils/icons';
import Sidebar from '../sidebar';

export default function HeaderNavBar() {
	return (
		<header className=" relative colorsBase flex flex-row py-5 gap-5 items-center justify-between z-20">
			<Logos.LogoColetivoH className="hidden md:flex order-0 max-md:!order-0"  />
			<Logos.LogoPseudoVH className="md:hidden order-1 max-md:!order-2" />
			<div className='m-auto max-md:hidden'></div>
			<Nav className='order-2 max-md:!order-1'/>
			<Buttons.ThemeBtn className='order-3'/>
			{/* <header className="colorsBase relative flex w-full flex-row items-center justify-between gap-4 py-5">
				<div className='flex w-full items-center justify-between flex-row-reverse lg:flex-row'>
					<Logos.LogoColetivoH className="hidden md:flex" />
					<div className='w-full flex justify-center'>
						<Logos.LogoPseudoVH className="md:hidden" />
					</div>
					<Nav/>
				</div>
				<Buttons.ThemeBtn />
			</header> */}
		</header>
	);
}
