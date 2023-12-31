import React from 'react';
import * as Logos from '../utils/logos';
import * as Icons from '../utils/icons';

export default function Carousel() {
	return (
		<div className=''>
            <div className="bg-[url('/media/img/background/anota.png')] srolocBase flex h-[70vh] flex-col w-full items-start justify-end rounded-lg bg-cover p-5">
                <div name="slide 1" className="colorsBase flex h-fit flex-col gap-4 rounded-lg p-5 max-w-2xl">
                    <div className="flex flex-col gap-1">
                        <h1 className="font-bold">
                                    Lorem ipsum dolor sit amet
                                </h1>
                        <p className="line-clamp-3 hyphens-auto text-justify text-xs">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan blandit mattis. Nunc pretium, sem et rhoncus posuere, nibh metus fringilla massa, eget lobortis velit neque vel lectus. Phasellus aliquet laoreet ligula ut pretium. Donec ultricies, libero quis mollis molestie, sapien dolor blandit erat, non ornare justo justo nec erat. Suspendisse ut aliquam est. Aenean nec magna sodales, efficitur massa at, convallis lacus. Aenean ut sem at erat consectetur fermentum et non dui. Nulla molestie volutpat dolor, eget tincidunt elit ultrices eu. Donec vel mattis sapien, finibus varius lectus. Aenean nec mauris ut nulla ullamcorper ultrices. Donec a mi vestibulum, semper urna venenatis, porttitor quam. Morbi auctor iaculis arcu, sit amet fringilla odio placerat sit amet. Vivamus sed risus congue, viverra elit a, vestibulum magna. Proin et lobortis arcu.
                                </p>
                    </div>
                    <a className="srolocBase hover:font-black w-fit rounded-lg px-5 py-2 text-xs" href="http://example.com" target="_self" rel="noopener noreferrer">
                        Ver mais →
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
