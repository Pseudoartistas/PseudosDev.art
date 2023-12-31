export function ChevronDown({ ...props }) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth="1em" viewBox="0 0 256 256" width="20" height="20" className={`transitionNav group-hover:stroke-[2em] group-aria-expanded:stroke-[2em] ${props.className}`}>
			<path d="m 208,88.00001 -80,80 -80,-80" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
}

export function ChevronRight({ ...props }) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth="1em" viewBox="0 0 256 256" width="20" height="20" className={`transitionNav group-hover:stroke-[2em] group-aria-expanded:stroke-[2em] ${props.className}`}>
			<path d="m 88.00001,48 80,80 -80,80" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
}

export function Sun({ ...props }) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth="1em" viewBox="0 0 256 256" width="20" height="20" className={`transitionNav group-hover:stroke-[2em]${props.className}`}>
			<line x1="128" y1="32" x2="128" y2="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
			<circle cx="128" cy="128" r="56" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
			<line x1="60" y1="60" x2="48" y2="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
			<line x1="60" y1="196" x2="48" y2="208" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
			<line x1="196" y1="60" x2="208" y2="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
			<line x1="196" y1="196" x2="208" y2="208" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
			<line x1="32" y1="128" x2="16" y2="128" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
			<line x1="128" y1="224" x2="128" y2="240" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
			<line x1="224" y1="128" x2="240" y2="128" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
}
export function SunAni({ ...props }) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className={`${props.className}`}>
			<g fill="none" stroke="currentColor" strokeDasharray="2" strokeDashoffset="2" strokeLinecap="round" strokeWidth="2">
				<path d="M0 0">
					<animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1" />
					<animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="2;0" />
				</path>
				<path d="M0 0">
					<animate fill="freeze" attributeName="d" begin="0.9s" dur="0.2s" values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5" />
					<animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="1.2s" values="2;0" />
				</path>
				<animateTransform attributeName="transform" dur="30s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12" />
			</g>
			<mask id="lineMdMoonAltToSunnyOutlineLoopTransition0">
				<circle cx="12" cy="12" r="12" fill="#fff" />
				<circle cx="12" cy="12" r="8">
					<animate fill="freeze" attributeName="r" dur="0.4s" values="8;4" />
				</circle>
				<circle cx="18" cy="6" r="12" fill="#fff">
					<animate fill="freeze" attributeName="cx" dur="0.4s" values="18;22" />
					<animate fill="freeze" attributeName="cy" dur="0.4s" values="6;2" />
					<animate fill="freeze" attributeName="r" dur="0.4s" values="12;3" />
				</circle>
				<circle cx="18" cy="6" r="10">
					<animate fill="freeze" attributeName="cx" dur="0.4s" values="18;22" />
					<animate fill="freeze" attributeName="cy" dur="0.4s" values="6;2" />
					<animate fill="freeze" attributeName="r" dur="0.4s" values="10;1" />
				</circle>
			</mask>
			<circle cx="12" cy="12" r="10" fill="currentColor" mask="url(#lineMdMoonAltToSunnyOutlineLoopTransition0)">
				<animate fill="freeze" attributeName="r" dur="0.4s" values="10;5.5" />
			</circle>
		</svg>
	);
}
export function Moon({ ...props }) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth="1em" viewBox="0 0 256 256" width="20" height="20" className={`transitionNav group-hover:stroke-[2em] ${props.className}`}>
			<path d="M108.11,28.11A96.09,96.09,0,0,0,227.89,147.89,96,96,0,1,1,108.11,28.11Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
}
export function CloseAni({ ...props }) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" strokeWidth="1.3" className={`${props.className}`}>
			<g fill="none" stroke="currentColor" strokeLinecap="round" strokeDasharray="16" strokeDashoffset="16"  strokeLinejoin="round" transform="matrix(16.904592,0,0,16.904592,-74.855099,-74.855099)">
				<path d="M7 7L17 17">
					<animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="16;0" />
				</path>
				<path d="M17 7L7 17">
					<animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.4s" values="16;0" />
				</path>
			</g>
		</svg>
	);
}
export function MoonAni({ ...props }) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.3" className={`${props.className}`}>
			<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
				<g strokeDasharray="2">
					<path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
						<animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="4;2" />
					</path>
					<path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
						<animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="4;2" />
					</path>
				</g>
				<path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" opacity="0">
					<set attributeName="opacity" begin="0.5s" to="1" />
				</path>
			</g>
			<g fill="none" stroke="currentColor" strokeDasharray="4" strokeDashoffset="4" strokeLinecap="round" strokeLinejoin="round">
				<path d="M13 4h1.5M13 4h-1.5M13 4v1.5M13 4v-1.5">
					<animate id="lineMdSunnyOutlineToMoonAltLoopTransition0" fill="freeze" attributeName="stroke-dashoffset" begin="0.6s;lineMdSunnyOutlineToMoonAltLoopTransition0.begin+6s" dur="0.4s" values="4;0" />
					<animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdSunnyOutlineToMoonAltLoopTransition0.begin+2s;lineMdSunnyOutlineToMoonAltLoopTransition0.begin+4s" dur="0.4s" values="4;0" />
					<animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdSunnyOutlineToMoonAltLoopTransition0.begin+1.2s;lineMdSunnyOutlineToMoonAltLoopTransition0.begin+3.2s;lineMdSunnyOutlineToMoonAltLoopTransition0.begin+5.2s" dur="0.4s" values="0;4" />
					<set attributeName="d" begin="lineMdSunnyOutlineToMoonAltLoopTransition0.begin+1.8s" to="M12 5h1.5M12 5h-1.5M12 5v1.5M12 5v-1.5" />
					<set attributeName="d" begin="lineMdSunnyOutlineToMoonAltLoopTransition0.begin+3.8s" to="M12 4h1.5M12 4h-1.5M12 4v1.5M12 4v-1.5" />
					<set attributeName="d" begin="lineMdSunnyOutlineToMoonAltLoopTransition0.begin+5.8s" to="M13 4h1.5M13 4h-1.5M13 4v1.5M13 4v-1.5" />
				</path>
				<path d="M19 11h1.5M19 11h-1.5M19 11v1.5M19 11v-1.5">
					<animate id="lineMdSunnyOutlineToMoonAltLoopTransition1" fill="freeze" attributeName="stroke-dashoffset" begin="1s;lineMdSunnyOutlineToMoonAltLoopTransition1.begin+6s" dur="0.4s" values="4;0" />
					<animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdSunnyOutlineToMoonAltLoopTransition1.begin+2s;lineMdSunnyOutlineToMoonAltLoopTransition1.begin+4s" dur="0.4s" values="4;0" />
					<animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdSunnyOutlineToMoonAltLoopTransition1.begin+1.2s;lineMdSunnyOutlineToMoonAltLoopTransition1.begin+3.2s;lineMdSunnyOutlineToMoonAltLoopTransition1.begin+5.2s" dur="0.4s" values="0;4" />
					<set attributeName="d" begin="lineMdSunnyOutlineToMoonAltLoopTransition1.begin+1.8s" to="M17 11h1.5M17 11h-1.5M17 11v1.5M17 11v-1.5" />
					<set attributeName="d" begin="lineMdSunnyOutlineToMoonAltLoopTransition1.begin+3.8s" to="M18 12h1.5M18 12h-1.5M18 12v1.5M18 12v-1.5" />
					<set attributeName="d" begin="lineMdSunnyOutlineToMoonAltLoopTransition1.begin+5.8s" to="M19 11h1.5M19 11h-1.5M19 11v1.5M19 11v-1.5" />
				</path>
				<path d="M19 4h1.5M19 4h-1.5M19 4v1.5M19 4v-1.5">
					<animate id="lineMdSunnyOutlineToMoonAltLoopTransition2" fill="freeze" attributeName="stroke-dashoffset" begin="2.8s;lineMdSunnyOutlineToMoonAltLoopTransition2.begin+6s" dur="0.4s" values="4;0" />
					<animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdSunnyOutlineToMoonAltLoopTransition2.begin+2s" dur="0.4s" values="4;0" />
					<animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdSunnyOutlineToMoonAltLoopTransition2.begin+1.2s;lineMdSunnyOutlineToMoonAltLoopTransition2.begin+3.2s" dur="0.4s" values="0;4" />
					<set attributeName="d" begin="lineMdSunnyOutlineToMoonAltLoopTransition2.begin+1.8s" to="M20 5h1.5M20 5h-1.5M20 5v1.5M20 5v-1.5" />
					<set attributeName="d" begin="lineMdSunnyOutlineToMoonAltLoopTransition2.begin+5.8s" to="M19 4h1.5M19 4h-1.5M19 4v1.5M19 4v-1.5" />
				</path>
			</g>
			<mask id="lineMdSunnyOutlineToMoonAltLoopTransition3">
				<circle cx="12" cy="12" r="12" fill="#fff" />
				<circle cx="12" cy="12" r="4">
					<animate fill="freeze" attributeName="r" begin="0.1s" dur="0.4s" values="4;8" />
				</circle>
				<circle cx="22" cy="2" r="3" fill="#fff">
					<animate fill="freeze" attributeName="cx" begin="0.1s" dur="0.4s" values="22;18" />
					<animate fill="freeze" attributeName="cy" begin="0.1s" dur="0.4s" values="2;6" />
					<animate fill="freeze" attributeName="r" begin="0.1s" dur="0.4s" values="3;12" />
				</circle>
				<circle cx="22" cy="2" r="1">
					<animate fill="freeze" attributeName="cx" begin="0.1s" dur="0.4s" values="22;18" />
					<animate fill="freeze" attributeName="cy" begin="0.1s" dur="0.4s" values="2;6" />
					<animate fill="freeze" attributeName="r" begin="0.1s" dur="0.4s" values="1;10" />
				</circle>
			</mask>
			<circle cx="12" cy="12" r="6" fill="currentColor" mask="url(#lineMdSunnyOutlineToMoonAltLoopTransition3)">
				<set attributeName="opacity" begin="0.5s" to="0" />
				<animate fill="freeze" attributeName="r" begin="0.1s" dur="0.4s" values="6;10" />
			</circle>
		</svg>
	);
}
export function Github({ ...props }) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth="1em" viewBox="0 0 256 256" width="20" height="20" className={`transitionNav group-hover:stroke-[2em] ${props.className}`}>
			<path d="M119.83,56A52,52,0,0,0,76,32a51.92,51.92,0,0,0-3.49,44.7A49.28,49.28,0,0,0,64,104v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.28,49.28,0,0,0-8.51-27.3A51.92,51.92,0,0,0,196,32a52,52,0,0,0-43.83,24Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M104,232V192a32,32,0,0,1,32-32h0a32,32,0,0,1,32,32v40" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M104,208H76a32,32,0,0,1-32-32,32,32,0,0,0-32-32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
}
export function Instagram({ ...props }) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth="1em" viewBox="0 0 256 256" width="20" height="20" className={`transitionNav group-hover:stroke-[2em] ${props.className}`}>
			<circle cx="128" cy="128" r="36" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
			<rect x="32" y="32" width="192" height="192" rx="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
			<circle cx="180" cy="76" r="16" />
		</svg>
	);
}
export function Facebook({ ...props }) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth="1em" viewBox="0 0 256 256" width="20" height="20" className={`transitionNav group-hover:stroke-[2em] ${props.className}`}>
			<circle cx="128" cy="128" r="96" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M168,88H152a24,24,0,0,0-24,24V224" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
			<line x1="96" y1="144" x2="160" y2="144" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
}
export function Threads({ ...props }) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" strokeWidth="1em" width="20" height="20" className={`transitionNav group-hover:stroke-[2em] ${props.className}`}>
			<path d="m 218.9285,76.415735 c 0,0 -13.4416,-57.103904 -90.9564,-58.054843 -77.514801,-0.95094 -92.036763,72.958725 -90.827692,109.928578 1.209073,36.96986 13.15054,109.35803 90.841502,109.35803 77.69097,0 84.07084,-51.94673 84.07084,-60.01572 0,-17.21384 -2.82117,-58.90361 -77.64926,-56.88636 -55.05996,1.48433 -46.831491,60.38292 -6.42158,60.38292 40.40992,0 46.53433,-34.31015 45.5149,-56.48291 -1.47776,-32.141465 -18.94213,-66.972597 -69.05142,-40.210455" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
}
export function Menu({ ...props }) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" strokeWidth="1em" width="20" height="20" className={`transitionNav group-hover:stroke-[2em] ${props.className}`}>
			<line x1="40" y1="128" x2="216" y2="128" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
			<line x1="40" y1="64" x2="216" y2="64" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
			<line x1="40" y1="192" x2="216" y2="192" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
}

export default { ChevronDown, Sun, Moon, Github, Instagram, Facebook, Threads, Menu, SunAni, MoonAni, ChevronRight, CloseAni };
