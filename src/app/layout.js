import './globals.css'
import { inter, lora } from '../styles/fonts'
import Header from '../components/pages/inicio/Header';
import Footer from '../components/pages/inicio/Footer';

export const metadata = {
  metadataBase: new URL("http://localhost:3000/"),
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
  },
  other: {
    "msapplication-TileColor": "#fafafa",
    "msapplication-config": "/media/img/logos/favicons/browserconfig.xml",
    "msapplication-TileImage": "/media/img/logos/favicons/mstile-144x144.png",
    "theme-color": "#fafafa"
  },
  openGraph: {
    title: "Coletivo de Pseudoartistas | Floresta Azul - BA",
    description: "O site oficial do primeiro coletivo de artes de Floresta Azul.",
    url: `/`,
    siteName: "Coletivo de Pseudoartistas",
    images: [
      {
        url: `/media/img/background/base.jpg`,
        width: 800,
        height: 600
      },
      {
        url: `/media/img/background/base.jpg`,
        width: 1800,
        height: 1600,
        alt: "My custom alt"
      }
    ],
    locale: "pt_BR",
    type: "website"
  }
};

export default function LayoutRaiz({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <div className="flex flex-col min-w-screen min-h-screen colorsBase overflow-x-hidden lg:px-24 md:px-16 px-5">
          <Header/>
            <main>
                {children}
            </main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}