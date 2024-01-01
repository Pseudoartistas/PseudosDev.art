'use client';
import React from 'react';
import { ActiveLink, MenuHamburguer } from './nav_components';
import classNames from 'classnames';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import * as Icons from '../../utils/icons';
import * as Logos from '../../utils/logos';

export default function Nav() {
	const [subMenu_OficinasIsOpen, subMenu_OficinasSetOpen] = React.useState(false);

	const subMenu_Oficinas = () => {
		subMenu_OficinasSetOpen(!subMenu_OficinasIsOpen);
	};

	return (
		<>
			<nav className="flex text-sm z-30 max-md:hidden">
				<NavigationMenu.Root>
					<NavigationMenu.List className="flex items-center gap-3 text-sm">
						<NavigationMenu.Item>
							<ActiveLink className="transitionNav nav-link hoverButton rounded-sm px-3 py-1 uppercase hover:font-black" href="/" data-text="Início">
								Início
							</ActiveLink>
						</NavigationMenu.Item>
						<NavigationMenu.Item>
							<ActiveLink className="transitionNav nav-link hoverButton rounded-sm px-3 py-1 uppercase hover:font-black" href="/manifesto" data-text="Manifesto">
								Manifesto
							</ActiveLink>
						</NavigationMenu.Item>
						<NavigationMenu.Item>
							<ActiveLink className="transitionNav nav-link hoverButton rounded-sm px-3 py-1 uppercase hover:font-black" href="/equipe" data-text="Equipe">
								Equipe
							</ActiveLink>
						</NavigationMenu.Item>
						<NavigationMenu.Item>
							<ActiveLink className="transitionNav nav-link hoverButton rounded-sm px-3 py-1 uppercase hover:font-black" href="/blog" data-text="Blog">
								Blog
							</ActiveLink>
						</NavigationMenu.Item>
						<NavigationMenu.Item>
							<NavigationMenu.Trigger className="group flex items-center gap-1 rounded-sm px-3 py-1 hoverButton aria-expanded:font-black aria-expanded:bg-neutral-900/5 dark:aria-expanded:bg-neutral-50/5">
								<ActiveLink className="transitionNav nav-link !select-text uppercase hover:font-black" href="/projetos" data-text="Projetos">
									Projetos
								</ActiveLink>
								<Icons.ChevronDown className="gambiarra" />
							</NavigationMenu.Trigger>
							<NavigationMenu.Content className="animacaoMenu" onPointerEnter={(event) => event.preventDefault()} onPointerLeave={(event) => event.preventDefault()}>
								<div className="colorsBase flex w-full">
									<ul className="animate-enterFromTop grid grid-flow-col grid-rows-3 gap-5 overflow-x-scroll p-5 max-md:grid-flow-row max-md:w-full max-md:overflow-y-scroll">
										<li className="row-span-3">
											<NavigationMenu.Link asChild className="w-full h-full max-md:min-w-full min-w-80 max-md:min-h-64">
												<a href="/" className="flex flex-col items-start justify-end rounded-lg bg-gradient-to-b from-muted/50 to-muted p-5 max-md:pointer-events-none">
													<Logos.LogoANotaVH />
													<span className="text-sm line-clamp-2 w-2/3 font-bold">A Nota</span>
													<p className="text-xs line-clamp-3 w-2/3">Projeto de divulgação poética e cultural com cartazes em lambe-lambe.</p>
												</a>
											</NavigationMenu.Link>
										</li>
										<ListItem href="/projetos/pseudos/rodas" title="Rodas de conversa">
											Reuniões com membros ativos do coletivo. Discussões e reflexões.
										</ListItem>
										<ListItem href="/projetos/pseudos/meet" title="Todo piso será palco">
											Eventos públicos organizados pelos membros do coletivo. Apresentação dos trabalhos da guilda de literatura e Culminação do projeto "A Nota".
										</ListItem>
										<ListItem href="/projetos/pseudos/expo" title="Decorando o mobiliário urbano">
											Exposições públicas das obras produzidas pelos membros do coletivo.
										</ListItem>
										<ListItem href="/projetos/anota" title="A Nota">
											Projeto de divulgação poética e cultural com cartazes em lambe-lambe.
										</ListItem>
										<div className={`group flex h-fit flex-row justify-between gap-3 ${subMenu_OficinasIsOpen ? 'srolocBaseTransparency hoverButton rounded-lg' : ''}`}>
											<ListItem href="/projetos/pseudos/oficinas" title="Oficinas">
												Oficinas ministradas pelos membros do coletivo.
											</ListItem>
											<button onClick={subMenu_Oficinas} className={`hoverButton flex min-w-[50px] max-w-[100px] items-center justify-center rounded-lg uppercase hover:font-black`}>
												<Icons.ChevronRight className={`${subMenu_OficinasIsOpen ? 'animate-bounceX' : ''}`} />
											</button>
										</div>
										<ul className={`animate-enterFromTop row-span-3 grid grid-flow-col grid-rows-3 gap-5 ${subMenu_OficinasIsOpen ? '' : 'hidden'}`}>
											<ListItem title="Poesia de rasura" href="/projetos/pseudos/oficinas/PDR">
												Poesia de retalhos, poesia de rasura ou no inglês “Blackout Poetry” é um tipo de...
											</ListItem>
											<ListItem title="Corpo expressivo" href="/projetos/pseudos/oficinas/CEX">
												Estudos do corpo como ferramenta de expressão e comunicação.
											</ListItem>
											<ListItem title="Beijando a cidade" href="/projetos/pseudos/oficinas/BAC">
												Viagem pela história da poesia de rua e exercício de sua prática como forma de expressão política e social.
											</ListItem>
										</ul>
									</ul>
								</div>
							</NavigationMenu.Content>
						</NavigationMenu.Item>
					</NavigationMenu.List>
					<div className="absolute left-0 top-full w-full">
						<NavigationMenu.Viewport className="relative h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden  rounded-b-lg transition-[width,_height] duration-300 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn sm:w-full" />
					</div>
				</NavigationMenu.Root>
			</nav>
			<nav className='z-50 hidden max-md:!flex group rounded-sm px-1 py-1 uppercase hover:font-black hoverButton transition-{stroke-width} duration-200 ease-in-out '>
				<MenuHamburguer/>
			</nav>
		</>
	);
}

const ListItem = React.forwardRef(({ className, children, title, ...props }, forwardedRef) => (
	<li>
		<NavigationMenu.Link asChild>
			<ActiveLink className={classNames('hoverButton line-clamp-none w-full min-w-64 max-w-80 h-20 items-center rounded-lg p-3 text-base no-underline transition-colors', className)} {...props} ref={forwardedRef}>
				<div className="line-clamp-1 text-sm font-semibold uppercase">{title}</div>
				<p className="line-clamp-2 hyphens-auto text-justify text-xs [word-spacing:-1px]">{children}</p>
			</ActiveLink>
		</NavigationMenu.Link>
	</li>
));
