import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--inter"

});

export const metadata = {
  title: "Pseudoartistas",
  description: "O site oficial do primeiro coletivo de artes de Floresta Azul.",
  generator: 'Next.js',
	applicationName: 'Coletivo de Pseudoartistas',
	referrer: 'origin-when-cross-origin',
	keywords: ['coletivo', 'arte', 'pseudoartista', "Artivismo", "Criatividade", "Transgressão", "Diálogo", "Transformação", "Intervenção", "Colaboratividade", "Conscientização", "Empoderamento", "Inovação", "Contemporaneidade", "Diversidade", "Pseudoarte", "Desconstrução", "Reflexão", "Engajamento", "Desafio", "Convenções", "Manifesto", "Comunidade", "Diálogo", "Aprendizado", "Troca", "Desenvolvimento", "Resistência", "Ambiente", "Inclusão", "Expressão", "Consciência", "Desenvolvimento", "Exploração", "Criativo", "Cultural", "Mudança", "Perspectiva", "Oficina", "Conhecimento", "Social", 'Arte', 'Coletivo de arte', 'Diversidade artística', 'Reflexões profundas', 'Mudanças significativas', 'Colaboração mútua', 'Inovação artística', 'Comunidade cultural', 'Expressão criativa', 'Valorização da arte', 'Engajamento ativo', 'Intervenções artísticas', 'Diálogo social', 'Oficinas de arte', 'Consciência crítica', 'Exploração de ideias', 'Aprendizado contínuo', 'Troca de conhecimento', 'Desafio das convenções', 'Ambiente cultural inclusivo', 'Manifesto artístico', 'Pseudoartistas', 'Modernidade líquida', 'Cultura contemporânea', 'Transformação social', 'Desenvolvimento crítico', 'Empoderamento artístico', 'Engajamento comunitário', 'Exploração criativa', 'Desconstrução de normas', 'Ampliação de perspectivas', 'Consciência cultural', 'Inclusão artística', 'Resistência criativa'],
	creator: 'Edvaldo Brito (@verwischt)',
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
  },/* 
  openGraph: {
    type: 'website',
    url: 'https://pseudos.art',
    title: 'Coletivo de Pseudoartistas | Floresta Azul - BA',
    description: 'O site oficial do primeiro coletivo de artes de Floresta Azul.',
    images: [
      { url: '/media/img/background/base.jpg', alt: 'Texto Alternativo da Imagem' },
    ],
    site_name: 'Coletivo de Pseudoartistas',
  }, */
};


export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <script src="/utils/theme.js"/>
        <meta name="msapplication-TileColor" content="#fafafa" />
        <meta name="msapplication-TileImage" content="/media/img/logos/favicons/mstile-144x144.png" />
        <meta name="msapplication-config" content="/media/img/logos/favicons/browserconfig.xml" />
        <meta name="theme-color" content="#fafafa" />

        <meta property="og:title" content="Coletivo de Pseudoartistas | Floresta Azul - BA" />
        <meta property="og:description" content="O site oficial do primeiro coletivo de artes de Floresta Azul." />
        <meta property="og:url" content="https://pseudos.art" />
        <meta property="og:image" content="https://pseudos.art/media/img/background/base.jpg" />
        <meta property="og:image:alt" content="Texto Alternativo da Imagem" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Coletivo de Pseudoartistas | Floresta Azul - BA" />
        <meta name="twitter:description" content="O site oficial do primeiro coletivo de artes de Floresta Azul." />
        <meta name="twitter:image" content="https://pseudos.art/media/img/background/base.jpg" />
        <meta name="twitter:image:alt" content="Texto Alternativo da Imagem" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
