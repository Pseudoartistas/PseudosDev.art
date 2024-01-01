'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation'

export function ActiveLink({ submenu, children, ...props }) {
	const activeClassName = 'current';
  	const activePathname = usePathname();
	const linkPathname = props.href


  const isActive = activePathname === linkPathname;
  const className = isActive ? `${props.className || ''} ${activeClassName}` : props.className;

  return (
    <Link {...props} className={className}>
      {children}
    </Link>
  );
}

import React from 'react';
import * as Popover from '@radix-ui/react-popover';
import * as Icons from '../../utils/icons';
import * as Logos from '../../utils/logos';

export function MenuHamburguer({ ...props }) {
	return (
		<Popover.Root>
			<Popover.Trigger asChild>
                <button aria-label="Customise options">
					<Icons.Menu />
				</button>
			</Popover.Trigger>
			<Popover.Portal>
				<Popover.Content className="z-40 flex h-screen w-screen flex-col items-center gap-5 px-5 py-5 text-sm colorsBase relative -top-[58px] md:!-top-0">
                    <div className='flex flex-row justify-between items-center w-full pb-5'>
                        <Popover.Close className="h-8 w-8 invisible" aria-label="Close">
                            <Icons.CloseAni/>
                        </Popover.Close>
                        <Logos.LogoColetivoH/>
                        <Popover.Close className="group rounded-sm px-1 py-1 uppercase hover:font-black hoverButton transition-{stroke-width} duration-200 ease-in-out  " aria-label="Close">
                            <Icons.CloseAni/>
                        </Popover.Close>
                    </div>

                    <div className="hoverButton group relative z-40 flex h-20 w-2/3 flex-col items-start justify-end overflow-hidden rounded-lg bg-[url('/media/img/background/base.jpg')] px-5 py-3 uppercase text-neutral-50 before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:bg-[radial-gradient(circle_at_10%_100%,_rgba(23,23,23,1)_0%,_rgba(23,23,23,0.875770376509979)_19%,_rgba(0,0,0,0)_100%)] hover:font-black bg-center bg-cover">
                        <ActiveLink className="transitionNav nav-link hoverButton rounded-sm px-3 py-1 uppercase hover:font-black" href="/" data-text="Início">
                            Início
                        </ActiveLink>
                    </div>

                    <div className="hoverButton group relative  z-40 flex h-20 w-2/3 flex-col items-start justify-end overflow-hidden rounded-lg bg-[url('/media/img/misc/assets/manifesto_banner.png')] px-5 py-3 uppercase text-neutral-50 before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:bg-[radial-gradient(circle_at_10%_100%,_rgba(23,23,23,1)_0%,_rgba(23,23,23,0.875770376509979)_19%,_rgba(0,0,0,0)_100%)] hover:font-black bg-center bg-cover">
                        <ActiveLink className="transitionNav nav-link hoverButton rounded-sm px-3 py-1 uppercase hover:font-black" href="/manifesto" data-text="Manifesto">
                            Manifesto
                        </ActiveLink>
                    </div>

                    <div className="disabled hoverButton group relative  z-40 flex h-20 w-2/3 flex-col items-start justify-end overflow-hidden rounded-lg bg-[url('/media/img/background/_base.jpg')] px-5 py-3 uppercase text-neutral-50 before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:bg-[radial-gradient(circle_at_10%_100%,_rgba(23,23,23,1)_0%,_rgba(23,23,23,0.875770376509979)_19%,_rgba(0,0,0,0)_100%)] hover:font-black bg-center bg-cover">
                        <ActiveLink className="transitionNav nav-link hoverButton rounded-sm px-3 py-1 uppercase hover:font-black" href="/equipe" data-text="Equipe">
                            Equipe
                        </ActiveLink>
                    </div>

                    <div disabled className="disabled hoverButton group relative  z-40 flex h-20 w-2/3 flex-col items-start justify-end overflow-hidden rounded-lg bg-[url('/media/img/background/_base.jpg')] px-5 py-3 uppercase text-neutral-50 before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:bg-[radial-gradient(circle_at_10%_100%,_rgba(23,23,23,1)_0%,_rgba(23,23,23,0.875770376509979)_19%,_rgba(0,0,0,0)_100%)] hover:font-black bg-center bg-cover">
                        <ActiveLink className="transitionNav nav-link hoverButton rounded-sm px-3 py-1 uppercase hover:font-black" href="/blog" data-text="Blog">
                            Blog
                        </ActiveLink>
                    </div>

                    <div disabled className="disabled hoverButton group relative  z-40 flex h-20 w-2/3 flex-col items-start justify-end overflow-hidden rounded-lg bg-[url('/media/img/background/_base.jpg')] px-5 py-3 uppercase text-neutral-50 before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:bg-[radial-gradient(circle_at_10%_100%,_rgba(23,23,23,1)_0%,_rgba(23,23,23,0.875770376509979)_19%,_rgba(0,0,0,0)_100%)] hover:font-black bg-center bg-cover">
                        <ActiveLink className="transitionNav nav-link hoverButton rounded-sm px-3 py-1 uppercase hover:font-black" href="/projetos">
                            Projetos
                        </ActiveLink>
                    </div>

                    <div className=" flex h-64 w-2/3 flex-col items-start justify-end rounded-lg">
					<span className='flex flex-row w-full items-center justify-center font-light text-base py-2'>Destaque:</span>
						<a href="/" className="flex flex-col justify-end items-start rounded-lg from-neutral-300 to-neutral-200 bg-gradient-to-b from-muted/50 to-muted p-5 max-md:pointer-events-none">
							<Logos.LogoPseudoVH />
							<span className="text-sm line-clamp-2 w-2/3 font-bold">Manifesto do coletivo</span>
							<p className="text-xs line-clamp-3 w-2/3">O coletivo de arte "Pseudoartistas" surge como uma resposta à necessidade urgente de redefinir e expandir a compreensão da arte em uma pequena cidade do interior. Em um contexto de modernidade líquida e resistência às formas de arte que desafiam as crenças estabelecidas, o coletivo busca promover a diversidade artística, a reflexão crítica e a transformação social através da colaboração mútua, intervenções artísticas, oficinas de arte e diálogo social. Com um manifesto artístico que desafia as convenções e valoriza a expressão criativa, o coletivo busca criar um ambiente cultural inclusivo e empoderar artistas de todas as modalidades.</p>
						</a>
					</div>
				</Popover.Content>
			</Popover.Portal>
		</Popover.Root>
	);
}
export function MenuHamzcsadburguer({ ...props }) {
	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild>
				<button aria-label="Customise options">
					<Icons.Menu />
				</button>
			</DropdownMenu.Trigger>

			<DropdownMenu.Portal>
				<DropdownMenu.Content  onCloseAutoFocus={(event) => event.preventDefault()} side="bottom" avoidCollisions="false" sideOffset={20} className="z-40 flex h-screen w-screen flex-col items-center gap-5 p-5 text-sm colorsBase">
					<DropdownMenu.Item className="hoverButton group relative  z-40 flex h-20 w-2/3 flex-col items-start justify-end overflow-hidden rounded-lg bg-[url('/media/img/background/anota.png')] px-5 py-3 uppercase text-neutral-50 before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:bg-[radial-gradient(circle_at_10%_100%,_rgba(23,23,23,1)_0%,_rgba(23,23,23,0.875770376509979)_19%,_rgba(0,0,0,0)_100%)] hover:font-black">
						<ActiveLink className="transitionNav nav-link hoverButton rounded-sm px-3 py-1 uppercase hover:font-black" href="/" data-text="Início">
							Início
						</ActiveLink>
					</DropdownMenu.Item>

					<DropdownMenu.Item className="hoverButton group relative  z-40 flex h-20 w-2/3 flex-col items-start justify-end overflow-hidden rounded-lg bg-[url('/media/img/background/anota.png')] px-5 py-3 uppercase text-neutral-50 before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:bg-[radial-gradient(circle_at_10%_100%,_rgba(23,23,23,1)_0%,_rgba(23,23,23,0.875770376509979)_19%,_rgba(0,0,0,0)_100%)] hover:font-black">
						<ActiveLink className="transitionNav nav-link hoverButton rounded-sm px-3 py-1 uppercase hover:font-black" href="/manifesto" data-text="Manifesto">
							Manifesto
						</ActiveLink>
					</DropdownMenu.Item>

					<DropdownMenu.Item className="hoverButton group relative  z-40 flex h-20 w-2/3 flex-col items-start justify-end overflow-hidden rounded-lg bg-[url('/media/img/background/anota.png')] px-5 py-3 uppercase text-neutral-50 before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:bg-[radial-gradient(circle_at_10%_100%,_rgba(23,23,23,1)_0%,_rgba(23,23,23,0.875770376509979)_19%,_rgba(0,0,0,0)_100%)] hover:font-black">
						<ActiveLink className="transitionNav nav-link hoverButton rounded-sm px-3 py-1 uppercase hover:font-black" href="/equipe" data-text="Equipe">
							Equipe
						</ActiveLink>
					</DropdownMenu.Item>

					<DropdownMenu.Item disabled className="hoverButton group relative  z-40 flex h-20 w-2/3 flex-col items-start justify-end overflow-hidden rounded-lg bg-[url('/media/img/background/anota.png')] px-5 py-3 uppercase text-neutral-50 before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:bg-[radial-gradient(circle_at_10%_100%,_rgba(23,23,23,1)_0%,_rgba(23,23,23,0.875770376509979)_19%,_rgba(0,0,0,0)_100%)] hover:font-black">
						<ActiveLink className="transitionNav nav-link hoverButton rounded-sm px-3 py-1 uppercase hover:font-black" href="/blog" data-text="Blog">
							Blog
						</ActiveLink>
					</DropdownMenu.Item>

					<DropdownMenu.Item disabled className="hoverButton group relative  z-40 flex h-20 w-2/3 flex-col items-start justify-end overflow-hidden rounded-lg bg-[url('/media/img/background/anota.png')] px-5 py-3 uppercase text-neutral-50 before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:bg-[radial-gradient(circle_at_10%_100%,_rgba(23,23,23,1)_0%,_rgba(23,23,23,0.875770376509979)_19%,_rgba(0,0,0,0)_100%)] hover:font-black">
						<ActiveLink className="transitionNav nav-link hoverButton rounded-sm px-3 py-1 uppercase hover:font-black" href="/projetos">
                            Projetos
                        </ActiveLink>
					</DropdownMenu.Item>

					{/* <DropdownMenu.Sub>
						<DropdownMenu.SubTrigger className="hoverButton group group relative  z-40 flex h-20 w-2/3 flex-col items-start justify-end overflow-hidden rounded-lg bg-[url('/media/img/background/anota.png')] px-5 py-3 uppercase text-neutral-50 before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:bg-[radial-gradient(circle_at_10%_100%,_rgba(23,23,23,1)_0%,_rgba(23,23,23,0.875770376509979)_19%,_rgba(0,0,0,0)_100%)] hover:font-black">
							<div className="flex w-full flex-row justify-between">
								<ActiveLink className="transitionNav nav-link hoverButton rounded-sm px-3 py-1 uppercase hover:font-black" href="/projetos">
									Projetos
								</ActiveLink>
								<Icons.ChevronDown />
							</div>
						</DropdownMenu.SubTrigger>

						<DropdownMenu.Portal side="bottom" avoidCollisions="false">
							<DropdownMenu.SubContent className="colorsBase !z-40 flex h-fit w-fit flex-col items-center gap-5 p-5 text-sm">
								<DropdownMenu.Item>
									<ActiveLink className="transitionNav nav-link !select-text uppercase hover:font-black" href="/projetos/pseudos/rodas">
										Rodas de conversa
									</ActiveLink>
									<p>Reuniões com membros ativos do coletivo. Discussões e reflexões.</p>
								</DropdownMenu.Item>

								<DropdownMenu.Item>
									<ActiveLink className="transitionNav nav-link !select-text uppercase hover:font-black" href="/projetos/pseudos/meet">
										Todo piso será palco
									</ActiveLink>
									<p>Eventos públicos organizados pelos membros do coletivo. Apresentação dos trabalhos da guilda de literatura e Culminação do projeto "A Nota".</p>
								</DropdownMenu.Item>

								<DropdownMenu.Item>
									<ActiveLink className="transitionNav nav-link !select-text uppercase hover:font-black" href="/projetos/pseudos/expo">
										Decorando o mobiliário urbano
									</ActiveLink>
									<p>Exposições públicas das obras produzidas pelos membros do coletivo.</p>
								</DropdownMenu.Item>

								<DropdownMenu.Item>
									<ActiveLink className="transitionNav nav-link !select-text uppercase hover:font-black" href="/projetos/anota">
										A Nota
									</ActiveLink>
									<p>Projeto de divulgação poética e cultural com cartazes em lambe-lambe.</p>
								</DropdownMenu.Item>

								<DropdownMenu.Item>
									<ActiveLink className="transitionNav nav-link !select-text uppercase hover:font-black" href="/projetos/pseudos/oficinas">
										Oficinas
									</ActiveLink>
									<p>Oficinas ministradas pelos membros do coletivo.</p>
								</DropdownMenu.Item>
							</DropdownMenu.SubContent>
						</DropdownMenu.Portal>
					</DropdownMenu.Sub> */}
                    <DropdownMenu.Separator />
					<DropdownMenu.Item className=" flex h-64 w-2/3 flex-col items-start justify-end rounded-lg">
						<a href="/" className="flex h-full w-full flex-col justify-end rounded-lg bg-gradient-to-b from-muted/50 to-muted p-5 max-md:pointer-events-none">
							<Logos.LogoANotaVH />
							<span className="line-clamp-2 w-2/3 text-sm font-bold">A Nota</span>
							<p className="line-clamp-3 w-2/3 text-xs">Projeto de divulgação poética e cultural com cartazes em lambe-lambe.</p>
						</a>
					</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
	);
}

export default { ActiveLink, MenuHamburguer };
