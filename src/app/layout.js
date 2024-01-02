import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--inter"
});

export const metadata = {
  title: 'Coletivo de Pseudoartistas',
  description: 'Desafie o pseudo e abrace a autenticidade da arte que questiona, transforma e revela novas perspectivas.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.variable}>{children}</body>
    </html>
  )
}
