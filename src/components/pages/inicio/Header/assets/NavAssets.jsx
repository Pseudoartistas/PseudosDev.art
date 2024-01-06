"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import * as Popover from "@radix-ui/react-popover";
import * as Icons from "../../../../utilities/Icons";
import * as Logos from "../../../../utilities/Logos";

export function ActiveLink({ submenu, children, ...props }) {
  const activeClassName = "current";
  const activePathname = usePathname();
  const linkPathname = props.href;

  const isActive = activePathname === linkPathname;
  const className = isActive
    ? `${props.className || ""} ${activeClassName}`
    : props.className;

  return (
    <Link {...props} className={className}>
      {children}
    </Link>
  );
}

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
          <div className="flex flex-row justify-between items-center w-full pb-5">
            <Popover.Close className="h-8 w-8 invisible" aria-label="Close">
              <Icons.CloseAni />
            </Popover.Close>
            <Logos.LogoColetivoH />
            <Popover.Close
              className="group rounded-sm px-1 py-1 uppercase hover:font-black hoverButton transition-{stroke-width} duration-200 ease-in-out  "
              aria-label="Close"
            >
              <Icons.CloseAni />
            </Popover.Close>
          </div>

          <div className="hoverButton group relative z-40 flex h-20 w-2/3 flex-col items-start justify-end overflow-hidden rounded-lg bg-[url('/media/img/background/base.jpg')] px-5 py-3 uppercase text-neutral-50 before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:bg-[radial-gradient(circle_at_10%_100%,_rgba(23,23,23,1)_0%,_rgba(23,23,23,0.875770376509979)_19%,_rgba(0,0,0,0)_100%)] hover:font-black bg-center bg-cover">
            <ActiveLink
              className="transitionNav nav-link hoverButton rounded-sm px-3 py-1 uppercase hover:font-black"
              href="/"
              data-text="Início"
            >
              Início
            </ActiveLink>
          </div>

          <div className="hoverButton group relative  z-40 flex h-20 w-2/3 flex-col items-start justify-end overflow-hidden rounded-lg bg-[url('/media/img/misc/assets/manifesto_banner.png')] px-5 py-3 uppercase text-neutral-50 before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:bg-[radial-gradient(circle_at_10%_100%,_rgba(23,23,23,1)_0%,_rgba(23,23,23,0.875770376509979)_19%,_rgba(0,0,0,0)_100%)] hover:font-black bg-center bg-cover">
            <ActiveLink
              className="transitionNav nav-link hoverButton rounded-sm px-3 py-1 uppercase hover:font-black"
              href="/manifesto"
              data-text="Manifesto"
            >
              Manifesto
            </ActiveLink>
          </div>

          <div className="disabled hoverButton group relative  z-40 flex h-20 w-2/3 flex-col items-start justify-end overflow-hidden rounded-lg bg-[url('/media/img/background/_base.jpg')] px-5 py-3 uppercase text-neutral-50 before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:bg-[radial-gradient(circle_at_10%_100%,_rgba(23,23,23,1)_0%,_rgba(23,23,23,0.875770376509979)_19%,_rgba(0,0,0,0)_100%)] hover:font-black bg-center bg-cover">
            <ActiveLink
              className="transitionNav nav-link hoverButton rounded-sm px-3 py-1 uppercase hover:font-black"
              href="/equipe"
              data-text="Equipe"
            >
              Equipe
            </ActiveLink>
          </div>

          <div
            disabled
            className="disabled hoverButton group relative  z-40 flex h-20 w-2/3 flex-col items-start justify-end overflow-hidden rounded-lg bg-[url('/media/img/background/_base.jpg')] px-5 py-3 uppercase text-neutral-50 before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:bg-[radial-gradient(circle_at_10%_100%,_rgba(23,23,23,1)_0%,_rgba(23,23,23,0.875770376509979)_19%,_rgba(0,0,0,0)_100%)] hover:font-black bg-center bg-cover"
          >
            <ActiveLink
              className="transitionNav nav-link hoverButton rounded-sm px-3 py-1 uppercase hover:font-black"
              href="/blog"
              data-text="Blog"
            >
              Blog
            </ActiveLink>
          </div>

          <div
            disabled
            className="disabled hoverButton group relative  z-40 flex h-20 w-2/3 flex-col items-start justify-end overflow-hidden rounded-lg bg-[url('/media/img/background/_base.jpg')] px-5 py-3 uppercase text-neutral-50 before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:bg-[radial-gradient(circle_at_10%_100%,_rgba(23,23,23,1)_0%,_rgba(23,23,23,0.875770376509979)_19%,_rgba(0,0,0,0)_100%)] hover:font-black bg-center bg-cover"
          >
            <ActiveLink
              className="transitionNav nav-link hoverButton rounded-sm px-3 py-1 uppercase hover:font-black"
              href="/projetos"
            >
              Projetos
            </ActiveLink>
          </div>

          <div className=" flex h-64 w-2/3 flex-col items-start justify-end rounded-lg">
            <span className="flex flex-row w-full items-center justify-center font-light text-base py-2">
              Destaque:
            </span>
            <a
              href="/"
              className="flex flex-col justify-end items-start rounded-lg from-neutral-300 to-neutral-200 bg-gradient-to-b from-muted/50 to-muted p-5 max-md:pointer-events-none"
            >
              <Logos.LogoPseudoVH />
              <span className="text-sm line-clamp-2 w-2/3 font-bold">
                Manifesto do coletivo
              </span>
              <p className="text-xs line-clamp-3 w-2/3">
                O coletivo de arte "Pseudoartistas" surge como uma resposta à
                necessidade urgente de redefinir e expandir a compreensão da
                arte em uma pequena cidade do interior. Em um contexto de
                modernidade líquida e resistência às formas de arte que desafiam
                as crenças estabelecidas, o coletivo busca promover a
                diversidade artística, a reflexão crítica e a transformação
                social através da colaboração mútua, intervenções artísticas,
                oficinas de arte e diálogo social. Com um manifesto artístico
                que desafia as convenções e valoriza a expressão criativa, o
                coletivo busca criar um ambiente cultural inclusivo e empoderar
                artistas de todas as modalidades.
              </p>
            </a>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
const assets = { ActiveLink, MenuHamburguer }
export default assets;
