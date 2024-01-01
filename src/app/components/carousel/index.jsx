import React from 'react';
import * as Logos from '../utils/logos';
import * as Icons from '../utils/icons';
import Image from 'next/image';

export default function Carousel() {
	return (
		<div className="srolocBase flex h-[70vh] w-full flex-col overflow-hidden items-start justify-end rounded-lg">{/* bg-[url('/media/img/misc/assets/manifesto_banner.png')] bg-cover bg-center */}
			<div name="slide 1" className='flex w-full flex-col justify-end h-full relative'>
				<Image src='/media/img/misc/assets/manifesto_banner.png' fill alt="Leia o manifesto! (banner)" className='object-cover z-0'/>
				<div className="colorsBase flex h-fit max-w-2xl flex-col gap-4 rounded-lg p-5 m-5 z-[2]">
					<div className="flex flex-col gap-1">
						<h1 className="font-bold">Leia nosso Pseudo Manifesto!</h1>
						<p className="line-clamp-3 hyphens-auto text-justify text-xs">O coletivo de arte "Pseudoartistas" surge como uma resposta à necessidade urgente de redefinir e expandir a compreensão da arte em uma pequena cidade do interior. Em um contexto de modernidade líquida e resistência às formas de arte que desafiam as crenças estabelecidas, o coletivo busca promover a diversidade artística, a reflexão crítica e a transformação social através da colaboração mútua, intervenções artísticas, oficinas de arte e diálogo social. Com um manifesto artístico que desafia as convenções e valoriza a expressão criativa, o coletivo busca criar um ambiente cultural inclusivo e empoderar artistas de todas as modalidades.</p>
					</div>
					<a className="srolocBase w-fit rounded-lg px-5 py-2 text-xs" href="/manifesto" target="_self" rel="noopener noreferrer">
						Ir para página →
					</a>
				</div>
			</div>
			{/* <div className="bg-[url('/media/img/background/anota.png')] esabSroloc flex h-[70vh] flex-col w-full items-start justify-end rounded-lg bg-cover p-5">
				<div name="slide 1" className="colorsBase flex h-fit flex-col gap-4 rounded-lg p-5 max-w-2xl">
					<div className="flex flex-col gap-1">
						<h1 className="font-bold">
									Lorem ipsum dolor sit amet
								</h1>
						<p className="line-clamp-3 hyphens-auto text-justify text-xs">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan blandit mattis. Nunc pretium, sem et rhoncus posuere, nibh metus fringilla massa, eget lobortis velit neque vel lectus. Phasellus aliquet laoreet ligula ut pretium. Donec ultricies, libero quis mollis molestie, sapien dolor blandit erat, non ornare justo justo nec erat. Suspendisse ut aliquam est. Aenean nec magna sodales, efficitur massa at, convallis lacus. Aenean ut sem at erat consectetur fermentum et non dui. Nulla molestie volutpat dolor, eget tincidunt elit ultrices eu. Donec vel mattis sapien, finibus varius lectus. Aenean nec mauris ut nulla ullamcorper ultrices. Donec a mi vestibulum, semper urna venenatis, porttitor quam. Morbi auctor iaculis arcu, sit amet fringilla odio placerat sit amet. Vivamus sed risus congue, viverra elit a, vestibulum magna. Proin et lobortis arcu.
								</p>
					</div>
					<a className="esabSroloc w-fit rounded-lg px-5 py-2 text-xs" href="http://example.com" target="_self" rel="noopener noreferrer">
						Ver mais →
					</a>
				</div>
			</div> */}
		</div>
	);
}
