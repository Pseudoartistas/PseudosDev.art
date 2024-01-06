const servidor = typeof window === "undefined"

export default function urlBase() {
  const urlBase = servidor
    ? process.env.NEXT_PUBLIC_SITE_URL
    : window.location.origin
  return urlBase
}
