import Image from 'next/image';
import Header from '../../src/app/components/header';
import Footer from '../../src/app/components/footer';
import '../../src/app/globals.css';
import { Inter, Lora } from "next/font/google";
import Head from 'next/head';

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

/* export const metadata = {
	title: "Manifesto - Pseudoartistas",
	description: "O coletivo de arte 'Pseudoartistas' surge como uma resposta à necessidade urgente de redefinir e expandir a compreensão da arte em uma pequena cidade do interior. Em um contexto de modernidade líquida e resistência às formas de arte que desafiam as crenças estabelecidas, o coletivo busca promover a diversidade artística, a reflexão crítica e a transformação social através da colaboração mútua, intervenções artísticas, oficinas de arte e diálogo social. Com um manifesto artístico que desafia as convenções e valoriza a expressão criativa, o coletivo busca criar um ambiente cultural inclusivo e empoderar artistas de todas as modalidades.",
	generator: 'Next.js',
	  applicationName: 'Coletivo de Pseudoartistas',
	  referrer: 'origin-when-cross-origin',
	  keywords: ['coletivo', 'arte', 'pseudoartista', "Artivismo", "Criatividade", "Transgressão", "Diálogo", "Transformação", "Intervenção", "Colaboratividade", "Conscientização", "Empoderamento", "Inovação", "Contemporaneidade", "Diversidade", "Pseudoarte", "Desconstrução", "Reflexão", "Engajamento", "Desafio", "Convenções", "Manifesto", "Comunidade", "Diálogo", "Aprendizado", "Troca", "Desenvolvimento", "Resistência", "Ambiente", "Inclusão", "Expressão", "Consciência", "Desenvolvimento", "Exploração", "Criativo", "Cultural", "Mudança", "Perspectiva", "Oficina", "Conhecimento", "Social", 'Arte', 'Coletivo de arte', 'Diversidade artística', 'Reflexões profundas', 'Mudanças significativas', 'Colaboração mútua', 'Inovação artística', 'Comunidade cultural', 'Expressão criativa', 'Valorização da arte', 'Engajamento ativo', 'Intervenções artísticas', 'Diálogo social', 'Oficinas de arte', 'Consciência crítica', 'Exploração de ideias', 'Aprendizado contínuo', 'Troca de conhecimento', 'Desafio das convenções', 'Ambiente cultural inclusivo', 'Manifesto artístico', 'Pseudoartistas', 'Modernidade líquida', 'Cultura contemporânea', 'Transformação social', 'Desenvolvimento crítico', 'Empoderamento artístico', 'Engajamento comunitário', 'Exploração criativa', 'Desconstrução de normas', 'Ampliação de perspectivas', 'Consciência cultural', 'Inclusão artística', 'Resistência criativa'],
	  creator: 'Edvaldo Brito e Lorrayne Lira',
	  publisher: 'Coletivo de Pseudoartistas',
	  formatDetection: {
		  email: false,
		  address: false,
		  telephone: false,
	  },
	icons: {
	  icon: [
		{ url: '/media/img/logos/favicons/favicon-32x32.png', type: 'image/png', sizes: '32x32'},
		{ url: '/media/img/logos/favicons/favicon-16x16.png', type: 'image/png', sizes: '16x16'},
		{ url: '/media/img/logos/favicons/favicon-32x32-dark.png', type: 'image/png', sizes: '32x32', media: '(prefers-color-scheme: dark)' },
		{ url: '/media/img/logos/favicons/favicon-16x16-dark.png', type: 'image/png', sizes: '16x16', media: '(prefers-color-scheme: dark)' },
	  ],
	  shortcut: ['/media/img/logos/favicons/favicon.ico'],
	  apple: [
		{ url: '/media/img/logos/favicons/apple-touch-icon.png' },
		{ url: '/media/img/logos/favicons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
	  ],
	  other: [
		{
		  rel: 'manifest',
		  url: '/media/img/logos/favicons/site.webmanifest',
		},
		{
		  rel: 'apple-touch-icon',
		  sizes: '180x180',
		  url: '/media/img/logos/favicons/apple-touch-icon.png',
		},
		{
		  rel: 'mask-icon',
		  url: '/media/img/logos/favicons/safari-pinned-tab.svg',
		  color: '#171717'
		},
	  ],
	  openGraph: {
		type: 'website',
		url: 'https://pseudos.art/manifesto',
		title: 'Pseudo Manifesto - Virada Cultural Florestense | Coletivo de Pseudoartistas ',
		description: "O coletivo de arte 'Pseudoartistas' surge como uma resposta à necessidade urgente de redefinir e expandir a compreensão da arte em uma pequena cidade do interior. Em um contexto de modernidade líquida e resistência às formas de arte que desafiam as crenças estabelecidas, o coletivo busca promover a diversidade artística, a reflexão crítica e a transformação social através da colaboração mútua, intervenções artísticas, oficinas de arte e diálogo social. Com um manifesto artístico que desafia as convenções e valoriza a expressão criativa, o coletivo busca criar um ambiente cultural inclusivo e empoderar artistas de todas as modalidades.",
		images: [
		  { url: 'https://pseudos.art/media/img/misc/assets/manifesto_banner.png', alt: 'Banner do manifesto' },
		],
		site_name: 'Coletivo de Pseudoartistas',
	  },
	}
} */

