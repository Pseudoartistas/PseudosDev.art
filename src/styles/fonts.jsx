import { Inter, Lora } from 'next/font/google'

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const lora = Lora({
  subsets: ["latin"],
  style: ['normal', 'italic'],
  weight: ["400", "500", "600", "700"],
})

export { inter, lora }