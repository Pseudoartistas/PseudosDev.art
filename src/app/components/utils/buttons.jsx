'use client';

import React, { useState, useEffect } from 'react';
import * as Icons from './icons';

export function ThemeBtn({...props}) {
/* 	var initTheme = (typeof window.localStorage !== 'undefined' && 
                            window.localStorage.getItem('theme')) ? 
                            window.localStorage.getItem('theme') :
                            (typeof window !== 'undefined' &&
                            window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light'; */
    var initTheme = 'light';
                            
	const [theme, setTheme] = useState(initTheme);

	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		window.localStorage.setItem('theme', newTheme);
		setTheme(newTheme);
	};

	useEffect(() => {
		if (typeof document !== 'undefined' && theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else if (typeof document !== 'undefined') {
            document.documentElement.classList.remove('dark');
        }
	}, [theme]);

	return (
		<>
			<button className={`group rounded-sm px-1 py-1 uppercase hover:bg-black/5 hover:font-black dark:hover:bg-white/5 ${theme === 'dark' ? 'moon' : 'sun'} transition-{stroke-width} duration-200 ease-in-out  ${props.className}`} onClick={toggleTheme}>
				{theme === 'dark' ? <Icons.SunAni/> : <Icons.MoonAni/>}
			</button>
		</>
	);
}

/* Chat gpt "arrumou" criando erro de hidratação mas tirou o erro do console.
export function ThemeBtn({...props}) {
    var initTheme = (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined' && window.localStorage.getItem('theme')) ? window.localStorage.getItem('theme') : (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
    const [theme, setTheme] = useState(initTheme);

    // Função para alternar o tema
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        window.localStorage.setItem('theme', newTheme);
        setTheme(newTheme);
    };

    // Atualizar a classe 'dark' no elemento HTML para alternar o tema
    useEffect(() => {
        if (typeof document !== 'undefined' && theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else if (typeof document !== 'undefined') {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    return (
        <>
            <button className={`group rounded-sm px-1 py-1 uppercase hover:bg-black/5 hover:font-black dark:hover:bg-white/5 ${theme === 'dark' ? 'moon' : 'sun'} transition-{stroke-width} duration-200 ease-in-out  ${props.className}`} onClick={toggleTheme}>
                {theme === 'dark' ? <Icons.SunAni/> : <Icons.MoonAni/>}
            </button>
        </>
    );
} */

// Header logo horizontal
export function SearchBtn({...props}) {
	return (
		<>
			<button className={`find transitionNav stroke-neutral-950 stroke-[1.5] p-2.5 hover:stroke-[2.5] dark:stroke-neutral-50  ${props.className}`}>
				<svg className="h-5 w-5" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M9.16667 16.3333C12.8486 16.3333 15.8333 13.3486 15.8333 9.66667C15.8333 5.98477 12.8486 3 9.16667 3C5.48477 3 2.5 5.98477 2.5 9.66667C2.5 13.3486 5.48477 16.3333 9.16667 16.3333Z" strokeLinecap="round" strokeLinejoin="round" />
					<path d="M17.5 18L13.9166 14.4167" stroke="current" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
			</button>
		</>
	);
}

export default { ThemeBtn, SearchBtn };
