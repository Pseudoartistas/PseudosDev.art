import React from 'react';
import * as Logos from '../utils/logos';
import * as Icons from '../utils/icons';

export default function Footer() {
	return (
		<footer className="relative flex md:flex-row flex-col w-full items-center justify-between gap-4 py-5 colorsBase !z-10">
			<div className="flex md:flex-row flex-col text-xs justify-center items-center text-center">
				<span>&copy; 2024&nbsp;</span>
				<span>Coletivo de Pseudoartistas.&nbsp;</span>
				<span>Todos os direitos reservados.&nbsp;</span>
			</div>
			<div className="flex flex-row gap-4">
				<a href="https://github.com/Pseudoartistas/" className="group rounded-sm px-1 py-1 uppercase hover:font-black colorsBase hoverButton">
					<Icons.Github></Icons.Github>
				</a>
				<a href="https://www.threads.net/pseudos.art" className="group rounded-sm px-1 py-1 uppercase hover:font-black colorsBase hoverButton">
					<Icons.Threads></Icons.Threads>
				</a>
				<a href="https://www.instagram.com/pseudos.art/" className="group rounded-sm px-1 py-1 uppercase hover:font-black colorsBase hoverButton">
					<Icons.Instagram></Icons.Instagram>
				</a>
				<a href="#" className="disabled group rounded-sm px-1 py-1 uppercase  hover:font-black colorsBase hoverButton">
					<Icons.Facebook></Icons.Facebook>
				</a>
			</div>
		</footer>
	);
}
