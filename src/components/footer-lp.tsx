import Link from 'next/link'

export default function FooterLp() {
  return (
    <footer id="footer" className="bg-current p-6 md:py-12 w-full">
      <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm text-white">
        <div className="grid gap-1">
          <h3 className="font-semibold">Organização</h3>
          <Link href="/links/about" prefetch={false}>
            Sobre Nós
          </Link>
          <Link href="/links/about" prefetch={false}>
            Equipe
          </Link>
          <Link href="#contato" prefetch={false}>
            Contato
          </Link>
          <Link href="#" prefetch={false} />
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Nossa missão</h3>
          <Link href="#" prefetch={false}>
            Sobre Nós
          </Link>
          <Link href="#" prefetch={false}>
            Equipe
          </Link>
          <Link href="#" prefetch={false}>
            Carreiras
          </Link>
          <Link href="#" prefetch={false} />
        </div>
      </div>
    </footer>
  )
}
