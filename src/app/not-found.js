import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <h2>Não encontrado</h2>
      <p>Não foi possível encontrar a página.</p>
      <Link href="/">Retornar ao início</Link>
    </div>
  )
}