export default function manifesto() {
	return (
		<>
			<Head>
				<meta property="og:title" content="Pseudo Manifesto - Virada Cultural Florestense | Coletivo de Pseudoartistas" />
				<meta property="og:description" content="O coletivo de arte 'Pseudoartistas' surge como uma resposta à necessidade urgente de redefinir e expandir a compreensão da arte em uma pequena cidade do interior. Em um contexto de modernidade líquida e resistência às formas de arte que desafiam as crenças estabelecidas, o coletivo busca promover a diversidade artística, a reflexão crítica e a transformação social através da colaboração mútua, intervenções artísticas, oficinas de arte e diálogo social. Com um manifesto artístico que desafia as convenções e valoriza a expressão criativa, o coletivo busca criar um ambiente cultural inclusivo e empoderar artistas de todas as modalidades." />
				<meta property="og:url" content="https://pseudos.art/manifesto" />
				<meta property="og:image" content="https://pseudos.art/media/img/misc/assets/manifesto_banner.png" />
				<meta property="og:image:alt" content="Banner do manifesto" />
				<meta property="og:type" content="website" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Pseudo Manifesto - Virada Cultural Florestense | Coletivo de Pseudoartistas" />
				<meta name="twitter:description" content="O coletivo de arte 'Pseudoartistas' surge como uma resposta à necessidade urgente de redefinir e expandir a compreensão da arte em uma pequena cidade do interior. Em um contexto de modernidade líquida e resistência às formas de arte que desafiam as crenças estabelecidas, o coletivo busca promover a diversidade artística, a reflexão crítica e a transformação social através da colaboração mútua, intervenções artísticas, oficinas de arte e diálogo social. Com um manifesto artístico que desafia as convenções e valoriza a expressão criativa, o coletivo busca criar um ambiente cultural inclusivo e empoderar artistas de todas as modalidades." />
				<meta name="twitter:image" content="https://pseudos.art/media/img/misc/assets/manifesto_banner.png" />
				<meta name="twitter:image:alt" content="Banner do manifesto" />
				<meta charset="utf-8" />
				<meta name="msapplication-TileColor" content="#fafafa" />
				<meta name="msapplication-TileImage" content="/media/img/logos/favicons/mstile-144x144.png" />
				<meta name="msapplication-config" content="/media/img/logos/favicons/browserconfig.xml" />
				<meta name="theme-color" content="#fafafa" />
				<title>Pseudo Manifesto - Virada Cultural Florestense | Coletivo de Pseudoartistas</title>
				<meta name="description" content="O coletivo de arte 'Pseudoartistas' surge como uma resposta à necessidade urgente de redefinir e expandir a compreensão da arte em uma pequena cidade do interior. Em um contexto de modernidade líquida e resistência às formas de arte que desafiam as crenças estabelecidas, o coletivo busca promover a diversidade artística, a reflexão crítica e a transformação social através da colaboração mútua, intervenções artísticas, oficinas de arte e diálogo social. Com um manifesto artístico que desafia as convenções e valoriza a expressão criativa, o coletivo busca criar um ambiente cultural inclusivo e empoderar artistas de todas as modalidades." />
				<meta name="application-name" content="Coletivo de Pseudoartistas" />
				<meta name="generator" content="Next.js" />
				<meta name="keywords"
					content="coletivo,arte,pseudoartista,Artivismo,Criatividade,Transgressão,Diálogo,Transformação,Intervenção,Colaboratividade,Conscientização,Empoderamento,Inovação,Contemporaneidade,Diversidade,Pseudoarte,Desconstrução,Reflexão,Engajamento,Desafio,Convenções,Manifesto,Comunidade,Diálogo,Aprendizado,Troca,Desenvolvimento,Resistência,Ambiente,Inclusão,Expressão,Consciência,Desenvolvimento,Exploração,Criativo,Cultural,Mudança,Perspectiva,Oficina,Conhecimento,Social,Arte,Coletivo de arte,Diversidade artística,Reflexões profundas,Mudanças significativas,Colaboração mútua,Inovação artística,Comunidade cultural,Expressão criativa,Valorização da arte,Engajamento ativo,Intervenções artísticas,Diálogo social,Oficinas de arte,Consciência crítica,Exploração de ideias,Aprendizado contínuo,Troca de conhecimento,Desafio das convenções,Ambiente cultural inclusivo,Manifesto artístico,Pseudoartistas,Modernidade líquida,Cultura contemporânea,Transformação social,Desenvolvimento crítico,Empoderamento artístico,Engajamento comunitário,Exploração criativa,Desconstrução de normas,Ampliação de perspectivas,Consciência cultural,Inclusão artística,Resistência criativa" />
				<meta name="referrer" content="origin-when-cross-origin" />
				<meta name="creator" content="Edvaldo Brito (@verwischt)" />
				<meta name="publisher" content="Coletivo de Pseudoartistas" />
				<meta name="format-detection" content="telephone=no, address=no, email=no" />
				<link rel="shortcut icon" href="/media/img/logos/favicons/favicon.ico" />
				<link rel="icon" href="/media/img/logos/favicons/favicon-32x32.png" type="image/png" sizes="32x32" />
				<link rel="icon" href="/media/img/logos/favicons/favicon-16x16.png" type="image/png" sizes="16x16" />
				<link rel="icon" href="/media/img/logos/favicons/favicon-32x32-dark.png" type="image/png" sizes="32x32"
					media="(prefers-color-scheme: dark)" />
				<link rel="icon" href="/media/img/logos/favicons/favicon-16x16-dark.png" type="image/png" sizes="16x16"
					media="(prefers-color-scheme: dark)" />
				<link rel="apple-touch-icon" href="/media/img/logos/favicons/apple-touch-icon.png" />
				<link rel="apple-touch-icon" href="/media/img/logos/favicons/apple-touch-icon.png" sizes="180x180"
					type="image/png" />
				<link rel="manifest" href="/media/img/logos/favicons/site.webmanifest" />
				<link rel="apple-touch-icon" href="/media/img/logos/favicons/apple-touch-icon.png" sizes="180x180" />
				<link rel="mask-icon" href="/media/img/logos/favicons/safari-pinned-tab.svg" color="#171717" />
			</Head>
			<main className="min-w-screen colorsBase flex min-h-screen flex-col overflow-x-hidden px-5 md:px-16 lg:px-24">
				<Header />
				<section>
					<main className="flex min-h-screen flex-col items-center justify-between gap-3 py-5">
						<div className="flex flex-col justify-center gap-3">
							<span className="text-center text-xs">Documento interno | Organização</span>
							<h1 className={`text-center text-2xl font-black ${lora.className}`}>Pseudo Manifesto - Virada Cultural Florestense</h1>
							<div className="flex w-full flex-row justify-center gap-3">
								<div className="relative aspect-square h-10">
									<Image src="/media/img/logos/logo_PB.png" fill alt="Autor" className="rounded-full object-cover" />
								</div>
								<div className="flex flex-col justify-center">
									<span className="text-sm font-medium">Fundador | Edvaldo Brito</span>
									<span className="text-xs font-thin">27 de outubro de 2023, 16:51</span>
								</div>
							</div>
							<span className="text-xs font-thin">Revisado por Lorrayne Lira</span>
						</div>
						<article className="flex h-full w-full flex-col gap-3 text-base px-20 max-md:px-2 py-5">
							<div className="relative aspect-video h-80">
								<Image src="/media/img/misc/assets/manifesto_banner.png" fill alt="Banner do manifesto" className="rounded-lg object-cover" />
							</div>
							<p className='hyphens-auto text-justify [word-spacing:-1px] indent-12'>No contexto artístico e poético, a palavra "pseudo" assume um significado peculiar e complexo. Ela é frequentemente associada à falta de autenticidade, à imitação superficial de algo genuíno. O termo "pseudoarte" é utilizado para descrever expressões artísticas que são consideradas "desimportantes", sem "valor" agregado, arte que qualquer um poderia ter feito por não se ater às regras antigas das academias e nem serem constituídas a partir de técnicas dos artistas clássicos europeus. Da mesma forma, um "pseudoartista" é alguém rotulado como falso, não autêntico ou que tenta se passar por um artista considerado "genuíno", ou seja, sem realmente possuir a "essência" ou o "talento" necessário para executar um tipo de arte esperado e sem a pretensão de ser palatável pelo público num primeiro momento. No entanto, é importante destacar que essas categorizações são subjetivas e podem variar de acordo com diferentes perspectivas e contextos culturais.</p>
							<p className='hyphens-auto text-justify [word-spacing:-1px] indent-12'>O debate sobre a falta de aceitação do "ser artista" e a invisibilização destes produtores culturais que ocorre em Floresta Azul, na Bahia, revela um problema mais amplo de valorização e compreensão da arte em sua diversidade e complexidade, muito provavelmente causados pelos anos de ensino precário de artes nas escolas da região cacaueira. Quantas vezes já vimos professores de diversas áreas, receberem pelo sistema de educação em seus colos a missão de ministrar aulas de artes? A praxe uns anos atrás era colocar alguém das áreas de linguagens ou de humanidades, afinal "Eles são de humanas, vão saber lidar com os assuntos facilmente."; isso resulta em um ensino maçante, cuja atividade prática é a mera repetição de outro trabalho, geralmente útil como um enfeite de natal, uma pintura de um vaso de flores, um trabalho qualquer de reciclagem, etc. Tudo funciona como uma linha de produção, o que reforça nas mentes das gerações a ideia de que arte é isso, feita para usar, como mero entretenimento ou meio para se criar algo útil. Nada de crítico vem disso. Nada a não ser as reclamações dos pais dos estudantes constatando de que estão pagando demais em materiais ou que estão tendo que se desdobrar para descobrir como auxiliar os filhos a produzirem seus trabalhos que, muitas vezes, nem mesmo o professor domina, mesmo que de forma parcial.</p>
							<p className='hyphens-auto text-justify [word-spacing:-1px] indent-12'>Por conta disso, recorrentemente, a arte que é valorizada e reconhecida nessa comunidade é a chamada "arte de lazer" – aquela que é facilmente consumível, superficial e não desafia as convenções estabelecidas. Por terem essa visão de arte deturpada pela falta de conhecimento e por conta da interferência inevitável da nossa sociedade de consumo desenfreado, onde tudo até os sentimentos são mercadorias – portanto, a arte passa no mundo material a reafirmar as concepções de arte desta massa de pessoas que, infelizmente, não foram munidas das ferramentas necessárias para tomar as rédeas de seu pensamento e desenvolver sua criticidade.</p>
							<p className='hyphens-auto text-justify [word-spacing:-1px] indent-12'>Nosso sistema de produção gerido pela classe política cada vez mais locupletada pela influência do grande capital, vê nesse sistema uma oportunidade única para além de manter a população acrítica e mal instruída sobre certos assuntos, permite aos entes privados a manipular o mercado cultural e gerar lucros cada vez maiores pela manipulação propagandista sobre a população. Tornando cada vez mais predatório o mercado cultural, usurpando expressões culturais genuínas como o sertanejo, funk, hip-hop, rap, etc. E também, importando datas e festividades apenas para criar mais um período de grande arrecadação de capital monetário em forma de lucro, como hoje acontece com o Halloween e o Dia dos Namorados que embora tenhamos uma data oficialmente brasileira, se tornou comum propagandas sendo veiculadas na data do "Valentines day" norte-americano para expressar o amor pelo seu parceiro ou parceira com um perfume, um estojo de maquiagem ou qualquer outra coisa que o valha, como se só esta forma de demonstração de afeto existisse no mundo. Mais uma vez, mercantilizando sentimentos. Essa dinâmica problemática de nossa sociedade corrói o que nós humanos temos de característica principal, característica esta que nos fez nos tornarmos quem somos hoje. Éramos seres sociais.</p>
							<p className='hyphens-auto text-justify [word-spacing:-1px] indent-12'>Hoje, as conexões entre as pessoas parecem mais distantes e superficiais do que nunca, algo que Zygmunt Bauman explora em "Modernidade Líquida" onde denomina este fenômeno como "liquidez". Antes da era do "Capitalismo pesado", dominante no século XX, as relações humanas eram mais baseadas em comunidades locais e em laços de parentesco, portanto demandavam uma interação coletiva mais presente no dia a dia. Já no "Capitalismo pesado", as relações passaram a ser mais rígidas devido ao modelo industrial em evidência na época que era personificado pelo sistema de produção de Henry Ford, o "Fordismo". Esse sistema promovia a produção em massa de produtos padronizados, com trabalhadores especializados em tarefas específicas, sob hierarquia estrita, excesso de ordem, repressão, dureza e regulação. O que esfriava as relações interpessoais, uma vez que neste sistema a interação era inútil por conta da fragmentação dos processos, portanto era fortemente reprimida pelos supervisores. Com a transição para o "Capitalismo leve", a partir dos anos 70, em resposta às mudanças econômicas e tecnológicas globais, o cenário mudou. Esse modelo se caracteriza pela flexibilidade, adaptabilidade, a valorização da produção em pequena escala, a personalização de produtos e serviços, além de flexibilizar relações de trabalho e descentralizar o controle e supervisão. Um exemplo é o sistema de produção de Taiichi Ohno e Eiji Toyoda chamado de “Toyotismo”, do qual é baseado em bens personalizados, trabalhadores multifuncionais e uma hierarquia menos rígida.</p>
							<p className='hyphens-auto text-justify [word-spacing:-1px] indent-12'>Para Bauman, a modernidade é resultado da transição do capitalismo pesado para o capitalismo leve. A modernidade sólida, proveniente do 'Capitalismo pesado', foi substituída pela modernidade líquida, marcada pela fluidez, instabilidade e pela ausência de solidez nas relações sociais, políticas e econômicas. Nesse contexto, as pessoas supostamente possuem a liberdade de mover-se de maneira quase que imperceptível, podendo mudar facilmente de emprego, cidade ou relacionamento, caracterizando a fluidez da modernidade líquida, como observado por Bauman. Em outras palavras, nesse período, a individualidade prevalece, suprimindo qualquer possibilidade de relações sociais duradouras. Contudo, essa liberdade, ao conduzir à falta de comprometimento e à superficialidade, também acarreta incerteza e insegurança, resultando em uma massa de pessoas ansiosas e psicologicamente instáveis. Isso as impede de contar com uma rede de apoio e proteção, já que poucas ou nenhuma relação sólida e saudável foi estabelecida.</p>
							<p className='hyphens-auto text-justify [word-spacing:-1px] indent-12'>O conceito de modernidade líquida de Bauman, pode ser uma via para se explicar a existência da arte de utilidade e da arte usada apenas como entretenimento. A liquidez das relações sociais implica que as pessoas sejam cada vez mais focadas em si mesmas e em seus próprios interesses, interesses estes como já foi dito neste texto, que muitas vezes são embutidos pelo mercado midiático e do grande capital. Esta liquidez leva estas pessoas a se interessarem apenas a consumir bens e serviços que lhes permitam expressar sua "individualidade" e se destacar dos outros (ou entre os outros). Isso nos leva em direção a uma maior ênfase na cultura de massa e na produção de produtos culturais que são facilmente descartáveis, homogeneizando a cultura.</p>
							<p className='hyphens-auto text-justify [word-spacing:-1px] indent-12'>Ao observarmos a realidade florestense, temos a impressão de que este conceito da modernidade líquida não nos afeta diretamente, pois parecemos possuir relações familiares fortes e ainda nutrimos uma necessidade pela interação interpessoal contínua como no período anterior ao modelo de “modernidade sólida” no período do “capitalismo pesado”. Porém, somos uma amálgama destes modelos. Em verdade, acredito que a maioria das pequenas cidades de interior se apresentam assim. Ao mesmo tempo que recebem a influência da “modernidade líquida” por intermédio dos meios de comunicação de massa e das redes sociais, estão postas dentro dos moldes antigos do seu recente período rural, onde a relação familiar é a base de tudo, – assim todos na cidade se conhecem e é comum uma criança ser reconhecida como “filho de fulano” e não pelo seu nome verdadeiro ou um estabelecimento qualquer pode ser reconhecido como “mercearia de ciclano” e não pelo seu nome original, por exemplo. – e como um molde, costuma reprimir qualquer forma diferente de ser que não o dele… Portanto, estes dois modos de ser, estão em constante choque, o resulta em indivíduos fragmentados, que, ao mesmo tempo que anseiam por expandir seus horizontes e explorar novas possibilidades dentro dessa realidade, tem de se preocupar com problemas cada vez mais materiais como a repressão e o julgamento social, além da falta de oportunidades e de estruturas nas quais tais cidades frequentemente se veem imersas.</p>
							<p className='hyphens-auto text-justify [word-spacing:-1px] indent-12'>Nesta sociedade, todos que nadam contra a corrente são reprimidos, pois suas ações não são compreendidas. Um garoto que escreve poesia é rotulado como mais um "veadinho", uma garota interessada em teatro é muitas vezes vista como alguém que busca atenção, as pessoas que produzem performances são encaradas como baderneiras e assim por diante. Essa dinâmica resulta na crescente repressão dos talentos artísticos das novas gerações. Que, temendo tornarem-se alvos de comentários preconceituosos ou do julgamento da sociedade, esses artistas optam por esconder suas produções. Infelizmente, ao serem frequentemente rotulados como uma categoria inferior de artistas, acabam internalizando essa narrativa, passando a se considerar, erroneamente, como 'artistas falsos' ou, na linha que estamos seguindo aqui, Pseudoartistas</p>
							<p className='hyphens-auto text-justify [word-spacing:-1px] indent-12'>Os que, numa eventualidade, conseguem reconhecimento são os produtores culturais de obras que se alinham com o ideal de arte da sociedade, frequentemente o da arte útil, como a de ceramistas e oleiros que produzem panelas e recipientes de barro e cerâmica; marceneiros que produzem móveis; serralheiros que produzem os portões e grades das casas; escultores que produzem artigos decorativos de biscuit ou massa epóxi para comercialização como lembranças; e outros semelhantes. Além disso, existe também o padrão de arte relacionado ao entretenimento, onde, no caso de um artista ser um cantor, ele precisa seguir os estilos musicais populares na região para obter aceitação da comunidade, senão arrisca ser ignorado. Por exemplo, no caso de um dançarino – que em teoria é a arte de se expressar com o corpo, não consegue fazê-lo – a ele só é permitido reproduzir as coreografias das danças do momento, se não, se torna irrelevante... Estamos cada vez mais rasos, contentamos com o que foi estabelecido por terceiros e por conta disso passamos de certa forma a contribuir para a perpetuação desse sistema pela inação.</p>
							<p className='hyphens-auto text-justify [word-spacing:-1px] indent-12'>Em resumo, essa arte é vista como simples entretenimento, útil física ou psicologicamente, algo agradável, mas que não necessariamente provoca reflexões mais profundas ou críticas sobre o mundo ao nosso redor. Por outro lado, a arte que é mais conceitual, abstrata e crítica é frequentemente tratada com desdém e invisibilizada. Essa arte desapegada, que busca questionar as normas e apresentar uma visão alternativa do mundo, muitas vezes não é compreendida e apreciada pelo público pelos fatores já explanados neste texto. Essa falta de aceitação da arte muitas vezes se deve à resistência em sair da zona de conforto, enfrentar o desconhecido e lidar com ideias que desafiam as crenças estabelecidas. Nesse contexto, o público muitas vezes prefere consumir formas de arte que reforcem suas próprias visões de mundo de maneira superficial, em vez de construir bases culturais mais sólidas ou confrontar essas visões individuais.</p>
							<hr className='border-neutral-500 mx-56 my-5'/>
							<p className='hyphens-auto text-justify [word-spacing:-1px] indent-12'>Neste sentido, nosso coletivo surge como uma resposta à necessidade urgente de redefinir e expandir a compreensão da arte em nossa cidade. Reivindicaremos o rótulo de "Pseudoartista", atribuindo-lhe um novo significado e nos desprenderemos das amarras da ignorância e do medo que nos foram colocadas no decorrer dos anos.</p>
							<p className='hyphens-auto text-justify [word-spacing:-1px] indent-12'>Enfatizaremos a riqueza da diversidade artística e a importância de acolher todas as modalidades de manifestação, sejam práticas, utilitárias ou conceituais. Temos a convicção de que a expressão criativa é uma ferramenta impactante para moldar as esferas sociais e culturais, capaz de desafiar normas já arraigadas em nossa sociedade, provocar reflexões profundas e inspirar mudanças significativas nessa realidade.</p>
							<p className='hyphens-auto text-justify [word-spacing:-1px] indent-12'>Criaremos um espaço de encontro para a colaboração mútua, onde artistas de diferentes realidades possam compartilhar suas experiências, debater ideias e explorar temas que permeiam todo o processo criativo. Romperemos com a superficialidade que tem sido associada à arte em nossa comunidade, encorajando abordagens mais críticas, questionadoras e inovadoras. Mediante discussões, oficinas e palestras, pretendemos cultivar um ambiente de aprendizado contínuo, onde o conhecimento seja compartilhado e ampliado coletivamente. Buscaremos criar obras que transcendam os limites tradicionais e desafiem as expectativas convencionais, pois a produção de novas obras será um pilar fundamental deste coletivo. Daremos espaço para experimentação, para abraçar o desconhecido e para explorar novos caminhos criativos. Ao mesmo tempo, que valorizaremos as conexões entre as gerações, promovendo a troca entre artistas mais experientes e aqueles que estão dando os primeiros passos em sua jornada artística.</p>
							<p className='hyphens-auto text-justify [word-spacing:-1px] indent-12'>Organizaremos exposições públicas, levando as obras para as ruas e praças da cidade, rompendo com as barreiras entre os espaços tradicionais de galerias e museus, pois a visibilidade da arte é essencial para o nosso propósito. Queremos alcançar um público diverso, convidando todos a se engajar com a arte de maneiras que possam ser significativas. Além disso, reconheceremos a importância do engajamento ativo na comunidade. Propomos a realização de atos artísticos nas ruas da cidade, promovendo intervenções que estimulem o diálogo e a reflexão sobre questões sociais, culturais e políticas. Através dessas ações, pretendemos inspirar uma mudança de perspectiva e despertar a consciência crítica daqueles que encontrarem nossas expressões artísticas em seus caminhos no cotidiano.</p>
							<p className='hyphens-auto text-justify [word-spacing:-1px] indent-12'>Planejaremos palestras e oficinas que serão oportunidades de troca de conhecimento e habilidades. Reconhecemos a importância de construir uma base sólida de competência artística, ao mesmo tempo que estudaremos juntos novas formas de se expressar, para que os artistas ampliem suas técnicas e alcancem novos patamares em sua prática. Ao mesmo tempo, incentivaremos a exploração de ideias e abordagens inovadoras, desafiando as fronteiras do conhecido e abrindo espaço para o inesperado. Portanto, o nosso coletivo é uma convocação para uma transformação profunda na maneira como a arte é percebida e valorizada em nossa comunidade. Convidamos todos os interessados a se juntarem a nós nessa jornada de descoberta, reflexão e expressão. Acreditamos que a arte tem o poder de unir, de inspirar e de criar mudanças duradouras. Juntos, podemos criar um ambiente cultural mais rico, diverso e inclusivo, onde todas as vozes artísticas encontram um lugar de destaque e contribuem para um diálogo enriquecedor que transcende as fronteiras convencionais. Estamos comprometidos em construir uma comunidade que celebra a autenticidade, a complexidade e a profundidade da arte em todas as suas formas.</p>
							<p className='hyphens-auto text-justify [word-spacing:-1px] indent-12'>Se você compartilha dessa visão, convidamos você a se juntar a nós e a contribuir para essa jornada transformadora. Juntos, podemos redefinir o significado da arte em nossa cidade e, assim, criar um legado artístico que perdurará através das gerações.</p>
			
						</article>
					</main>
				</section>
				<Footer />
			</main>
		</>
	);
}
