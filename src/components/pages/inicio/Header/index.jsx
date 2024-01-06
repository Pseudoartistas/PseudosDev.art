import React from 'react';
import Nav from './assets/Nav';
import * as Logos from '../../../utilities/Logos';
import * as Buttons from '../../../utilities/Buttons';

export default function HeaderNavBar() {
	return (
		<header className="relative colorsBase flex flex-row py-5 gap-5 items-center justify-between z-20">
			<Logos.LogoColetivoH className="hidden md:flex order-0 max-md:!order-0"/>
			<Logos.LogoPseudoVH className="md:hidden order-1 max-md:!order-2" />
			<div name='Espaçador' className='m-auto max-md:hidden'></div>
			<Nav className='order-2 max-md:!order-1'/>
			<Buttons.ThemeBtn className='order-3'/>
		</header>
	);
}
