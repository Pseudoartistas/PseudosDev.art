import './globals.css'
import { inter } from '../styles/fonts'

export const metadata = {
  title: 'Coletivo de Pseudoartistas',
  description: 'Desafie o pseudo e abrace a autenticidade da arte que questiona, transforma e revela novas perspectivas.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
